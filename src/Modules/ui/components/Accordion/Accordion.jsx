import React from 'react';
import PropTypes from 'prop-types';

import ChevronTop from '../../vectors/ChevronTop.svg';
import ChevronBottom from '../../vectors/ChevronBottom.svg';
import './Accordion.scss';
import IconButton from '../IconButton/IconButton';

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

  render() {
    const { summary, details } = this.props;
    const isDetailsAnArray = Array.isArray(details);

    return (
      <div className="Accordion">
        <div className="Accordion_summary" onClick={this.onClick}>
          <p>{summary}</p>
          <IconButton icon={this.state.isOpen ? ChevronTop : ChevronBottom} />
        </div>
        <div className={`Accordion_details${this.state.isOpen ? ' isOpen' : ''}`}>
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
