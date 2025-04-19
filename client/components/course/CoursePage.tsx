'use client'
import React, { useState } from 'react'
import Container from '../ui/Container';
import CourseHeader from './CourseHeader';
import { Course } from '@/types/Course';
import ContentTabs from './CourseTabs';
import EnrollButton from './EnrollButton';
import LessonList from './LessonList';
import SessionList from './SessionList';
import { Lesson } from '@/types/Lesson';
import { Session } from '@/types/Session';
import CourseChat from './chat/CourseChat';

type props = {
    course:Course,
    courseLessons:Lesson[]
    courseSessions:Session[]
}

export default function CoursePage({course,courseLessons,courseSessions}:props) {
    const [activeTab, setActiveTab] = useState<"lessons" | "sessions">('lessons')
    return (
        <Container className="py-10">
            <CourseHeader {...course} instructorName={"Yousef"}/>
            <div className="flex justify-between items-center mb-6">
                <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
            {activeTab === "lessons" ? (
                <LessonList lessons={courseLessons} />
            ) : (
                <SessionList sessions={courseSessions} />
            )}
            <EnrollButton/>
            <CourseChat />
        </Container>
    );
}