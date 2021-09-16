import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from '../../layout';
import { Hero } from '../../ui';
import { LodgingCard, withLodgingsData } from '../../lodgings';
import HeroBackground from '../images/hero-background.png';
import './HomeScreen.scss';

class HomeScreen extends React.Component {
  static propTypes = {
    lodgingsData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        cover: PropTypes.string,
      })
    ),
  };
  render() {
    const { lodgingsData } = this.props;

    return (
      <Layout>
        <div className="Home">
          <Hero background={HeroBackground} textOverlay={['Chez vous,', 'partout et ailleurs']} />
          <div className="Home_gallery">
            {lodgingsData
              ? lodgingsData.map((lodgingData) => (
                  <LodgingCard
                    key={lodgingData.id}
                    title={lodgingData.title}
                    cover={lodgingData.cover}
                    lodgingId={lodgingData.id}
                  />
                ))
              : 'Aucun logement trouvé'}
          </div>
        </div>
      </Layout>
    );
  }
}

export default withLodgingsData(HomeScreen);
