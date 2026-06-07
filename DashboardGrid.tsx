'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { HeroTile } from './HeroTile'
import { ActivityTile } from './ActivityTile'
import { CourseTile } from './CourseTile'
import { HeroSkeleton, ActivitySkeleton, CourseSkeleton } from './SkeletonLoader'
import type { Course } from '@/lib/supabase'

interface DashboardGridProps {
  courses: Course[]
}

export function DashboardGrid({ courses }: DashboardGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 auto-rows-max"
    >
      {/* Hero Section - Full Width on Mobile, 2 cols on Tablet, 2 cols on Desktop */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <Suspense fallback={<HeroSkeleton />}>
          <HeroTile />
        </Suspense>
      </div>

      {/* Activity Tile - Full Width on Mobile, 2 cols on Tablet, 2 cols on Desktop */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <Suspense fallback={<ActivitySkeleton />}>
          <ActivityTile />
        </Suspense>
      </div>

      {/* Course Cards */}
      {courses.length > 0 ? (
        courses.map((course, index) => (
          <div key={course.id} className="col-span-1">
            <Suspense fallback={<CourseSkeleton />}>
              <CourseTile course={course} index={index + 2} />
            </Suspense>
          </div>
        ))
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-full text-center py-16"
        >
          <p className="text-lg text-muted-foreground">No courses yet. Start learning today!</p>
        </motion.div>
      )}
    </motion.div>
  )
}
