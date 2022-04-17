import React from "react";

import { Container, Header, Main, Footer } from "@components";
import { Recommendations } from "@components/recommendations";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Recommendations />
      <Footer />
    </Container>
  );
};

export default Home;
