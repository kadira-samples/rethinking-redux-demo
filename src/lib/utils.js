import React from 'react';
import hoistStatics from 'hoist-non-react-statics';

// Watch some props given and run a function before rendering th wrapped
// component.
// This allow us to load data cleaverly with lesser boilerplate
// See following example:
//
//       let SinglePost = ({singlePost, postId}) => (
//         <div>
//           {singlePost? <PostContent singlePost={singlePost}/> : "Loading..."}
//           <br />
//           <PostList />
//         </div>
//       );
//
//       SinglePost = loadData({
//         watch: ['postId'],
//         run: ({load, postId}) => load(postId)
//       })(SinglePost);
//
// So, this will wath the changes in `postId` and run the function given.
// `run` function can return a callback which will be run when the component in
// distroying or loading a new set of data again.
// It's useful to do any subscription clean up or something similar

export const loadData = ({watch = [], run}) => {
  const watchingProps = watch;

  return function(SrcComponent) {
    class LoadData extends React.Component {
      constructor(props, context) {
        super(props, context);
        this.propsCache = {};
      }

      componentDidMount() {
        this.load(this.props);
      }

      componentWillReceiveProps(props) {
        this.loadDataIfNeeded(props);
      }

      componentWillUnmount() {
        this.unloadIfNeeded();
      }

      load(props) {
        this.unloadIfNeeded();
        this.unload = run(props);

        // cache watching props
        watchingProps.forEach(prop => this.propsCache[prop] = props[prop]);
      }

      loadDataIfNeeded(props) {
        if(this.hasWatchingPropsChanged(props)) {
          this.load(props);
        }
      }

      hasWatchingPropsChanged(newProps) {
        for(const prop of watchingProps) {
          if(newProps[prop] !== this.propsCache[prop]) {
            return true;
          }
        }

        return false;
      }

      unloadIfNeeded() {
        if(typeof this.unload === 'function') {
          this.unload();
        }
      }

      render() {
        const props = this.props;
        return (<SrcComponent {...props} />)
      }
    }

    return hoistStatics(LoadData, SrcComponent);
  };
};
