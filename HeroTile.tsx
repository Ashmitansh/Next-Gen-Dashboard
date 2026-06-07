'use client'

import { motion } from 'framer-motion'

export function HeroTile() {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="col-span-1 md:col-span-2 w-full h-auto lg:h-64 rounded-3xl bg-gradient-to-br from-purple-200 via-pink-100 to-purple-100 border-2 border-purple-300 p-6 lg:p-10 flex flex-col justify-between overflow-hidden relative group hover:shadow-xl transition-shadow duration-300"
      aria-label="Welcome section"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-pink-300/40 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-purple-300/30 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-shimmer" />

      <div className="relative z-10 space-y-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-purple-900"
          >
            Welcome back! 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-purple-700 text-base lg:text-lg mt-3 leading-relaxed font-medium"
          >
            Continue your learning journey and unlock your potential today
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-20"
        >
          <div className="inline-flex items-center gap-3 bg-white/70 border-2 border-purple-300 px-6 py-3 rounded-full backdrop-blur-md hover:bg-white/90 active:bg-white/60 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl">
            <motion.span
              animate={{ rotate: [0, 15, -15, 0], y: [0, -4, 4, 0] }}
              transition={{ delay: 0.6, duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="text-2xl"
            >
              🎯
            </motion.span>
            <span className="text-sm font-bold text-purple-900">
              7-day streak! Keep going 🔥
            </span>
          </div>
        </motion.div>
      </div>

      {/* Corner accent */}
      <motion.div
        className="absolute top-4 right-4 text-3xl"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ⚡
      </motion.div>
    </motion.button>
  )
}
