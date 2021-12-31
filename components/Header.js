import BLOG from '@/blog.config'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Typed from 'typed.js'

const wrapperTop = 0

/**
 *
 * @returns 头图
 */
export default function Header () {
  const [typed, changeType] = useState()
  useEffect(() => {
    if (!typed && window && document.getElementById('typed')) {
      changeType(
        new Typed('#typed', {
          strings: BLOG.headerStrings,
          typeSpeed: 200,
          backSpeed: 100,
          backDelay: 400,
          showCursor: true,
          smartBackspace: true
        })
      )
    }
  })

  return (
    <header
      id="header"
      className="duration-500 md:bg-fixed bg-cover bg-center mb-12 h-96 mx-5 md:mx-0 md:rounded-3xl bg-black"
      style={{
        backgroundImage:
          `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0,0,0,0.2), rgba(0, 0, 0, 0.8) ),url("${BLOG.bannerImage}")`
      }}
    >
      <div className=" flex h-96 items-center justify-center w-full text-4xl md:text-7xl text-white">
        <div id='typed' className='flex text-center font-serif'/>
      </div>
      <div
        onClick={() => {
          window.scrollTo({ top: wrapperTop, behavior: 'smooth' })
        }}
        className="cursor-pointer w-full text-center py-4 text-5xl absolute bottom-10 text-white"
      >
        <FontAwesomeIcon icon={faAngleDown} className='animate-bounce'/>
      </div>
    </header>
  )
}
