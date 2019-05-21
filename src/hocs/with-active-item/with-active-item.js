// src/hocs/with-active-item.js

import React, {PureComponent} from 'react';

export const withActiveItem = (Component, initialValue = -1) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: initialValue,
      };
    }

    componentWillUnmount() {
      this.setState({
        activeItem: -1
      });
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          {...{activeItem}}
          setActiveItem={(i) => {
              this.setState({activeItem: i}
            )}
          }
        />
      );
    }
  };

  return WithActiveItem;
};