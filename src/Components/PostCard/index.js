import { Link } from "react-router-dom";
import Styles from "./post.module.css";
import BotaoPrincipal from "Components/BotaoPrincipal";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={Styles.post}>
        <img
          className={Styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem da capa do post"
        />

        <h2 className={Styles.titulo}>{post.titulo}</h2>

        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
}
