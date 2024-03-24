import React from 'react'
import bg from '../assets/img.png'
import benLogo from '../assets/BenLogo.png'
import { CardOne } from './Card'

export function Home() {
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
            className="aspect-[3/2] object-contain lg:aspect-[3/3] lg:h-[500px] xl:aspect-[14/9]"
            src={benLogo}
            alt="Logo"
          />
        </div>
      </div>

      {/* Our events */}
    <div className="mx-auto w-[1182px] flex-col py-10">
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl text-center">Our Events</h1>
        <div className='flex flex-row space-x-10 flex-wrap justify-center items-center'>
            <CardOne src={"https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"} title={"Event 1"} description={"Event 1 description"}/>
            <CardOne src={"https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"} title={"Event 1"} description={"Event 1 description"}/>
            <CardOne src={"https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"} title={"Event 1"} description={"Event 1 description"}/>
            <CardOne src={"https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"} title={"Event 1"} description={"Event 1 description"}/>
            <CardOne src={"https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"} title={"Event 1"} description={"Event 1 description"}/>
            <CardOne src={"https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"} title={"Event 1"} description={"Event 1 description"}/>
        </div>

    </div >

    </div>
  )
}
