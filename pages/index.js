import Head from 'next/head'
import {
  Hero,
  WonderfulSuggestion,
  RecentVisits,
  DogAlbums,
  AllDogsIntroduction,
  CustomersFeedBack
} from 'Index'

export default function Home() {

  return <>
    <Head>
      <title>Alborzdog</title>
      <meta name="description" content="Alborzdog" />
      <link rel="icon" href="/" />
    </Head>
    <Hero />
    <WonderfulSuggestion />
    <RecentVisits />
    <DogAlbums />
    <AllDogsIntroduction />
    <CustomersFeedBack />
  </>
}
