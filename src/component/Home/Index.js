import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sickportfolio from './Sickportfolio'
import Join from './Join'
import Investment from './Investment'
import Latestnews from './Latestnews'
import Faq from './Faq'
import Footer from './Footer'
import Head from "next/head";
export default function Index() {
    return (
        <div className='div-element-test'>
            <Head>
            <title>Blockhub DAO</title>
            </Head>
            <meta name='description' content='Blockhub DAO is a VC DAO for Web 3.0 investments and meme mastery'/>
            <meta/>
            <Navbar />

            <Hero />
            <Sickportfolio/>
            <Join/>
            <Investment/>
            <Latestnews/>
            <Faq/>
            <Footer/>
        </div>
    )
}
