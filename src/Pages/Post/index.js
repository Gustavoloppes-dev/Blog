import { Route, Routes, useParams } from "react-router-dom";
import "./Post.css";

import posts from "json/posts.json";
import PostModelo from "Components/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "Pages/NaoEncontrada";
import PaginaPadrao from "Components/PaginaPadrao";
import PostCard from "Components/PostCard";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    // console.log(post)
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }
  const test= []

  for(let i = 0; i < 5; i++) {
    if(Number(parametros.id != posts[i].id)) {
      test.push(posts[i])
    }
  }

  // const cardsArray = posts.map(element => {
  //   if(Number(parametros.id) != element.id) {
  //     test.push(element) 
  //   }
  // });


  console.log(test)

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
              <div className="post-recomendados">
                <h2 className="titulo">Outros posts que você pode gostar:</h2>
                <ul className="post-lista">
                  {test.map((post) => ( 
                  <li key={post.id}>
                      <PostCard post={post} />
                    </li>)
                   
                  )}
                </ul>
              </div>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
