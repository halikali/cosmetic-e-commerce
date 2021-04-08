import React from "react";
import QAndA from "../components/Faq/QAndA";
import TopComponent from "../components/TopComponent/TopComponent";

const Faq = () => {
  return (
    <section className="">
      <TopComponent text="FAQ" />
      <QAndA />
    </section>
  );
};

export default Faq;
