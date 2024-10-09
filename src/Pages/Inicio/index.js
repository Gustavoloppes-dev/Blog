import Banner from "Components/Banner";
import Styles from "./inicio.module.css";
import posts from "json/posts.json";
import Post from "Components/PostCard";

export default function Inicio() {
  return (
    <ul className={Styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
