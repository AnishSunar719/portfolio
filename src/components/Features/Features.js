import React from 'react';
import Feature from '../layouts/Layouts';
import Card from './Card';
import { FaBookReader, FaFirefoxBrowser } from "react-icons/fa"
import { GrArchlinux, } from "react-icons/gr";
import { GiChiliPepper, GiJapan } from "react-icons/gi";
const Features = () => {
  return (
    <section id='features' className='w-full h-auto pb-16 items-center border-b-2 border-b-amber-500'>
      <div className='flex justify-center text-center items-center'>
        <Feature title="Features" desc="What I do" />
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 grid-rows-2 gap-12 md:gap-16 lgl:gap-24">
        <Card
          title="Learner"
          desc="As from computer engineering
          background, my interests are in softwares and hardwares. I go by the documentations of each
          framework and hardware descriptions that I use for my projects."
          icon={<FaBookReader />}
        />
        <Card
          title="Web Development"
          desc="I build different websites using different frameworks like React, React-Native, Django and DjangoRESTFramework
          ."
          icon={<FaFirefoxBrowser />}
        />
        <Card
          title="Linux Enthusiast"
          desc="Linux is my favourite piece of software. It is my daily driver. I can tweak
          it as I like. I can fix any problem without resetting or re-installing the whole
          OS unlike other OSes in the market which makes us sure to have its installation media
          at every possible problem"
          icon={<GrArchlinux />}
        />
        <Card
          title="Chilli Eater"
          desc="I love chillies and hot food. Chillies make food taste good
          I dare you to challenge me"
          icon={<GiChiliPepper />}
        />
        <Card
          title="Otaku"
          desc="I love Japanese Animes and mangas. Japanese people are the best when come to imagination
          and echhi things where no one can beat them. Gintama nails in every genre of anime. It's worth your time.
          Comedy, Action, Romance, History.. All in one package"
          icon={<GiJapan />}
        />
      </div>
    </section>
  )
}

export default Features