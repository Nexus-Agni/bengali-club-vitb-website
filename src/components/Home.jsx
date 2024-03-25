import React, {useEffect} from 'react'
import bg from '../assets/img.png'
import benLogo from '../assets/BenLogo.png'
import { CardOne } from './Card'
import AOS from "aos";
import "aos/dist/aos.css";

export function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  const events = [
    {
      src : "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title : "Event 1",
      description : "Event 1 description"
    },
    {
      src : "https://images.pexels.com/photos/18764385/pexels-photo-18764385/free-photo-of-boys-running-alongside-the-sidewalk-in-black-and-white.jpeg",
      title : "Event 1",
      description : "Event 1 description"
    },
    {
      src : "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      title : "Event 1",
      description : "Event 1 description"
    },
  ]
  return (
    <div className="relative w-full bg-gradient-to-b from-orange-200 via-yellow-400 to-red-600 bg-cover bg-no-repeat bg-center "
    style={{ backgroundImage: `url(${bg})` }}
     >

      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            People who care about your growth
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi blanditiis
            dolores quasi eaque explicabo!
          </p>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] object-contain lg:aspect-[3/3] lg:h-[500px] xl:aspect-[14/9] "
            src={benLogo}
            alt="Logo"
          />
        </div>
      </div>

      {/* Our events */}
      <section className='mx-auto max-w-7xl'>
        <h1 className='text-6xl font-bold text-center mt-8'>Our Events</h1>
        <div className='w-full flex flex-col md:flex-row flex-wrap justify-evenly items-center py-8'>
          {/* CardOne */}
          {events.map((event, index) => (
            <CardOne key={index} src={event.src} title={event.title} description={event.description} />
          ))} 
        </div>
      </section>

    </div>
  )
}
