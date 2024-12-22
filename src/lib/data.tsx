import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/projects/BiteStation.png',
    title: 'Bite Station',
    description:
      'Food Ordering Application',
    technologies: ['React.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Express.js', 'Node JS'],
    links: {
      preview: 'https://bite-station.onrender.com',
      github: 'https://github.com/DileepUpare/Bite-Station',
      githubApi: 'https://api.github.com/repos/DileepUpare/Bite-Station',
    },
  },
  {
    image: '/projects/IEEE.png',
    title: 'Quantum Inspired Firefly Algorithm',
    description:
      'An Enhanced Approach to Traffic Signal Optimization.',
    technologies: ['Quantum Algorithms', 'Traffic Optimization', 'Machine Learning', 'Meta-Heuristics'],
    links: {
      preview: 'https://doi.org/10.1109/ICCCNT61001.2024.10726156',
      github: 'null',
      githubApi: 'https://api.github.com/repos/DileepUpare',
    },
  },
  {
    image: '/projects/IEEE.png',
    title: 'Comparative Analysis of U-Net, PSPNet, and FPNet (Not Published Yet)',
    description:
      'Deep Learning Techniques for Image Segmentation.',
    technologies: ['Deep Learning', 'U-Net', 'PSPNet', 'FPNet'],
    links: {
      preview: 'https://jmp.sh/s/WbPc1doAcxxOADoCcHbU',
      github: 'null',
      githubApi: 'https://api.github.com/repos/DileepUpare',
    },
  },
  
] as const;

export const experiencesData = [
  {
    title: 'Internship at Pravinya Infotech',
    location: 'Hubli, Karnataka, IN',
    description:
      'During this internship, I focused on concepts of machine learning and research methodologies and published two Research Papers. ',
    date: '2024',
  },
  {
    title: 'Internship',
    location: 'KLE Technological University, Hubli, Karnataka, IN',
    description:
      'Interviewed for a full stack developer role.',
    date: '2024',
  },
  
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
