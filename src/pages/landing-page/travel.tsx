import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function Travel() {
  const scrollRef = useRef(null)

  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ root: scrollRef, amount: 'some', once: true }}
        transition={{ duration: 1 }}
        id="travel"
        className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
      >
        <h2 className="mb-6 text-center font-caveat text-4xl font-bold text-stone-800 dark:text-stone-100 sm:pl-60 sm:text-left sm:text-5xl md:text-6xl">
          Travel
        </h2>
        <Link href="/travels">
          <ul className="mx-6 my-12 my-12 flex list-none flex-col justify-around gap-16 sm:flex-row sm:gap-5">
            <li className="flex flex-col items-center rounded-3xl border-2 border-transparent bg-white px-2 py-2 shadow-xl dark:border-rose-950 dark:bg-stone-900 sm:w-5/6 md:w-1/5">
              <Image
                src="/images/travel/portrait-seville-7.jpeg"
                alt="placeholder-alt-tag"
                width="1000"
                height="1000"
                className="mx-1 my-0 h-full rounded-2xl object-cover delay-200 duration-700 hover:scale-[98%] hover:contrast-75 hover:saturate-150"
                loading="eager"
              />
            </li>
            <li className="flex flex-col items-center rounded-3xl border-2 border-transparent bg-white px-2 py-2 shadow-xl dark:border-rose-950 dark:bg-stone-900 sm:w-5/6 md:w-1/5">
              <Image
                src="/images/travel/portrait-lisbon-3.jpeg"
                alt="placeholder-alt-tag"
                width="1000"
                height="1000"
                className="mx-1 my-0 h-full rounded-2xl object-cover delay-200 duration-700 hover:scale-[98%] hover:contrast-75 hover:saturate-150"
                loading="eager"
              />
            </li>
            <li className="flex flex-col items-center rounded-3xl border-2 border-transparent bg-white px-2 py-2 shadow-xl dark:border-rose-950 dark:bg-stone-900 sm:w-5/6 md:w-1/5">
              <Image
                src="/images/travel/portrait-seville-3.jpeg"
                alt="placeholder-alt-tag"
                width="1000"
                height="1000"
                className="mx-1 my-0 h-full rounded-2xl object-cover delay-200 duration-700 hover:scale-[98%] hover:contrast-75 hover:saturate-150"
                loading="eager"
              />
            </li>
            <li className="flex flex-col items-center rounded-3xl border-2 border-transparent bg-white px-2 py-2 shadow-xl dark:border-rose-950 dark:bg-stone-900 sm:w-5/6 md:w-1/5">
              <Image
                src="/images/travel/portrait-seville-6.jpeg"
                alt="placeholder-alt-tag"
                width="1000"
                height="1000"
                className="mx-1 my-0 h-full rounded-2xl object-cover delay-200 duration-700 hover:scale-[98%] hover:contrast-75 hover:saturate-150"
                loading="eager"
              />
            </li>
          </ul>
        </Link>
      </motion.section>
    </>
  )
}
