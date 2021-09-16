import React from 'react';

import { Layout } from '../../layout';
import { Accordion, Hero } from '../../ui';
import HeroBackground from '../images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import './AboutScreen.scss';

const accordions = [
  {
    summary: 'Fiabilité',
    details:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
  },
  {
    summary: 'Respect',
    details:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    summary: 'Service',
    details:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    summary: 'Sécurité',
    details:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

class AboutScreen extends React.Component {
  render() {
    return (
      <Layout>
        <div className="About">
          <Hero background={HeroBackground} />
          <div className="About_accordionsWrapper">
            {accordions.map((accordion) => (
              <Accordion
                key={accordion.summary}
                summary={accordion.summary}
                details={accordion.details}
              />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutScreen;
