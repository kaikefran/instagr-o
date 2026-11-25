// lista de stories: um círculo para cada pessoa que postou
function Stories({ posts }) {
  return (
    <section className="stories" aria-label="Stories">
      {posts.map(function (post) {
        return (
          <div className="story" key={post.id}>
            <img className="story-foto" src={post.avatar} alt="" width="60" height="60" />
            <span className="story-nome">{post.usuario.split(".")[0]}</span>
          </div>
        );
      })}
    </section>
  );
}

export default Stories;
