export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  categories: string[]
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "understanding-corporate-law-tanzania",
    title: "Understanding Corporate Law in Tanzania: A Comprehensive Guide",
    excerpt: "Navigate the complexities of corporate law in Tanzania with our expert insights. Learn about company formation, compliance requirements, and best practices for business operations.",
    content: `
      <p>Corporate law in Tanzania provides the legal framework for business entities operating within the country. Understanding these regulations is crucial for both local and international businesses looking to establish or expand their operations.</p>
      
      <h2>Company Formation</h2>
      <p>The process of forming a company in Tanzania involves several key steps, including registration with BRELA (Business Registrations and Licensing Agency), obtaining necessary licenses, and ensuring compliance with the Companies Act.</p>
      
      <h2>Compliance Requirements</h2>
      <p>All registered companies must adhere to strict compliance requirements, including annual returns, financial reporting, and maintaining proper corporate records. Failure to comply can result in penalties and potential dissolution.</p>
      
      <h2>Corporate Governance</h2>
      <p>Good corporate governance is essential for sustainable business operations. This includes proper board structures, shareholder rights, and transparent decision-making processes.</p>
    `,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    author: {
      name: "Nzaro Buberwa",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80"
    },
    publishedAt: "2024-01-15",
    categories: ["Corporate Law", "Business Law"],
    tags: ["Corporate", "Business", "Compliance", "Tanzania"]
  },
  {
    id: "2",
    slug: "employment-law-updates-2024",
    title: "Employment Law Updates: What Employers Need to Know in 2024",
    excerpt: "Stay informed about the latest employment law changes affecting businesses in Tanzania. From labor regulations to employee rights, we cover everything you need to know.",
    content: `
      <p>Employment law in Tanzania continues to evolve, with recent updates affecting both employers and employees. Staying informed about these changes is crucial for maintaining compliance and fostering positive workplace relationships.</p>
      
      <h2>Key Changes in 2024</h2>
      <p>Several important amendments have been made to the Employment and Labour Relations Act, affecting minimum wage requirements, working hours, and employee benefits.</p>
      
      <h2>Employee Rights</h2>
      <p>Workers in Tanzania are entitled to various protections under the law, including fair treatment, safe working conditions, and proper compensation for their services.</p>
    `,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    author: {
      name: "Ruqaiya Mwinyi",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80"
    },
    publishedAt: "2024-01-10",
    categories: ["Employment Law", "Labour Law"],
    tags: ["Employment", "Labour", "Workplace", "Rights"]
  },
  {
    id: "3",
    slug: "real-estate-investment-tanzania",
    title: "Real Estate Investment in Tanzania: Legal Considerations",
    excerpt: "Explore the legal landscape of real estate investment in Tanzania. From property acquisition to land rights, understand the key legal aspects before making your investment.",
    content: `
      <p>Real estate investment in Tanzania offers significant opportunities, but understanding the legal framework is essential for protecting your investment and ensuring smooth transactions.</p>
      
      <h2>Land Ownership</h2>
      <p>In Tanzania, all land is owned by the state, but individuals and entities can acquire various forms of land rights, including granted rights of occupancy and derivative rights.</p>
      
      <h2>Due Diligence</h2>
      <p>Before any real estate transaction, thorough due diligence is crucial. This includes title searches, survey verification, and assessment of any encumbrances on the property.</p>
    `,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    author: {
      name: "Ernest Kileo",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
    },
    publishedAt: "2024-01-05",
    categories: ["Real Estate", "Property Law"],
    tags: ["Real Estate", "Investment", "Property", "Land"]
  },
  {
    id: "4",
    slug: "banking-regulations-compliance",
    title: "Banking Regulations and Compliance: A Guide for Financial Institutions",
    excerpt: "Navigate the complex regulatory environment for banks and financial institutions in Tanzania. Learn about licensing requirements, capital adequacy, and anti-money laundering measures.",
    content: `
      <p>The banking sector in Tanzania is heavily regulated to ensure financial stability and protect consumers. Understanding these regulations is crucial for financial institutions operating in the country.</p>
      
      <h2>Licensing Requirements</h2>
      <p>Banks and financial institutions must obtain proper licenses from the Bank of Tanzania before commencing operations. The licensing process involves meeting strict capital and governance requirements.</p>
      
      <h2>Anti-Money Laundering</h2>
      <p>Financial institutions must implement robust AML programs to detect and prevent money laundering activities. This includes customer due diligence, transaction monitoring, and suspicious activity reporting.</p>
    `,
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&q=80",
    author: {
      name: "Latifa Mshana",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80"
    },
    publishedAt: "2023-12-28",
    categories: ["Banking Law", "Financial Law"],
    tags: ["Banking", "Finance", "Compliance", "Regulations"]
  },
  {
    id: "5",
    slug: "intellectual-property-protection",
    title: "Protecting Your Intellectual Property: Trademarks, Patents, and Copyrights",
    excerpt: "Learn how to protect your intellectual property in Tanzania. From trademark registration to patent applications, understand the legal mechanisms available for IP protection.",
    content: `
      <p>Intellectual property protection is crucial for businesses and individuals who create original works, inventions, or brands. Tanzania has a comprehensive legal framework for IP protection.</p>
      
      <h2>Trademarks</h2>
      <p>Trademark registration provides exclusive rights to use a particular mark in connection with specific goods or services. The registration process involves application, examination, and publication.</p>
      
      <h2>Patents</h2>
      <p>Patents protect inventions and provide the inventor with exclusive rights to use and commercialize their creation for a specified period.</p>
    `,
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&q=80",
    author: {
      name: "Nzaro Buberwa",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80"
    },
    publishedAt: "2023-12-20",
    categories: ["Intellectual Property", "Business Law"],
    tags: ["IP", "Trademark", "Patent", "Copyright"]
  },
  {
    id: "6",
    slug: "energy-mining-sector-legal-framework",
    title: "Legal Framework for Energy and Mining Sector in Tanzania",
    excerpt: "Understand the legal requirements for operating in Tanzania's energy and mining sector. From licensing to environmental compliance, we cover the essential legal aspects.",
    content: `
      <p>Tanzania's energy and mining sector is governed by a comprehensive legal framework designed to promote sustainable development while protecting the environment and local communities.</p>
      
      <h2>Mining Licenses</h2>
      <p>Various types of mining licenses are available depending on the scale and nature of operations, from prospecting licenses to special mining licenses for large-scale operations.</p>
      
      <h2>Environmental Compliance</h2>
      <p>Mining operations must comply with strict environmental regulations, including conducting environmental impact assessments and implementing mitigation measures.</p>
    `,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    author: {
      name: "Ernest Kileo",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
    },
    publishedAt: "2023-12-15",
    categories: ["Energy Law", "Mining Law"],
    tags: ["Energy", "Mining", "Oil", "Gas", "Environment"]
  }
]

export const categories = [
  { name: "Corporate Law", count: 8 },
  { name: "Employment Law", count: 6 },
  { name: "Real Estate", count: 5 },
  { name: "Banking Law", count: 6 },
  { name: "Intellectual Property", count: 4 },
  { name: "Energy Law", count: 3 },
  { name: "Mining Law", count: 3 },
  { name: "Business Law", count: 7 },
]

export const tags = [
  "Corporate", "Business", "Compliance", "Tanzania", "Employment", 
  "Labour", "Workplace", "Rights", "Real Estate", "Investment", 
  "Property", "Land", "Banking", "Finance", "Regulations",
  "IP", "Trademark", "Patent", "Copyright", "Energy", "Mining"
]

export const archives = [
  { month: "January 2024", count: 3 },
  { month: "December 2023", count: 3 },
  { month: "November 2023", count: 2 },
  { month: "October 2023", count: 4 },
  { month: "September 2023", count: 2 },
]
