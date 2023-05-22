import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

export function Gigs() {
  const scrollRef = useRef(null)

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef, amount: 'some' }}
        transition={{ duration: 2 }}
        id="gigs"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <h2 className="text-4xl font-bold text-center sm:text-left sm:pl-60 sm:text-5xl mb-6 text-stone-800 dark:text-stone-100">
          Gigs
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row justify-around gap-5">
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border bg-white dark:border-lime-800 dark:bg-stone-900 py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/gig-card-1.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="w-100 my-0 mx-1 rounded-2xl hover:border-transparent hover:border"
              loading="eager"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border bg-white dark:border-lime-800 dark:bg-stone-900 py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/gig-card-2.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="w-100 my-0 mx-1 rounded-2xl hover:border-transparent hover:border"
              loading="eager"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border bg-white dark:border-lime-800 dark:bg-stone-900 py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/gig-card-3.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="w-100 mb-0 mx-1 rounded-2xl hover:border-transparent hover:border"
              loading="eager"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border bg-white dark:border-lime-800 dark:bg-stone-900 py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/gig-card-4.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="w-100 my-0 mx-1 rounded-2xl hover:border-transparent hover:border"
              loading="eager"
            />
          </li>
        </ul>
      </motion.section>
    </>
  )
}
