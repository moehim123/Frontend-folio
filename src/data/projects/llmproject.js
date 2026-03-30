import BannerImage from '../../Images/llm-project-images/banner-image.svg';

import Wireframe1 from '../../Images/llm-project-images/wireframe-1.png';
import Wireframe2 from '../../Images/llm-project-images/wireframe-2.png';
import Wireframe3 from '../../Images/llm-project-images/wireframe-3.png';

import Prototype1 from '../../Images/llm-project-images/prototype-1.png';
import Prototype2 from '../../Images/llm-project-images/prototype-2.png';
import Prototype3 from '../../Images/llm-project-images/prototype-3.png';

const llmproject = {
  id: 'llmproject',
  title: 'Local LLM Experimentation Platform',
  projectTitle: 'Local LLM Experimentation Platform',
  themeColor: '#2D3748',
  bannerImage: BannerImage,
  projectImage: BannerImage,
  liveLink: '',
  projectLink: '',
  githubLink: '',
  FigmaLink: '',
  projectDescription:
    'Designed and built a local AI experimentation workspace where users can run prompts, compare outputs side by side, and annotate responses with scores, tags, and notes.',
  shortDescription:
    'A local AI experimentation workspace for testing prompts, comparing model outputs, and annotating runs.',
  skills: [
    'UX/UI',
    'Frontend Development',
    'Backend Integration',
    'React',
    'Docker',
    'Ollama',
    'Product Design',
  ],
  sidebar: [
    { key: 'overview', title: 'Overview of What I Did' },
    { key: 'architecture', title: 'Architecture' },
    { key: 'design_decisions', title: 'Design Decisions' },
    { key: 'design_process', title: 'Design Process' },
    { key: 'observations', title: 'Observations & Surprises' },
    { key: 'unfinished_work', title: 'Unfinished Work' },
  ],
  sections: [
    {
      key: 'overview',
      title: 'Overview of What I Did',
      items: [
        'Designed and built a local AI experimentation workspace for testing prompts and reviewing model responses.',
        'Created side-by-side comparison flows for evaluating model outputs.',
        'Added run-level annotations including notes, score, and weighted tags.',
        'Integrated a React frontend with a local backend route and Ollama running in Docker.',
      ],
    },
    {
      key: 'architecture',
      title: 'Architecture',
      text:
        'The system is built around a React UI, an API helper layer, a local backend route, Ollama inside Docker, and localStorage persistence for fast prototyping.',
    },
    {
      key: 'design_decisions',
      title: 'Design Decisions',
      subsections: [
        {
          title: 'Experiment-Centric Data Model',
          text:
            'The application is structured around experiments, with runs living inside an experiment rather than existing as isolated records. This makes outputs, parameters, and evaluations easier to understand in context.',
        },
        {
          title: 'Quantifiable Tagging Instead of Binary Labels',
          text:
            'Tags were designed to carry weight instead of behaving like simple on or off labels. Repeated interactions increase a tag’s strength and allow more nuanced evaluation of model behaviour.',
        },
        {
          title: 'Run-Level Annotation Layer',
          text:
            'Notes and tags are attached directly to runs instead of experiments. This keeps interpretation coupled to the exact model response that produced it.',
        },
        {
          title: 'Side-by-Side Comparison Layout',
          text:
            'Comparison Mode was designed for quick scanning and fast pattern recognition rather than a dense analytical layout.',
        },
      ],
    },
    {
      key: 'design_process',
      title: 'Design Process',
      subsections: [
        {
          title: 'Wireframes',
          text:
            'I first explored the structure and interaction flow using wireframes to define the layout for Run Mode, comparison views, and experiment organization.',
          images: [Wireframe1, Wireframe2, Wireframe3],
        },
        {
          title: 'Prototype Screens',
          text:
            'After validating the core layout direction, I translated the main flows into high-fidelity prototype screens to refine hierarchy, spacing, and interaction clarity.',
          images: [Prototype1, Prototype2, Prototype3],
        },
      ],
    },
   
  ],
};

export default llmproject;