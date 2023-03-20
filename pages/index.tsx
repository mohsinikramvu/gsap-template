import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import CustomCursor from '@/components/CustomCursor/CustomCursor'
import Navbar from '@/components/Navbar/Navbar'
import Header from '@/components/Header/Header'
import Featured from '@/components/Featured/Featured'
import About from '@/components/About/About'
import Gallery from '@/components/Gallery/Gallery'
import Footer from '@/components/Footer/Footer'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '@/hooks/useLocoScroll'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [preloader, setPreloader] = useState<boolean>(true)
  const [timer, setTimer] = useState<number>(2);
  const id = useRef<any>(null);
  const mainEl = useRef<any>(null);
  useLocoScroll(!preloader, mainEl.current);
  const clear = () => {
    if (typeof window !== "undefined") {
      window.clearInterval(id.current);
    }
    setPreloader(false);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      id.current = window.setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000)
    }
  }, [])
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer])
  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="loader-container flex flex-col justify-center items-center gap-5 text-[#dbd8db]">
          <div className="spinner"></div>
          <h1 className='text-[1.5vw] leading-[0.5vw] uppercase font-baiJamjureeSemiBold600'>Flirty flowers</h1>
          <h2 className='font-serif italic'>Rio de Janeiro</h2>
        </div>
      ) : (
        <div
          className='main-container px-[5vw]'
          id='main-container'
          data-scroll-container
          ref={mainEl}
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  )
}

