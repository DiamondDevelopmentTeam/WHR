import {
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ClipboardCheck,
  FileText,
  HeartPulse,
  PlayCircle,
  Scale,
  ShieldCheck,
  Users
} from "lucide-react";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Solutions", path: "/solutions" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Human Resources", path: "/services/human-resources" },
      { label: "Payroll Administration", path: "/services/payroll-administration" },
      { label: "Employee Benefits", path: "/services/employee-benefits" },
      { label: "Risk Mitigation", path: "/services/risk-mitigation" },
      { label: "Workers Compensation", path: "/services/workers-compensation" }
    ]
  },
  {
    label: "Resources",
    path: "/resources",
    children: [
      { label: "Brochures & Sell Sheets", path: "/resources" },
      { label: "FAQs", path: "/resources" },
      { label: "Video Library", path: "/resources" },
      { label: "Blog", path: "/resources" },
      { label: "Events & News", path: "/resources" }
    ]
  },
  { label: "Podcast", path: "/podcast" },
  { label: "Staffing Division", path: "/staffing-division" },
  { label: "Forms", path: "/forms" },
  { label: "Contact", path: "/contact" }
];

export const peoTasks = [
  {
    title: "Human Resource",
    icon: Users,
    text: "Human resource support, employee relations, onboarding guidance, workplace structure, and employer assistance."
  },
  {
    title: "Payroll Administration",
    icon: ClipboardCheck,
    text: "Payroll administration support that helps keep recurring processes organized, accurate, and efficient."
  },
  {
    title: "Employee Benefits",
    icon: HeartPulse,
    text: "Benefits administration support designed to help companies offer stronger employee programs."
  },
  {
    title: "Risk Mitigation",
    icon: ShieldCheck,
    text: "Compliance-centered support that helps businesses reduce exposure and manage employment risk."
  },
  {
    title: "Workers Compensation",
    icon: BriefcaseBusiness,
    text: "Workers’ compensation administration, claims support, safety guidance, and workplace risk coordination."
  }
];

export const partnerHighlights = [
  {
    title: "Tailored to Empower Your Business",
    icon: Building2
  },
  {
    title: "Benefits That Extend Beyond the Workplace",
    icon: HeartPulse
  },
  {
    title: "Tech-Driven, Human-Centric",
    icon: Scale
  },
  {
    title: "Join Forces with W.H.R Associates PEO",
    icon: BadgeCheck
  },
  {
    title: "Revolutionize Your HR With Comprehensive Support",
    icon: ShieldCheck
  }
];

export const keyFeatures = [
  {
    title: "Tailored HR Solutions",
    text: "Flexible HR support designed to align with your business objectives and scale with company growth."
  },
  {
    title: "Advanced Technology at Your Fingertips",
    text: "Technology-supported HR processes that help simplify daily tasks, reporting, compliance, and administration."
  },
  {
    title: "Comprehensive Benefits Access",
    text: "Support that helps small and mid-sized businesses offer competitive benefit packages."
  },
  {
    title: "Expertise That Drives Success",
    text: "Guidance from HR professionals with knowledge of compliance, payroll, employee training, and HR management."
  }
];

export const operationCards = [
  {
    title: "Elevate Employee Satisfaction",
    text: "Improve the employee experience with organized payroll, benefits support, and responsive HR processes."
  },
  {
    title: "Liberate Valuable Time",
    text: "Move time-consuming HR tasks off your desk so leaders can focus on growth and business goals."
  },
  {
    title: "Enhance Accuracy & Compliance",
    text: "Support legal compliance with structured HR services that stay aligned with changing requirements."
  }
];

export const solutionCards = [
  {
    title: "Lower Expenses And Increase Profit",
    text: "Streamline operations, reduce administrative strain, improve efficiency, and protect the bottom line."
  },
  {
    title: "Become An Employer of Choice",
    text: "Offer stronger benefits and employee programs that help attract and retain quality workers."
  },
  {
    title: "Have Peace Of Mind",
    text: "Receive support around compliance, risk, workers’ compensation, employee benefits, and HR responsibilities."
  },
  {
    title: "We Let You Focus On Your Business",
    text: "Remove time-consuming HR tasks so owners and managers can focus on customers, teams, and growth."
  },
  {
    title: "Reduce Costs and Improve Efficiency",
    text: "Outsource HR and payroll functions while improving accuracy, workflow, and administrative consistency."
  },
  {
    title: "Access Expertise and Guidance",
    text: "Gain access to HR, compliance, benefits, payroll, and risk management knowledge."
  },
  {
    title: "Enhance Employee Experience",
    text: "Support employees from onboarding through daily HR needs with smoother systems and communication."
  },
  {
    title: "Ensure Compliance and Reduce Risk",
    text: "Reduce exposure to penalties, claims, and confusion by staying aligned with employment requirements."
  }
];

export const serviceCards = [
  {
    title: "Human Resources",
    path: "/services/human-resources",
    icon: Users,
    text: "HR support for policy, onboarding, employee relations, guidance, and workforce administration."
  },
  {
    title: "Payroll Administration",
    path: "/services/payroll-administration",
    icon: ClipboardCheck,
    text: "Payroll support focused on organization, timing, accuracy, and recurring administration."
  },
  {
    title: "Employee Benefits",
    path: "/services/employee-benefits",
    icon: HeartPulse,
    text: "Benefit administration support for enrollment, employee programs, and plan coordination."
  },
  {
    title: "Risk Mitigation",
    path: "/services/risk-mitigation",
    icon: ShieldCheck,
    text: "Compliance and safety support that helps businesses reduce HR and employment risk."
  },
  {
    title: "Workers Compensation",
    path: "/services/workers-compensation",
    icon: BriefcaseBusiness,
    text: "Workers’ compensation support, claims coordination, safety practices, and risk workflows."
  }
];

export const pages = {
  solutions: {
    eyebrow: "Solutions",
    title: "How can my business benefit from partnering with a PEO company?",
    intro:
      "Partnering with W.H.R. Associates PEO brings support across Human Resources, Payroll, Employee Benefits, and Risk Management.",
    cards: solutionCards,
    closingTitle: "What makes W.H.R. Associates different?",
    closing:
      "W.H.R. Associates focuses on service-oriented HR support, practical guidance, cost savings, compliance awareness, and helping businesses redirect time back toward growth."
  },
  services: {
    eyebrow: "Services",
    title: "Key Features of Services",
    intro:
      "W.H.R. Associates PEO provides employer support for HR, payroll, benefits, compliance, risk mitigation, and workers’ compensation.",
    cards: serviceCards.map((item) => ({
      title: item.title,
      text: item.text
    })),
    closingTitle: "Comprehensive HR Support",
    closing:
      "The goal is to reduce administrative burden while giving business owners access to better systems, better guidance, and better employee support."
  },
  humanResources: {
    eyebrow: "Human Resources",
    title: "Human Resource solutions built around your business.",
    intro:
      "W.H.R. Associates supports companies with HR processes, employee relations, benefits administration, compliance needs, and workplace structure.",
    cards: [
      { title: "Tailored HR Solutions", text: "Flexible HR support based on your company’s structure and growth stage." },
      { title: "Seamless Integration", text: "Processes designed to support your operations without disrupting daily business." },
      { title: "Risk Mitigation", text: "Help navigating HR requirements, employment law, and compliance responsibilities." },
      { title: "Expert Support", text: "Access to professionals who understand HR, payroll, benefits, compliance, and employee support." },
      { title: "Employee Benefits Management", text: "Administration and coordination for competitive benefit options." },
      { title: "Time-Saving Technology", text: "Technology-backed support for tracking, reporting, payroll, and daily HR tasks." }
    ],
    closingTitle: "Your HR partner",
    closing:
      "WHR helps owners and managers spend less time tangled in administrative work and more time building the business."
  },
  payroll: {
    eyebrow: "Payroll Administration",
    title: "Payroll administration with structure and accuracy.",
    intro:
      "Payroll is one of the most sensitive recurring tasks in business. WHR helps companies organize payroll workflows and reduce administrative pressure.",
    cards: [
      { title: "Payroll Processing Support", text: "Support for consistent, organized pay cycle workflows." },
      { title: "Record Organization", text: "Administrative structure for payroll records and employer documentation." },
      { title: "Efficiency-Focused Workflows", text: "Reduce repetitive manual work and improve payroll administration." },
      { title: "Compliance Awareness", text: "Support payroll processes with wage, tax, and employment requirements in mind." }
    ],
    closingTitle: "Cleaner payroll support",
    closing:
      "WHR’s payroll administration support helps businesses protect time, reduce errors, and improve consistency."
  },
  employeeBenefits: {
    eyebrow: "Employee Benefits",
    title: "Employee benefits that support hiring and retention.",
    intro:
      "WHR helps employers manage benefit programs so they can offer stronger employee experiences while keeping administration organized.",
    cards: [
      { title: "Full-Service Benefits Administration", text: "Support for health, dental, vision, retirement, and other benefit programs." },
      { title: "Expert Support", text: "Guidance around benefits strategy, trends, and administration." },
      { title: "User-Friendly Process", text: "Cleaner enrollment, plan changes, employee access, and tracking." },
      { title: "Cost-Effective Solutions", text: "Benefit options that help smaller businesses compete for talent." },
      { title: "Risk Mitigation", text: "Compliance-aware benefits administration to reduce avoidable issues." },
      { title: "Personalized Plans", text: "Flexible benefits support based on workforce and business needs." }
    ],
    closingTitle: "Benefits beyond the workplace",
    closing:
      "Better benefits support helps companies improve recruitment, retention, employee morale, and workplace satisfaction."
  },
  riskMitigation: {
    eyebrow: "Risk Mitigation",
    title: "Reduce exposure with compliance-centered support.",
    intro:
      "W.H.R. Associates helps businesses manage HR-related risks through guidance, safety awareness, and compliance support.",
    cards: [
      { title: "Expert Risk Management", text: "Support to reduce legal, financial, and operational exposure." },
      { title: "Regulatory Compliance", text: "Guidance around employment requirements at the local, state, and federal levels." },
      { title: "Safety Protocols", text: "Workplace safety support that helps build a secure operating environment." },
      { title: "Compliance Assistance", text: "Help adapting to changing HR laws, policies, and requirements." }
    ],
    closingTitle: "Protect the business",
    closing:
      "Risk mitigation support gives employers clearer systems and better protection against costly compliance issues."
  },
  workersCompensation: {
    eyebrow: "Workers Compensation",
    title: "Workers’ compensation support for safer workplaces.",
    intro:
      "WHR helps employers manage workers’ compensation responsibilities, claims support, and safety-centered administration.",
    cards: [
      { title: "Workers’ Compensation Administration", text: "Support around documentation, employer responsibilities, and process coordination." },
      { title: "Claims Processing Support", text: "Help manage claims-related workflows and communication." },
      { title: "Safety Support", text: "Training, prevention, and safer workplace practices." },
      { title: "Risk Management", text: "Coordinate workers’ compensation with broader compliance and risk planning." }
    ],
    closingTitle: "Safer, more organized operations",
    closing:
      "Workers’ compensation support helps employers protect employees while reducing confusion and administrative weight."
  },
  resources: {
    eyebrow: "Resources",
    title: "Brochures, FAQs, videos, blogs, events, and news.",
    intro:
      "WHR’s resource area gives businesses a place to learn about PEO services, HR, payroll, compliance, staffing, and employee benefits.",
    cards: [
      { title: "Brochures & Sell Sheets", text: "Downloadable sales sheets and informational resources." },
      { title: "FAQs", text: "Common questions about PEO services, staffing, compliance, and benefits." },
      { title: "Video Library", text: "Videos that explain HR topics and WHR services." },
      { title: "Blog", text: "Articles about PEO support, Florida businesses, startups, and HR strategy." },
      { title: "Events & News", text: "Company updates, events, and news." }
    ],
    closingTitle: "Helpful information in one place",
    closing:
      "Later, this page can connect to a backend so WHR can upload PDFs, blog posts, videos, forms, and announcements."
  },
  podcast: {
    eyebrow: "Podcast",
    title: "PEO conversations for business owners.",
    intro:
      "The podcast section can share conversations about WHR Associates PEO, switching providers, employer support, and HR questions.",
    cards: [
      { title: "Provider Conversations", text: "Topics for businesses evaluating PEO providers." },
      { title: "HR Questions", text: "Helpful answers about payroll, benefits, compliance, and workforce support." },
      { title: "Business Guidance", text: "Practical discussions for owners and managers." }
    ],
    closingTitle: "Audio resource hub",
    closing:
      "This page can later hold embedded podcast episodes, show notes, transcripts, and links."
  },
  forms: {
    eyebrow: "Forms",
    title: "Forms and intake documents.",
    intro:
      "This page can hold employer intake forms, staffing request forms, employee documents, and downloadable PDFs.",
    cards: [
      { title: "Employer Intake", text: "Forms for new employer inquiries and onboarding." },
      { title: "Staffing Requests", text: "Forms for employers looking for staffing support." },
      { title: "Employee Documents", text: "Helpful documents and secure upload workflows can be added later." }
    ],
    closingTitle: "A better document flow",
    closing:
      "The next step can connect this to secure upload storage or a database."
  }
};

export const staffingPage = {
  eyebrow: "Staffing Division",
  title: "Staffing Division — Strategic Partnership with BZ Resources",
  intro:
    "WHR’s staffing division supports talent acquisition, workforce management, recruitment, and career advancement through its strategic partnership with BZ Resources.",
  cards: [
    { title: "Strategic Recruitment", text: "Attract candidates who align with company needs and culture." },
    { title: "Workforce Optimization", text: "Support teams with management techniques aligned to business objectives." },
    { title: "Customized Solutions", text: "Staffing services that adapt to business operations." },
    { title: "Compliance and Risk Management", text: "Support employment practices with current standards in mind." },
    { title: "Enhanced Employee Benefits", text: "Offer benefit packages that improve satisfaction and retention." },
    { title: "Career Development Programs", text: "Training and professional development support." },
    { title: "Efficient Payroll Processing", text: "Accurate and timely payroll support." },
    { title: "Productive Workplace Culture", text: "Encourage cooperation, morale, and innovation." }
  ],
  employerTitle: "For Employers",
  employerText:
    "The staffing division helps companies find candidates that match their requirements and culture so business leaders can focus on operations.",
  seekerTitle: "For Job Seekers",
  seekerText:
    "Job seekers can connect with reputable employers and find roles that match their skills, experience, and career goals.",
  services: [
    { title: "Comprehensive Recruitment Solutions", icon: BookOpenText },
    { title: "Payroll Management", icon: ClipboardCheck },
    { title: "Tailored Staffing Solutions", icon: BriefcaseBusiness },
    { title: "Professional Employment Services", icon: Users },
    { title: "Employee Benefits", icon: HeartPulse },
    { title: "Events & News", icon: CalendarDays },
    { title: "Forms", icon: FileText },
    { title: "Video Library", icon: PlayCircle }
  ]
};

export const contactInfo = {
  addressLineOne: "7494 SW 60th Ave, Suite B",
  addressLineTwo: "Ocala, FL 34476",
  phone: "352-966-8232",
  emails: ["ceo@whrassociates.com", "info@whrassociates.com"]
};