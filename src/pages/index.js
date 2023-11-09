import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
//import "animate.css";
//import "node_modules/video-react/dist/video-react.css"; // import css

import LikeButtonReact from "../components/LikeButtonReact/LikeButtonReact";
//import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Content from "../components/Content/Content";

const IndexPage = () => {
  return (
    <>
      <LikeButtonReact />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Curso BetaOnline</title>

    <meta name="title" content="Curso BetaOnline" />
    <meta
      name="description"
      content="Conheça a história dos
nossos Alunos(as)!
Veja como a Perícia tem mudado a vida
de profissionais de todo o Brasil
Vote no seu depoimento favorito e nos ajude a premiar um deles:"
    />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://metatags.io/" />
    <meta property="og:title" content="Curso BetaOnline" />
    <meta
      property="og:description"
      content="Conheça a história dos
nossos Alunos(as)!
Veja como a Perícia tem mudado a vida
de profissionais de todo o Brasil
Vote no seu depoimento favorito e nos ajude a premiar um deles:"
    />
    <meta property="og:image" content="" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="/" />
    <meta property="twitter:title" content="Curso BetaOnline" />
    <meta
      property="twitter:description"
      content="Conheça a história dos
nossos Alunos(as)!
Veja como a Perícia tem mudado a vida
de profissionais de todo o Brasil
Vote no seu depoimento favorito e nos ajude a premiar um deles:"
    />
  </>
);
