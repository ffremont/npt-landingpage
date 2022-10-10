import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const PresentationBlock = ({ logo, text }) => (
  <div className="is-flex is-flex-direction-column flex-wrap">
    <div className="has-text-centered my-2">
      <strong><span className={`icon-${logo}`}></span></strong>
    </div>
    <div className="has-text-centered"><strong>{text}</strong></div>
  </div>
);

const Presentation = () => {
  const { allPresentationsJson } = useStaticQuery(graphql`
    query presentationQuery {
      allPresentationsJson {
        nodes {
          id
          logo
          text
        }
      }
    }
  `);

  return (
    <div className="presentation-component">
      <h2 className="has-text-centered my-5">
        Numérique Pour Toutes, c'est quoi ?
      </h2>
      <div className="container is-max-desktop">
        <div className="columns is-multiline">
          {allPresentationsJson?.nodes.map(({ id, logo, text }) => (
            <div key={id} className="column is-3-desktop is-12-mobile">
              <PresentationBlock logo={logo} text={text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentation;
