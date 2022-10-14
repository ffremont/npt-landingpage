import * as React from "react";

const Contacts = () => {
  return (
    <section className="contacts-component has-bg-lightgreen px-5">
      <div className="container is-max-widescreen pt-6">
        <div className="columns">
          <div className="column is-4 has-text-centered">
            <p className="block">
              <span className="has-text-weight-bold is-block">
                ENI ÉCOLE INFORMATIQUE
              </span>
              <br /> Margot BUGNOT
              <br />
              <a href="mailto:mbugnot@eni-ecole.fr">mbugnot@eni-ecole.fr</a>
              <br /> 05 35 37 11 87
            </p>
            <p className="block">
              Virginie NEVEU
              <br />
              <a href="mailto:vneveu@eni-ecole.fr">vneveu@eni-ecole.fr</a>
              <br /> 05 35 37 11 83
            </p>
          </div>
          <div className="column is-4 has-text-centered">
            <p className="block">
              <span className="has-text-weight-bold is-block">
                CBE/Ambassadrices du numérique
              </span>
              <br /> Laure TUFFEREAU
              <br />
              <a href="mailto:laure.tuffereau@cbeduniortais.fr">
                laure.tuffereau@cbeduniortais.fr
              </a>
              <br /> 06 24 24 05 54
            </p>
          </div>
          <div className="column is-4 has-text-centered">
            <p className="block">
              <span className="has-text-weight-bold is-block"> NIORT TECH</span>
              <br /> Sylvie TOUZEAU
              <br />
              <a href="mailto:sylvie.touzeau@agglo-niort.fr">
                sylvie.touzeau@agglo-niort.fr
              </a>
              <br /> 06 64 25 65 49
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
