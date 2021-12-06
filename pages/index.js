import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Blings issue collector!</title>
      </Head>

      <main>
        <Header title="Click on top to submit a bug" />
        <p className="description">
          Make sure to add:    
        </p>
    <p>
    
              your name
              application (<code>Platform</code><code>Playground</code><code>AE Extension</code> or <code>Player/Engine</code>)
              repro steps
              screenshots or screen recordings
    </p>
      </main>

//       <Footer />
    </div>
  )
}
