import React from 'react';
import PropTypes from 'prop-types';

const LODGINGS_URL = process.env.PUBLIC_URL + '/data/lodgingsData.json';

const withLodgingsData = (WrappedComponent) => {
  class WithLodgingsData extends React.Component {
    static displayName = `WithLodgingsData(${
      WrappedComponent.displayName || WrappedComponent.name
    })`;

    static propTypes = {
      lodgingId: PropTypes.string,
    };

    static defaultProps = {
      lodgingId: null,
    };

    constructor(props) {
      super(props);

      this.state = {
        lodgingsData: null,
        isLoading: true,
      };
    }

    async componentDidMount() {
      if (!this.state.lodgingsData) {
        const response = await fetch(LODGINGS_URL);
        const parsedResponse = await response.json();
        const { lodgingId } = this.props;

        const lodgingsData = lodgingId
          ? parsedResponse.filter((lodging) => lodging.id === lodgingId)
          : parsedResponse;

        this.setState({ lodgingsData, isLoading: false });
      }
    }

    render() {
      return (
        <WrappedComponent lodgingsData={this.state.lodgingsData} isLoading={this.state.isLoading} />
      );
    }
  }

  return WithLodgingsData;
};

export default withLodgingsData;
