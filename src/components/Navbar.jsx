import VITLogo from '../assets/VITLogo.png'
import React, {useEffect, useState} from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import BenLogo from '../assets/BenLogo.png'

const menuItems = [
  {
    name: 'Home',
    to: '',
  },
  {
    name: 'About',
    to: 'about',
  },
  {
    name: 'Contact',
    to: 'contact',
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full sticky top-0 bg-black text-white z-50 ease-in-out ${isScrolled ? 'bg-opacity-80 backdrop-blur-md' : ''}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img src={VITLogo} alt="Logo" className='h-12 ' />
          </span>
         
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name} className='text-white'>
                <NavLink
                  to={item.to}
                  className="text-sm font-semibold text-white hover:text-gray-200 hover:font-extrabold "
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <img src={BenLogo} alt="Logo" className='h-16 w-full '/>
        </div>
        <div className="lg:hidden ">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden ">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                        <img src={VITLogo} alt="DevUI" className='h-12 ' />
                    </span>
                    
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 ">
                  <nav className="grid gap-y-4 ">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </NavLink>
                    ))}
                  </nav>
                </div>
                <img src={BenLogo} alt="Logo" className=' ' />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
