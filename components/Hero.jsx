'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero(){
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-certi900 via-certi800 to-certi500 text-white overflow-hidden">
      <div className="max-w-4xl px-6">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-4xl md:text-5xl font-extrabold mb-4">Automatiza & Asegura</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="text-lg text-certiBg/90 mb-6">CertiDesk centraliza tus certificados, automatiza vencimientos, integra con SharePoint y SQL Server, y entrega trazabilidad completa por RUT.</motion.p>

        <div className="flex gap-4 justify-center">
          <button className="btn-certi">Solicitar demo gratuita</button>
          <button className="btn-outline">Ver características</button>
        </div>

        <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{delay:0.4}} className="mt-12">
          <Image src="/mockup.png" alt="mockup" width={900} height={400} className="rounded-2xl shadow-2xl" />
        </motion.div>
      </div>
    </section>
  )
}
