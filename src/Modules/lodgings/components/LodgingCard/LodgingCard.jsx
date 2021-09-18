import React from 'react';
import PropTypes from 'prop-types';
import { generatePath, Link } from 'react-router-dom';

import { ROUTES } from '../../../router';
import './LodgingCard.scss';

class LodgingCard extends React.Component {
  static propTypes = {
    lodgingId: PropTypes.string.isRequired,
    cover: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    cover: null,
  };

  render() {
    const { lodgingId, cover, title } = this.props;
    const lodgingPath = generatePath(ROUTES.SINGLE, { id: lodgingId });

    return (
      <Link to={lodgingPath}>
        <div className="LodgingCard">
          {cover && <img src={cover} alt="" />}
          <div className="LodgingCard_overlay">
            <h2 className="LodgingCard_title">{title}</h2>
          </div>
        </div>
      </Link>
    );
  }
}

export default LodgingCard;
