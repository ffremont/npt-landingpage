import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { chunk } from "lodash";
import * as React from "react";
import { Carousel } from "react-responsive-carousel";

const Slide = ({ partenaire }) => (
    <div className="box is-flex is-flex-direction-column">
      <GatsbyImage
        image={getImage(partenaire.photo.childImageSharp.gatsbyImageData)}
        alt="femme numérique"
      />
      <div>{partenaire.nom}</div>
    </div>
  );

const PartenairesCarousel = () => {
  const { allPartenairesJson } = useStaticQuery(graphql`
    query partenairesQuery {
      allPartenairesJson {
        nodes {
          id
          nom
          photo {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const partenaires = chunk(allPartenairesJson.nodes, 4);

  return (
    <section className="speaker-component">
      <div className="container is-max-desktop pt-6">
        <div className="columns is-multiline">
          <div className="column is-12 has-text-centered">
            <h2>Les Partenaires</h2>
          </div>
          <div className="column is-12 has-text-centered">
            <Carousel
              emulateTouch
              autoPlay
              infiniteLoop
              showArrows={false}
              showStatus={false}
            >
              {partenaires.map((chunk) => (
                <div className="columns is-multiline">
                  {chunk.map((partenaire) => (
                    <div className="column is-3 has-text-centered">
                      <Slide partenaire={partenaire} />
                    </div>
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

export default PartenairesCarousel;
