import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";

const sortBy = function (arr, propertyName, sortDirection) {
  var sortArguments = arguments;
  arr.sort(function (objA, objB) {
    var result = 0;
    for (
      var argIndex = 0;
      argIndex < sortArguments.length && result === 0;
      argIndex += 2
    ) {
      var propertyName = sortArguments[argIndex];
      result =
        objA[propertyName] < objB[propertyName]
          ? -1
          : objA[propertyName] > objB[propertyName]
          ? 1
          : 0;

      //Reverse if sort order is false (DESC)
      result *= !sortArguments[argIndex + 1] ? 1 : -1;
    }
    return result;
  });
};

const ProgrammeBlock = ({ programme }) => {
  return (
    <div className="program-block full-width box is-relative is-flex is-flex-direction-column has-text-centered">
      <div className="has-text-left logo-wrapper">
        <span className={`icon-${programme.logo}`}></span>
      </div>
      <h4>{programme.slot}</h4>

      <div className="block">
        <h5>
          {programme.salle} <br />
          {programme.type}
        </h5>
      </div>
      <p className="block">
        <strong>{programme.description}</strong>
      </p>
      {programme.intervenants.map((intervenant) => (
        <p key={`${programme.id}-${intervenant}`} className="block">
          {intervenant}
        </p>
      ))}
    </div>
  );
};

const Programme = () => {
  const { allProgrammesJson } = useStaticQuery(graphql`
    query programmeQuery {
      allProgrammesJson {
        group(field: idSalle) {
          idSalle: fieldValue
          nodes {
            id
            salle
            idSalle
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

  //const labels = allProgrammesJson.group.map((group) => group.idSalle);
  const labels = [
    "Salle Cloud 3e étage",
    "Salle Cookie 3e étage",
    "Salle Tech 3e étage",
    "Autres salles",
  ];

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

  return (
    <section id="programme" className="programme-component px-5">
      <div className="container is-max-widescreen pt-6">
        <div className="columns is-multiline">
          <div className="column is-12 has-text-centered">
            <h2>Au programme</h2>
          </div>

          <div className="column is-12">
            <div className="box program-accueil has-text-centered">
              <span className="is-lightgreen">10H00 – 10H30</span>
              <span className="ml-2">Accueil</span>
            </div>
          </div>
        </div>

        <div className="columns is-multiline">
          {labels.map((label) => (
            <div
              key={uuidv4(JSON.stringify(label), uuidv4.URL)}
              className="column is-3-desktop is-3-tablet is-12-mobile is-hidden-mobile"
            >
              <div className="box has-text-centered is-box-lightgreen">
                {label}
              </div>
            </div>
          ))}

          {labels.map((label) => {
            const programmes = allProgrammesJson.group.find(
              (g) => g.idSalle === label
            ).nodes;
            sortBy(programmes, "slot", false);

            return (
              <React.Fragment key={uuidv4(JSON.stringify(label), uuidv4.URL)}>
                <div className="column is-12-mobile is-hidden-tablet">
                  <div className="box has-text-centered is-box-lightgreen">
                    {label}
                  </div>
                </div>
                <div className="column is-3-desktop is-12-mobile">
                  {programmes.map((programme) => (
                    <ProgrammeBlock key={programme.id} programme={programme} />
                  ))}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="column is-12">
          <div className="box has-text-centered is-box-lightgreen">
            AfterWork
          </div>
        </div>
        <div className="column is-12">
          <div className="box py-5 table-ronde has-text-centered">
            <h4>à partir de 19H</h4>
            <div>
              <p className="my-2">
                <strong>
                  Animée par Julia MEMETEAU (Fondatrice de JUME),
                  <br /> nous vous donnerons les clés pour mettre en avant vos
                  qualités en tant que femmes et aborderons les stéréotypes de
                  genres qui persistent encore.
                </strong>
              </p>
              <p className="my-1">
                Rendez-vous à La Java - 365 Av de La Rochelle à Niort
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programme;
