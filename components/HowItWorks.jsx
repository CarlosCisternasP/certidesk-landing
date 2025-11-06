import { motion } from 'framer-motion'
export default function HowItWorks(){
  return (
    <section className="py-20 bg-white" id="how">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">¿Cómo funciona?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="p-6 rounded-xl bg-gray-50 border">
            <div className="font-semibold">GitHub</div>
            <div className="text-sm text-gray-600 mt-2">1. Sube tu código y mantenlo en control de versiones.</div>
          </motion.div>
          <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="p-6 rounded-xl bg-gray-50 border">
            <div className="font-semibold">Vercel</div>
            <div className="text-sm text-gray-600 mt-2">2. Conecta con Vercel para deploy automático.</div>
          </motion.div>
          <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="p-6 rounded-xl bg-gray-50 border">
            <div className="font-semibold">Deploy</div>
            <div className="text-sm text-gray-600 mt-2">3. Sitio online con CDN y HTTPS automático.</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
