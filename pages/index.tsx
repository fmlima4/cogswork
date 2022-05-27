import type { NextPage } from 'next'
import Head from 'next/head'
import AuthBanner from '../components/AuthBanner'
import ShiftHistory from '../components/ShiftHistory/ShiftHistory'
import ShitTimer from '../components/ShiftTimer/ShitTimer'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shift App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-10'>
        <h1 className='text-2xl font-bold'>
          Shift App
        </h1>

        <p className='my-3'>
          Track your shifts.
        </p>

        <AuthBanner />
        <ShitTimer />
        <ShiftHistory />
      </main>
    </div>
  )
}

export default Home
