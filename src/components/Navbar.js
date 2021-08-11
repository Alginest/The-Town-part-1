import React, { useRef } from 'react'
import { FaChevronCircleDown } from 'react-icons/fa'
const Navbar = () => {
  const headContainer = useRef(null)
  const navContainer = useRef(null)
  const navChange = (e) => {
    const headTop = headContainer.current.getBoundingClientRect().bottom
    if (headTop <= 750) {
      navContainer.current.style.backgroundColor = 'white'
      navContainer.current.style.color = 'gray'
    }
  }
  return (
    <header ref={headContainer} onClick={navChange}>
      <nav ref={navContainer}>
        <div className='logo-cont'>
          <h1>The Town</h1>
        </div>
        <div className='nav-cont'>
          <li>
            <a href='/'>Introduction</a>
          </li>
          <li>
            <a href='/'>Our Work</a>
          </li>
          <li>
            <a href='/'>Contact Us</a>
          </li>
        </div>
      </nav>
      <div className='head-text-mid'>
        <h1>The Town</h1>
        <p>Programing Practice</p>
        <p>by Ado Durak</p>
      </div>
      <div className='head-btn-cont'>
        <a href=''>
          <FaChevronCircleDown className='btn-logo' />
        </a>
      </div>
    </header>
  )
}

export default Navbar
