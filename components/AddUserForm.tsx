'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { UserPlusIcon } from '@heroicons/react/24/outline'

interface AddUserFormProps {
  onAddUser: (displayName: string, username: string) => Promise<boolean>
  isLoading: boolean
}

export default function AddUserForm({ onAddUser, isLoading }: AddUserFormProps) {
  const [displayName, setDisplayName] = useState('')
  const [username, setUsername] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!displayName.trim() || !username.trim()) {
      return
    }

    setIsSubmitting(true)
    const success = await onAddUser(displayName.trim(), username.trim())
    
    if (success) {
      setDisplayName('')
      setUsername('')
    }
    
    setIsSubmitting(false)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-card-gradient border border-black-light rounded-2xl p-6 shadow-black-lg backdrop-blur-sm relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black-300/20 to-transparent pointer-events-none"></div>
      <div className="relative">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <UserPlusIcon className="w-8 h-8 text-accent" />
            Add Participant
          </h2>
          <p className="text-gray-300">Add a new warrior to the coding battlefield</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label htmlFor="displayName" className="block text-sm font-bold text-white uppercase tracking-wider">
                Display Name
              </label>
              <input
                type="text"
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter warrior name"
                required
                className="w-full px-6 py-4 bg-black-500 border-2 border-black-light rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:shadow-neon transition-all duration-300 text-lg font-medium"
              />
              <p className="text-xs text-gray-400 font-mono">How they'll dominate the leaderboard</p>
            </div>

            <div className="space-y-3">
              <label htmlFor="username" className="block text-sm font-bold text-white uppercase tracking-wider">
                LeetCode Handle
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="leetcode_username"
                required
                className="w-full px-6 py-4 bg-black-500 border-2 border-black-light rounded-xl text-accent placeholder-gray-500 focus:outline-none focus:border-accent focus:shadow-neon transition-all duration-300 text-lg font-mono font-semibold"
              />
              <p className="text-xs text-gray-400 font-mono">Their LeetCode profile username</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting || isLoading}
            className="flex items-center justify-center gap-4 w-full md:w-auto px-10 py-5 bg-gradient-to-r from-accent to-primary-500 hover:from-primary-500 hover:to-accent disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-black font-bold rounded-xl transition-all duration-300 shadow-black text-lg tracking-wide uppercase"
          >
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-3 border-black border-t-transparent rounded-full animate-spin" />
                <span>Recruiting...</span>
              </>
            ) : (
              <>
                <UserPlusIcon className="w-6 h-6" />
                <span>Recruit Warrior</span>
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}