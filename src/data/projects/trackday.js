// src/data/projects/trackday.js
import BannerImage from '../../Images/trackday-project-images/trackday-banner-image.svg';
import RegularMemberScreen from '../../Images/trackday-project-images/Regular-memebr-ui-screen.svg';
import ClubAdminScreen from '../../Images/trackday-project-images/club-admin-landing-page-final.svg';
import PersonaBasicEnthusiast from '../../Images/trackday-project-images/Persona(Refined)-Basic-Motorsport-Enthusiast.svg';
import PersonaClubOwner from '../../Images/trackday-project-images/Persona(Refined)-Club Owner.svg';
import JourneyEnthusiast1 from '../../Images/trackday-project-images/Customer-Journey-Map-Regular-Motorsport-Enthusiast-User.png';
import JourneyEnthusiast2 from '../../Images/trackday-project-images/Customer-Journey-Map-Regular-Motorsport-Enthusiast-User-1.png';
import JourneyClubOwner from '../../Images/trackday-project-images/Customer-Journey-Map-Club-Owner.png';
import UsabilityReport from '../../Images/trackday-project-images/Red Team(Usability Testing Report).pdf';


const trackday = {
  id: 'trackday',
  title: 'Trackday',
  themeColor: '#FF0080',
  bannerImage: BannerImage,
  liveLink: 'https://trackday.com.au',
  skills: [
    'UI/UX',
    'Frontend Development',
    'Product Strategy',
    'Customer Interviews',
    'Usability Testing',
    'Backend Development',
    'Team Leader',
    'Lead Developer',
    'Customer Journey Mapping',
    'Affinity Mapping',
    'Personas',
    'Wireframes',
  ],
  sidebar: [
    { key: 'overview', title: 'Overview of What I Did' },
    { key: 'context', title: 'Context.' },
    { key: 'problem', title: 'Problem Statement' },
    { key: 'challenges', title: 'Challenges Trackday Facing' },
    { key: 'where_i_started', title: 'Where Did We Start - DFD (Designing From Data) I call it that haha' },
    { key: 'journey_map', title: 'Customer Journey Map & Personas' },
    { key: 'design_time', title: 'Design Time' },
    { key: 'high_fidelity', title: 'High-Fidelity UI Screens' },
  ],
  sections: [
    {
      key: 'overview',
      title: 'Overview of What I Did',
      items: [
        'Led a team of 6 (2 developers and 3 designers) to conduct usability testing for the Trackday MVP.',
        'Crafted high-value customer interview questions for team members to use in interviews with club owners, then led the entire analysis process using insights to identify key club owner and membership personas.',
        'Led the entire process of customer journey mapping for motorsport fans.',
        'Trackday club owners and regular members, using the insights to refine personas for each user.',
      ],
    },
    {
      key: 'context',
      title: 'Context.',
      text:
        'I joined Trackday in early January and was appointed team leader for my team during the first three months. A month ago, I transitioned into the role of lead developer to better apply my technical skills where they’re most needed. I continue to contribute to design work and actively influence the direction of the designers on my team.',
    },
    {
      key: 'problem',
      title: 'Problem Statement',
      text:
        'Trackday released their MVP in July last year and quickly realized there was still much to figure out and build as their user base grew. In particular, key features were missing in the club admin area—features that club owners needed to effectively manage their motorsport clubs.',
    },
    {
      key: 'challenges',
      title: 'Challenges Trackday Facing',
      items: [
        'Club owners are currently unable to easily create events for their members or manage event payments within the application.',
        'Club owners struggle to manage memberships, particularly the financial aspects, within the application.',
        'More efforts are needed to encourage regular motorsport enthusiasts to return to the application.',
      ],
    },
    {
      key: 'where_i_started',
      title: 'Where Did We Start - DFD (Designing From Data) I call it that haha',
      text:
        'We initially conducted comprehensive usability testing on both the web and mobile versions of the application. This allowed us to prioritize critical fixes on the tech and UI sides while gaining a deeper understanding of all the features within the application.',
      subsections: [
        {
          title: 'Usability Testing',
          pdf: UsabilityReport,
        },
      ],
    },
    {
      key: 'journey_map',
      title: 'Customer Journey Map & Personas',
      subsections: [
        {
          title: 'Customer Journey Map - Regular Motorsport Enthusiast User',
          text:
            "We did extensive work in the engagement section of the CJM. I've shared some important sections below, but please feel free to access the actual board for a higher resolution of the CJM.\n\nhttps://miro.com/app/board/uXjVfYQ1eio=/?share_link_id=955955547163",
          images: [JourneyEnthusiast1],
        },
        {
           
            text:
              "The interactions we mapped out for the regular member profile raised questions about the role of the typical Trackday user within the application, as we identified a disconnect. The pain points we outlined highlight the challenges regular users might face, and they could potentially become the primary users of the application. Trackday is an app for motorsport enthusiasts, but within that, there are different levels of engagement: some enthusiasts are unaware of track days or other motorsport activities because they perceive motorsport as expensive, complex, or inaccessible, often sticking to go-karting or eventually losing interest; some are familiar with track days but are unable to participate due to cost, time, or other barriers; and others are amateur racers who already attend track days regularly. ",
            images: [JourneyEnthusiast2],
          },
  
        {
          title: 'Persona (Refined) - Basic Motorsport Enthusiast',
          text:
            'The persona was refined to focus on the lowest level of motorsport enthusiasts (the most basic or even unexpected enthusiasts), ensuring they felt a sense of belonging in the app with reasons to keep returning. This could unlock huge potential.',
          images: [PersonaBasicEnthusiast],
        },
        {
          title: 'Customer Journey Map - Club Owner',
          text: "We did extensive work in the engagement section of the CJM. I've shared some important sections below, but please feel free to access the actual board for a higher resolution of the CJM.\n\nhttps://miro.com/app/board/uXjVfYQ1eio=/?share_link_id=955955547163", 

          images: [JourneyClubOwner],
        },
        {
          title: 'Persona (Refined) - Club Owner',
          images: [PersonaClubOwner],
        },
      ],
    },
    {
      key: 'design_time',
      title: 'Design Time',
      subsections: [
        {
          title: 'High-Fidelity UI Screens',
          images: [RegularMemberScreen, ClubAdminScreen],
        },
      ],
    },
  ],
};

export default trackday;
