import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import ServicesSingle from "../Pages/ServicesSingle";
import Project from "../Pages/Project";
import ProjectSingle from "../Pages/ProjectSingle";
import BlogSengle from "../Pages/BlogSengle";
import Blog from "../Pages/Blog";
import Team from "../Pages/Team";
import Contact from "../Pages/Contact";

  export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
       <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-single" element={<ServicesSingle />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project-single" element={<ProjectSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-single" element={<BlogSengle />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        </>
    ))