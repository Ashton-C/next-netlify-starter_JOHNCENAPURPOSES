import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GET JOHN CENA'D</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XgUB3lF9IQA?rel=0?version=3&autoplay=1&start=0&end=6&loop=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p> Get Pranked ya scallywag! </p>
	</main>

    </div>
  )
}
