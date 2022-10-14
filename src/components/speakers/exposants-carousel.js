import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Carousel } from "react-responsive-carousel";

const Slide = ({ intervenant }) => (
  <div className="box is-flex is-flex-direction-column">
    <GatsbyImage
      style={{ maxHeight: 355 }}
      image={getImage(intervenant.photo.childImageSharp.gatsbyImageData)}
      alt="femme numérique"
    />
    <div>
      {intervenant.nom} {intervenant.prenom}
    </div>
  </div>
);

const ExposantsCarousel = () => {
  const { allIntervenantsJson } = useStaticQuery(graphql`
    query intervenantsQuery {
      allIntervenantsJson {
        nodes {
          id
          nom
          prenom
          photo {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return (
    <section className="speaker-component">
      <div className="container is-max-desktop pt-6">
        <div className="columns is-multiline">
          <div className="column is-12 has-text-centered">
            <h2>Les Exposants</h2>
          </div>
          <div className="column is-12 has-text-centered">
            <Carousel emulateTouch autoPlay infiniteLoop showArrows={false} showStatus={false} >
              {allIntervenantsJson.nodes.map((intervenant) => (
                <Slide intervenant={intervenant} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExposantsCarousel;
