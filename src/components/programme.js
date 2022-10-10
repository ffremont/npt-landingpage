import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const ProgrammeBlock = ({  logo, description }) => (
  <div className="box is-flex is-flex-direction-column ">
    <div>
      <span className={`icon-${logo}`}></span>
    </div>
    <div>{description}</div>
  </div>
);

const Programme = () => {
  const { allProgrammesJson } = useStaticQuery(graphql`
    query programmeQuery {
      allProgrammesJson {
        nodes {
          id
          salle
          slot
          logo
          type
          description
          intervenant
        }
      }
    }
  `);

  return (
    
    <section className={`programme is-darkblue`}>
      <div className="wrapper columns is-multiline">
        <div className="column is-12">
          <h2>Au programme</h2>
        </div>
        <div className="column is-12">
          <span>10H30 – 11H Accueil</span>
        </div>
        <div className="column is-12">
          <div className="et_pb_blurb_container">
            <h4 className="et_pb_module_header">
              <span>11h - 12h30</span>
            </h4>
            <div className="et_pb_blurb_description">
              <p >Table Ronde de lancement</p>
              <p >
                <strong>
                  Le numérique, une chance pour les femmes.
                  <br />
                  Les femmes, une chance pour le numérique
                </strong>
              </p>
              <p >
                Axelle LEROUX, Carolle GOLLA, Sandra GERARD, Francine ROUX,
                Julia MEMETEAU
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="columns is-multiline">
        {allProgrammesJson?.nodes.map((programme) => (
          <div key={programme.id} className="column is-3-desktop is-6-mobile">
            <ProgrammeBlock {...programme} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programme;
