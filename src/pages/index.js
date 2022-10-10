import * as React from "react";
import Hero from "../components/hero";
import Presentation from "../components/presentation";

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <Presentation />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
