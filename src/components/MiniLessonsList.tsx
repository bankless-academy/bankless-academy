import React, { useState, useEffect } from 'react'
import { Image } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { LESSONS } from 'constants/index'

interface MiniLesson {
  name: string
  slug: string
  lessonImageLink: string
  description: string
  level: string
}

interface MiniLessonsListProps {
  lessonSlugs: string[]
  onSelectLesson?: (lesson: MiniLesson) => void
}

const MiniLessonsList: React.FC<MiniLessonsListProps> = ({
  lessonSlugs,
  onSelectLesson,
}) => {
  const [lessons, setLessons] = useState<MiniLesson[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        setLoading(true)

        // Filter lessons based on the provided slugs
        const filteredLessons = LESSONS.filter((lesson) =>
          lessonSlugs.includes(lesson.slug)
        ).map((lesson) => ({
          name: lesson.name,
          slug: lesson.slug,
          lessonImageLink: lesson.lessonImageLink,
          description: lesson.description,
          level: lesson.level,
        }))

        setLessons(filteredLessons)
      } catch (err) {
        console.error('Error fetching lessons:', err)
        setError('Failed to load lessons. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchLessons()
  }, [lessonSlugs])

  const handleLessonClick = (lesson: MiniLesson) => {
    if (onSelectLesson) {
      onSelectLesson(lesson)
    }
  }

  if (loading) {
    return <LoadingContainer>Loading lessons...</LoadingContainer>
  }

  if (error) {
    return <ErrorContainer>{error}</ErrorContainer>
  }

  return (
    <LessonsGrid>
      {lessons.map((lesson, index) => (
        <LessonCard
          key={`${lesson.slug}-${index}`}
          onClick={() => handleLessonClick(lesson)}
        >
          {lesson.lessonImageLink && (
            <Image
              src={lesson.lessonImageLink}
              alt={lesson.name}
              height="120"
            />
          )}
        </LessonCard>
      ))}
    </LessonsGrid>
  )
}

const LessonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background-color: #1a202c;
  border-radius: 12px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const LessonCard = styled.div`
  grid-template-columns: 48px 1fr auto;
  align-items: center;
  justify-items: center;
  padding: 16px;
  border-radius: 12px;
  background-color: #2d3748;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #666;
`

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #e53935;
`

export default MiniLessonsList
