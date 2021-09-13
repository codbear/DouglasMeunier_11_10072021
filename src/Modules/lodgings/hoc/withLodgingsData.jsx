import React from 'react';

export default function withLodgingsData(WrappedComponent) {
  class WithLodgingsData extends React.Component {
    static displayName = `WithLodgingsData(${
      WrappedComponent.displayName || WrappedComponent.name
    })`;

    constructor(props) {
      super(props);

      this.state = {
        lodgingsData: null,
      };
    }

    componentDidMount() {
      if (!this.state.lodgingsData) {
        fetch('data/lodgingsData.json').then((response) => {
          response.json().then((lodgingsData) => this.setState({ lodgingsData }));
        });
      }
    }

    render() {
      return <WrappedComponent lodgingsData={this.state.lodgingsData} />;
    }
  }

  return WithLodgingsData;
}
