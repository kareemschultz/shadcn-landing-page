import type {
  Service,
  Stat,
  WhyUsItem,
  Industry,
  ProcessStep,
  FaqItem,
  Project,
} from "./types";

export const services: Service[] = [
  {
    id: "wifi",
    icon: "Wifi",
    title: "Enterprise WiFi Solutions",
    description:
      "High-capacity wireless networks designed for seamless indoor and outdoor coverage — from homes to large commercial deployments and WISP infrastructure.",
    features: [
      "Indoor & Outdoor Coverage",
      "WISP Network Setup",
      "Network Optimization",
      "24/7 Remote Monitoring",
    ],
  },
  {
    id: "starlink",
    icon: "Satellite",
    title: "Starlink Sales & Installation",
    description:
      "Authorized Starlink hardware procurement and professional installation — bringing high-speed satellite internet to remote and underserved areas.",
    features: [
      "Authorized Reseller",
      "Professional Installation",
      "Dish Alignment & Setup",
      "Ongoing Technical Support",
    ],
  },
  {
    id: "tower",
    icon: "RadioTower",
    title: "Tower Construction",
    description:
      "Design, engineering, rigging, and construction of communication towers for ISPs, cellular backhaul, and private infrastructure projects.",
    features: [
      "Structural Engineering",
      "Steel & Lattice Towers",
      "Permits & Compliance",
      "Site Surveys & Assessments",
    ],
  },
  {
    id: "solar",
    icon: "Sun",
    title: "Solar Energy Systems",
    description:
      "Off-grid and backup solar power systems for homes, businesses, and critical network infrastructure. Power your connectivity independently.",
    features: [
      "Solar Panel Installation",
      "Off-Grid Systems",
      "Hybrid & Grid-Tie Setups",
      "Battery Backup Solutions",
    ],
  },
  {
    id: "cctv",
    icon: "Cctv",
    title: "CCTV & Surveillance",
    description:
      "High-definition, networked IP camera systems for homes, businesses, and large facilities. Remote viewing, motion detection, and full NVR setup.",
    features: [
      "IP & Analog Cameras",
      "Remote Viewing App",
      "NVR/DVR Installation",
      "Night Vision & Analytics",
    ],
  },
  {
    id: "access",
    icon: "ShieldCheck",
    title: "Access Control",
    description:
      "Biometric readers, keycard systems, and smart intercoms to secure every entry point of your premises with full audit logging.",
    features: [
      "Biometric Systems",
      "Keycard & Fob Access",
      "Intercom Integration",
      "Audit Logs & Reporting",
    ],
  },
  {
    id: "networking",
    icon: "Network",
    title: "Networking Services",
    description:
      "Comprehensive routing, switching, firewall configuration, structured cabling, and fiber deployment for businesses of all sizes.",
    features: [
      "Structured Cabling & Fiber",
      "Firewall & VPN Setup",
      "Managed Switches & Routers",
      "NOC Support",
    ],
  },
];

export const stats: Stat[] = [
  { value: "500+", label: "Projects Completed" },
  { value: "7", label: "Service Areas" },
  { value: "24/7", label: "Technical Support" },
  { value: "10+", label: "Years Experience" },
];

export const whyUs: WhyUsItem[] = [
  {
    icon: "Zap",
    title: "Fast Deployment",
    desc: "From quote to installation in days, not months.",
  },
  {
    icon: "MapPin",
    title: "Local Expertise",
    desc: "Based in Guyana, built for Guyana's terrain and connectivity needs.",
  },
  {
    icon: "Layers",
    title: "End-to-End Service",
    desc: "We design, supply, install, and support every solution we deliver.",
  },
  {
    icon: "BadgeDollarSign",
    title: "Competitive Pricing",
    desc: "Enterprise quality at prices that work for businesses of all sizes.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure & Scalable",
    desc: "Every system is built with security and future growth in mind.",
  },
  {
    icon: "Headphones",
    title: "Reliable Aftercare",
    desc: "Ongoing SLA support contracts to keep your systems running.",
  },
];

export const industries: Industry[] = [
  { icon: "Home", label: "Homes & Estates" },
  { icon: "Building2", label: "Offices & Businesses" },
  { icon: "GraduationCap", label: "Schools & Campuses" },
  { icon: "Tractor", label: "Farms & Remote Sites" },
  { icon: "Hotel", label: "Hotels & Apartments" },
  { icon: "HardHat", label: "Construction Sites" },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    desc: "We learn your goals, site requirements, and budget.",
  },
  {
    step: "02",
    title: "Site Survey",
    desc: "Our engineers assess the location and infrastructure needs.",
  },
  {
    step: "03",
    title: "Design & Quote",
    desc: "We deliver a detailed plan and transparent pricing.",
  },
  {
    step: "04",
    title: "Installation",
    desc: "Professional deployment by our certified technical team.",
  },
  {
    step: "05",
    title: "Support & Maintenance",
    desc: "Ongoing monitoring, maintenance, and SLA support packages.",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "What areas do you serve?",
    a: "We serve Georgetown and surrounding regions, with remote coverage across Guyana including the Rupununi and interior communities.",
  },
  {
    q: "Are you an authorized Starlink reseller?",
    a: "Yes — we handle authorized hardware procurement, professional installation, dish alignment, and ongoing support.",
  },
  {
    q: "Can you combine solar and WiFi for off-grid setups?",
    a: "Absolutely. We specialize in solar-powered WiFi and network deployments for remote areas with no grid power.",
  },
  {
    q: "Do you offer maintenance contracts?",
    a: "Yes. We offer monthly and annual SLA-based maintenance packages for all our services.",
  },
  {
    q: "How long does a typical installation take?",
    a: "Most residential installs are completed in 1 day. Commercial and tower projects are scoped during the survey phase.",
  },
  {
    q: "Do you handle both residential and commercial projects?",
    a: "Yes — we serve homeowners, SMEs, schools, hotels, remote farms, and large commercial facilities.",
  },
  {
    q: "How do I get a quote?",
    a: "Fill out the contact form below or call/WhatsApp us directly. We respond within 24 hours.",
  },
];

export const projects: Project[] = [
  {
    title: "Starlink Rural Deployment",
    tag: "Starlink",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Commercial CCTV Installation",
    tag: "CCTV",
    color: "from-slate-600 to-slate-800",
  },
  {
    title: "Off-Grid Solar + WiFi",
    tag: "Solar",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Communication Tower Build",
    tag: "Tower",
    color: "from-gray-700 to-gray-900",
  },
  {
    title: "Office Network Cabling",
    tag: "Networking",
    color: "from-emerald-600 to-teal-600",
  },
  {
    title: "Biometric Access System",
    tag: "Access Control",
    color: "from-purple-600 to-indigo-700",
  },
];
