export const jobCategories = [
    'Architectural Work',
    'Electrical',
    'Plumbing',
    'Painting',
    'Carpentry',
  ];
  
  export const jobFollowUps: Record<string, { question: string; options: string[] }> = {
    'Architectural Work': {
      question: 'What type of service do you need?',
      options: ['Basic Outline', 'Full Regulation Plans', 'Structural Calculation'],
    },
    Electrical: {
      question: 'What kind of electrical work?',
      options: ['Wiring', 'Fixture Installation', 'Full Rewiring'],
    },
    Plumbing: {
      question: 'What type of plumbing work?',
      options: ['Leak Fixing', 'Bathroom Fitting', 'Full System Installation'],
    },
    Painting: {
      question: 'What do you need painted?',
      options: ['Interior Walls', 'Exterior Walls', 'Both'],
    },
    Carpentry: {
      question: 'What type of carpentry?',
      options: ['Furniture', 'Cabinetry', 'Flooring'],
    },
  };
  