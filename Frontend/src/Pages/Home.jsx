import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <> 
       <Navbar/> 
        <section>
            <main className=" text-white">
             {/* main section 2 */}
             <div className="h-screen flex flex-col align-middle justify-center bg-[url('/bg1.svg')] bg-cove">
            <h2 className='px-10 text-5xl text-amber-400 font-bold font-stretch-ultra-condensed text-center pt-10 font-serif'>YOUR ONE STEP SOLUTION FOR EVERYTHING </h2>
            <p className='px-16 text-center font-serif font-stretch-90% '>
          Get help anytime with our AI chatbot! Chito Help answers questions instantly, creates tickets automatically, and works 24/7 so you can focus on what matters most — keeping your customers happy and satisfied.
          <div className='p-4'>
            <button className='bg-indigo-600 p-1.5 rounded-xl'>Say Hii to CHITOH</button>

          </div>

            </p>

            </div>
            {/* main section first */}
            <div className="flex flex-col-reverse md:flex-row ">
                <div className='py-4 md:py-10 w-[100%] md:w-[50%] p-4 md:p-10'>
                <h2 className='text-2xl  font-bold text-orange-400 '> What is ChitoHelp?</h2>
                    <p className='py-5   sm:py-2 text-black font-roboto'>
                     ChitoHelp is an advanced AI-powered customer support chatbot designed to provide instant, accurate, and efficient assistance to users. It integrates seamlessly with an automated ticketing system, helping businesses streamline their customer service operations
                </p>
                </div>
                <div className='w-[50%] p-4'>
                <img src='chatbot.png' className='bg-yellow-400 rounded-r-full rounded-t-full'></img>
                 
                </div>
            </div>
            </main>
        </section>
        <Footer/>
    </>
  )
}

export default Home