import React from "react";
import Article from "./Article";

function Articlelist(props) {
  const articles = props.posts.map((post, index) => (
    <Article
      key={index}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ));

  return (
    <main>
      {articles}
    </main>
  );
}


export default Articlelist;
