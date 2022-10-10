import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";

const ProgrammeBlock = ({ programme }) => (
  <div className="program-block full-width box is-relative is-flex is-flex-direction-column has-text-centered">
    <div className="has-text-left logo-wrapper">
      <span className={`icon-${programme.logo}`}></span>
    </div>
    <h4>{programme.slot}</h4>
    <p className="block">{programme.type}</p>
    <p className="block">
      <strong>{programme.description}</strong>
    </p>
    {programme.intervenants.map((intervenant) => (
      <p className="block">{intervenant}</p>
    ))}
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
          totalCount
        }
      }
    }
  `);
  allProgrammesJson.group.sort(function (a, b) {
    return b.nodes.length - a.nodes.length;
  });

  const labels = allProgrammesJson.group.map((group) => group.salle);
  const arraySize = allProgrammesJson.group.reduce(
    (previousValue, currentValue) =>
      previousValue < currentValue.totalCount
        ? currentValue.totalCount
        : previousValue,
    0
  );

  let sortedArray = [];
  allProgrammesJson.group.forEach(({ nodes }, i) => {
    for (let j = 0; j < arraySize; j++) {
      if (!sortedArray[j]) {
        sortedArray[j] = [];
      }
      if (j >= nodes.length) {
        sortedArray[j].push(null);
      } else {
        sortedArray[j].push(nodes[j]);
      }
    }
  });
  console.warn(sortedArray);

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

        <div className="columns is-multiline is-hidden-mobile">
          {labels.map((label) => (
            <div
              key={uuidv4(JSON.stringify(label), uuidv4.URL)}
              className="column is-3-desktop is-12-mobile"
            >
              <div className="box has-text-centered is-box-lightgreen">
                {label}
              </div>
            </div>
          ))}
          {sortedArray.map((programmeGrp, i) => {
            return (
              <>
                <div
                  className="column is-12-mobile is-hidden-tablet"
                >
                  <div className="box has-text-centered is-box-lightgreen">
                    {labels[i]}
                  </div>
                </div>
                {programmeGrp.map((programme) => (
                  <div
                    key={uuidv4(JSON.stringify(programme), uuidv4.URL)}
                    className="column is-flex is-3-desktop is-12-mobile"
                  >
                    {programme && <ProgrammeBlock programme={programme} />}
                  </div>
                ))}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programme;
