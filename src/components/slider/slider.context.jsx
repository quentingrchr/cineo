import React, { createContext, Component, createRef } from 'react';

const SliderContext = createContext({});

export class SliderContextProvider extends Component {
  constructor(props) {
    super(props);
    this.itemRef = createRef();
  }
  render() {
    const value = {
      itemRef: this.itemRef,
    };
    return (
      <SliderContext.Provider value={value}>
        {this.props.children}
      </SliderContext.Provider>
    );
  }
}

export const SliderContextConsumer = SliderContext.Consumer;
