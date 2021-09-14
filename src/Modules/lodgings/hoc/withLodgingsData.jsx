import React from 'react';

const LODGINGS_URL = process.env.PUBLIC_URL + '/data/lodgingsData.json';

const withLodgingsData = (WrappedComponent) => {
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

    async componentDidMount() {
      if (!this.state.lodgingsData) {
        const response = await fetch(LODGINGS_URL);
        const parsedResponse = await response.json();
        const { id: lodgingId } = this.props.match.params;

        const lodgingsData = lodgingId
          ? parsedResponse.filter((lodging) => lodging.id === lodgingId)
          : parsedResponse;

        this.setState({ lodgingsData });
      }
    }

    render() {
      return <WrappedComponent lodgingsData={this.state.lodgingsData} />;
    }
  }

  return WithLodgingsData;
};

export default withLodgingsData;
