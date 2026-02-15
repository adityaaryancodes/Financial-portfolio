import { TrendingUp, Users, Globe, Award } from 'lucide-react';

export const profileData = {
  header: {
    name: "Siddharth Bhushan Khurana",
    role: "Managing Director",
    company: "Studds Accessories Limited",
    subtext: "One of India's prominent manufacturers of two-wheeler helmets and riding accessories.",
    badges: [
      { icon: "Award", text: "25+ Years Leadership" },
      { icon: "Globe", text: "70+ Export Countries" },
      { icon: "TrendingUp", text: "World's Largest Helmet Manufacturer" }
    ]
  },
  sections: [
    {
      id: "1",
      title: "Executive Profile",
      content: [
        "Mr. Siddharth Bhushan Khurana serves as the Managing Director of **Studds Accessories Limited**, one of India’s prominent manufacturers of two-wheeler helmets and riding accessories.",
        "A member of the Board since **1998**, he brings over 25 years of experience in business administration, corporate finance, strategic planning, and large-scale manufacturing operations. His leadership combines engineering precision with disciplined financial oversight.",
        "Under his direction, the company has strengthened its manufacturing capabilities, enhanced capital efficiency, and reinforced its position in both domestic and international markets, culminating in its status as the **world's largest two-wheeler helmet manufacturer by volume**."
      ]
    },
    {
      id: "2",
      title: "Educational Qualification",
      degree: "Bachelor of Engineering",
      field: "Aeronautical Engineering",
      uni: "Panjab University",
      points: [
        "Technical analysis and systems optimization",
        "Structured problem-solving methodologies",
        "Precision-oriented operational planning",
        "Engineering-driven manufacturing processes"
      ]
    }
  ],
  authority: [
    { title: "Strategic Leadership", desc: "Formulation of long-term corporate strategy, market expansion, and international growth initiatives." },
    { title: "Financial Authority", desc: "Approval of annual budgets, CapEx, and oversight of working capital management and profitability." },
    { title: "Operational & Manufacturing", desc: "Scaling production facilities to exceed 9 million units annually and process optimization." },
    { title: "Governance & Board", desc: "Active participation in Board resolutions, risk management, and regulatory compliance." }
  ],
  company: {
    brands: [
      { name: "Studds", desc: "The flagship mass-market brand, synonymous with safety and reliability in India." },
      { name: "SMK", desc: "The premium segment brand, targeting international markets and performance riders." }
    ],
    stats: [
      { value: "₹583 Cr", label: "Annual Revenue", sub: "₹5,825 Million" },
      { value: "₹71 Cr", label: "Net Profit (PAT)", sub: "₹707 Million" },
      { value: "₹118 Cr", label: "EBITDA", sub: "₹1,179 Million" },
      { value: "20.2%", label: "EBITDA Margin", sub: "Healthy Margins" },
      { value: "10.4%", label: "Revenue Growth", sub: "Year-over-Year" }
    ],
    features: [
      { title: "Infrastructure", desc: "4 state-of-the-art manufacturing units in Faridabad." },
      { title: "Market Position", desc: "World's largest two-wheeler helmet manufacturer by volume." },
      { title: "Global Footprint", desc: "Exports to 70+ countries across Europe, Latin America, Asia." }
    ]
  },
  investment: {
    promoterHolding: "61.75%",
    promoterText: "Promoter group holding post-IPO — signaling strong confidence in the business.",
    strategies: [
      { title: "Capacity Expansion", desc: "Ongoing construction of new facilities (Facility V) to support future volume growth." },
      { title: "Global Integration", desc: "Investments in Bikerz US Inc. and European subsidiaries to shorten delivery timelines." },
      { title: "Backward Integration", desc: "In-house manufacturing of critical components (EPS liners, molds) to protect margins." }
    ]
  }
};