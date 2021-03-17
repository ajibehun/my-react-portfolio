import React from "react";
import Layout from "./layout/layout";
import Header from "./layout/header";
import About from "./component/about";
import Project from "./component/project";
import Skills from "./component/skills";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
const Main = () => (
  <Layout>
    <Header />
    <About />
    <Project />
    <Skills />
    <ScrollUpButton style={{ height: 30, width: 30 }} />
  </Layout>
);

export default Main;
