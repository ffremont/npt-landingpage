import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { chunk } from "lodash";
import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import useIsMobile from "../../hooks/use-is-mobile.hook";

const Slide = ({ partenaire }) => (
  <div style={{height:"250px"}} className="box is-flex is-width-100 is-justify-content-center is-flex-direction-column">
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
          lien
          exposant
          photo {
            childImageSharp {
              gatsbyImageData( height:200, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);
  const isMobile = useIsMobile();
  const partenaires = chunk(allPartenairesJson.nodes.filter(p => !p.exposant), isMobile ? 1 : 4);

  return (
    <section className="speaker-component">
      <div className="container is-max-desktop pt-6">
        <div className="columns is-multiline">
          <div className="column is-12 has-text-centered">
            <h2>Les autres partenaires</h2>
          </div>
          <div className="column is-12 has-text-centered">
            <Carousel
              emulateTouch
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              
            >
              {partenaires.map((chunk) => (
                <div className="columns is-multiline">
                  {chunk.map((partenaire) => (
                    <a
                      href={partenaire.lien}
                      className="column is-flex is-3 has-text-centered"
                    >
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

export default PartenairesCarousel;
