import React, { useEffect } from "react";
import QAndA from "../components/Faq/QAndA";
import TopComponent from "../components/TopComponent/TopComponent";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="">
      <TopComponent text="FAQ" />
      <QAndA />
    </section>
  );
};

export default Faq;
