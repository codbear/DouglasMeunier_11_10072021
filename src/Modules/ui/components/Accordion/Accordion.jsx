import React from 'react';
import PropTypes from 'prop-types';

import './Accordion.scss';

class Accordion extends React.Component {
  static propTypes = {
    summary: PropTypes.string.isRequired,
    details: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
      .isRequired,
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
    const isDetailsAnArray = Array.isArray(details);

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
          {isDetailsAnArray ? (
            <ul>
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    );
  }
}

export default Accordion;
