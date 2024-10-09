import styles from "./SobreMim.module.css";
import PostModelo from "Components/PostModelo";

import fotoCapa from "assets/sobre_mim_capa.png";
// import fotoSobreMim from "assets/sobre_mim_foto.png";
import fotoSobreMim from "assets/foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Gustavo!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Gustavo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou instrutor de Front-end na Alura e estou feliz de te
        ver por aqui.
      </p>
      <p className={styles.paragrafo}>
        Sou desenvolvedor Front-End com 1 ano e meio de experiência focada na
        criação de interfaces modernas e dinâmicas. Desde o final de 2022, venho
        mergulhando no mundo do desenvolvimento, e atualmente estou cursando
        Análise e Desenvolvimento de Softwares.
      </p>
      <p className={styles.paragrafo}>
        Ao longo desse tempo, aprofundei meus conhecimentos em tecnologias como
        HTML, CSS, JavaScript, React e Next.js. Recentemente, comecei a expandir
        minhas habilidades para o Back-End, onde já desenvolvi APIs e trabalhei
        com bancos de dados. Minha meta é me tornar um desenvolvedor Full Stack,
        sempre buscando aprimorar minhas habilidades e acompanhar as inovações
        do setor.
      </p>
      <p className={styles.paragrafo}>
        No futuro, além de expandir minhas competências técnicas, também
        pretendo trabalhar como freelancer, pois gosto de enfrentar desafios em
        diferentes tipos de projetos. A variedade me motiva, e a ideia de
        contribuir com soluções criativas para negócios diversos me fascina.
      </p>
      <p className={styles.paragrafo}>
        Estou sempre em busca de aprendizado e novos desafios, seja criando
        interfaces inovadoras ou desenvolvendo a infraestrutura por trás delas.
      </p>
    </PostModelo>
  );
}
