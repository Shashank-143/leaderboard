import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 py-16 border-b border-black-light relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black-100 to-black opacity-80"></div>
      <div className="relative max-w-4xl mx-auto">
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent tracking-tight"
        >
          LeetCode Leaderboard
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 font-light tracking-wide mb-3"
        >
          Track and dominate the coding battlefield
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium"
        >
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-sm">Auto-sync every 10 minutes</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
        </motion.div>
      </div>
    </motion.header>
  )
}