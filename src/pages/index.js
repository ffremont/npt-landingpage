import * as React from "react";
import Hero from "../components/hero";
import NiortTech from "../components/niort-tech";
import Presentation from "../components/presentation";
import Programme from "../components/programme";

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <Presentation />
      <NiortTech />
      <Programme />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Numérique pour toutes -Eni- ecole</title>;
