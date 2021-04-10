import React, { useEffect } from "react";
import TopComponent from "../components/TopComponent/TopComponent";
import TwoBlogsPart from "../components/HomePage/TwoBlogsPart/TwoBlogsPart";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="">
      <TopComponent text={"BLOG"} />
      <TwoBlogsPart />
      <TwoBlogsPart />
    </section>
  );
};

export default Blog;
