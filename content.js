/* EDIT THIS FILE FIRST. Text, photos, projects and resume live here.
   Copy an entire project object to add a new project. */
const portfolio = {
  name: 'Your Name', initials: 'YN',
  title: 'Engineering portfolio',
  headline: 'Ideas into prototypes.\nPrototypes into progress.',
  intro: 'I’m an engineer who enjoys turning open-ended problems into thoughtful, practical designs. Explore the process behind the things I build.',
  about: 'Introduce yourself here: your engineering background, what you enjoy building, and the kinds of problems you want to solve. Keep it personal and specific.',
  approach: 'I like to sketch early, build to learn, and use testing to guide the next iteration. This portfolio documents both the finished work and the decisions that shaped it.',
  heroImage: '', // 'assets/images/hero.jpg'. Empty shows the blueprint graphic.
  heroImageAlt: 'Describe your featured engineering project',
  portrait: '', // 'assets/images/me.jpg'. Empty shows no portrait.
  portraitAlt: 'Portrait of Your Name',
  email: '', // 'you@example.com'. Empty hides the contact link.
  linkedin: '', // Full https:// URL; empty hides the link.
  github: '',
  skills: ['CAD & modeling', 'Prototyping', 'Design iteration', 'Testing & analysis'],
  // EXAMPLE PROJECTS: replace these with your real work before publishing.
  projects: [
    { id: 'design-build', title: 'Design / build project', category: 'Mechanical design', year: '20XX',
      summary: 'Introduce your project: what you built, for whom, and why it matters.',
      image: '', // 'assets/images/project-01.jpg'. Empty shows a blueprint graphic.
      imageAlt: 'Describe your project photograph', tools: ['CAD', 'Fabrication', 'Testing'],
      role: 'Your specific contribution', timeline: 'Project duration',
      challenge: 'Describe the problem, the design requirements, and the constraints you worked within.',
      process: 'Explain the concepts you explored, how you selected a direction, and what changed after prototyping.',
      outcome: 'Describe what happened. Include measured results when available and what you would improve next.',
      gallery: [], // [{src: 'assets/images/prototype.jpg', alt: 'First prototype', caption: 'Iteration one: testing the fit.'}]
      link: '', linkLabel: 'View project files'
    },
    { id: 'prototype', title: 'Prototype & test', category: 'Product development', year: '20XX',
      summary: 'Show how you moved from an initial concept to a prototype, then used testing to improve it.',
      image: '', imageAlt: 'Your prototype', tools: ['Prototyping', 'Analysis'],
      role: 'Your specific contribution', timeline: 'Project duration',
      challenge: 'What did this prototype need to demonstrate?',
      process: 'Walk through the most important design decisions and test methods.',
      outcome: 'Summarize the results and the lessons that informed the next version.',
      gallery: [], link: '', linkLabel: 'View project files'
    },
    { id: 'electronics', title: 'Electronics exploration', category: 'Electronics', year: '20XX',
      summary: 'Use this space for a microcontroller, sensor, circuit, or other engineering project.',
      image: '', imageAlt: 'Your electronics project', tools: ['Microcontrollers', 'Circuit design'],
      role: 'Your specific contribution', timeline: 'Project duration',
      challenge: 'Explain the function you wanted to achieve and any power, cost, or size constraints.',
      process: 'Describe your circuit, code, prototyping, and troubleshooting process.',
      outcome: 'Explain what works, what you measured, and what you learned.',
      gallery: [], link: '', linkLabel: 'View code'
    }
  ],
  resume: {
    pdf: '', // Put your PDF in assets/documents/, then use 'assets/documents/resume.pdf'.
    summary: 'Replace this with a brief professional summary focused on your engineering interests and experience.',
    experience: [{title: 'Position / role', organization: 'Company or organization', dates: 'Dates', bullets: ['Describe your contribution and its impact.', 'Include a concrete result or responsibility.']}],
    education: [{title: 'Degree / qualification', organization: 'Institution', dates: 'Graduation year', bullets: ['Relevant focus, coursework, or honors.']}]
  }
};
