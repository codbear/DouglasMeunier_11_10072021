import React from 'react';
import PropTypes from 'prop-types';

import './Hero.scss';

class Hero extends React.Component {
  static propTypes = {
    background: PropTypes.node,
    textOverlay: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    background: null,
    textOverlay: null,
  };

  render() {
    const { background, textOverlay } = this.props;
    return (
      <div className="Hero">
        <div className="Hero_wrapper">
          {background && <img src={background} alt="" />}
          <div className="Hero_overlay">
            {textOverlay &&
              textOverlay.map((line) => (
                <span key={line} className="Hero_overlay_line">
                  {line}&nbsp;
                </span>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
