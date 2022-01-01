import BLOG from '@/blog.config'
import { useEffect, useState } from 'react'
import Typed from 'typed.js'
import Image from 'next/image'
import Link from 'next/link'

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
      className="duration-500 md:bg-fixed bg-cover bg-center my-32 h-96 mx-5 md:mx-0 md:rounded-3xl bg-black"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0,0,0,0.2), rgba(0, 0, 0, 0.8) ),url("${BLOG.bannerImage}")`
      }}
    >
      <div className="flex h-96 items-center justify-center w-full text-4xl md:text-7xl text-white">
        <div id="typed" className="flex text-center font-serif" />
      </div>
      <Link passHref href={'/about'}>
        <div className="hover:rotate-45 hover:scale-125 transform duration-200 -mt-16 cursor-pointer flex w-full justify-center">
            <Image
              alt={BLOG.title}
              width={120}
              height={120}
              loading="lazy"
              src="/avatar.jpg"
              className="rounded-full border-black"
            />
          </div>
      </Link>
    </header>
  )
}
