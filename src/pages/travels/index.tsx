import MapNoSSR from '../../NoSSR/MapNoSSR'
import Layout from './layout'
import { useEffect, useState } from 'react'

export default function Home() {
  useEffect(() => {
    console.log('map loading!')
  }, [])

  return (
    <Layout>
      <MapNoSSR />
    </Layout>
  )
}
