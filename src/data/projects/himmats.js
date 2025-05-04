// src/data/projects/himmats.js
import BannerImg from '../../Images/himmats-project-images/himmats-banner-image.svg';
import PersonaImg from '../../Images/himmats-project-images/Persona.svg';
import JourneyMapImg from '../../Images/himmats-project-images/Journey Map.svg';
import Wireframe1 from '../../Images/himmats-project-images/wireframe-1.svg';
import Wireframe2 from '../../Images/himmats-project-images/wireframe-2.svg';
import Wireframe3 from '../../Images/himmats-project-images/wireframe-3.svg';
import Wireframe4 from '../../Images/himmats-project-images/wireframe-4.svg';
import TeacherDashboard from '../../Images/himmats-project-images/Teacher-Stande-Course-Dashboard.svg';
import TeacherClassroomCreated from '../../Images/himmats-project-images/Teacher-Stande-Course-Dashboard-Classroom-Created.svg';
import TeacherCourseCreated from '../../Images/himmats-project-images/Teacher-Stande-Course-Create-Course.svg';
import TeacherCreateCourse from '../../Images/himmats-project-images/Teacher-Stande-Course-Created-Course.svg';
import TeacherAddContent from '../../Images/himmats-project-images/Teacher-Stande-Course-Add-Content.svg';
import StudentDashboard from '../../Images/himmats-project-images/Student Stande Course Dashboard.svg';
import StudentAssigned from '../../Images/himmats-project-images/Student Stande Course Dashboard Assigned.svg';

const himmats = {
  id: 'himmats',
  title: 'Himmats',
  themeColor: '#1E90FF',
  bannerImage: BannerImg,
  liveLink: 'https://himmats.com',
  skills: ['UI/UX', 'Frontend Development', 'Product Strategy', 'A/B Testing'],
  sidebar: [
    { key: 'overview', title: 'Overview of What I Did' },
    { key: 'context', title: 'Context' },
    { key: 'problem', title: 'Problem Statement' },
    { key: 'challenges', title: 'Challenges Teachers Facing' },
    { key: 'where_i_started', title: 'Where Did I Start - DFD (Designing From Data)' },
    { key: 'journey_map', title: 'User Journey Map' },
    { key: 'solutions', title: 'The Initial Solutions to the challenges' },
    { key: 'design_time', title: 'Design Time' },
    { key: 'high_fidelity', title: 'High-Fidelity UI Screens' },
    { key: 'next_steps', title: 'Next Steps' },
  ],
  sections: [
    {
      key: 'overview',
      title: 'Overview of What I Did',
      items: [
        'Designed the landing page and developed a responsive design using ReactJS.',
        'Gathered insights to develop a persona, user journey map, wireframes, and a high-fidelity prototype.',
        'Built the full frontend in ReactJS and integrated it with the backend APIs alongside the backend engineer.',
      ],
    },
    {
      key: 'context',
      title: 'Context',
      text: 'In this teaching business where I teach and work part-time, I partnered with fellow teachers to ideate and design Himmats. The goal was to address issues with cheating and help students practice Cambridge IGCSE exam questions online, while still enabling self-marking and learning.',
    },
    {
      key: 'problem',
      title: 'Problem Statement',
      text: 'Teachers lacked an intuitive platform to create and manage digital classrooms, assignments, and personalized feedback at scale, slowing down student learning outside of class.',
    },
    {
      key: 'challenges',
      title: 'Challenges Teachers Facing',
      items: [
        'Difficulty accessing and organizing past exam papers online',
        'Manual assignment creation was time-consuming',
        'Delays in grading slowed student progress',
        'Lack of clear progress tracking for each student',
      ],
    },
    {
      key: 'where_i_started',
      title: 'Where Did I Start - DFD (Designing From Data)',
      text: 'From interviewing two teachers and observing classroom workflows, I distilled core needs and frustrations to inform an initial persona.',
      images: [PersonaImg],
    },
    {
      key: 'journey_map',
      title: 'User Journey Map',
      text: 'I mapped out a teacher’s journey—from creating a course to reviewing student progress—to identify pain points and opportunity areas.',
      images: [JourneyMapImg],
    },
    {
      key: 'solutions',
      title: 'The Initial Solutions to the challenges',
      items: [
        'Easy access to past papers for any Cambridge IGCSE subject',
        'Simple interface to create and assign exam questions',
        'Instant AI-assisted feedback based on official mark schemes',
        'Dashboard for tracking individual and class performance with insights on topics to focus on and current grade level',
      ],
    },
    {
      key: 'design_time',
      title: 'Design Time',      
      subsections: [
        {
          
          text: ' initially did a lot of conceptual sketches and then moved on to the wireframes. I wanted to keep things very simple at first by designing the minimal viable version of each feature while still achieving the intended solutions.  ' 
        }, 
        {
          title: 'Wireframes',
          text: 'The wireframes below demonstrate the main student dashboard view. The dashboard displays the classrooms in which the student is enrolled, upcoming homework assignments, and provides access to feedback and progress tracking. I strive to make my wireframes as functional and logical as possible while keeping them simple. ',
          images: [Wireframe1],
        },
        {
    
          text: 'The wireframe below showcases the teacher dashboard view. I love how simple it is and how much functionality it provides. You can create a classroom by filling in just two fields and then monitor everything in a simple tile interface by selecting the specific subject classroom you want to view.',
          images: [Wireframe2, Wireframe3],
        },
        {
    
          text: 'The pop up below is designed to help the teacher add content easily. Since I am designing for the web, using a pop up improves usability. The plan is to continue using pop ups for creating assignments and assigning them to students. Because questions will be pulled from the Stande software, the teacher will simply click to choose questions when creating an assignment. ',
          images: [Wireframe4],
        },
      ],
    },
    {
      key: 'high_fidelity',
      title: 'High-Fidelity UI Screens',
      images: [
        StudentDashboard,
        StudentAssigned,
        TeacherDashboard,
        TeacherClassroomCreated,
        //TeacherCourseCreated,
        TeacherCreateCourse,
        TeacherAddContent,
            ],
    },
    {
      key: 'next_steps',
      title: 'Next Steps',
      items: [
        'Conduct A/B testing to evaluate design variations',
        'Gather further teacher feedback for assignment creation and tracking',
        'Explore student perspectives to refine the dashboard experience',
      ],
    },
  ],
};

export default himmats;
