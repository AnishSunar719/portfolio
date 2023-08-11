import React from 'react';
import Layout from "../layouts/Layouts";
import Card from "./Card";
import { BlogProject, ECommerce, MoviesAPI, Tobiname } from "../../assets/index";

const Project = () => {
  return (
    <section id='projects' className=' pb-16 flex flex-col gap-3 border-b-2 border-b-amber-500'>
      <div className='flex justify-center items-center text-center'>
        <Layout title="My Projects" desc="What I have done" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 grid-ros-2 gap-20'>
        <Card img={ECommerce} title="Ecommerce site" desc="An E-commerce site using React, React Redux and Tailwind." proj={"E-commerce-Website"} />
        <Card img={MoviesAPI} title="Movies Info site" desc={"An ImdB like site using OmdB api."} proj={"movies-api"} />
        <Card img={Tobiname} title={"Anime Streaming site"} desc="An anime streaming site using riimuru's gogoanime api" proj={"tobiname"}/>
        <Card img={BlogProject} title={"Blog site"} desc="A blog site using Django framework" proj={"django-blog"} />
      </div>
    </section>
  )
}

export default Project