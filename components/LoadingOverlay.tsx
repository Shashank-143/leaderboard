'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface LoadingOverlayProps {
  isVisible: boolean
}

export default function LoadingOverlay({ isVisible }: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-card-gradient border border-black-light rounded-2xl p-8 shadow-black-lg text-center"
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 mx-auto">
                <div className="w-16 h-16 border-4 border-black-light border-t-accent rounded-full animate-spin"></div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 w-16 h-16 mx-auto border-4 border-transparent border-r-primary-400 rounded-full"
              ></motion.div>
            </div>
            <p className="text-white font-medium text-lg">Fetching LeetCode data...</p>
            <p className="text-gray-400 text-sm mt-2">This may take a few moments</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}