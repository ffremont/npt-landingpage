import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

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

  return (
    <section className="hero is-darkblue is-medium is-link">
      <div className="hero-body">
        <div className="columns is-gapless">
          <div className="column is-12 is-mobile">
            <GatsbyImage
              style={{ minHeight: "355px" }}
              image={images}
              alt="femme numérique"
            />
          </div>
          <div className="column  is-mobile is-hidden-tablet">
            <div>
              <GatsbyImage
                image={logoNumeriquePourToutes}
                alt="Logo Numérique pour toutes"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
