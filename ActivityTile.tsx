'use client'

import { motion } from 'framer-motion'

const activities = [
  { time: '2 hours ago', text: 'Completed React Fundamentals', icon: '✓', color: 'bg-green-100 text-green-600' },
  { time: '1 day ago', text: 'Started TypeScript Deep Dive', icon: '▶', color: 'bg-blue-100 text-blue-600' },
  { time: '2 days ago', text: 'Finished JavaScript Basics', icon: '✓', color: 'bg-yellow-100 text-yellow-600' },
  { time: '3 days ago', text: 'Earned "Fast Learner" Badge', icon: '⭐', color: 'bg-pink-100 text-pink-600' },
]

export function ActivityTile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="col-span-1 h-full min-h-64 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 lg:p-8 flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300"
    >
      {/* Header with animated flame */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-cyan-200">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-cyan-900">Activity Feed</h2>
          <p className="text-xs text-cyan-700 mt-1 font-medium">Your learning milestones</p>
        </div>
        <motion.button
          onClick={(e) => e.preventDefault()}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl flex-shrink-0 cursor-pointer"
          aria-label="Activity streak"
        >
          🔥
        </motion.button>
      </div>

      {/* Activity List */}
      <div className="space-y-3 flex-1 overflow-y-auto pr-2">
        {activities.map((activity, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            whileHover={{ x: 8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => e.preventDefault()}
            className="group/item w-full flex gap-3 items-start p-3 rounded-2xl hover:bg-white/70 active:bg-white/50 transition-all duration-200"
          >
            <motion.div
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className={`text-lg lg:text-xl mt-1 flex-shrink-0 p-2 rounded-full ${activity.color} flex items-center justify-center`}
            >
              {activity.icon}
            </motion.div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-sm lg:text-base text-cyan-900 font-semibold leading-snug line-clamp-2">
                {activity.text}
              </p>
              <p className="text-xs text-cyan-700 mt-1 font-medium">{activity.time}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Scrollbar hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="h-1 bg-gradient-to-r from-cyan-300 via-blue-300 to-transparent rounded-full mt-4"
      />
    </motion.div>
  )
}
