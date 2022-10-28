import * as React from "react";
import Contacts from "../components/Contacts";
import Hero from "../components/hero";
import NiortTech from "../components/niort-tech";
import AfterWork from "../components/afterwork";
import Organisateurs from "../components/organisateurs";
import Presentation from "../components/presentation";
import Programme from "../components/programme";
import Speakers from "../components/speakers/speakers";
import Carnet from "../components/carnet";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <meta property="og:title" content="Numérique pour toutes 2022" />
        <meta
          property="og:url"
          content="https://numerique-pour-toutes.web.app"
        />
        <meta property="og:image" content="/banner.jpg" />
        <meta
          property="og:description"
          content="La reconversion au féminin, 22/11/2022 à NIORT TECH, TOUTE LA JOURNÉE DE 10H À 17H30, GRATUIT.
  AFTERWORK À PARTIR DE 19H SUR INSCRIPTION, GRATUIT."
        />
      </Helmet>
      <Hero />
      <Presentation />
      <Carnet />
      <NiortTech />
      <Programme />

      <AfterWork />
      <Speakers />
      <Organisateurs />
      <Contacts />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Numérique pour toutes -Eni- ecole</title>;
