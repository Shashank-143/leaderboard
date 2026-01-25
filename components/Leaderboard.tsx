'use client'

import { motion } from 'framer-motion'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import type { User } from '../app/page'

interface LeaderboardProps {
  users: User[]
  sortBy: 'total' | 'easy' | 'medium' | 'hard'
  onSortChange: (sortBy: 'total' | 'easy' | 'medium' | 'hard') => void
  onSyncUser: (userId: number) => void
  onSyncAll?: () => void
  isLoading?: boolean
}

export default function Leaderboard({ users, sortBy, onSortChange, onSyncUser, onSyncAll, isLoading }: LeaderboardProps) {
  if (users.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center py-20 bg-card-gradient border border-black-light rounded-2xl shadow-black-lg"
      >
        <div className="text-8xl mb-6 filter drop-shadow-lg animate-glow">⚔️</div>
        <h3 className="text-3xl font-black text-white mb-4">The Arena Awaits</h3>
        <p className="text-gray-300 text-xl">Add warriors to see the epic battle unfold!</p>
      </motion.div>
    )
  }

  const getMedalForRank = (rank: number) => {
    switch (rank) {
      case 1: return '🥇'
      case 2: return '🥈'
      case 3: return '🥉'
      default: return rank.toString()
    }
  }

  const formatTimeSince = (timestamp: string) => {
    const now = new Date()
    const time = new Date(timestamp)
    const diffInSeconds = Math.floor((now.getTime() - time.getTime()) / 1000)

    if (diffInSeconds < 60) return 'Just now'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
    return `${Math.floor(diffInSeconds / 86400)}d ago`
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bg-card-gradient border border-black-light rounded-2xl overflow-hidden shadow-black-lg backdrop-blur-sm"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6 border-b border-black-light bg-gradient-to-r from-black-200/20 to-transparent">
        <div>
          <h2 className="text-3xl font-black text-white">Battle Rankings</h2>
          <p className="text-gray-300 mt-1 text-lg">Current standings of our warriors</p>
        </div>
        <div className="flex items-center gap-4">
          {onSyncAll && (
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onSyncAll}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 disabled:bg-gray-600/20 disabled:cursor-not-allowed text-accent border border-accent/30 rounded-lg transition-all duration-300 font-medium"
            >
              <ArrowPathIcon className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span className="text-sm">Sync All</span>
            </motion.button>
          )}
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as any)}
            className="px-4 py-3 bg-black-500 border-2 border-black-light rounded-xl text-white focus:outline-none focus:border-accent focus:shadow-neon transition-all duration-300 font-medium"
          >
            <option value="total">Sort by Total</option>
            <option value="easy">Sort by Easy</option>
            <option value="medium">Sort by Medium</option>
            <option value="hard">Sort by Hard</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-black-300/30">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wider">
                Warrior
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-gray-300 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-easy uppercase tracking-wider">
                Easy
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-medium uppercase tracking-wider">
                Medium
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-hard uppercase tracking-wider">
                Hard
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-gray-300 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black-light">
            {users.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                className="hover:bg-black-200/20 transition-all duration-300 group"
              >
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center justify-center w-10 h-10 text-2xl font-black text-white">
                    {getMedalForRank(index + 1)}
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex flex-col">
                    <div className="text-lg font-bold text-white">{user.displayName}</div>
                    <div className="text-sm text-accent font-mono">@{user.username}</div>
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-center">
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-lg font-black text-white bg-accent/20 border-2 border-accent/30 shadow-glow">
                    {user.stats.totalSolved}
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-center">
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-lg font-black text-easy bg-easy/10 border-2 border-easy/20">
                    {user.stats.easy}
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-center">
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-lg font-black text-medium bg-medium/10 border-2 border-medium/20">
                    {user.stats.medium}
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-center">
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-lg font-black text-hard bg-hard/10 border-2 border-hard/20">
                    {user.stats.hard}
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-bold text-easy bg-easy/10 border border-easy/20">
                      <div className="w-2 h-2 bg-easy rounded-full animate-pulse"></div>
                      {formatTimeSince(user.lastUpdated)}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onSyncUser(user.id)}
                      className="p-2 text-gray-300 hover:text-accent transition-all duration-300 hover:shadow-glow rounded-full bg-black-300/30 border border-black-light"
                      title={`Refresh ${user.displayName}'s stats`}
                    >
                      <ArrowPathIcon className="w-5 h-5" />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}