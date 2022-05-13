import React from "react";
import BlogList from "../components/BlogList";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h4 style={{ marginLeft: "100px" }}>BLOG CATEGORY</h4>
      <BlogList />
    </div>
  );
};

export default Home;
