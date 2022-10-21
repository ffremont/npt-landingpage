import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Carousel } from "react-responsive-carousel";
import { chunk } from 'lodash';

const Slide = ({ partenaire }) => (
  <div className="box is-flex is-flex-direction-column">
    <GatsbyImage
      image={getImage(partenaire.photo.childImageSharp.gatsbyImageData)}
      alt="femme numérique"
    />
    <div>{partenaire.nom}</div>
  </div>
);

const ExposantsCarousel = () => {
 
  const { allPartenairesJson } = useStaticQuery(graphql`
    query partenairesQuery {
      allPartenairesJson {
        nodes {
          id
          nom
          lien
          exposant
          photo {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const exposants = chunk(allPartenairesJson.nodes.filter(p => p.exposant),4);

  return (
    <section className="speaker-component">
      <div className="container is-max-desktop pt-6">
        <div className="columns is-multiline">
          <div className="column is-12 has-text-centered">
            <h2>Les Exposants</h2>
          </div>
          <div className="column is-12 has-text-centered">
            <Carousel emulateTouch autoPlay infiniteLoop showArrows={false} showStatus={false} >
            {exposants.map((chunk) => (
                <div className="columns is-multiline">
                  {chunk.map((partenaire) => (
                    <a href={partenaire.lien} className="column is-3 has-text-centered">
                      <Slide partenaire={partenaire} />
                    </a>
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExposantsCarousel;
