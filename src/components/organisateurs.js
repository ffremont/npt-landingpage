import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";

const OrganisateurBlock = ({ organisateur }) => (
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

const Organisateurs = () => {
  return (
    <section className="organisateurs-component">
      <div className="container is-max-desktop pt-6">
        <div className="columns is-multiline">
          <div className="column is-12 has-text-centered">
            <h2>Co-organisateurs</h2>
          </div>
          <div className="column is-12">
             
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organisateurs;
