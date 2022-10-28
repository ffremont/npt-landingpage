import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import { BgImage } from "gbimage-bridge";

const AfterWork = () => {
  const { lajava, numeriquePourToutes, motif2 } = useStaticQuery(graphql`
    query afterWorkQuery {
      lajava: file(base: { eq: "lajava.jpeg" }) {
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
      motif2: file(base: { eq: "motif2.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <div className="afterwork-component" id="afterwork">
      <BgImage
        image={getImage(motif2.childImageSharp.gatsbyImageData)}
        Tag="div"
        style={{
          // Defaults are overwrite-able by setting one or each of the following:
          backgroundSize: "initial",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container is-max-widescreen">
          <div className="columns">
            <div className="column is-6-tablet is-12-mobile">
              <GatsbyImage
                style={{ height: "100%", width: "100%" }}
                imgStyle={{ objectFit: "contain" }}
                image={getImage(lajava.childImageSharp.gatsbyImageData)}
                alt="niort tech"
              />
            </div>
            <div className="column is-6-tablet is-12-mobile">
              <div className="is-flex flex-wrap">
                <div className="has-text-centered-mobile">
                  <h2 className="is-uppercase my-5 has-text-centered-mobile primary-title">
                    AfterWork
                  </h2>
                  <h3 className="is-uppercase my-5 has-text-centered-mobile secondary-title">
                    à partir de 19h
                  </h3>
                  <div>
                    <p className="my-5">
                      Dans un cadre détendu et festif, nous vous proposons
                      d’assister à une table ronde autour de la thématique des
                      carrières féminines.
                    </p>
                    <p className="my-5">
                      Animée par <strong>Julia MEMETEAU</strong> (Fondatrice de
                      JUME), nous vous donnerons les clés pour mettre en avant
                      vos qualités en tant que femmes et aborderons les
                      stéréotypes de genres qui persistent encore.
                    </p>
                    <p className="my-5">
                      <span className="subtitle">A qui elle se destine ?</span>{" "}
                      Vous êtes en recherche d’emploi, en reconversion
                      professionnelle, ou même RH, salarié, auto- entrepreneur,
                      chef d’entreprise, … Vous êtes confronté au manque de
                      mixité en entreprise ou intéressé par le sujet? Cette
                      soirée n’attend que vous!
                    </p>
                    <p className="my-5">
                      <span className="subtitle">
                        Où se déroulera la soirée ?
                      </span>
                      Rendez-vous à La Java - 365 Av de La Rochelle à Niort
                    </p>
                    <p>
                      <h3 className="my-4">Événement gratuit</h3>
                      <a
                        className="eni-button is-inline-block my-5 is-uppercase"
                        href="https://www.eventbrite.com/e/billets-afterwork-numerique-pour-toutes-450815650747"
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
      </BgImage>
    </div>
  );
};

export default AfterWork;
