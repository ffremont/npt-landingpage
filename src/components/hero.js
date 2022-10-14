import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const Hero = () => {
  const { femmeFile, bandeauFile, logoNumeriquePourToutes } =
    useStaticQuery(graphql`
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
      }
    `);

  const images = withArtDirection(
    getImage(bandeauFile.childImageSharp.gatsbyImageData),
    [
      {
        media: "(max-width: 768px)",
        image: getImage(femmeFile.childImageSharp.gatsbyImageData),
      },
    ]
  );

  const bgImage = convertToBgImage(images);

  return (
    <section className={`hero-component hero is-darkblue is-medium is-link`}>
      <div className="hero-body">
        <div className="columns is-gapless">
          <div className="column is-relative is-12 is-mobile">
            <BackgroundImage
              Tag="section"
              // Spread bgImage into BackgroundImage:
              {...bgImage}
              preserveStackingContext
            >
              <div style={{ minHeight: 355 }}>
                <GatsbyImage image={images} alt="femme numérique" />
              </div>
              <div className="wrapper">
                truc
              </div>
            </BackgroundImage>

          </div>
          <div className="column  is-mobile is-hidden-tablet">
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
