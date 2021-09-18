import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTES } from '../../router';
import { LoadingScreen } from '../../loader';
import { Layout } from '../../layout';
import { Slider, Accordion } from '../../ui';
import withLodgingsData from '../hoc/withLodgingsData';
import StarFull from '../vectors/StarFull.svg';
import StarEmpty from '../vectors/StarEmpty.svg';
import './LodgingScreen.scss';

const ratingMap = {
  0: [StarEmpty, StarEmpty, StarEmpty, StarEmpty, StarEmpty],
  1: [StarFull, StarEmpty, StarEmpty, StarEmpty, StarEmpty],
  2: [StarFull, StarFull, StarEmpty, StarEmpty, StarEmpty],
  3: [StarFull, StarFull, StarFull, StarEmpty, StarEmpty],
  4: [StarFull, StarFull, StarFull, StarFull, StarEmpty],
  5: [StarFull, StarFull, StarFull, StarFull, StarFull],
};

class LodgingScreen extends React.Component {
  static propTypes = {
    lodgingsData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        pictures: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string,
        host: PropTypes.shape({
          name: PropTypes.string,
          picture: PropTypes.string,
        }),
        rating: PropTypes.string,
        location: PropTypes.string,
        equipments: PropTypes.arrayOf(PropTypes.string),
        tags: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    lodgingsData: null,
    isLoading: false,
  };

  render() {
    const { lodgingsData, isLoading } = this.props;

    if (isLoading) {
      return <LoadingScreen />;
    }

    if (!lodgingsData) {
      return <Redirect to={ROUTES.ERROR.NOT_FOUND} />;
    }

    const lodgingData = lodgingsData[0];
    const ratingStars = ratingMap[lodgingData.rating];

    return (
      <Layout>
        <div className="Lodging">
          <Slider imagesUrl={lodgingData.pictures} />
          <div className="Lodging_grid">
            <div className="Lodging_grid_meta">
              <h2 className="Lodging_title">{lodgingData.title}</h2>
              <p className="Lodging-location">{lodgingData.location}</p>
              <div className="Lodging_tagsCloud">
                {lodgingData.tags.map((tag, index) => (
                  <div key={index} className="Lodging_tag">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="Lodging_grid_host">
              <div className="Lodging_host">
                <p className="Lodging_host_name">{lodgingData.host.name}</p>
                <img src={lodgingData.host.picture} alt="" className="Lodging_host_picture" />
              </div>
              <div className="Lodging_rating">
                {ratingStars.map((Star, index) => (
                  <img key={index} src={Star} alt="" className="Lodging_rating_star" />
                ))}
              </div>
            </div>

            <div className="Lodging_grid_accordions">
              <Accordion
                summary="Description"
                details={lodgingData.description}
                uniqueId="Description"
                TitleComponent="h3"
              />
              <Accordion
                summary="Equipements"
                details={lodgingData.equipments}
                uniqueId="Equipments"
                TitleComponent="h3"
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const WithLodgingsData = withLodgingsData(LodgingScreen);

class LodgingScreenContainer extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  render() {
    const { id: lodgingId } = this.props.match.params;

    return <WithLodgingsData lodgingId={lodgingId} />;
  }
}

export default withRouter(LodgingScreenContainer);
