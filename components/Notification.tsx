'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  XCircleIcon, 
  InformationCircleIcon 
} from '@heroicons/react/24/outline'

interface NotificationProps {
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  isVisible: boolean
}

export default function Notification({ message, type, isVisible }: NotificationProps) {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="w-6 h-6" />
      case 'error':
        return <XCircleIcon className="w-6 h-6" />
      case 'warning':
        return <ExclamationTriangleIcon className="w-6 h-6" />
      case 'info':
        return <InformationCircleIcon className="w-6 h-6" />
    }
  }

  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-black border-2 border-easy/50 text-easy shadow-glow'
      case 'error':
        return 'bg-black border-2 border-hard/50 text-hard shadow-glow'
      case 'warning':
        return 'bg-black border-2 border-medium/50 text-medium shadow-glow'
      case 'info':
        return 'bg-black border-2 border-accent/50 text-accent shadow-glow'
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.3 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.5 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-6 right-6 z-50"
        >
          <div className={`${getStyles()} backdrop-blur-sm border rounded-xl p-4 shadow-strong max-w-sm`}>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {getIcon()}
              </div>
              <p className="text-sm font-medium flex-1 leading-relaxed">{message}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}