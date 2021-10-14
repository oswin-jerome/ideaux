import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>IDEAUX Technologies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container m-auto px-5">
           <section className="grid grid-cols-1 lg:grid-cols-2 h-screen pt-16 place-items-center pb-52">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="font-bold text-6xl text-center lg:text-left leading-snug">Lorem ipsum, consectetur adipisicing.</h1>
                <button className="bg-gradient-to-l from-blue-600 to-blue-800 hover:shadow-md hover:to-blue-700 transition-all px-6 py-3 rounded-md shadow-lg mt-8 text-white font-bold flex items-center gap-2">Contact us 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              </div>
           </section>
      </div>

    </div>
  )
}
