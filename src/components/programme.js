import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const ProgrammeBlock = ({ logo, description }) => (
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
          intervenants
        }
      }
    }
  `);

  return (
    <section className="programme-component">
      <div className="container is-max-desktop pt-6">
        <div className="columns is-multiline">
          <div className="column is-12 has-text-centered">
            <h2>Au programme</h2>
          </div>
          <div className="column is-12">
            <div className="box program-accueil has-text-centered">
              <span className="is-lightgreen">10H30 – 11H</span>
              <span className="ml-2">Accueil</span>
            </div>
            <div className="box has-text-centered is-box-lightgreen">
              Salle de conférence
            </div>
          </div>
          <div className="column is-12">
            <div className="box py-5 table-ronde has-text-centered">
              <h4>11h - 12h30</h4>
              <div>
                <p className="my-1">Table Ronde de lancement</p>
                <p className="my-2">
                  <strong>
                    Le numérique, une chance pour les femmes.
                    <br />
                    Les femmes, une chance pour le numérique
                  </strong>
                </p>
                <p className="my-1">
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
      </div>
    </section>
  );
};

export default Programme;
