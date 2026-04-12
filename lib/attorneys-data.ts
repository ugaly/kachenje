export interface Attorney {
  id: string
  name: string
  role: string
  email: string
  phone: string
  image: string
  bio: string
  expertise: string[]
  education: string[]
  experience: string[]
  categories: string[]
  languages: string[]
  admissions: string[]
}

export const categories = [
  "All",
  "Banking & Finance",
  "Litigation",
  "Corporate Law",
  "Conveyancing",
  "Employment & Labour",
  "Intellectual Property",
  "Energy & Mining",
  "Real Estate",
  "Insolvency",
  "Family Law",
]

export const attorneys: Attorney[] = [
  {
    id: "nzaro-kachenje",
    name: "Nzaro Nuhu Kachenje",
    role: "Managing Partner",
    email: "nkachenje@kachenje.co.tz",
    phone: "+255 767 000 272",
      image: "/assets/photo/nzaro.webp",
    bio: "Nzaro is an Advocate with extensive knowledge and experience in the banking industry, having served as the Head of Legal and Special Assets Management at Commercial Bank of Africa (Tanzania) Limited. During his tenure at the Bank, he also held the position of Compliance Manager, overseeing the Bank's regulatory and compliance matters. He has exceptional expertise in banking law, with a particular focus on insolvency, conveyancing, and corporate secretarial practice. In addition to handling numerous cases at various levels of the courts particularly on behalf of banks, Nzaro has served as a Court-appointed Administrator for MGT Cards Ltd, MGT Print Ltd, and Mohamed Trans Ltd, as well as a Liquidator for Pasha Foods and Beverages Ltd. His experience as a Company Secretary of a bank will significantly contribute to the effective delivery of this assignment.",
    expertise: [
      "Banking Law",
      "Insolvency & Debt Recovery",
      "Conveyancing",
      "Corporate Secretarial Practice",
      "Commercial Litigation",
      "Arbitration"
    ],
    education: [
      "Bachelor of Laws (LL.B) - University of Dar es Salaam",
      "Postgraduate Diploma in Legal Practice - Law School of Tanzania",
      "Certified Arbitrator"
    ],
    experience: [
      "Head of Legal and Special Assets Management - Commercial Bank of Africa (Tanzania) Limited",
      "Compliance Manager - Commercial Bank of Africa (Tanzania) Limited",
      "Court-appointed Administrator - MGT Cards Ltd, MGT Print Ltd, Mohamed Trans Ltd",
      "Liquidator - Pasha Foods and Beverages Ltd"
    ],
    categories: ["Banking & Finance", "Insolvency", "Conveyancing", "Corporate Law"],
    languages: ["English", "Swahili"],
    admissions: ["High Court of Tanzania", "Court of Appeal of Tanzania", "Notary Public", "Commissioner for Oaths"]
  },
  {
    id: "ruqaiya-al-harthy",
    name: "Ruqaiya Al-Harthy",
    role: "Senior Associate & Head of Litigation",
    email: "rabdulla@kachenje.co.tz",
    phone: "+255 715 920 072",
    image: "/assets/photo/RUQAIYA.jpg",
    bio: "Ruqaiya is a results-driven Advocate with over four years of dynamic legal experience across various industries, including telecommunications, mining, and leading law firms. Prior to joining Kachenje Advocates, she held several legal roles that strengthened her expertise in both transactional matters and dispute resolution. She currently serves as the Head of the Litigation Department at Kachenje Advocates. She has developed strong expertise in Conveyancing, Civil and Commercial Litigation, Labour and Employment Law, Corporate and Business Law, Intellectual Property, and emerging areas such as Cyber Law. Ruqaiya is known for her analytical mindset and practical problem-solving approach, consistently delivering strategic, business-aligned legal solutions to clients. Throughout her career, she has represented clients in complex legal disputes and played a key role in securing favourable outcomes in high-stakes negotiations.",
    expertise: [
      "Civil & Commercial Litigation",
      "Labour & Employment Law",
      "Corporate & Business Law",
      "Intellectual Property",
      "Conveyancing",
      "Cyber Law"
    ],
    education: [
      "Bachelor of Laws (LL.B) - University of Dar es Salaam",
      "Postgraduate Diploma in Legal Practice - Law School of Tanzania"
    ],
    experience: [
      "Head of Litigation Department - Kachenje Advocates",
      "Legal Counsel - Telecommunications Sector",
      "Legal Associate - Mining Industry",
      "Legal Officer - Leading Law Firms"
    ],
    categories: ["Litigation", "Employment & Labour", "Corporate Law", "Intellectual Property", "Conveyancing"],
    languages: ["English", "Swahili", "Arabic"],
    admissions: ["High Court of Tanzania", "Court of Appeal of Tanzania"]
  },
  {
    id: "ernest-urio",
    name: "Ernest Urio",
    role: "Senior Associate",
    email: "eurio@kachenje.co.tz",
    phone: "+255 717 759 000",
    image: "/assets/photo/ERNEST.jpg",
    bio: "Ernest is a dedicated legal practitioner with over four years of progressive experience across diverse sectors, including telecommunications, mining, and leading law firms. Prior to joining Kachenje Advocates, he served in various legal roles, building a strong foundation in both advisory and litigation practice. His areas of expertise include Conveyancing, Civil and Commercial Litigation, Labour Law, Corporate Law, Intellectual Property, and emerging fields such as Cyber Law. Ernest is widely recognized for his solution-oriented approach and has earned commendations from clients for his strategic insight and dependable counsel. Throughout his career, he has successfully represented clients in complex legal proceedings and facilitated numerous negotiations with precision and professionalism. His commitment to accountability, punctuality, and timely delivery consistently distinguishes his practice.",
    expertise: [
      "Conveyancing",
      "Civil & Commercial Litigation",
      "Labour Law",
      "Corporate Law",
      "Intellectual Property",
      "Cyber Law"
    ],
    education: [
      "Bachelor of Laws (LL.B) - University of Dar es Salaam",
      "Postgraduate Diploma in Legal Practice - Law School of Tanzania"
    ],
    experience: [
      "Senior Associate - Kachenje Advocates",
      "Legal Associate - Telecommunications Sector",
      "Legal Officer - Mining Industry"
    ],
    categories: ["Litigation", "Conveyancing", "Corporate Law", "Intellectual Property", "Employment & Labour"],
    languages: ["English", "Swahili"],
    admissions: ["High Court of Tanzania"]
  },
  {
    id: "latifa-delaware",
    name: "Latifa Delaware",
    role: "Operations & Business Development Manager",
    email: "clientrelations@kachenje.co.tz",
    phone: "+255 654 450 798",
    image: "/assets/photo/LATIFA.jpg",
    bio: "Latifa Delaware is a law graduate with a strong academic foundation in Law and International Relations, having earned her degree in Mauritius. Her educational background equips her with both legal expertise and a global perspective on governance, diplomacy, and cross-border business environments. Latifa gained practical legal experience through her work as a Legal Trainee at two law firms and at the District Court, where she developed hands-on exposure to litigation procedures, legal drafting, client advisory, court processes, and case management. In addition to her legal training, Latifa has served as a Marketing Director at Plustronics, where she demonstrated strong leadership and strategic communication skills. She is recognized as an innovative, client-oriented, and results-driven professional, combining legal knowledge with strategic thinking and commercial awareness.",
    expertise: [
      "Business Development",
      "Client Relations",
      "Legal Drafting",
      "Operations Management",
      "Strategic Marketing",
      "International Relations"
    ],
    education: [
      "Bachelor of Laws & International Relations - Mauritius",
      "Legal Training - District Court"
    ],
    experience: [
      "Operations & Business Development Manager - Kachenje Advocates",
      "Marketing Director - Plustronics",
      "Legal Trainee - Law Firms",
      "Legal Trainee - District Court"
    ],
    categories: ["Corporate Law"],
    languages: ["English", "Swahili", "French"],
    admissions: []
  },
  {
    id: "margarita-patrick",
    name: "Margarita Patrick",
    role: "Administrator Assistant",
    email: "administrator@kachenje.co.tz",
    phone: "+255 222 123 456",
    image: "/assets/photo/MARGARITA.jpg",
    bio: "Margarita is an Administrative Assistant with proven experience in office management and operational support within the legal sector. Skilled in coordinating schedules, managing documentation, and facilitating smooth communication, ensuring efficient day-to-day operations and timely project support for the firm. Her attention to detail and organizational excellence make her an invaluable member of the Kachenje Advocates team.",
    expertise: [
      "Office Management",
      "Documentation",
      "Schedule Coordination",
      "Client Communication",
      "Project Support"
    ],
    education: [
      "Diploma in Business Administration",
      "Certificate in Office Management"
    ],
    experience: [
      "Administrator Assistant - Kachenje Advocates",
      "Office Coordinator - Legal Sector"
    ],
    categories: [],
    languages: ["English", "Swahili"],
    admissions: []
  },
  {
    id: "james-mwangi",
    name: "Zanura James Mwangi",
    role: "Associate",
    email: "jmwangi@kachenje.co.tz",
    phone: "+255 712 345 678",
    image: "/assets/photo/ZANURA.jpg",
    bio: "Zanura James Mwangi is a dedicated advocate specializing in real estate and conveyancing matters. With over three years of experience, he has successfully handled numerous property transactions, lease agreements, and land dispute resolutions. His meticulous attention to detail and thorough understanding of Tanzanian land laws make him an asset in complex property matters. Zanura is known for his client-first approach and ability to simplify complex legal concepts for his clients.",
    expertise: [
      "Real Estate Law",
      "Conveyancing",
      "Land Dispute Resolution",
      "Property Transactions",
      "Lease Agreements",
      "Title Verification"
    ],
    education: [
      "Bachelor of Laws (LL.B) - Mzumbe University",
      "Postgraduate Diploma in Legal Practice - Law School of Tanzania"
    ],
    experience: [
      "Associate - Kachenje Advocates",
      "Legal Officer - Tanzania Land Authority",
      "Junior Associate - Real Estate Law Firm"
    ],
    categories: ["Real Estate", "Conveyancing"],
    languages: ["English", "Swahili"],
    admissions: ["High Court of Tanzania"]
  },
  // {
  //   id: "amina-hassan",
  //   name: "Amina Hassan",
  //   role: "Associate",
  //   email: "ahassan@kachenje.co.tz",
  //   phone: "+255 765 432 109",
  //   image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80",
  //   bio: "Amina is an experienced family law practitioner with a compassionate approach to sensitive legal matters. She handles divorce proceedings, child custody disputes, inheritance cases, and matrimonial property settlements with professionalism and empathy. Her ability to navigate emotionally charged situations while protecting her clients' legal interests has earned her a strong reputation in family law practice. Amina is also actively involved in pro bono work supporting women's rights.",
  //   expertise: [
  //     "Family Law",
  //     "Divorce Proceedings",
  //     "Child Custody",
  //     "Inheritance Law",
  //     "Matrimonial Property",
  //     "Domestic Relations"
  //   ],
  //   education: [
  //     "Bachelor of Laws (LL.B) - University of Dar es Salaam",
  //     "Postgraduate Diploma in Legal Practice - Law School of Tanzania",
  //     "Certificate in Family Mediation"
  //   ],
  //   experience: [
  //     "Associate - Kachenje Advocates",
  //     "Legal Aid Volunteer - Women's Legal Aid Centre",
  //     "Junior Associate - Family Law Practice"
  //   ],
  //   categories: ["Family Law", "Litigation"],
  //   languages: ["English", "Swahili", "Arabic"],
  //   admissions: ["High Court of Tanzania"]
  // },
  // {
  //   id: "david-kimaro",
  //   name: "David Kimaro",
  //   role: "Associate",
  //   email: "dkimaro@kachenje.co.tz",
  //   phone: "+255 789 012 345",
  //   image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
  //   bio: "David specializes in energy, mining, and natural resources law. He has extensive experience advising local and international companies on regulatory compliance, licensing, and environmental matters in Tanzania's extractive industries. His technical understanding of the energy sector combined with legal expertise makes him invaluable for complex energy and mining transactions. David has been involved in several landmark energy projects in East Africa.",
  //   expertise: [
  //     "Energy Law",
  //     "Mining Law",
  //     "Natural Resources",
  //     "Environmental Compliance",
  //     "Regulatory Affairs",
  //     "Oil & Gas"
  //   ],
  //   education: [
  //     "Bachelor of Laws (LL.B) - University of Dar es Salaam",
  //     "Master of Laws (LL.M) in Energy Law - University of Cape Town",
  //     "Postgraduate Diploma in Legal Practice - Law School of Tanzania"
  //   ],
  //   experience: [
  //     "Associate - Kachenje Advocates",
  //     "Legal Consultant - Energy Sector",
  //     "In-house Counsel - Mining Company"
  //   ],
  //   categories: ["Energy & Mining", "Corporate Law"],
  //   languages: ["English", "Swahili"],
  //   admissions: ["High Court of Tanzania", "Court of Appeal of Tanzania"]
  // },
  // {
  //   id: "grace-mollel",
  //   name: "Grace Mollel",
  //   role: "Associate",
  //   email: "gmollel@kachenje.co.tz",
  //   phone: "+255 756 789 012",
  //   image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80",
  //   bio: "Grace is a corporate law specialist with particular focus on mergers and acquisitions, joint ventures, and corporate restructuring. She has advised numerous local and multinational companies on corporate governance, regulatory compliance, and business transactions. Her analytical skills and commercial awareness enable her to provide practical legal solutions that align with her clients' business objectives. Grace is known for her efficiency and ability to manage complex multi-party transactions.",
  //   expertise: [
  //     "Corporate Law",
  //     "Mergers & Acquisitions",
  //     "Joint Ventures",
  //     "Corporate Governance",
  //     "Business Transactions",
  //     "Regulatory Compliance"
  //   ],
  //   education: [
  //     "Bachelor of Laws (LL.B) - Tumaini University",
  //     "Postgraduate Diploma in Legal Practice - Law School of Tanzania",
  //     "Certificate in Corporate Governance"
  //   ],
  //   experience: [
  //     "Associate - Kachenje Advocates",
  //     "Corporate Legal Advisor - Investment Firm",
  //     "Junior Associate - Commercial Law Firm"
  //   ],
  //   categories: ["Corporate Law", "Banking & Finance"],
  //   languages: ["English", "Swahili"],
  //   admissions: ["High Court of Tanzania"]
  // },
  // {
  //   id: "peter-lyimo",
  //   name: "Peter Lyimo",
  //   role: "Associate",
  //   email: "plyimo@kachenje.co.tz",
  //   phone: "+255 745 678 901",
  //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  //   bio: "Peter is an employment and labour law specialist with experience representing both employers and employees in workplace disputes. He advises on employment contracts, workplace policies, collective bargaining agreements, and labour compliance. Peter has successfully handled numerous cases before the Commission for Mediation and Arbitration (CMA) and the Labour Court. His balanced understanding of employer-employee dynamics makes him effective in negotiations and dispute resolution.",
  //   expertise: [
  //     "Employment Law",
  //     "Labour Relations",
  //     "Workplace Disputes",
  //     "Collective Bargaining",
  //     "Employment Contracts",
  //     "Labour Compliance"
  //   ],
  //   education: [
  //     "Bachelor of Laws (LL.B) - University of Dar es Salaam",
  //     "Postgraduate Diploma in Legal Practice - Law School of Tanzania",
  //     "Certificate in Labour Relations"
  //   ],
  //   experience: [
  //     "Associate - Kachenje Advocates",
  //     "Legal Officer - Human Resources Consultancy",
  //     "Labour Law Advocate - Independent Practice"
  //   ],
  //   categories: ["Employment & Labour", "Litigation"],
  //   languages: ["English", "Swahili"],
  //   admissions: ["High Court of Tanzania", "Commission for Mediation and Arbitration"]
  // }
]

export function getAttorneyBySlug(slug: string): Attorney | undefined {
  return attorneys.find(attorney => attorney.id === slug)
}

export function getAttorneysByCategory(category: string): Attorney[] {
  if (category === "All") return attorneys
  return attorneys.filter(attorney => attorney.categories.includes(category))
}
