import Header from "./components/Header.jsx";
import Stories from "./components/Stories.jsx";
import Post from "./components/Post.jsx";
import posts from "./data/posts.json";

function App() {
  return (
    <div>
      <Header />
      <main className="feed">
        <Stories posts={posts} />
        {posts.map(function (post) {
          return <Post key={post.id} post={post} />;
        })}
      </main>
    </div>
  );
}

export default App;
