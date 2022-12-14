import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const Hero = () => {
  const {
    femmeFile,
    bandeauFile,
    logoNumeriquePourToutes,
    reconversionFeminin,
  } = useStaticQuery(graphql`
    query brandQuery {
      femmeFile: file(base: { eq: "femme.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }

      bandeauFile: file(
        base: { eq: "bandeau.jpg" }
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

  return (
    <section className="hero-component hero is-darkblue is-medium is-link">
      <div className="hero-body">
        <div className="columns is-gapless">
          <div className="column is-12">
            <BgImage
              className="is-hidden-mobile"
              image={bandeauFile.childImageSharp.gatsbyImageData}
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
                  22/11/2022 | NIORT TECH<br/>
                JOURNÉE DE 10H À 17H30 | GRATUIT<br/>
                AFTERWORK À PARTIR DE 19H & GRATUIT SUR INSCRIPTION
                  </h1>
                  <p>
                    <Link
                      className="eni-button is-inline-block my-3 is-uppercase"
                      to="/#afterwork"
                    >
                      S'inscrire à l'AfterWork
                    </Link>
                  </p>

                  <p className="eni-buttons">
                    <a
                      className="eni-button is-inline-block my-3 is-uppercase"
                      href="/#programme"
                    >
                      Découvrir le programme
                    </a>
                    <a
                      className="eni-button is-inline-block my-3 is-uppercase"
                      href="/#carnet"
                    >
                      Accès au carnet de visite
                    </a>
                  </p>
                
                </div>
              </div>
            </BgImage>
            <div className="columns is-hidden-tablet">
              <div className="column is-12 p-0">
                
                <BgImage
                  image={femmeFile.childImageSharp.gatsbyImageData}
                  Tag="div"
                  style={{ minHeight: "400px" }}
                />
              </div>

              <div className="p-5 is-flex is-align-items-center has-bg-darkblue has-text-centered is-flex-direction-column column is-12-mobile is-darkblue">
                <GatsbyImage
                  style={{ width: "65%"}}
                  className="block has-text-centered"
                  image={getImage(
                    logoNumeriquePourToutes.childImageSharp.gatsbyImageData
                  )}
                  alt="numérique pour toutes"
                />

                <GatsbyImage
                  className="block mt-3"
                  style={{ width: "80%"}}
                  image={getImage(
                    reconversionFeminin.childImageSharp.gatsbyImageData
                  )}
                  alt="La reconversion au féminin"
                />

                <h1 className="block mt-5">
                22/11/2022 | NIORT TECH<br/>
                JOURNÉE DE 10H À 17H30 | GRATUIT<br/>
                AFTERWORK À PARTIR DE 19H &amp; GRATUIT SUR INSCRIPTION
                </h1>

                <p>
                    <Link
                      className="eni-button is-inline-block my-3 is-uppercase"
                      to="/#afterwork"
                    >
                      S'inscrire à l'AfterWork
                    </Link>
                  </p>

                  <p className="eni-buttons">
                    <a
                      className="eni-button is-inline-block my-3 is-uppercase"
                      href="/#programme"
                    >
                      Découvrir le programme
                    </a>
                    <a
                      className="eni-button is-inline-block my-3 is-uppercase"
                      href="/#carnet"
                    >
                      Accès au carnet de visite
                    </a>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
