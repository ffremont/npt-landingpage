import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const PresentationBlock = ({logo, text}) => (
  <div className="is-flex is-flex-direction-column ">
    <div>
      <span className={`icon-${logo}`}></span>
    </div>
    <div>{text}</div>
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
    <div>
      <h2>Numérique Pour Toutes, c'est quoi ?</h2>
      <div className="columns is-multiline">
        {allPresentationsJson?.nodes.map(({ id, logo, text }) => (
          <div key={id} className="column is-3-desktop is-6-mobile">
            <PresentationBlock logo={logo} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Presentation;
