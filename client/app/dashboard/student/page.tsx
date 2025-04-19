import DashboardStats from '@/components/dashboard/student/DashboardStats';
import EnrolledCourses from '@/components/dashboard/student/EnrolledCourses';
import StudentActions from '@/components/dashboard/student/StudentActiont';
import Container from '@/components/ui/Container';
import courses from '@/utils/data/courses';

export default function page() {
    return (
        <Container className='py-10'>
            <StudentActions />

            <DashboardStats
                coursesCount={7}
                completedLessons={22}
                upcomingSessions={2}
            />

            <EnrolledCourses courses={courses}/>
        </Container>
    );
}