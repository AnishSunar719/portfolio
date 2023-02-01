import React from 'react';
import Layout from "../layouts/Layouts";
import Card from "./Card";
import { GtkProject, BlogProject, SignLanguageProject, FaceRecognitionProject } from "../../assets/index";

const Project = () => {
  return (
    <section id='projects' className=' pb-16 flex flex-col gap-3 border-b-2 border-b-amber-500'>
      <div className='flex justify-center items-center text-center'>
        <Layout title="My Projects" desc="What I have done" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 grid-ros-2 gap-20'>
        <Card img={GtkProject} title="Gtk Calculator" desc="Gtk is Gnome Toolkit used to make UI for desktop Applications" proj={"gtkmm-3.0"} />
        <Card img={BlogProject} title="Blog" desc={"A simple blog website where you can add your blogs, edit them or remove them"} proj={"blog-site"} />
        <Card img={SignLanguageProject} title={"NSL Reconginzer"} desc="Nepali Sign Language (NSL) can predict the casted signs
            in word level in real time" proj={""}/>
        <Card img={FaceRecognitionProject} title={"Face Recognizer"} desc="The system recognizes the person's face and identify them.
        using Viola Jones Algorithm" proj={""} />

      </div>
    </section>
  )
}

export default Project