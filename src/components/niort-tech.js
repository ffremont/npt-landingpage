import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";

const NiortTech = () => {
  const { niortTech, numeriquePourToutes } = useStaticQuery(graphql`
    query niortTechQuery {
      niortTech: file(base: { eq: "niort-tech-lieu.jpeg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }

      numeriquePourToutes: file(
        base: { eq: "numerique-pour-toutes-logo.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <div className="niort-tech-component">
      <div className="container is-max-desktop is-darkblue">
        <div className="columns">
          <div className="column is-6-tablet is-12-mobile">
            <GatsbyImage
            style={{ height: "100%", width: "100%" }}
            imgStyle={{ objectFit: "contain" }}
              image={getImage(niortTech.childImageSharp.gatsbyImageData)}
              alt="niort tech"
            />
          </div>
          <div className="column is-6-tablet is-12-mobile">
            <div className="is-flex flex-wrap">
              <div className="has-text-centered-mobile">
                <GatsbyImage
                 style={{ width: "42%" }}
                  image={getImage(
                    numeriquePourToutes.childImageSharp.gatsbyImageData
                  )}
                  alt="niort tech"
                />
                <h2 className="is-uppercase my-5 has-text-centered-mobile">
                  niort tech
                </h2>
                <div>
                  <p>
                    <span>Centre de l’écosystème numérique</span> <br />
                    <span>
                      et espace de coworking de start-up dans le digital{" "}
                    </span>
                  </p>
                  <p  className="my-5">
                    <span>12-14 Avenue Bujault à NIORT</span>
                  </p>
                  <p>
                    <h3 className="my-4">Événement gratuit</h3>
                    <a
                      className="eni-button is-inline-block my-5 is-uppercase"
                      href="https://niort-agglo.cosoft.fr/Admin/ResourceEvent/ReservationListResourceEvent/23d9a821-dd32-4b58-bdcd-ad8f00c3e7c0"
                      target="_blank"
                    >
                      inscrivez-vous dès maintenant !
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NiortTech;