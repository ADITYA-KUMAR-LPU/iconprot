export const portfolioData = {
  personal: {
    name: "Aditya Kumar",
    firstName: "ADITYA",
    lastName: "KUMAR",
    title: "B.Tech CSE Student | Aspiring Data Scientist",
    tagline: "Turning Curiosity into Code and Data into Meaningful Solutions through Python, Data Analytics and Machine Learning.",
    hashtags: ["#Learner", "#Coder", "#Problem-Solver", "#Builder"],
    university: "Lovely Professional University",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "Aug 2024 – Present",
    location: "Punjab, India",
    email: "adityakumar.cse.lpu@gmail.com",
    github: "https://github.com/ADITYA-KUMAR-LPU",
    linkedin: "https://www.linkedin.com/in/aditya-kumar052",
    leetcode: "https://leetcode.com",
    profileImage: "/profile.jpg",
    resumePdf: "/resume.pdf",
    quote: "Curiosity drives me to learn. Code helps me build. Data helps me understand.",
    bio: [
      "I am an undergraduate Computer Science and Engineering student at Lovely Professional University with a strong focus on data science, machine learning, systems programming, and algorithmic problem solving.",
      "My passion lies in bridging the gap between raw data and actionable real-world impact. Whether modeling healthcare transit networks using Dijkstra's algorithm, analyzing global pandemic time-series datasets, or optimizing OS page replacement routines, I build with precision and purpose.",
      "I actively practice Data Structures and Algorithms with 100+ problems solved on LeetCode, combining strong computational foundations with modern tools in Python, data analysis, and software development."
    ]
  },

  aboutCards: [
    {
      title: "CSE Undergrad",
      subtitle: "Lovely Professional University",
      description: "Pursuing B.Tech Computer Science & Engineering with coursework spanning DSA, DBMS, OS, AI/ML, and Cloud Systems.",
      icon: "GraduationCap",
      accent: "electric"
    },
    {
      title: "Aspiring Data Scientist",
      subtitle: "Analytics & Machine Learning",
      description: "Proficient in Python, Pandas, NumPy, Scikit-learn, and visual analytics tools like Power BI and Matplotlib.",
      icon: "BarChart3",
      accent: "cyan"
    },
    {
      title: "Systems & Python Dev",
      subtitle: "C++ / Python / Java",
      description: "Experience engineering low-level memory simulators, IoT sensor systems, and Python-powered data pipelines.",
      icon: "Code2",
      accent: "violet"
    },
    {
      title: "Problem Solver",
      subtitle: "100+ LeetCode Solved",
      description: "Dedicated to mastering algorithmic patterns, graph traversals, dynamic programming, and efficient space-time complexity.",
      icon: "Binary",
      accent: "amber"
    }
  ],

  dataPipeline: [
    {
      step: "01",
      title: "DATA",
      subtitle: "Acquisition & Ingestion",
      description: "Gathering structured and semi-structured datasets from APIs, CSVs, SQL databases, and web sources.",
      tools: ["SQL", "Pandas", "APIs", "Web Scraping"],
      icon: "Database"
    },
    {
      step: "02",
      title: "CLEAN",
      subtitle: "Wrangling & Preprocessing",
      description: "Handling missing values, outlier detection, data normalization, encoding categorical variables, and schema alignment.",
      tools: ["NumPy", "Pandas", "Regex", "Imputation"],
      icon: "Sparkles"
    },
    {
      step: "03",
      title: "EXPLORE",
      subtitle: "Exploratory Data Analysis",
      description: "Uncovering distributions, correlation heatmaps, statistical trends, and hypothesis validation across features.",
      tools: ["Statistical Tests", "Histograms", "EDA", "Profiling"],
      icon: "Search"
    },
    {
      step: "04",
      title: "VISUALIZE",
      subtitle: "Visual Storytelling",
      description: "Crafting intuitive visual dashboards and interactive graphs that convey clear metrics to stakeholders.",
      tools: ["Matplotlib", "Seaborn", "Power BI", "Excel"],
      icon: "LineChart"
    },
    {
      step: "05",
      title: "MODEL",
      subtitle: "Machine Learning & AI",
      description: "Training predictive models, tuning hyperparameters, validating accuracy, and preventing data leakage.",
      tools: ["Scikit-learn", "TensorFlow", "PyTorch", "NLP"],
      icon: "Brain"
    },
    {
      step: "06",
      title: "INSIGHT",
      subtitle: "Decision & Impact",
      description: "Translating algorithmic outputs into actionable recommendations, optimization protocols, and product value.",
      tools: ["Reports", "Dashboards", "Metrics", "Solutions"],
      icon: "CheckCircle2"
    }
  ],

  skills: {
    programming: [
      { name: "Python", level: "Proficient", icon: "Code", highlight: true },
      { name: "C++", level: "Advanced", icon: "Code", highlight: true },
      { name: "C", level: "Proficient", icon: "Code" },
      { name: "Java", level: "Intermediate", icon: "Code" }
    ],
    dataScience: [
      { name: "NumPy", category: "Numerical Computing", highlight: true },
      { name: "Pandas", category: "Data Manipulation", highlight: true },
      { name: "Scikit-learn", category: "Machine Learning", highlight: true },
      { name: "TensorFlow", category: "Deep Learning" },
      { name: "PyTorch", category: "Deep Learning" }
    ],
    dataViz: [
      { name: "Matplotlib", category: "Python Plotting", highlight: true },
      { name: "Seaborn", category: "Statistical Viz", highlight: true },
      { name: "Power BI", category: "BI Dashboards", highlight: true },
      { name: "Excel", category: "Spreadsheet Analytics" }
    ],
    database: [
      { name: "DBMS", category: "Relational Concepts", highlight: true },
      { name: "MySQL", category: "RDBMS Queries", highlight: true },
      { name: "SQLite", category: "Lightweight Storage" }
    ],
    webAndSystems: [
      { name: "HTML", category: "Markup" },
      { name: "CSS", category: "Styling & Responsive" },
      { name: "JavaScript", category: "Frontend Scripting" },
      { name: "Operating Systems", category: "OS Architecture" },
      { name: "Ubuntu / Linux", category: "CLI Environment" }
    ],
    tools: [
      { name: "Git", category: "Version Control", highlight: true },
      { name: "GitHub", category: "Code Collaboration", highlight: true },
      { name: "Docker", category: "Containers" },
      { name: "VS Code", category: "Development IDE" }
    ],
    dsa: [
      "Arrays & Strings",
      "Linked Lists",
      "Stacks & Queues",
      "Trees & BST",
      "Graph Algorithms",
      "Dijkstra's Shortest Path",
      "Searching & Sorting",
      "Dynamic Programming",
      "Recursion & Backtracking"
    ]
  },

  projects: [
    {
      id: "medai-route",
      title: "MedAI Route",
      category: "Algorithms & Systems",
      filterCategory: "algorithms",
      badge: "Healthcare Routing",
      tagline: "Shortest-path healthcare transit optimization via Dijkstra's graph algorithm",
      description: "A healthcare route optimization system that applies Dijkstra's shortest path algorithm to calculate the quickest and most efficient transit paths for patients to medical facilities under congestion constraints.",
      problem: "Emergency healthcare transit delays cost lives when standard navigation systems fail to weigh dynamic hospital capacities, road congestion delays, and priority emergency routing.",
      solution: "Engineered a weighted graph routing engine using priority-queue Dijkstra implementation that dynamically factors in traffic weights and hospital facility statuses to compute deterministic shortest transit paths.",
      approach: "Modeled clinics and hospitals as vertices and transit corridors as weighted directed edges. Built an adjacency-list graph structure with min-heap priority queue for optimal O((V + E) log V) time performance.",
      technologies: ["Java", "C++", "DSA", "Graph Algorithms", "Dijkstra"],
      githubUrl: "https://github.com/ADITYA-KUMAR-LPU",
      liveUrl: null,
      status: "In Development",
      features: [
        "Weighted graph representation of regional medical facilities and intersections",
        "Optimized priority queue implementation of Dijkstra's algorithm for sub-second calculation",
        "Dynamic edge weight recalculation based on simulated transit delays and traffic",
        "Deterministic shortest-route output with turn-by-turn distance and latency metrics"
      ],
      learnings: "Mastered practical graph representations, priority queue memory optimizations, and balancing algorithmic time-complexity with real-world dynamic network updates."
    },
    {
      id: "covid19-dashboard",
      title: "COVID-19 Dashboard",
      category: "Data Science & AI",
      filterCategory: "datascience",
      badge: "Data Visualization",
      tagline: "Exploratory time-series and demographic analysis of global pandemic trends",
      description: "An interactive exploratory data analysis and visualization dashboard analyzing global COVID-19 infection trends, recovery curves, and demographic impacts.",
      problem: "Raw pandemic datasets are fragmented, contain missing records, and are difficult for non-technical analysts to draw actionable epidemiological comparisons from.",
      solution: "Created an end-to-end data pipeline that cleans and imputes missing health records, computes moving averages, and visualizes epidemiological curves using Seaborn, Matplotlib, and Power BI dashboards.",
      approach: "Ingested multi-national health datasets into Pandas, conducted automated data cleaning, engineered 7-day rolling metrics, and produced correlation heatmaps comparing mortality rates against demographic indicators.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
      githubUrl: "https://github.com/ADITYA-KUMAR-LPU",
      liveUrl: null,
      status: "Completed",
      features: [
        "Time-series infection and recovery trend analysis with rolling averages",
        "Data cleaning and missing-value imputation pipeline across messy multi-source records",
        "Correlation heatmaps and demographic distribution plots identifying high-risk trends",
        "Interactive Power BI visual dashboards for comparative multi-region reporting"
      ],
      learnings: "Deepened expertise in data cleansing pipelines, exploratory data analysis workflows, and communicating statistical findings through clean visual storytelling."
    },
    {
      id: "virtual-memory-opt",
      title: "Virtual Memory Optimization",
      category: "Algorithms & Systems",
      filterCategory: "algorithms",
      badge: "Operating Systems",
      tagline: "Systems-level simulation and benchmarking of OS page replacement algorithms",
      description: "A systems programming project focused on understanding, modeling, and improving virtual memory management mechanisms and page-replacement strategies in OS architectures.",
      problem: "High memory fragmentation and suboptimal page replacement algorithms lead to excessive page faults, CPU thrashing, and degraded throughput in multi-process systems.",
      solution: "Developed a comprehensive virtual memory simulator comparing LRU, FIFO, and Optimal page replacement policies under synthetic multi-page workload distributions.",
      approach: "Implemented virtual-to-physical address translation tables, page-frame arrays, and page-fault counters in C/C++. Benchmarked hit/miss ratios across varied working set sizes and frame allocations.",
      technologies: ["C", "C++", "Operating Systems", "Memory Management", "Algorithms"],
      githubUrl: "https://github.com/ADITYA-KUMAR-LPU",
      liveUrl: null,
      status: "Completed",
      features: [
        "Simulation of virtual-to-physical address translation and page-table lookups",
        "Comparative benchmark of LRU vs FIFO page replacement policies under heavy workloads",
        "Page fault frequency (PFF) monitoring and thrashing detection simulation",
        "Memory fragmentation and allocation efficiency analysis with empirical reports"
      ],
      learnings: "Gained low-level insight into computer architecture, memory hierarchies, OS paging mechanisms, and performance profiling in C/C++."
    },
    {
      id: "arduino-sensor",
      title: "Arduino Sensor Detection",
      category: "IoT & Embedded",
      filterCategory: "embedded",
      badge: "Embedded Systems",
      tagline: "Low-latency proximity alerting and hardware-interfaced object detection",
      description: "An Arduino-based hardware and firmware solution that detects objects within calibrated operational ranges and provides instant real-time feedback.",
      problem: "Robotic obstacle avoidance and industrial automation require responsive, low-cost proximity detection without high computational overhead.",
      solution: "Designed microcontroller firmware in C/C++ that polls ultrasonic sensors with microsecond timing precision, filters sensor jitter, and triggers multi-stage visual and acoustic alerts.",
      approach: "Wrote tight loop code utilizing hardware timers, filtered analog signal noise using moving window medians, and mapped distance thresholds to piezo buzzers and LED status bars.",
      technologies: ["Arduino", "Sensors", "C/C++", "Hardware Interfacing"],
      githubUrl: "https://github.com/ADITYA-KUMAR-LPU",
      liveUrl: null,
      status: "Completed",
      features: [
        "Ultrasonic distance measurement with microsecond timing precision",
        "Filtered analog signal processing to eliminate transient false triggers and noise",
        "Real-time visual and acoustic threshold alert outputs with immediate feedback",
        "Low-power loop optimization for microcontroller battery efficiency"
      ],
      learnings: "Developed practical understanding of hardware-software interfacing, real-time input debounce/filtering, and microcontroller firmware constraints."
    },
    {
      id: "resume-ai-analyzer",
      title: "Resume AI Analyzer",
      category: "Data Science & AI",
      filterCategory: "datascience",
      badge: "NLP & Machine Learning",
      tagline: "Natural Language Processing system for ATS scoring and technical gap detection",
      description: "An AI-powered application that parses resumes against technical job descriptions, extracts competencies, and delivers actionable recommendations for ATS compatibility.",
      problem: "Job seekers struggle to understand why automated Applicant Tracking Systems (ATS) reject their resumes due to missing keywords, non-standard headings, or poor keyword density.",
      solution: "Built a Python & Streamlit application that extracts text from PDF resumes, computes TF-IDF cosine similarity against target job descriptions, and highlights missing technical competencies.",
      approach: "Implemented PDF tokenization, stop-word removal, and n-gram TF-IDF vectorization via Scikit-learn. Calculated semantic similarity scores and outputted clear, prioritized keyword improvement suggestions.",
      technologies: ["Python", "NLP", "Machine Learning", "Streamlit", "Scikit-learn"],
      githubUrl: "https://github.com/ADITYA-KUMAR-LPU",
      liveUrl: null,
      status: "In Development",
      features: [
        "Automated PDF resume text extraction, cleaning, and tokenization",
        "TF-IDF cosine similarity scoring against target job descriptions",
        "Automated missing keyword & technical skill gap detection with categorized tags",
        "Interactive Streamlit web interface with ATS compatibility score report and recommendations"
      ],
      learnings: "Deepened knowledge of Natural Language Processing pipelines, vector space models, cosine distance computation, and rapid prototyping with Streamlit."
    }
  ],

  dsaStats: {
    totalSolved: "100+",
    highlight: "100+ LeetCode Problems Solved",
    leetcodeProfile: "https://leetcode.com/u/Aditya_Kumar9065/",
    githubProfile: "https://github.com/ADITYA-KUMAR-LPU",
    topics: [
      { name: "Arrays & Strings", count: "35+", percent: 85, icon: "Brackets" },
      { name: "Linked Lists & Stacks", count: "20+", percent: 75, icon: "ListOrdered" },
      { name: "Trees & Binary Search", count: "20+", percent: 70, icon: "GitFork" },
      { name: "Graphs & Dijkstra", count: "15+", percent: 65, icon: "Network" },
      { name: "Dynamic Programming & Recursion", count: "10+", percent: 55, icon: "Cpu" }
    ],
    pipeline: [
      { step: "Array", desc: "Linear data access & two-pointer technique", icon: "Rows" },
      { step: "Tree", desc: "Hierarchical traversal & BST searches", icon: "GitPullRequest" },
      { step: "Graph", desc: "Shortest path, BFS, DFS & Dijkstra", icon: "Share2" },
      { step: "Algorithm", desc: "Optimized space-time asymptotic complexity", icon: "Zap" }
    ]
  },

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      period: "Aug 2024 – Present",
      status: "Current Undergraduate",
      description: "Focused on core computer science foundations, software engineering, systems design, and data intelligence.",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management Systems (DBMS)",
        "Artificial Intelligence & Machine Learning",
        "Data Science & Analytics",
        "Cloud Computing Foundations",
        "Big Data Systems",
        "Hadoop & MapReduce Framework"
      ]
    }
  ],

  journey: [
    {
      year: "2024",
      period: "Aug 2024 – Present",
      title: "B.Tech Computer Science & Engineering",
      organization: "Lovely Professional University",
      badge: "Academic Foundation",
      description: "Commenced undergraduate studies in CSE, establishing strong theoretical and practical grounding in algorithms, discrete mathematics, and computer systems.",
      milestones: [
        "Mastered fundamental OOP concepts and STL in C++",
        "Built core knowledge in Operating Systems, Process Management & Virtual Memory",
        "Gained hands-on experience with Relational Database Management Systems and SQL schemas"
      ]
    },
    {
      year: "2024",
      period: "Summer 2024",
      title: "DSA Summer Internship & Intensive Training",
      organization: "Technical Training Academy",
      badge: "Algorithmic Rigor",
      description: "Completed comprehensive training focused on advanced data structures, asymptotic algorithm analysis, and competitive programming.",
      milestones: [
        "Solved 100+ algorithmic problems across LeetCode and competitive coding platforms",
        "Implemented graph routing engines using Dijkstra's shortest path algorithm",
        "Strengthened time and space complexity optimization techniques"
      ]
    },
    {
      year: "2024 – 2025",
      period: "Ongoing Projects",
      title: "Data Science & Practical Systems Engineering",
      organization: "Independent & Academic Projects",
      badge: "Project Builder",
      description: "Applied computer science principles to build end-to-end software, IoT hardware interfaces, and machine learning applications.",
      milestones: [
        "Engineered the COVID-19 Analytics Dashboard with Python and Power BI",
        "Built MedAI Route graph optimization system in Java & C++",
        "Constructed the Resume AI Analyzer utilizing NLP and Scikit-learn",
        "Designed Arduino sensor detection firmware in C/C++"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-cpp",
      title: "C++ Programming Certification",
      issuer: "Authorized Technical Institution",
      date: "2024",
      badge: "Programming",
      skillsCovered: ["Object-Oriented Programming", "STL Containers", "Pointers & Memory Management", "Class Architectures"],
      credentialUrl: "#"
    },
    {
      id: "cert-dsa",
      title: "DSA Summer Internship & Certification",
      issuer: "Technical Training Academy",
      date: "2024",
      badge: "Algorithms",
      skillsCovered: ["Data Structures", "Algorithm Design", "Time & Space Complexity", "Graph Traversal"],
      credentialUrl: "#"
    },
    {
      id: "cert-dbms",
      title: "Database Management Systems Certification",
      issuer: "Academic & Technical Certification Board",
      date: "2024",
      badge: "Databases",
      skillsCovered: ["Relational Algebra", "SQL Queries", "Schema Normalization (1NF–BCNF)", "Indexing & Transactions"],
      credentialUrl: "#"
    }
  ],

  achievements: [
    {
      id: "leetcode",
      stat: "100+",
      label: "LeetCode Problems Solved",
      description: "Active problem solver focusing on Arrays, Graphs, Trees, and Dynamic Programming.",
      icon: "Code2",
      accent: "cyan"
    },
    {
      id: "cpp-cert",
      stat: "Certified",
      label: "C++ Programming Certification",
      description: "Demonstrated proficiency in OOP, STL, memory allocation, and performance optimization.",
      icon: "Award",
      accent: "electric"
    },
    {
      id: "dsa-internship",
      stat: "Internship",
      label: "DSA Summer Internship & Certification",
      description: "Intensive training in algorithm design, asymptotic analysis, and problem solving.",
      icon: "BookOpen",
      accent: "violet"
    },
    {
      id: "dbms-cert",
      stat: "Certified",
      label: "DBMS Certification",
      description: "Formal credential in relational schemas, normalization (1NF-BCNF), and SQL queries.",
      icon: "Database",
      accent: "amber"
    },
    {
      id: "projects-stat",
      stat: "5+",
      label: "Engineered Projects",
      description: "Built practical solutions across machine learning, systems programming, IoT, and analytics.",
      icon: "Layers",
      accent: "cyan"
    }
  ]
};
