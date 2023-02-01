import React from 'react';
import Layout from "../layouts/Layouts";
import Education from './Education';
import Skills from './Skills';

const Resume = () => {
  const [educationPart, setEducationPart] = React.useState(true);
  const [skillPart, setSkillPart] = React.useState(false);

  return (
    <section id='resume' className='section flex-col'>
      <div className='flex justify-center text-center'>
        <Layout title="About Me" desc="My Resume" />
      </div>
      <div>
        <ul className='w-full grid grid-cols-1 lgl:grid-cols-2 text-center'>
          <li onClick={() => setSkillPart(false) & setEducationPart(true)} className={`${educationPart ? "border-designColor rounded-lg":"border-transparent"} resumeLi`}>Education</li>
          <li onClick={() => setEducationPart(false) & setSkillPart(true)} className={`${skillPart ? "border-designColor rounded-lg":"border-transparent"} resumeLi`}>Professional Skills</li>
        </ul>
      </div>
      { educationPart && <Education />}
      { skillPart && <Skills /> }  
    </section>
  )
}

export default Resume