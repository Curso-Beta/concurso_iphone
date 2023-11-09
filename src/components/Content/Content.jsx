import React, { useEffect, useState } from "react";
import { Provider, LikeButton } from "@lyket/react";
import Iphone from "../../images/iphone14.png";
import Setas from "../../images/setas.gif";
//import { StaticImage } from "gatsby-plugin-image";
import Header from "../Header/Header";
//https://conteudo.online/como-ocultar-logo-e-controles-do-youtube-ao-incorporar-o-player/
// Monitorar app : https://sentry.io/signup/?original_referrer=https%3A%2F%2Fmadewithreactjs.com%2F&plan=am1_f&referrer=pricing&utm_campaign=frontend-reactjs&utm_content=project-card&utm_medium=paid-community&utm_source=madewithreactjs

//Videos

import "./style.css";

const WPJ = "Pericia Judicial";
const WPAI = "Pericia em Avaliação de Imóveis";
const WPCF = "Pericia Contábil e Financeira";
//const WPT = "Pericia Trabalhista";
const WPG = "Pericia Grafotécnica";
const PMED = "Pericia Médica";

const apiData = [
  /*
    Cursos:
      WPJ - Pericia Judicial
      WPAI - Pericia em Avaliação de Imóveis
      WPCF - Pericia Contábil e Financeira
      WPT - Pericia Trabalhista
      WPG - Pericia Grafotécnica
    */
  {
    userId: "01",
    customerZone: "7cc797ba-9ac",
    nome: "Stéffano Bucci",
    estado: "Rio de Janeiro",
    formacao: "Psicologia",
    cursoRealizado: WPJ,
    videoExternalId: "545bf6b4-f8db-4a46-9191-7a7e0ab06051",
    videoUrl:
      "https://www.youtube.com/embed/HgKGE5ytbIw?rel=0&controles=0&modestbranding=1",
  },

  {
    userId: "02",
    nome: "Maxsuell Azevedo Barboza",
    estado: "Tocantins",
    formacao: "Estudante de direito / Funcionário público",
    cursoRealizado: WPAI,
    videoUrl:
      "https://player-vz-7cc797ba-9ac.tv.pandavideo.com.br/embed/?v=3dc0a651-16a8-482a-8091-966500ab097d",
  },

  {
    userId: "03",
    nome: "José Paulo Albanez",
    estado: "São Paulo",
    formacao: "Contabilista e Economista",
    cursoRealizado: WPCF,
    videoUrl:
      //"https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Jose-Paulo-Albanez_1.mp4",
      "https://player-vz-7cc797ba-9ac.tv.pandavideo.com.br/embed/?v=3dc0a651-16a8-482a-8091-966500ab097d",
  },

  {
    userId: "04",
    nome: "Paulo Christian Braga de Carvalho ",
    estado: "Pará",
    formacao: "Corretor de imóveis",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Paulo-Christian-Braga-de-Carvalho-.mp4",
  },

  {
    userId: "05",
    nome: "Ana Paula Santana De Souza",
    estado: "São Paulo",
    formacao:
      "Bombeiro civil / Estudante de investigação forense e pericia criminal.",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Ana-Paula-Santana-De-Souza_1.mp4",
  },

  {
    userId: "06",
    nome: "Clinio Mayrinck Monteiro de Andrade Neto",
    estado: "Bahia",
    formacao: "Engenheiro / Advogado",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Clinio-Mayrinck-Monteiro-De-Andrade-Neto_1.mp4",
  },
  {
    userId: "07",
    nome: " Emerson Bettega",
    estado: "Santa Catarina",
    formacao: "Tecnólogo em Gestão de recursos Humanos",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Emerson-Bettega_1.mp4",
  },

  {
    userId: "08",
    nome: "Regiane Apolinario Roskowinski",
    estado: "São Paulo",
    formacao: "Letras, professora ",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Regiane-Roskowinski_1.mp4",
  },

  {
    userId: "09",
    nome: "Marco Aurélio Oliveira",
    estado: "São Paulo",
    formacao: "Administração",
    cursoRealizado: WPCF,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Marco-Aurelio-Oliveira_1.mp4",
  },

  {
    userId: "10",
    nome: "Adriana Milanez Suzigan",
    estado: "Santa Catarina",
    formacao: "Professora de Artes, pedagoga",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Adriana-Milanez-Suzigan_1.mp4",
  },

  {
    userId: "11",
    nome: "Juliana de Oliveira Portuguez da Cunha",
    estado: "Brasília",
    formacao: "Medicina Veterinária / Licenciada em Ciências Biológicas",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Juliana-de-Oliveira-Portuguez-da-Cunha_1.mp4",
  },

  {
    userId: "12",
    nome: "Carla Fátima de Oliveira Chagas ",
    estado: "Rio de Janeiro",
    formacao: "Citologia Clínica / Bioinformática / Genética Aplicada",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Carla-Fatima-de-Oliveira-Chagas-.mp4",
  },
  {
    userId: "13",
    nome: "Lívia de Oliveira Pereira",
    estado: "Minas Gerais",
    formacao: "Cirurgiã Dentista",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/LIVIA-DE-OLIVEIRA-PEREIRA-.mp4",
  },

  {
    userId: "14",
    nome: " Livia Maria Liberali Menon",
    estado: "São Paulo",
    formacao: "Cirurgiã Dentista",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Livia-Maria-Liberali-Menon_1.mp4",
  },

  {
    userId: "14",
    nome: "Lauro Pons Santos ",
    estado: "Rio Grande do Sul",
    formacao: "Jornalista",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Lauro-Pons-Santos-.mp4",
  },

  {
    userId: "16",
    nome: "Evandro Henrique Alves Ribeiro",
    estado: "Minas Gerais",
    formacao: "Administração",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Evandro-Henrique-Alves-Ribeiro_1.mp4",
  },

  {
    userId: "17",
    nome: "Daniela Alves dos Santos Mendes",
    estado: "Paraná",
    formacao: "Licenciatura Pedagogia",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Daniela-Alves-Dos-Santos-Mendes_1.mp4",
  },

  {
    userId: "18",
    nome: "Vanda Frez",
    estado: "Paraná",
    formacao: "Teologia",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Vanda-Frez_1.mp4",
  },
  {
    userId: "19",
    nome: "Vanessa Oliveira Camargo",
    estado: "Paraná",
    formacao: "Psicologia",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Vanessa-Oliveira-Camargo_1.mp4",
  },

  {
    userId: "20",
    nome: "Josiane Lourencetti",
    estado: "São Paulo",
    formacao:
      "Engenharia Ambiental, Pós-graduada em Engenheira de Segurança do Trabalho",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Josiane-Lourencetti_1.mp4",
  },

  {
    userId: "21",
    nome: "Sabrina Fabiana de Barros Batista",
    estado: "São Paulo",
    formacao: "Engenheira Civil",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Sabrina-Fabiana-de-Barros-Batista_1.mp4",
  },

  {
    userId: "22",
    nome: "Aline de Oliveira Pequeno",
    estado: "Minas Gerais",
    formacao: "Psicóloga",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Aline-de-Oliveira-Pequeno_1.mp4",
  },

  {
    userId: "23",
    nome: "Jumária da Cunha Rocha",
    estado: "Goiás",
    formacao: "Tecnica em Transaçõesimobiliária",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Jumaria-da-Cunha-Rocha_1.mp4",
  },

  {
    userId: "24",
    nome: "Ana Alves Cristino",
    estado: "São Paulo",
    formacao: "Bacharel em Direito",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Ana-Alves-Cristino_1.mp4",
  },
  {
    userId: "25",
    nome: "Deyvid Denner Ribeiro de Carvalho ",
    estado: "Tocantins",
    formacao: " Professor, Pedagogo",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Deyvid-Denner-Ribeiro-de-Carvalho-.mp4",
  },

  {
    userId: "26",
    nome: "Ana Paula Ferreira",
    estado: "São Paulo",
    formacao: "Gestão de Recursos Humanos e Psicanálise Clínica",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Ana-Paula-Ferreira_1.mp4",
  },

  {
    userId: "27",
    nome: "Shirley Patrícia de Oliveira",
    estado: "Minas Gerais",
    formacao: "Processos Gerenciais",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Shirley-Patricia-De-Oliveira_1.mp4",
  },

  {
    userId: "28",
    nome: " Francisco Henrique Rodrigues Tomaz Queiroz",
    estado: "Ceará",
    formacao: "Contabilista",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Francisco-Henrique-Rodrigues-Tomaz-Queiroz_1.mp4",
  },

  {
    userId: "29",
    nome: "André Moreira Mahmoud",
    estado: "Mato Grosso do Sul",
    formacao: "Médico endocrinologista",
    cursoRealizado: PMED,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Andre-Moreira-Mahmoud_1.mp4",
  },

  {
    userId: "30",
    nome: "Samir Borges da Silva",
    estado: "São Paulo",
    formacao: "História",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Samir-Borges-da-Silva_1.mp4",
  },
  {
    userId: "31",
    nome: "Kleber Ribeiro Melo",
    estado: "Paraná",
    formacao: "Cardiologista ",
    cursoRealizado: PMED,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Kleber-Ribeiro-Melo_1.mp4",
  },

  {
    userId: "32",
    nome: "Gelaine Baratto",
    estado: "Paraná",
    formacao: "Administradora",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Gelaine-Baratto_1.mp4",
  },

  {
    userId: "33",
    nome: "Mauricio Evani Gonçalves de Souza",
    estado: "Rio de Janeiro",
    formacao: "Administração",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Mauricio-Evani-Goncalves-de-Souza_1.mp4",
  },

  {
    userId: "34",
    nome: "Fernando Manuel de Matos Guilherme ",
    estado: "Rio de Janeiro",
    formacao: "Engenheiro Eletrotécnico e Eletrônico",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Fernando-Manuel-de-Matos-Guilherme-.mp4",
  },

  {
    userId: "35",
    nome: "Alessandra Alves de melo",
    estado: "São Paulo",
    formacao: "Investigação perícia criminal FORENSE",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Alessandra-Alves-de-melo_1.mp4",
  },

  {
    userId: "36",
    nome: "Maria Lúcia Drummond Saturnino Dupin ",
    estado: "Minas Gerais",
    formacao: "Farmacêutica",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Maria-Lucia-Drummond-Saturnino-Dupin-.mp4",
  },
  {
    userId: "37",
    nome: "Ailton Bruno de Moura Gonçalves",
    estado: "Rio de Janeiro",
    formacao: "Médico - Cirurgia Geral",
    cursoRealizado: WPJ,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Ailton-Bruno-de-Moura-Goncalves_1.mp4",
  },

  {
    userId: "38",
    nome: "Alexandre Felipe de Souza Barata",
    estado: "Manaus",
    formacao: "Pedagogia",
    cursoRealizado: WPG,
    videoUrl:
      "https://camistudio.com.br/infomedia/wp-content/uploads/2023/10/Alexandre-Felipe-de-Souza-Barata_1.mp4",
  },
  {
    userId: "39",
    nome: "",
    estado: "",
    formacao: "",
    cursoRealizado: "",
    videoUrl: "",
  },
];

const LikeButtonReact = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const filteredData = apiData.filter((data, index) => index !== 38);
    const cardElements = filteredData.map((data) => (
      <div className="card" key={data.userId}>
        <Provider apiKey="pt_f9539e0f4206c85e4e91c36b62ca0c">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div>
              <div className="ratio ratio-16x9">
                <iframe
                  loading="lazy"
                  width="560"
                  height="315"
                  playsInline={true}
                  src={data.videoUrl}
                  title="Depoimentos de alunos"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <h4>{data.nome}</h4>
          <p style={{ color: "#333", marginBottom: "0", fontSize: "0.8em" }}>
            Estado: {data.estado}
          </p>
          <p style={{ color: "#333", marginBottom: "0", fontSize: "0.8em" }}>
            Curso realizado: {data.cursoRealizado}
          </p>
          <p style={{ color: "#333", marginBottom: "0", fontSize: "0.8em" }}>
            Formação: {data.formacao}
          </p>
          <LikeButton
            namespace="beta-online-votacao"
            id={data.userId}
            component={LikeButton.templates.Twitter}
          />
        </Provider>
      </div>
    ));

    setCards(cardElements);
  }, []);

  return (
    <div>
      {/* Seu código de cabeçalho */}
      <div id="header" className="">
        {/* Seu código do cabeçalho */}
        <Header />
        <div className="container ">
          <div id="main-content" className="mt-5">
            <h1 className="title">
              Conheça a história dos
              <br /> nossos Alunos(as)
            </h1>
            <br />
            <h5>
              Veja como a Perícia tem mudado a vida
              <br /> de profissionais de todo o Brasil
            </h5>

            <br />
            <p style={{ fontSize: "1em" }}>
              Vote no seu depoimento favorito e nos ajude a premiar um deles
            </p>

            <img
              id="setas"
              style={{ marginLeft: "30%" }}
              className="img-fluid"
              width="220"
              src={Setas}
              alt="Botão de ação"
            />

            <div
              className="mt-4 mb-4"
              style={{ display: "flex", justifyContent: "center" }}
            ></div>
          </div>

          <div id="iphone" className="float-end mt-4 mb-4">
            <h3 style={{ fontSize: "1.4rem" }} className="">
              Prêmio!
            </h3>
            <img
              id="premioImg"
              className="img-fluid"
              width="380"
              src={Iphone}
              alt="Iphone 14"
            />
            <br />
            <h3 style={{ fontSize: "1.4rem" }}>iPhone 14 Pro Max</h3>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "5rem" }} className="container">
        {cards}
      </div>
    </div>
  );
};

export default LikeButtonReact;
