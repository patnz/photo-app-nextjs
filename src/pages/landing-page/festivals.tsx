import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function Festival() {
  const scrollRef = useRef(null)

  return (
    <>
      <motion.section
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef, amount: 'some' }}
        transition={{ duration: 2, once: true }}
        id="festivals"
        className="widescreen:section-min-height tallscreen:section-min-height z-1 my-12 scroll-mt-20 p-6"
      >
        <h2 className="mb-6 text-center font-caveat text-6xl font-bold text-stone-800 dark:text-stone-100 sm:pr-60 sm:text-right sm:text-5xl">
          Festivals
        </h2>
        <Link href="/festivals">
          <ul className="mx-auto my-12 flex list-none flex-col justify-around gap-5 sm:flex-row">
            <li className="flex flex-col items-center rounded-3xl border bg-white px-2 py-2 shadow-xl dark:border-amber-900 dark:bg-stone-900 sm:w-2/3 md:w-1/5">
              <Image
                src="/images/fest/portrait-fest-1.jpeg"
                alt="placeholder-alt-tag"
                width="2000"
                height="3000"
                className="mx-1 my-0 h-full rounded-2xl object-cover "
              />
            </li>

            <li className="flex flex-col items-center rounded-3xl border bg-white px-2 py-2 shadow-xl dark:border-amber-900 dark:bg-stone-900 sm:w-2/3 md:w-1/5">
              <Image
                src="/images/fest/portrait-fest-2.jpeg"
                alt="placeholder-alt-tag"
                width="2000"
                height="3000"
                className="mx-1 my-0 h-full rounded-2xl object-cover "
              />
            </li>
            <li className="flex flex-col items-center rounded-3xl border bg-white px-2 py-2 shadow-xl dark:border-amber-900 dark:bg-stone-900 sm:w-2/3 md:w-1/5">
              <Image
                src="/images/fest/portrait-fest-4.jpeg"
                alt="placeholder-alt-tag"
                width="2000"
                height="3000"
                className="mx-1 my-0 h-full rounded-2xl object-cover "
              />
            </li>
            <li className="flex flex-col items-center rounded-3xl border bg-white px-2 py-2 shadow-xl dark:border-amber-900 dark:bg-stone-900 sm:w-2/3 md:w-1/5">
              <Image
                src="/images/fest/portrait-fest-5.jpeg"
                alt="placeholder-alt-tag"
                width="2000"
                height="3000"
                className="mx-1 my-0 h-full rounded-2xl object-cover "
              />
            </li>
          </ul>
        </Link>
      </motion.section>
    </>
  )
}
