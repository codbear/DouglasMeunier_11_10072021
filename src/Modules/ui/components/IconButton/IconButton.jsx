import React from 'react';
import PropTypes from 'prop-types';

import './IconButton.scss';

class IconButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    iconProps: PropTypes.objectOf(PropTypes.any),
    className: PropTypes.string,
  };

  static defaultProps = {
    onClick: () => {},
    iconProps: {},
    className: '',
  };

  render() {
    const { className, onClick, icon, iconProps, ...otherProps } = this.props;

    return (
      <button onClick={onClick} className={`IconButton ${className}`} type="button" {...otherProps}>
        <img src={icon} alt="" aria-hidden {...iconProps} />
      </button>
    );
  }
}

export default IconButton;
