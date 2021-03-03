import React from "react";
import Layout from "./layout/layout";
import Header from "./layout/header";
import About from "./component/about";
import Project from "./component/project";
import Skills from "./component/skills";

const Main = () => (
  <Layout>
    <Header />
    <About />
    <Project />
    <Skills />
  </Layout>
);

export default Main;
