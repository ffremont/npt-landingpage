import * as React from "react";
import ExposantsCarousel from "./exposants-carousel";
import IntervenantCarousel from "./intervenant-carousel";

const Speakers = () => (
  <section className="speaker-component">
    <div className="container is-max-desktop pt-6">
      <div className="columns is-multiline">
        <div className="column is-12 has-text-centered">
          <IntervenantCarousel />
       
          <ExposantsCarousel />
        </div>
      </div>
    </div>
  </section>
);

export default Speakers;
