import { useState } from "react";
import { FaRegHeart, FaHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark, FaBookmark } from "react-icons/fa";

function Post({ post }) {
  // estados do post: o que muda quando a pessoa clica
  const [curtido, setCurtido] = useState(false);
  const [curtidas, setCurtidas] = useState(post.curtidas);
  const [salvo, setSalvo] = useState(false);
  const [comentarios, setComentarios] = useState(post.comentarios);
  const [texto, setTexto] = useState("");

  // curtir e descurtir (troca o ícone e muda o número)
  function curtir() {
    if (curtido) {
      setCurtido(false);
      setCurtidas(curtidas - 1);
    } else {
      setCurtido(true);
      setCurtidas(curtidas + 1);
    }
  }

  // publicar um comentário novo
  function comentar(evento) {
    evento.preventDefault();
    if (texto.trim() === "") {
      return; // não deixa comentar vazio
    }
    const novoComentario = { usuario: "voce", texto: texto.trim() };
    setComentarios([...comentarios, novoComentario]);
    setTexto("");
  }

  return (
    <article className="post">
      <div className="post-topo">
        <img className="post-avatar" src={post.avatar} alt="" width="36" height="36" />
        <strong>{post.usuario}</strong>
        <span className="post-tempo">• {post.tempo}</span>
      </div>

      <img className="post-imagem" src={post.imagem} alt={post.alt} width="400" height="400" />

      <div className="post-acoes">
        <button type="button" onClick={curtir} aria-pressed={curtido} aria-label={curtido ? "Descurtir" : "Curtir"}>
          {curtido ? <FaHeart className="curtido" /> : <FaRegHeart />}
        </button>
        <button type="button" aria-label="Comentar">
          <FaRegComment />
        </button>
        <button type="button" aria-label="Enviar">
          <FaRegPaperPlane />
        </button>
        <button type="button" className="salvar" onClick={() => setSalvo(!salvo)} aria-pressed={salvo} aria-label="Salvar">
          {salvo ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>

      <p className="post-curtidas">{curtidas.toLocaleString("pt-BR")} curtidas</p>
      <p className="post-legenda">
        <strong>{post.usuario}</strong> {post.legenda}
      </p>

      <ul className="post-comentarios">
        {comentarios.map(function (comentario, indice) {
          return (
            <li key={indice}>
              <strong>{comentario.usuario}</strong> {comentario.texto}
            </li>
          );
        })}
      </ul>

      <form className="post-form" onSubmit={comentar}>
        <label className="visually-hidden" htmlFor={"comentario-" + post.id}>
          Adicionar comentário
        </label>
        <input
          id={"comentario-" + post.id}
          type="text"
          placeholder="Adicione um comentário..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit" disabled={texto.trim() === ""}>
          Publicar
        </button>
      </form>
    </article>
  );
}

export default Post;
