import { BgImage } from "gbimage-bridge";
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ExposantsCarousel from "./exposants-carousel";
import IntervenantCarousel from "./intervenants-carousel";
import PartenairesCarousel from "./partenaires-carousel";
import { getImage } from "gatsby-plugin-image";

const Speakers = () => {
  const { motif1 } = useStaticQuery(graphql`
    query Motif1Query {
      motif1: file(base: { eq: "motif1.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <section className="speaker-component">
      <BgImage
        image={getImage(motif1.childImageSharp.gatsbyImageData)}
        Tag="div"
        style={{
          // Defaults are overwrite-able by setting one or each of the following:
          backgroundSize: "initial",
          backgroundPosition: "center left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container is-max-desktop pt-6">
          <div className="columns is-multiline">
            <div className="column is-12 has-text-centered">
              {/*<IntervenantCarousel />*/}
              {/* <ExposantsCarousel /> */}
              <PartenairesCarousel />
            </div>
          </div>
        </div>
      </BgImage>
    </section>
  );
};

export default Speakers;
