import React from 'react';
import hoistStatics from 'hoist-non-react-statics';

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
