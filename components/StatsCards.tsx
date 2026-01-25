'use client'

import { motion } from 'framer-motion'
import { UserGroupIcon, FireIcon, BoltIcon, SparklesIcon } from '@heroicons/react/24/solid'
import type { User } from '../app/page'

interface StatsCardsProps {
  users: User[]
}

export default function StatsCards({ users }: StatsCardsProps) {
  const totalUsers = users.length
  const totalSolved = users.reduce((sum, user) => sum + user.stats.totalSolved, 0)
  const totalEasy = users.reduce((sum, user) => sum + user.stats.easy, 0)
  const totalMedium = users.reduce((sum, user) => sum + user.stats.medium, 0)
  const totalHard = users.reduce((sum, user) => sum + user.stats.hard, 0)

  const cards = [
    {
      title: 'Warriors',
      value: totalUsers,
      icon: UserGroupIcon,
      color: 'text-accent',
      bgColor: 'from-accent/20 to-accent/5',
      borderColor: 'border-accent/30'
    },
    {
      title: 'Easy Conquered',
      value: totalEasy,
      icon: SparklesIcon,
      color: 'text-easy',
      bgColor: 'from-easy/20 to-easy/5',
      borderColor: 'border-easy/30'
    },
    {
      title: 'Medium Defeated',
      value: totalMedium,
      icon: BoltIcon,
      color: 'text-medium',
      bgColor: 'from-medium/20 to-medium/5',
      borderColor: 'border-medium/30'
    },
    {
      title: 'Hard Destroyed',
      value: totalHard,
      icon: FireIcon,
      color: 'text-hard',
      bgColor: 'from-hard/20 to-hard/5',
      borderColor: 'border-hard/30'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative overflow-hidden bg-gradient-to-br ${card.bgColor} border-2 ${card.borderColor} rounded-2xl p-4 shadow-black-lg backdrop-blur-sm group hover:shadow-glow transition-all duration-300`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-300 uppercase tracking-wider">
                {card.title}
              </p>
              <p className={`text-4xl font-black ${card.color} tabular-nums`}>
                {card.value.toLocaleString()}
              </p>
            </div>
            <card.icon className={`w-12 h-12 ${card.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}