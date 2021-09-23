import React from 'react';
import PropTypes from 'prop-types';

import ChevronTop from '../../vectors/ChevronTop.svg';
import ChevronBottom from '../../vectors/ChevronBottom.svg';
import './Accordion.scss';

class Accordion extends React.Component {
  static propTypes = {
    summary: PropTypes.string.isRequired,
    details: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
      .isRequired,
    uniqueId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    TitleComponent: PropTypes.string,
  };

  static defaultProps = {
    TitleComponent: 'p',
  };

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleClick() {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    const { summary, details, uniqueId, TitleComponent } = this.props;
    const isDetailsAnArray = Array.isArray(details);

    return (
      <div className="Accordion">
        <button
          className="Accordion_summary"
          onClick={() => this.handleClick()}
          aria-expanded={this.state.isOpen}
          aria-controls={`accordionDetails${uniqueId}`}
          id={`accordionSummary${uniqueId}`}
        >
          <TitleComponent className="Accordion_summary_title">{summary}</TitleComponent>
          <img
            src={this.state.isOpen ? ChevronTop : ChevronBottom}
            alt=""
            className="Accordion_summary_icon"
          />
        </button>
        <div
          className={`Accordion_details${this.state.isOpen ? ' isOpen' : ''}`}
          role="region"
          id={`accordionDetails${uniqueId}`}
          aria-labelledby={`accordionSummary${uniqueId}`}
        >
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
