import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { BgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const Hero = () => {
  const {
    femmeFile,
    bandeauFile,
    logoNumeriquePourToutes,
    reconversionFeminin,
  } = useStaticQuery(graphql`
    query brandQuery {
      femmeFile: file(base: { eq: "femme.jpeg" }) {
        childImageSharp {
          gatsbyImageData(breakpoints: [750, 1080, 1366, 1920])
        }
      }

      bandeauFile: file(
        base: { eq: "bandeau-site-numerique-pour-toutes.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(breakpoints: [750, 1080, 1366, 1920])
        }
      }

      logoNumeriquePourToutes: file(
        base: { eq: "numerique-pour-toutes-logo.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }

      reconversionFeminin: file(base: { eq: "reconversion-feminin.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const images = withArtDirection(
    getImage(bandeauFile.childImageSharp.gatsbyImageData),
    [
      {
        media: `(max-width: 768px)`,
        image: getImage(femmeFile.childImageSharp.gatsbyImageData),
      },
    ]
  );

  return (
    <section className="hero-component hero is-darkblue is-medium is-link">
      <div className="hero-body">
        <div className="columns is-gapless">
          <div className="column is-relative is-12">
            <BgImage
              image={getImage(bandeauFile.childImageSharp.gatsbyImageData)}
              Tag="div"
            >
              <div className="columns is-gapless py-6">
                <div className="column is-6"></div>
                <div className="mx-5 is-flex is-flex-direction-column column is-6">
                  <GatsbyImage
                    style={{ width: "38%" }}
                    className="block"
                    image={getImage(
                      logoNumeriquePourToutes.childImageSharp.gatsbyImageData
                    )}
                    alt="numérique pour toutes"
                  />

                  <GatsbyImage
                    className="block mt-3"
                    style={{ width: "40%" }}
                    image={getImage(
                      reconversionFeminin.childImageSharp.gatsbyImageData
                    )}
                    alt="La reconversion au féminin"
                  />

                  <h1 className="block mt-5">
                    09/11/2021 | NIORT TECH | 10H30 – 20H
                  </h1>
                  <p>
                    <Link
                      className="eni-button is-inline-block my-3 is-uppercase"
                      to="/#programme"
                    >
                      Découvrez le programme
                    </Link>
                  </p>

                  <p>
                    <a
                      className="eni-button is-inline-block my-3 is-uppercase"
                      href="https://niort-agglo.cosoft.fr/LogOn?ReturnUrl=/Admin/ResourceEvent/ReservationListResourceEvent/23d9a821-dd32-4b58-bdcd-ad8f00c3e7c0"
                      target="_blank"
                    >
                      inscrivez-vous !
                    </a>
                  </p>
                </div>
              </div>
            </BgImage>
          </div>
          <div className="column is-mobile is-hidden-tablet">
            {/* <div>
              <GatsbyImage
                image={logoNumeriquePourToutes}
                alt="Logo Numérique pour toutes"
              /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
