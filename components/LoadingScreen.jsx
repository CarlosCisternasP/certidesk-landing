'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  useEffect(()=>{
    const t = setTimeout(()=>setVisible(false), 1800)
    return ()=>clearTimeout(t)
  },[])
  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-certi900 to-certi800 text-white">
          <motion.div initial={{scale:0.6, opacity:0}} animate={{scale:1, opacity:1, rotate:360}} transition={{duration:1}} className="text-4xl font-extrabold tracking-wide text-certiAccent">CertiDesk</motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
