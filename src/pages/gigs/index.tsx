import Layout from './layout'
import Carousel from './carousel'
import Image from 'next/image'

const imagesItems = [
  <Image
    src="/images/gigs/portrait-gig-1.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/portrait-gig-2.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/portrait-gig-3.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/landscape-gig-1.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/portrait-gig-4.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/portrait-gig-5.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/landscape-gig-2.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/portrait-gig-6.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/portrait-gig-7.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
]

export default function Home() {
  return (
    <Layout>
      <div className="align-center max-w-100 mt-[120px] flex h-[80vh] justify-center">
        <Carousel items={imagesItems} />
      </div>
    </Layout>
  )
}