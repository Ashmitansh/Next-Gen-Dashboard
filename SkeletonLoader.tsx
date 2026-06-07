'use client'

import { motion } from 'framer-motion'

export function CourseSkeleton() {
  return (
    <motion.div
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="h-56 bg-muted rounded-2xl border border-border"
    />
  )
}

export function HeroSkeleton() {
  return (
    <motion.div
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="col-span-1 md:col-span-2 h-56 bg-muted rounded-2xl border border-border"
    />
  )
}

export function ActivitySkeleton() {
  return (
    <motion.div
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="col-span-1 h-56 bg-muted rounded-2xl border border-border"
    />
  )
}
