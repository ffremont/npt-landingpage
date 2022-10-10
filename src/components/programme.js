import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";

const ProgrammeBlock = ({
  salle,
  slot,
  type,
  logo,
  intervenants,
  description,
}) => (
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
        group(field: salle) {
          salle: fieldValue
          nodes {
            id
            salle
            slot
            type
            logo
            intervenants
            description
          }
        }
      }
    }
  `);
  allProgrammesJson.group.sort(function (a, b) {
    return b.nodes.length - a.nodes.length;
  });

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
          {allProgrammesJson?.group.map((programmeGrp) => (
            <div
              key={uuidv4(JSON.stringify(programmeGrp.salle), uuidv4.URL)}
              className="column is-3-desktop is-12-mobile"
            >
              <div className="box has-text-centered is-box-lightgreen">
                {programmeGrp.salle}
              </div>
              {programmeGrp.nodes.map((programme) => (
                <ProgrammeBlock {...programme} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programme;
