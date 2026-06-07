'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { DashboardGrid } from './DashboardGrid'
import { CourseSkeleton, HeroSkeleton, ActivitySkeleton } from './SkeletonLoader'

async function CoursesData() {
  try {
    // For demo purposes, we'll use mock data
    // In production, replace with: const { data } = await supabase.from('courses').select('*')
    const mockCourses = [
      {
        id: '1',
        title: 'React Fundamentals',
        progress: 75,
        icon_name: 'code',
        created_at: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Advanced TypeScript',
        progress: 45,
        icon_name: 'brain',
        created_at: new Date().toISOString(),
      },
      {
        id: '3',
        title: 'Web Design Mastery',
        progress: 60,
        icon_name: 'palette',
        created_at: new Date().toISOString(),
      },
      {
        id: '4',
        title: 'JavaScript Essentials',
        progress: 90,
        icon_name: 'rocket',
        created_at: new Date().toISOString(),
      },
    ]

    return mockCourses
  } catch (error) {
    console.error('[v0] Error fetching courses:', error)
    return []
  }
}

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 z-50 backdrop-blur-md bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl"
                >
                  📚
                </motion.span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Learning Dashboard
                </h1>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Track your progress, stay motivated, and achieve your goals
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
              <HeroSkeleton />
              <ActivitySkeleton />
              <CourseSkeleton />
              <CourseSkeleton />
              <CourseSkeleton />
              <CourseSkeleton />
            </div>
          }
        >
          <CoursesDataComponent />
        </Suspense>
      </main>

      {/* Footer accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mt-16" />
    </div>
  )
}

async function CoursesDataComponent() {
  const courses = await CoursesData()
  return <DashboardGrid courses={courses} />
}
