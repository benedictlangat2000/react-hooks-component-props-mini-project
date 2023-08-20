import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import Articlelist from "./Articlelist"
import About from "./About";

console.log(blogData);

function App() {
  const posts = [
    {
      title: "First Post",
      date: "August 20, 2023",
      preview: "This is a preview of the first post."
    },
    {
      title: "Second Post",
      date: "September 5, 2023",
      preview: "This is a preview of the second post."
    },
    {
      title: "Third Post",
      date: "October 12, 2023",
      preview: "This is a preview of the third post."
    },
    {
      title: "Fourth Post",
      date: "November 18, 2023",
      preview: "This is a preview of the fourth post."
    },
    {
      title: "Fifth Post",
      date: "December 25, 2023",
      preview: "This is a preview of the fifth post."
    }
  ];
  return (
    <div className="App">
       <Header blogName="My Awesome Blog" />
       <About
       imageSrc="https://via.placeholder.com/215"
        aboutText="Welcome to our blog! We are passionate about sharing interesting content with you."
        />
        <Articlelist posts={posts} />
        

      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
