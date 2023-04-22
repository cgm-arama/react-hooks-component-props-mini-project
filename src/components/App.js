import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header.js"
import About from "../components/About.js"
import Article from "../components/Article.js"
import ArticleList from "../components/ArticleList.js"


console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <Article />
     <ArticleList />
    </div>
  );
}

export default App;
