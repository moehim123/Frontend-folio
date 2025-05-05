/* src/data/projects/stande.js */
import BannerImg from '../../Images/stande-project-images/stande-banner-image.svg';
import PersonaImg from '../../Images/stande-project-images/Persona.svg';
import JourneyMapImg from '../../Images/stande-project-images/Journey Map.svg';
import Wireframe1 from '../../Images/stande-project-images/wireframe-1.svg';
import Wireframe2 from '../../Images/stande-project-images/wireframe-2.svg';
import ComponentsImg from '../../Images/stande-project-images/Components.svg';
import TrackerImg from '../../Images/stande-project-images/components-tracker.svg';
import LoginScreen from '../../Images/stande-project-images/Login Screen.svg';
import MainDashboard from '../../Images/stande-project-images/Main Dashboard.svg';
import SubjectChoice from '../../Images/stande-project-images/Subject Choice.svg';
import PastPapers from '../../Images/stande-project-images/Past Papers.svg';
import MySubjects from '../../Images/stande-project-images/My subjects.svg';
import MyPaper from '../../Images/stande-project-images/My-Paper.svg';
import SolvePaper from '../../Images/stande-project-images/Solve-paper-screen.svg';
import FeedbackReports from '../../Images/stande-project-images/Feedback Reports.svg';

const stande = {
  id: 'stande',
  title: 'Stande',
  themeColor: '#4BFF5C',
  metrics: [
    { label: 'Active Users', value: '30+' },
    { label: 'Paid User', value: '1' },
    { label: 'Potentially Paying Users', value: '3+' },
  ],
  bannerImage: BannerImg,
  liveLink: 'https://stande.co',
  skills: [
    'UI/UX',
    'Frontend Development',
    'Product Strategy',
    'AB Testing',
  ],
  sidebar: [
    { key: 'overview', title: 'Overview of What I Did' },
    { key: 'context', title: 'Context' },
    { key: 'problem', title: 'Problem Statement' },
    { key: 'challenges', title: 'Challenges Students Facing' },
    { key: 'where_i_started', title: 'Where Did I Start' },
    { key: 'journey_map', title: 'User Journey Map' },
    { key: 'solutions', title: 'The Initial Solutions' },
    { key: 'design_time', title: 'Design Time' },
    { key: 'build_time', title: 'Build Time' },
    { key: 'release', title: 'Release & Gathering Feedback' },
    { key: 'from_feedback', title: 'Designing from Feedback' },
    { key: 'components', title: 'Components' },
    { key: 'trackers', title: 'Components - Trackers' },
    { key: 'high_fidelity', title: 'High-Fidelity UI Screens' },
    { key: 'next_steps', title: 'Next Steps' },
  ],
  sections: [
    {
      key: 'overview',
      title: 'Overview of What I Did',
      items: [
        'Designed the landing page and developed a responsive design using ReactJS.',
        'Went through a design process where I gathered insights and used them to develop a persona, build a user journey map, wireframes, and a high-fidelity prototype for the MVP.',
        'Built the entire frontend of the application based on high-fidelity designs using ReactJS, and connected it with the backend of the application, working alongside a senior backend engineer.',
      ],
    },
    {
      key: 'context',
      title: 'Context',
      text: 'In this teaching business where I teach and work part-time, I joined a few teachers to ideate and help them design a platform they wanted to create. The goal was to address issues with cheating and help students practice exam questions for standardized UK board exams such as Cambridge IGCSE, Edexcel GCSE, etc., outside of class, while still being able to mark themselves and learn through the process.',
    },
    {
      key: 'problem',
      title: 'Problem Statement',
      text: 'Students are increasingly using AI tools to cheat on assignments, which limits their ability to learn independently. Without a structured way to self-assess, they rely heavily on teachers for feedback, slowing their learning outside of class.',
    },
    {
      key: 'challenges',
      title: 'Challenges Students Facing',
      items: [
        'Difficulty finding tools to solve past papers online',
        'Limited and inconvenient access to exam papers',
        'Reliance on solving papers physically, which leads to disorganization',
        'Lack of knowledge on how to mark their own answers effectively',
      ],
    },
    {
      key: 'where_i_started',
      title: 'Where Did I Start - DFD (Designing From Data)',
      text: 'From observing students, gathering insights from their teachers, and asking a few questions, I built an initial persona focused on the frustrations and goals revealed through those insights.',
      images: [PersonaImg],
    },
    {
      key: 'journey_map',
      title: 'User Journey Map',
      text: 'I created a User Journey Map based on a typical scenario that reflects what students in this teaching business are doing and preparing for. Using those insights, I was able to highlight opportunities and start sketching ideas for the solution.',
      images: [JourneyMapImg],
    },
    {
      key: 'solutions',
      title: 'The Initial Solutions',
      items: [
        'Easy access to past papers for their subjects',
        'A simple interface to solve past paper questions',
        'Instant feedback for each question, using the official marking scheme',
        'The ability to track their progress with insights on:',
        'Topics to focus on',
        'Overall subject performance',
        'Current grade level',
        'Guidance to help them improve',
      ],
    },
    {
      key: 'design_time',
      title: 'Design Time',
      subsections: [
        {
          title: 'Wireframes',
          text: 'Of course, I started with wireframes. Below are the main wireframes that demonstrate the most important places and touchpoints of the application.',
          images: [Wireframe1],
        },
        {
          title: 'Wireframes - Student & Tracking',
          text: 'For the second couple wireframes, the goal is to allow students to easily view what paper they are solving in the header. They should be able to answer questions in the provided answer space, using tools from the toolbar on the left, which stays visible as they scroll. Feedback based on the student\'s answers (correct, wrong, or partially correct) will be displayed in cards underneath the questions. The wireframe on the right shows that, after solving some questions, the student will instantly see updates on different tiles that track their progress.',
          images: [Wireframe2],
        },
      ],
    },
    {
      key: 'components',
      title: 'Components',
      images: [ComponentsImg],
    },
    {
      key: 'trackers',
      title: 'Components - Trackers',
      images: [TrackerImg],
    },
    {
      key: 'high_fidelity',
      title: 'High-Fidelity UI Screens',
      images: [
        LoginScreen,
        MainDashboard,
        SubjectChoice,
        PastPapers,
        MySubjects,
        MyPaper,
        SolvePaper,
        FeedbackReports,
      ],
    },
    
    {
      key: 'release',
      title: 'Release & Gathering Feedback',
      text: 'From the release of the MVP some areas went through changes in response to feedback. I will be sharing them soon. ',
    },
    
  ],
};

export default stande;



