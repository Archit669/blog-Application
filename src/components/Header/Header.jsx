import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    // {
    //   name: 'Posts',
    //   slug: "/posts",
    //   active: true
    // },

    {
      name: "All Posts",
      slug: "/all-posts",
      active: true,
    },
    
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-2 px-8 fixed w-full h-[4rem] z-50 text-white bg-[#0000004f] backdrop-blur-md flex items-center'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4 text-2xl'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header