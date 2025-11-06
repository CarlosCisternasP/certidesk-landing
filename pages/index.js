import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>CertiDesk — Gestión segura de certificados</title>
        <meta name="description" content="CertiDesk: automatiza la gestión de certificados con trazabilidad por RUT." />
      </Head>
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  )
}
