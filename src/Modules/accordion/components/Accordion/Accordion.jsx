import React from 'react';
import PropTypes from 'prop-types';

import './Accordion.scss';

class Accordion extends React.Component {
  static propTypes = {
    summary: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  getIsOpenClassName() {
    return this.state.isOpen ? 'isOpen ' : '';
  }

  render() {
    const { summary, details } = this.props;

    return (
      <div className="Accordion">
        <div className="Accordion_summary">
          <p>{summary}</p>
          <span
            className={this.getIsOpenClassName() + 'Accordion_expandIcon'}
            onClick={this.onClick}
          ></span>
        </div>
        <div className={this.getIsOpenClassName() + 'Accordion_details'}>
          <p>{details}</p>
        </div>
      </div>
    );
  }
}

export default Accordion;
