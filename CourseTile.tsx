'use client'

import { motion } from 'framer-motion'
import type { Course } from '@/lib/supabase'

interface CourseTileProps {
  course: Course
  index: number
}

const iconMap: { [key: string]: string } = {
  'book': '📚',
  'code': '💻',
  'chart': '📊',
  'rocket': '🚀',
  'brain': '🧠',
  'palette': '🎨',
  'music': '🎵',
  'camera': '📷',
}

export function CourseTile({ course, index }: CourseTileProps) {
  const icon = iconMap[course.icon_name] || '⭐'
  const colors = [
    { bg: 'from-purple-100 to-pink-100', border: 'border-purple-200', accent: 'text-purple-600' },
    { bg: 'from-pink-100 to-rose-100', border: 'border-pink-200', accent: 'text-pink-600' },
    { bg: 'from-blue-100 to-cyan-100', border: 'border-blue-200', accent: 'text-blue-600' },
    { bg: 'from-yellow-100 to-orange-100', border: 'border-yellow-200', accent: 'text-orange-600' },
  ]
  const color = colors[index % colors.length]
  
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative w-full h-full min-h-64 overflow-hidden rounded-2xl bg-gradient-to-br ${color.bg} border-2 ${color.border} p-6 lg:p-8 cursor-pointer transition-all duration-300 hover:shadow-xl flex flex-col active:shadow-inner`}
      aria-label={`View ${course.title} course`}
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-1/2 -right-1/4 w-80 h-80 rounded-full bg-white/30 blur-3xl animate-pulse" />
      </div>
      
      {/* Inner glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
        initial={false}
      >
        <div className={`absolute inset-0 rounded-2xl ${color.bg}`} />
      </motion.div>
      
      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* Icon and Progress Badge */}
        <div className="flex items-start justify-between mb-6">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="text-5xl lg:text-6xl transition-transform"
          >
            {icon}
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className={`text-xs font-bold px-3 py-1.5 rounded-full border-2 ${color.border} ${color.accent} bg-white/60 backdrop-blur-sm`}
          >
            {course.progress}%
          </motion.div>
        </div>

        {/* Title and Progress */}
        <div className="space-y-4 flex-1 text-left">
          <h3 className={`text-lg lg:text-xl font-bold line-clamp-2 leading-tight ${color.accent}`}>
            {course.title}
          </h3>
          
          {/* Progress Section */}
          <div className="space-y-2.5 pt-2">
            <div className="flex justify-between items-center">
              <span className={`text-xs font-semibold ${color.accent} uppercase tracking-wider`}>Progress</span>
              <span className={`text-xs font-bold ${color.accent}`}>{course.progress}%</span>
            </div>
            
            <div className={`relative h-3 bg-white/40 rounded-full overflow-hidden border border-white/50 backdrop-blur-sm`}>
              <motion.div
                className={`h-full bg-gradient-to-r ${color.bg} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${course.progress}%` }}
                transition={{ delay: index * 0.1 + 0.4, duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        {/* CTA Button area */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          className="mt-6 pt-4 border-t border-white/30"
        >
          <p className={`text-xs font-semibold ${color.accent} group-hover:translate-x-1 transition-transform`}>
            Continue Learning →
          </p>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color.bg}`}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </motion.button>
  )
}
