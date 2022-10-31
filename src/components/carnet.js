import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const CarnetBlock = ({ logo, text }) => (
  <div className="is-flex is-flex-direction-column flex-wrap">
    <div className="has-text-centered my-2">
      <strong>
        <span className="material-symbols-outlined">{logo}</span>
      </strong>
    </div>
    <div className="has-text-centered">
      <strong>{text}</strong>
    </div>
  </div>
);

const Carnet = () => {
  return (
    <div className="carnet-component px-5" id="carnet">
      <h2 className="has-text-centered my-5">
        Qu'est-ce que le carnet de visite ?
      </h2>
      <div className="container is-max-desktop">
        <div className="columns is-multiline">
          <div className="column is-3-desktop is-12-mobile items">
            <CarnetBlock logo="explore" text={`Préparer votre visite en découvrant la programmation`} />
          </div>
          <div className="column is-3-desktop is-12-mobile items">
            <CarnetBlock logo="badge" text={`Accès à toutes les cartes de visites numérique des intervenants`} />
          </div>
          <div className="column is-3-desktop is-12-mobile items">
            <CarnetBlock logo="heart_plus" text={`Pendant et après votre visite, le carnet permet de conserver en favori les animations / coordonnées des intervenants.`} />
          </div>
          <div className="column is-3-desktop is-12-mobile items">
            <CarnetBlock logo="qr_code_scanner" text={`Accès rapide au descriptif de l'animation`} />
          </div>
        </div>
      </div>
      <div className="actions">
      <a className="eni-button is-inline-block my-3 is-uppercase" href="https://carnet-de-visite-numerique-pour-toutes.web.app/">Accéder au carnet de visite</a>
      </div>
    </div>
  );
};

export default Carnet;
