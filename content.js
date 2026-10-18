/* EDIT YOUR CONTENT HERE. Text is plain text; keep quotes and commas intact.
 * HEADSHOT: put headshot.jpg in assets/images/ and change heroImage below
 * to "assets/images/headshot.jpg"; update heroImageAlt to "Drew Strayton".
 * COLORS / LAYOUT: styles.css. New sections: script.js.
 * PORTFOLIO PROJECTS below remain examples; replace them with your projects.
 * Duplicate a project object to add another, using a unique id.
 * Gallery example: [{"src":"assets/images/test.jpg","alt":"Prototype","caption":"First iteration"}]
 * Resume content is based on the supplied resume; PDF is included unchanged.
 */
const portfolio = {
  "name": "Drew Strayton",
  "initials": "DS",
  "title": "Mechanical Engineer",
  "headline": "Drew Strayton",
  "intro": "I turn ideas into practical designs through CAD, hands-on prototyping, and testing. My experience spans custom fabrication, manufacturing automation, and product development.",
  "about": "I’m Drew Strayton, a mechanical engineer with a background in both mechanical and electrical engineering. I graduated from Wake Forest University in 2024 and am pursuing a Master of Engineering in Design and Technology Innovation at Duke University, with expected completion in December 2027.",
  "approach": "My experience at Parker Hannifin and Dimensional Innovations has taken me from CAD models and rapid prototypes to automated equipment and fabrication-ready drawing packages. I enjoy connecting design with how things are made, using testing and iteration to improve performance, usability, and manufacturability. I’ve also taught manual and CNC machining at the make717 community makerspace.",
  "heroImage": "assets/images/headshot-placeholder.svg",
  "heroImageAlt": "Headshot placeholder for Drew Strayton",
  "portrait": "",
  "portraitAlt": "Drew Strayton",
  "email": "dstray44@gmail.com",
  "linkedin": "https://www.linkedin.com/in/drew-strayton/",
  "github": "",
  "skills": [
    "SolidWorks (CSWP)",
    "Creo",
    "Autodesk Inventor",
    "Fusion 360",
    "3D printing & prototyping",
    "Electrical drawings & cabinet wiring",
    "PLC programming",
    "SAP",
    "Power BI",
    "Microsoft Office"
  ],
  "projects": [
    {
      "id": "design-build",
      "title": "Design / build project",
      "category": "Mechanical design",
      "year": "20XX",
      "summary": "Introduce your project: what you built, for whom, and why it matters.",
      "image": "",
      "imageAlt": "Describe your project photograph",
      "tools": [
        "CAD",
        "Fabrication",
        "Testing"
      ],
      "role": "Your specific contribution",
      "timeline": "Project duration",
      "challenge": "Describe the problem, the design requirements, and the constraints you worked within.",
      "process": "Explain the concepts you explored, how you selected a direction, and what changed after prototyping.",
      "outcome": "Describe what happened. Include measured results when available and what you would improve next.",
      "gallery": [],
      "link": "",
      "linkLabel": "View project files"
    },
    {
      "id": "prototype",
      "title": "Prototype & test",
      "category": "Product development",
      "year": "20XX",
      "summary": "Show how you moved from an initial concept to a prototype, then used testing to improve it.",
      "image": "",
      "imageAlt": "Your prototype",
      "tools": [
        "Prototyping",
        "Analysis"
      ],
      "role": "Your specific contribution",
      "timeline": "Project duration",
      "challenge": "What did this prototype need to demonstrate?",
      "process": "Walk through the most important design decisions and test methods.",
      "outcome": "Summarize the results and the lessons that informed the next version.",
      "gallery": [],
      "link": "",
      "linkLabel": "View project files"
    },
    {
      "id": "electronics",
      "title": "Electronics exploration",
      "category": "Electronics",
      "year": "20XX",
      "summary": "Use this space for a microcontroller, sensor, circuit, or other engineering project.",
      "image": "",
      "imageAlt": "Your electronics project",
      "tools": [
        "Microcontrollers",
        "Circuit design"
      ],
      "role": "Your specific contribution",
      "timeline": "Project duration",
      "challenge": "Explain the function you wanted to achieve and any power, cost, or size constraints.",
      "process": "Describe your circuit, code, prototyping, and troubleshooting process.",
      "outcome": "Explain what works, what you measured, and what you learned.",
      "gallery": [],
      "link": "",
      "linkLabel": "View code"
    }
  ],
  "resume": {
    "pdf": "assets/documents/Strayton_Resume.pdf",
    "summary": "Mechanical engineer and Engineer in Training (E.I.T.) with experience in design engineering, manufacturing, automation, and rapid prototyping. Pursuing a Master of Engineering in Design and Technology Innovation at Duke University.",
    "credentials": [
      "Engineer in Training (E.I.T.)",
      "Certified SolidWorks Professional (CSWP)"
    ],
    "experience": [
      {
        "title": "Design Engineering Intern",
        "organization": "Dimensional Innovations · Overland Park, KS",
        "dates": "June 2026 – August 2026",
        "bullets": [
          "Translated design concepts into manufacturable SolidWorks assemblies and bills of materials while sourcing components.",
          "Developed fabrication, assembly, and electrical drawing packages for custom elements.",
          "Incorporated design-review feedback and validation testing to improve solutions."
        ]
      },
      {
        "title": "Manufacturing Engineer",
        "organization": "Parker Hannifin Aerospace Filtration · Lancaster, PA",
        "dates": "June 2025 – June 2026",
        "bullets": [
          "Supported new product startups through 3D design, physical prototyping, and manufacturing process development.",
          "Troubleshot manufacturing issues to improve process performance, quality, and efficiency.",
          "Collaborated with automation vendors and integrators to design, test, and integrate new production equipment."
        ]
      },
      {
        "title": "Manufacturing Engineering Leadership Development Associate",
        "organization": "Parker Hannifin Innovation Center · Columbia, TN",
        "dates": "June 2024 – June 2025",
        "bullets": [
          "Used Inventor and 3D printing for rapid prototyping to solve manufacturing problems.",
          "Designed and implemented automated manufacturing machinery to reduce costs and increase throughput.",
          "Led research into the feasibility of 3D printing for mass production and presented findings to company leadership."
        ]
      },
      {
        "title": "Lean Manufacturing Engineering Intern",
        "organization": "Parker Hannifin Aerospace Filtration · Greensboro, NC",
        "dates": "May 2023 – December 2023",
        "bullets": [
          "Modeled components and drafted drawings for more than 20 filtration products and fixtures in SolidWorks and Inventor.",
          "Tested and validated tight dimensional tolerances on aerospace components.",
          "Led multiple new product introductions, assembling full shop packets and releasing them in the local ERP system."
        ]
      }
    ],
    "education": [
      {
        "title": "Master of Engineering, Design and Technology Innovation",
        "organization": "Duke University · Durham, NC",
        "dates": "Expected December 2027",
        "bullets": []
      },
      {
        "title": "Bachelor of Science, Engineering",
        "organization": "Wake Forest University · Winston-Salem, NC",
        "dates": "May 2024",
        "bullets": [
          "Mechanical and electrical engineering concentrations; minor in mathematics.",
          "GPA: 3.87"
        ]
      }
    ],
    "projects": [
      {
        "title": "Dispense and Weld Machine",
        "organization": "Engineering project",
        "dates": "February 2025 – September 2025",
        "bullets": [
          "Developed an automated system integrating dual welds and adhesive dispensing in one machine.",
          "Applied human-centered design principles for accessibility, ergonomics, and employee safety.",
          "Delivered $250K in annual labor savings while improving throughput, weld consistency, and process efficiency."
        ]
      },
      {
        "title": "Polyurethane Quad-Sealing Production Mold",
        "organization": "Engineering project",
        "dates": "August 2024 – December 2024",
        "bullets": [
          "Developed a mold to seal a 2 ft × 2 ft × 4 in filter on four sides in polyurethane in a single dispense shot.",
          "Used resin 3D printing to achieve tight tolerances around the filter geometry.",
          "Developed full-size aluminum tooling through iterative 3D-printed prototyping and validation."
        ]
      },
      {
        "title": "Disc Golf Simulator",
        "organization": "Engineering project",
        "dates": "August 2023 – May 2024",
        "bullets": [
          "Created a disc module with onboard sensors to track throw data and send it to a local computer.",
          "Developed software to display a throw projection in a gamified environment.",
          "Participated in monthly stakeholder design reviews and demonstrated the simulator at a project showcase."
        ]
      }
    ],
    "leadership": [
      {
        "title": "Machine Shop Instructor",
        "organization": "make717 – Lancaster Community Makerspace · Lancaster, PA",
        "dates": "August 2025 – June 2026",
        "bullets": [
          "Organized and led training workshops on manual and CNC machining.",
          "Handled equipment maintenance, validation, and standard operating procedure documentation."
        ]
      }
    ]
  },
  "subtitle": "Mechanical Engineer"
};
