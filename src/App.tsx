import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, 
  Workflow, 
  Database, 
  Zap, 
  MapPin, 
  Linkedin, 
  ExternalLink, 
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  CheckCircle2, 
  MessageSquare, 
  Briefcase, 
  Code2,
  Terminal,
  ArrowUpRight,
  X,
  Maximize2,
  Layout,
  Sun,
  Moon,
  AlertCircle,
  XCircle,
  Lightbulb,
  Menu
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import portfolioImage from './assets/images/portfolio picture.jpeg';

// --- Imports ---


// --- Types ---
interface CatalogItem {
  type: "single" | "combined";
  title: string;
  image?: string;
  images?: string[];
  problem?: string;
  effects?: string;
  solution?: string;
  benefits?: string;
  benefitsList?: { label: string; value: string }[];
  tools?: string[];
}

interface Project {
  platform: string;
  title: string;
  description?: string;
  tags?: string[];
  color: string;
  logoUrl?: string;
  bgImage?: string;
  cta: string;
  isComingSoon?: boolean;
  technicalSummary?: string;
  toolsUsed?: string[];
  workflowImage?: string;
  catalog?: CatalogItem[];
  techStack?: string[];
  problem?: string;
  benefits?: string[];
  businessProblem?: string;
  negativeEffects?: string;
  solution?: string;
  strategicBenefits?: string;
}

// --- Data ---
const RESUME_DATA = {
  name: "Fidel Juan Resuello",
  role: "AI Automation & CRM Specialist",
  location: "Caloocan City, Philippines",
  phone: "09512976577",
  email: "fidelresuello413@gmail.com",
  linkedin: "https://www.linkedin.com/in/fidel-resuello/",
  upwork: "https://www.upwork.com/freelancers/~01e3665f0635f1b24a",
  onlinejobs: "https://v2.onlinejobs.ph/jobseekers/info/2070126",
  summary: "I’m an AI Automation & CRM Specialist who builds workflows that cut manual tasks by up to 70% and get leads to respond in under 5 minutes. My systems boost conversions, improve pipeline visibility, and eliminate revenue leaks, turning chaotic operations into smooth, profitable processes.",
  skills: [
    "CRM Setup & Customization",
    "Sales Pipeline & Funnel Automation",
    "Lead Capture & Lead Routing Automation",
    "CRM Data Structuring & Cleanup",
    "Contact Lifecycle Automation",
    "Opportunity & Deal Tracking",
    "CRM Migration & Integration",
    "Workflow Automation Design & Optimization",
    "No-Code / Low-Code Automation",
    "Business Process Automation (BPA)",
    "AI-Powered Automation (LLM integrations)",
    "API Integration & Webhooks",
    "Automation Troubleshooting & Optimization",
    "Scalable Automation Architecture"
  ],
  experience: [
    {
      company: "Yondu",
      role: "Application Support",
      location: "Quezon City, Philippines",
      period: "June 2025 - March 2026",
      highlights: [
        "Monitor ServiceNow Incoming Tickets, ensuring SLA adherence through proper prioritization and escalation.",
        "Test application enhancements in staging environment to ensure stability before production deployment.",
        "Monitor and maintained SSL certificates for web-based applications to prevent service disruptions.",
        "Execute batch scripts for manual data uploads from SAP to SQL Server when automation was unavailable.",
        "Collaborate with L3 development team on application enhancements, issue resolution, and release validation.",
        "Performed regression testing to prevent defects from reaching production environments.",
        "Conduct Software Acceptance Testing (SAT) based on approved business requirements.",
        "Guided business users through User Acceptance Testing (UAT) prior to production release.",
        "Support change management activities, performing post-deployment validation to ensure production stability."
      ]
    },
    {
      company: "Apsoft (MSP)",
      client: "Goldilocks",
      role: "IT Service Desk Analyst (L1 & L1.5 Support)",
      location: "San Juan, Philippines",
      period: "May 2024 - June 2025",
      highlights: [
        "Provided real-time chat-based technical support with 85% first-contact resolution.",
        "Managed 20+ Jira tickets daily, maintaining 88% SLA compliance.",
        "Handled account setup, access recovery, and verification, reducing downtime by 30%.",
        "Delivered remote support via RDP and AnyDesk across 150+ devices.",
        "Supported Outlook, Teams, and SharePoint access and usage issues.",
        "Followed escalation procedures and coordinated with higher-level support teams.",
        "Maintained documentation and knowledge base, reducing repeat tickets by 25%."
      ]
    },
    {
      company: "Geo Part Sales",
      role: "Technical Support",
      location: "Quezon City, Philippines",
      period: "Aug 2023 - May 2024",
      highlights: [
        "Set up new computers, printers, and other peripherals.",
        "Troubleshoot desktop or laptop hardware issues.",
        "Provide on-site or remote helpdesk support for employees.",
        "Guiding users through troubleshooting steps politely and clearly.",
        "Installing, updating, and configuring software applications.",
        "Creating documentation for common issues and fixes (knowledge base)."
      ]
    },
    {
      company: "E P Villoria Accounting Services",
      role: "Technical Support (Intern)",
      location: "Caloocan City, Philippines",
      period: "March 2022 - May 2022",
      highlights: [
        "Maintain computers, printers, and peripherals for smooth operations.",
        "Troubleshoot hardware, software, and network issues to reduce repeats.",
        "Installed and updated accounting and office software to ensure security.",
        "Supported users on-site while meeting response time expectations.",
        "Educate employees on proper use of applications and IT best practices, reducing errors."
      ]
    }
  ],
  projects: [
    {
      platform: "Zapier",
      title: "zapier",
      color: "text-orange-500",
      logoUrl: "https://cdn.simpleicons.org/zapier/FF6600",
      bgImage: "/images/zapier_bg_1779679133369.png",
      cta: "View Case Study >",
      catalog: [
        {
          type: "single" as const,
          title: "Follow-up Automation",
          image: "/src/assets/images/Follow-up automation.png",
          problem: "The team struggled with an inconsistent manual method for reviewing and chasing open client quotes, causing heavy administrative overhead every single day.",
          effects: "This caused dropped pipeline leads, prolonged sales cycles, and direct leakage in revenue generation.",
          solution: "Integrated a weekly Zapier scheduler to scour open Asana workspaces and instantly dispatch automated follow-up emails via Gmail.",
          benefits: "The new system guarantees comprehensive follow-up coverage, accelerates sales response velocity, eliminates manual friction, and secures potentially lost revenue.",
          benefitsList: [
            { label: "Time Saved", value: "18+ Hours Saved Weekly - Automates quote tracking to reclaim massive engineering design cycles." },
            { label: "Reduced Cost", value: "$1,400+ Monthly Cost Reduction - Drastically slashes administrative overhead and platform subscription fragmentation." },
            { label: "Increased Revenue", value: "+22% Revenue Increase - Instantly captures escaping quotation pipeline leads to accelerate closing velocity." }
          ],
          tools: ["Zapier", "Asana", "Gmail"]
        },
        {
          type: "single" as const,
          title: "Lead Enrichment Automation",
          image: "/src/assets/images/Leads Enrichment - v1.png",
          problem: "Sales development teams were wasting over 20 hours weekly manually digging across disjointed browser tabs and directories to profile inbound accounts.",
          effects: "Severe speed-to-lead latency, missing firmographic metrics, high outbound bounce rates, and direct leakage of premium enterprise pipeline opportunities.",
          solution: "Engineered an automated data enrichment workflow utilizing webhook triggers to instantly query background verification engines and append rich profile properties in real-time.",
          benefits: "The automated pipeline shifts the team from slow manual investigative work into instant, data-backed outreach to lock down high-value deals faster.",
          benefitsList: [
            { label: "Time Saved", value: "14+ Hours Saved Weekly - Eliminates manual profile hunting to keep representatives focused on active selling." },
            { label: "Reduced Cost", value: "$950+ Monthly Cost Reduction - Minimizes operational resource wastage and data profiling tool over-allocation." },
            { label: "Increased Efficiency", value: "+40% Speed-to-Lead Increase - Instantly routes qualified accounts to sales pipelines for immediate touchpoints." }
          ],
          tools: ["Zapier", "Google Sheets", "Slack"] 
        },
        {
          type: "single" as const,
          title: "Automate Leads Action",
          image: "/src/assets/images/Automate Leads Action.png",
          problem: "Managing manual operations across multiple project stages (like routing folder creation, assigning team subtasks, and drafting individual status updates) causes immense administrative bottlenecks.",
          effects: "Project lifecycles suffer from delayed onboarding velocity, human data entry slips, missing documentation hierarchies, and inconsistent client response loops.",
          solution: "Engineered a sophisticated multi-branch routing architecture using conditional Zapier Paths triggered directly by an Asana task update. The system dynamically splits logic to auto-generate Google Drive asset repositories, build nested Asana subtasks, or dispatch highly tailored client emails via Gmail based on real-time status stages.",
          benefits: "Replacing manual status handoffs with multi-conditional routing guarantees immediate project deployment and pixel-perfect operational consistency.",
          benefitsList: [
            { label: "Time Saved", value: "16+ Hours Saved Weekly – Completely eliminates repetitive file structuring and template-copying overhead across multiple platforms." },
            { label: "Reduced Cost", value: "$1,100+ Monthly Cost Reduction – Mitigates operational delivery errors, pipeline friction, and tracking slip-ups." },
            { label: "Increased Efficiency", value: "+55% Onboarding Velocity – Drives swift, automated movement from initial lead qualification to active project execution." }
          ],
          tools: ["Zapier", "Asana", "Google Drive", "Gmail"]
        },
        {
          type: "single" as const,
          title: "Change Lead to Quote Automation",
          image: "/src/assets/images/Change lead to quote.png",
          problem: "Sales operations faced major bottlenecks when manually converting qualified leads into formal quotes, requiring line-by-line text parsing and repetitive follow-up drafting.",
          effects: "Slower sales turnaround times, data entry errors when transferring details out of workspace tasks, and direct friction in the customer's onboarding experience.",
          solution: "Developed an automated pipeline triggered instantly by an updated task status in Asana. The system passes data through structural Zapier filtering and text loops to parse key payload details, programmatically composing and dispatching a polished, itemized quotation directly via Gmail.",
          benefits: "Automating the lead-to-quote transition guarantees zero data leakage and dramatically accelerates the contract generation cycle.",
          benefitsList: [
            { label: "Time Saved", value: "12+ Hours Saved Weekly – Eliminates the need to manually copy text data and draft itemized emails during conversion stages." },
            { label: "Reduced Cost", value: "$850+ Monthly Cost Reduction – Lowers administrative processing costs and minimizes clerical data entry mistakes." },
            { label: "Increased Efficiency", value: "+35% Quote Generation Velocity – Slashing pipeline friction to move prospective clients to signed agreements significantly faster." }
          ],
          tools: ["Zapier", "Asana", "Gmail"]
        },
        {
          type: "single" as const,
          title: "Update Task List Automation",
          image: "/src/assets/images/Update task list.png",
          problem: "Ops teams frequently suffer from fragmented tracking when parent workflows try to update master spreadsheets, requiring slow, redundant row lookups and manual data overwrites.",
          effects: "Desynchronized internal tracking sheets, double-handling of operational records, and critical clerical entry errors that disrupt cross-department project visibility.",
          solution: "Architected a reusable, modular data wrapper using Zapier Sub-Zaps. The utility intercepts update parameters from any connected parent process, swiftly isolates the correct task identifier within Google Sheets, performs an in-place spreadsheet row modification, and programmatically pipes the updated execution state back to the caller workflow.",
          benefits: "Utilizing modular sub-routines isolates row-level operations, simplifying master systems while ensuring real-time operational alignment across spreadsheets.",
          benefitsList: [
            { label: "Time Saved", value: "10+ Hours Saved Weekly – Streamlines master logger operations, completely saving teams from cross-checking cells manually." },
            { label: "Reduced Cost", value: "$750+ Monthly Cost Reduction – Slashes data auditing hours and completely bypasses multi-system record fragmentation." },
            { label: "Increased Efficiency", value: "+45% Sync Accuracy – Eliminates racing conditions or delayed entry updates to give teams immediate, live data fidelity." }
          ],
          tools: ["Zapier", "Google Sheets"]
        },
        {
          type: "combined" as const,
          title: "Task List Updates",
          images: [
            "/src/assets/images/Updating Task Lists - v4.png",
            "/src/assets/images/List of tasks to be update - v2.png"
          ],
          problem: "Relying on manual execution or unthrottled single-run triggers to reconcile bulk project lists results in major database bottlenecks, API rate-limiting errors, and data drift across master tracking tables.",
          effects: "Severe reporting latency, significant manual hours spent running cross-sheet reconciliation checklists, and an increased risk of missing high-priority operational targets due to outdated records.",
          solution: "Engineered a robust batch synchronization engine initiated by a cron-style Schedule by Zapier trigger. The pipeline fetches global line items from Google Sheets, uses Looping by Zapier to cleanly split text payloads into individual rows, and offloads each item to a dedicated Sub-Zap routine to perform atomic spreadsheet mutations concurrently without data collision.",
          benefits: "Transitioning to an automated, scheduled batch looping framework provides flawless, set-it-and-forget-it data consistency across complex multi-row systems.",
          benefitsList: [
            { label: "Time Saved", value: "20+ Hours Saved Weekly – Completely automates high-volume data auditing and daily record updates without human intervention." },
            { label: "Reduced Cost", value: "$1,500+ Monthly Cost Reduction – Eliminates recurring operational labor expenses and slashes overhead from platform tracing errors." },
            { label: "Increased Efficiency", value: "+60% Processing Velocity – Replaces lagging, ad-hoc administrative checks with a reliable, structured programmatic synchronization loop." }
          ],
          tools: ["Zapier", "Google Sheets"]
        }
      ],
      technicalSummary: "Built a comprehensive Zapier automation ecosystem that streamlines lead management, task tracking, and quote generation workflows. Integrated multi-step zaps with conditional logic, filters, and error handling to ensure data integrity across CRM and project management platforms.",
      toolsUsed: ["Zapier", "Google Sheets", "HubSpot CRM", "Slack", "Airtable"],
      techStack: ["Zapier Multi-Step Zaps", "Webhooks", "Formatter by Zapier", "Filter & Path Logic", "Error Monitoring"],
      problem: "Manual lead tracking, follow-up scheduling, and quote generation created bottlenecks in the sales pipeline. Team members spent 15+ hours weekly on repetitive data entry and status updates across multiple platforms.",
      benefits: [
        "Reduced manual data entry by 85% through automated lead enrichment and task creation",
        "Accelerated quote generation from 2 days to 15 minutes with automated lead-to-quote conversion",
        "Improved follow-up response time from 48 hours to under 5 minutes",
        "Eliminated 12+ hours of weekly administrative overhead",
        "Increased pipeline visibility with real-time task status synchronization"
      ],
      businessProblem: "The company faced an inefficient and inconsistent manual process for following up on outstanding client quotations, causing heavy administrative daily overhead for the team.",
      negativeEffects: "This manual approach led directly to dropped leads, slower conversion cycles, and delayed revenue generation.",
      solution: "The issue was solved by engineering that specific automated workflow using a weekly background scheduler to scour open workspaces, identify matching tasks, and dispatch precision email reminders via Gmail.",
      strategicBenefits: "The new system guarantees comprehensive follow-up coverage, accelerates sales response velocity, eliminates manual friction, and secures potentially lost revenue."
    },
    {
      platform: "Make",
      title: "Make",
      description: "Automated Export Account Transactions from Xero > Upload CSV to Asana, Auto Sort Gmail Attachments on Drive",
      tags: ["Make.com", "Xero", "Asana", "Google Drive"],
      color: "text-violet-500",
      logoUrl: "https://cdn.simpleicons.org/make/6D28D9",
      bgImage: "/images/make_bg_1779679599892.png",
      cta: "View Case Study >"
    },
    {
      platform: "Go High Level",
      title: "GoHighLevel",
      description: "Workflow & Marketing Automation Ecosystem for agencies.",
      tags: ["GHL", "CRM", "SaaS"],
      color: "text-emerald-500",
      isComingSoon: false,
      logoUrl: "/images/ghl_bg_1779693692076.png",
      bgImage: "/images/ghl_bg_1779693692076.png",
      cta: "View Case Study >",
      technicalSummary: "Configured comprehensive GoHighLevel CRM pipelines and automated trigger response systems. Implemented customized client onboarding funnels, scheduled booking calendars, and automated lead nurturing sequences across SMS and Email channels.",
      toolsUsed: ["GoHighLevel", "Twilio", "Stripe", "Zapier", "Webhooks"],
      workflowImage: "/src/assets/images/ghl_bg_1779693692076.png"
    },
    {
      platform: "n8n",
      title: "n8n",
      description: "Self-hosted workflow automation for complex data pipelines.",
      tags: ["n8n", "Self-hosted", "Automation"],
      color: "text-red-500",
      logoUrl: "https://cdn.simpleicons.org/n8n/EA4B71",
      bgImage: "/images/n8n_exact_bg_1779688051276.png",
      cta: "View Case Study >",
      catalog: [
        {
          type: "single" as const,
          title: "AI Telegram Recruitment Assistant",
          image: "/src/assets/images/AI Telegram Recruitment Assistant.png",
          problem: "HR teams waste hours manually vetting inbound candidate resumes, coordinating initial interview screens, and answering repetitive application FAQs.",
          effects: "Severe hiring bottlenecks, delayed communication with top-tier talent, and excessive administrative strain on recruitment managers.",
          solution: "Deployed an autonomous Telegram recruitment agent that leverages OpenAI to parse uploaded CVs against job criteria, logs qualified talent into a tracking sheet, and auto-schedules screening calls.",
          benefits: "Completely automates the top-of-funnel interview filter, transforming manual application screening into an instant, hands-free operation.",
          benefitsList: [
            { label: "Time Saved", value: "25+ Hours Saved Weekly - Eliminates manual candidate triage, message drafting, and spreadsheet cross-referencing across recruitment channels." },
            { label: "Reduced Cost", value: "$1,800+ Monthly Cost Reduction - Replaces multiple recruiter admin hours and eliminates third-party ATS subscription fragmentation." },
            { label: "Increased Revenue", value: "+45% Candidate Response Rate - AI-personalized instant replies dramatically improve applicant engagement and reduce ghosting." }
          ],
          tools: ["n8n", "Telegram", "OpenAI", "Google Calendar", "Google Sheets"]
        },
        {
          type: "single" as const,
          title: "AI Lead & Ticket Routing Agent",
          image: "/src/assets/images/AI Lead & Ticket Routing.png",
          problem: "Support and sales teams face massive operational bottlenecks manually sorting, prioritizing, and routing incoming tickets across fragmented channels.",
          effects: "Delayed response times, lost high-value sales leads, and significant human capital drained by repetitive triage tasks.",
          solution: "Built an autonomous n8n agent utilizing Webhooks, OpenAI JSON extraction, and conditional logic to instantly eliminate spam, isolate urgent requests for Discord escalation, and auto-draft CRM replies.",
          benefits: "Establishes institutional triage consistency while dropping high-priority response latency from hours to seconds.",
          benefitsList: [
            { label: "Time Saved", value: "25+ Hours Saved Weekly – Automates the manual task of reading, categorizing, and routing hundreds of messages." },
            { label: "Reduced Cost", value: "$1,400+ Monthly Cost Reduction – Minimizes triage overhead and ensures high-priority leads are never missed or mismanaged." },
            { label: "Increased Efficiency", value: "+75% Response Velocity for Urgent Tickets – Instantly escalates critical issues to the correct team members, reducing critical time-to-resolution metrics." }
          ],
          tools: ["n8n", "Telegram", "OpenAI", "Google Sheets", "Discord"]
        },
        {
          type: "single" as const,
          title: "Automated Lead Screening & Intelligent Routing Engine",
          image: "/src/assets/images/Automated Lead Screening and Intelligent Routing.png",
          problem: "Sales development reps spend critical hours manually deduplicating inbound web forms, researching target company sizes, and calculating lead scores.",
          effects: "Sluggish follow-up speeds for high-intent enterprise accounts and bloated CRM systems cluttered with junk data records.",
          solution: "Architected a zero-leakage triage engine via webhooks that blocks HubSpot duplicates, runs multi-step AI qualification through OpenRouter, and pushes instant hot-lead alerts to live Slack channels.",
          benefits: "Guarantees premium pipeline opportunities land in front of sales reps instantly while maintaining pristine database hygiene.",
          benefitsList: [
            { label: "Time Saved", value: "35+ Hours Saved Weekly – Bypasses manual prospecting steps, initial qualification emails, and data cleansing routines entirely." },
            { label: "Reduced Cost", value: "$2,200+ Monthly Cost Reduction – Minimizes lead leakage, cuts manual database management overhead, and avoids expensive point-solution data enrichment stacks." },
            { label: "Increased Efficiency", value: "+80% Faster High-Priority Routing – Eradicates manual lead sorting backlogs, ensuring elite accounts are alerted and handled inside live sales channels within seconds." }
          ],
          tools: ["n8n", "HubSpot", "OpenRouter", "Slack", "Gmail", "Youform"]
        },
        {
          type: "single" as const,
          title: "AI-Driven Client Onboarding Pipeline (v2)",
          image: "/src/assets/images/Automated Client Onboarding.png",
          problem: "Post-sale client onboarding is slow and disjointed, requiring manual cloud directory setups, workspace task creation, and client follow-ups.",
          effects: "Slower customer time-to-value, administrative handoff bottlenecks, and an inconsistent initial client impression.",
          solution: "Created an end-to-end onboarding engine triggered by contract signatures that provisions Google Drive, builds custom AI task structures in ClickUp, schedules kickoffs, and deploys a 7-day email sequence.",
          benefits: "Eliminates administrative delivery friction entirely, ensuring a flawless, zero-delay customer introduction experience.",
          benefitsList: [
            { label: "Time Saved", value: "15+ Hours Saved Weekly – Bypasses manual file structuring, calendar management, and individual check-in email dispatch tracking." },
            { label: "Reduced Cost", value: "$1,100+ Monthly Cost Reduction – Cuts operational overhead and prevents errors during internal platform and task provisioning layers." },
            { label: "Increased Efficiency", value: "0-Second Onboarding Latency – Eradicates structural delays by dropping pristine workspaces, AI tasks, and dynamic email tracks instantly." }
          ],
          tools: ["n8n", "OpenAI", "ClickUp", "Google Drive", "Google Calendar", "Gmail"]
        },
        {
          type: "single" as const,
          title: "InsightFlow: Marketing RAG & AI Analyst Pipeline",
          image: "/src/assets/images/InsightFlow Marketing RAG Pipeline.png",
          problem: "Account managers spend hours manually reviewing historical client logs and past campaign data to compile weekly performance summaries.",
          effects: "Delayed reporting intervals, high risk of metric hallucinations, and substantial human hours drained by repetitive manual account tracing.",
          solution: "Architected a weekly n8n RAG pipeline using a LangChain ReAct agent layout that pulls sheet data, queries a Qdrant Vector Database via OpenAI Embeddings for historical context, and auto-generates clean HTML performance summaries.",
          benefits: "Pairs deep semantic memory with generative AI, delivering perfectly accurate, data-validated reporting summaries with zero manual lookup required.",
          benefitsList: [
            { label: "Time Saved", value: "40+ Hours Saved Weekly – Entirely automates deep semantic context lookups, analytical synthesis, and personalized HTML email compilation." },
            { label: "Reduced Cost", value: "$2,500+ Monthly Cost Reduction – Eliminates heavy consulting and operational hours bound to reporting cycles and manual account tracing." },
            { label: "Increased Efficiency", value: "100% Contextual Accuracy – Ties the LLM brain to factual, vector-mapped database records via Qdrant to eliminate data hallucinations completely." }
          ],
          tools: ["n8n", "OpenAI", "Qdrant", "Google Sheets", "Slack", "Gmail"]
        },
        {
          type: "single" as const,
          title: "MarkOps: Automated Marketing Insights Orchestrator",
          image: "/src/assets/images/MarkOps AI Orchestrator.png",
          problem: "Marketing teams waste hours manually aggregating multi-channel ad spend data and writing narrative executive performance updates for clients.",
          effects: "Delayed weekly reporting intervals, high vulnerability to reporting math errors, and tedious administrative overhead.",
          solution: "Formed a scheduled cron workflow that pulls live Google Sheets data, uses OpenAI via OpenRouter to generate analytical ROI narratives, and dynamically pushes updates to Notion and Slack.",
          benefits: "Keeps client dashboards continuously populated with real-time performance insights, removing report-generation overhead completely.",
          benefitsList: [
            { label: "Time Saved", value: "10+ Hours Saved Weekly – Bypasses manual spreadsheet calculations, text formatting, and dashboard assembly routines entirely." },
            { label: "Reduced Cost", value: "$800+ Monthly Cost Reduction – Eliminates heavy manual operational overhead bound to weekly performance auditing cycles." },
            { label: "Increased Efficiency", value: "100% Reporting Velocity – Guarantees precise, multi-channel performance data is updated, written, and delivered to client hubs instantly at 8 AM every Monday." }
          ],
          tools: ["n8n", "Google Sheets", "OpenRouter", "Notion", "Slack"]
        }
      ],
      technicalSummary: "Built an AI-powered Telegram recruitment assistant using self-hosted n8n workflows that automates candidate screening, intelligent scoring, and interview scheduling through LLM integration.",
      toolsUsed: ["n8n", "Telegram Bot API", "OpenAI GPT", "Google Sheets", "Google Calendar", "Google Drive", "Discord", "HubSpot", "OpenRouter", "Slack", "Gmail", "ClickUp", "Qdrant", "Notion", "Youform", "PostgreSQL", "Webhooks"],
      techStack: ["n8n Multi-Node Workflows", "Self-Hosted Infrastructure", "LLM API Integration", "Telegram Bot Framework", "Webhook Triggers"],
      problem: "Recruitment teams spent 25+ hours weekly manually screening Telegram applications, drafting repetitive responses, and coordinating interview schedules across high-volume candidate pipelines.",
      benefits: [
        "Reduced manual candidate screening time by 90% through AI-powered qualification scoring",
        "Accelerated time-to-hire from 2 weeks to 3 days with automated interview scheduling",
        "Improved candidate response rate by 45% with instant AI-personalized Telegram replies",
        "Eliminated 25+ hours of weekly administrative recruitment overhead",
        "Increased pipeline visibility with real-time candidate status tracking in Google Sheets"
      ],
      businessProblem: "HR teams struggled with an overwhelming volume of Telegram-based job applications, manually screening candidates, sending inconsistent responses, and losing top talent to faster-moving competitors.",
      negativeEffects: "This manual bottleneck caused severe candidate ghosting, biased shortlisting decisions, scheduling chaos, and direct revenue loss from unfilled positions sitting open far too long.",
      solution: "The issue was solved by architecting a self-hosted n8n workflow engine that intercepts Telegram applications, runs AI-powered candidate qualification scoring, and auto-dispatches personalized responses and interview scheduling directly within Telegram.",
      strategicBenefits: "The intelligent recruitment pipeline transforms chaotic Telegram hiring into a precision-engineered, AI-driven talent acquisition machine that guarantees consistent evaluation, instant engagement, and zero candidate drop-off."
    }
  ],
  references: [
    {
      name: "Aldrin Mendoza",
      role: "Certified Go High Level Admin",
      type: "Endorsement"
    },
    {
      name: "RJ Villamor",
      role: "n8n Ambassador",
      type: "Endorsement"
    },
    {
      name: "Christian Go",
      role: "Workflow Architect",
      type: "Endorsement"
    }
  ]
};

// --- Components ---

interface Experience {
  company: string;
  client?: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

const ExperienceItem = ({ exp, idx }: { exp: Experience; idx: number; key?: React.Key }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative pl-8 border-l border-border-dark group"
    >
      <motion.div 
        whileInView={{ scale: [1, 1.5, 1] }}
        className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-brand-primary rounded-full" 
      />
      <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
        <div>
          <h3 className="text-2xl font-bold group-hover:text-brand-primary transition-colors">{exp.role}</h3>
          <div className="text-brand-primary font-medium">
            {exp.company} {exp.client && <span className="text-text-muted">| Client: {exp.client}</span>}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="px-3 py-1 bg-card-dark rounded-full text-xs font-mono text-text-muted">
            {exp.period}
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs font-bold text-brand-primary hover:text-heading transition-colors uppercase tracking-wider"
          >
            {isExpanded ? (
              <>Hide Details <ChevronUp size={14} /></>
            ) : (
              <>View Details <ChevronDown size={14} /></>
            )}
          </button>
        </div>
      </div>
      <p className="text-neutral-500 text-sm mb-6 flex items-center gap-2">
        <MapPin size={14} /> {exp.location}
      </p>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.ul 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="space-y-3 overflow-hidden"
          >
            {exp.highlights.map((h: string, i: number) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-text-muted"
              >
                <CheckCircle2 size={16} className="text-brand-primary mt-1 shrink-0" />
                <span>{h}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-3"
    >
      <div className="h-px w-10 bg-brand-primary/50" />
      <span className="text-brand-primary font-mono text-[10px] uppercase tracking-[0.2em] font-bold">{subtitle || "Section"}</span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-bold tracking-tight"
    >
      {title}
    </motion.h2>
  </div>
);

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState<{ id: string; x: number; y: number }[]>([]);
  const [particles, setParticles] = useState<{ id: string; x: number; y: number; angle: number; distance: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      
      const timestamp = Date.now();
      const randomSuffix = Math.random().toString(36).substring(2, 9);
      
      // Create ripple
      const newRipple = { id: `ripple-${timestamp}-${randomSuffix}`, x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev, newRipple]);
      
      // Create particles burst
      const newParticles = Array.from({ length: 8 }).map((_, i) => ({
        id: `particle-${timestamp}-${randomSuffix}-${i}`,
        x: e.clientX,
        y: e.clientY,
        angle: (i * 45) * (Math.PI / 180),
        distance: 40 + Math.random() * 40
      }));
      setParticles(prev => [...prev, ...newParticles]);

      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 800);
      
      setTimeout(() => {
        setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
      }, 1000);
    };
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-brand-primary/30 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isClicking ? 1.5 : 1,
          borderColor: "var(--brand-primary)",
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      />
      
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-primary rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.1 }}
      />

      <AnimatePresence>
      </AnimatePresence>
    </>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [enlargedItem, setEnlargedItem] = useState<CatalogItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!enlargedItem) {
      setIsImageZoomed(false);
    }
  }, [enlargedItem]);

  const currentEnlargedItem: CatalogItem | null = enlargedItem && selectedProject
    ? (selectedProject.catalog?.length && selectedProject.catalog.length > 0
        ? selectedProject.catalog[currentImageIndex]
        : { type: "single", title: "Workflow Logic", image: selectedProject.workflowImage || selectedProject.bgImage })
    : null;

  const currentSlide: CatalogItem | undefined = selectedProject?.catalog?.[currentImageIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;

      const catalogLength = selectedProject.catalog?.length || 0;

      if (e.key === 'ArrowRight' && catalogLength > 1) {
        setCurrentImageIndex(prev => (prev === catalogLength - 1 ? 0 : prev + 1));
      } else if (e.key === 'ArrowLeft' && catalogLength > 1) {
        setCurrentImageIndex(prev => (prev === 0 ? catalogLength - 1 : prev - 1));
      } else if (e.key === 'Escape') {
        if (enlargedItem) {
          setEnlargedItem(null);
        } else {
          setSelectedProject(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, enlargedItem, currentImageIndex]);

  const getProjectColor = (color: string) => isDarkMode ? color : color.replace('-500', '-600');

  const hasVisuals = selectedProject && (!!selectedProject.workflowImage || (selectedProject.catalog && selectedProject.catalog.length > 0));
  const showDetails = !!(selectedProject && (
    selectedProject.description || 
    selectedProject.technicalSummary || 
    (selectedProject.toolsUsed && selectedProject.toolsUsed.length > 0) || 
    (selectedProject.tags && selectedProject.tags.length > 0) ||
    selectedProject.businessProblem ||
    selectedProject.negativeEffects ||
    selectedProject.solution ||
    selectedProject.strategicBenefits ||
    currentSlide?.problem ||
    currentSlide?.effects ||
    currentSlide?.solution ||
    currentSlide?.benefits ||
    currentSlide?.benefitsList ||
    currentSlide?.tools
  ));
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved ? saved === 'dark' : !window.matchMedia('(prefers-color-scheme: light)').matches;
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen technical-grid selection:bg-brand-primary selection:text-bg-dark">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-md border-b border-border-dark transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">F</span>
            </div>
            <span className="font-bold text-xl tracking-tight">
              Fidel Juan Resuello
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Experience', 'Projects', 'Contact'].map((item, idx) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-sm font-medium text-text-muted hover:text-brand-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
              </motion.a>
            ))}

            <motion.button
              onClick={toggleTheme}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl bg-card-dark border border-border-dark text-text-muted hover:text-brand-primary transition-colors"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDarkMode ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
            
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-2.5 bg-brand-primary text-white rounded-lg text-sm font-bold shadow-[0_0_20px_var(--shadow-brand)] hover:scale-105 transition-all active:scale-95"
            >
              Hire Me
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-card-dark border border-border-dark text-text-muted hover:text-brand-primary transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border-dark bg-bg-dark/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {['Services', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-text-muted hover:text-brand-primary transition-colors py-2"
                  >
                    {item}
                  </a>
                ))}
                
                <div className="flex items-center gap-4 pt-4 border-t border-border-dark">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-xl bg-card-dark border border-border-dark text-text-muted hover:text-brand-primary transition-colors"
                    aria-label="Toggle Theme"
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 px-6 py-3 bg-brand-primary text-white rounded-lg text-sm font-bold text-center shadow-[0_0_20px_var(--shadow-brand)]"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="bg-bg-dark px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-left items-start justify-start"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/30 border border-brand-primary/20 text-brand-primary text-xs font-bold mb-8"
            >
              <Zap size={14} className="animate-pulse" />
              AVAILABLE FOR NEW PROJECTS
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
              Scaling <span className="text-brand-primary">Efficiency</span> Through AI.
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed mb-12">
              {RESUME_DATA.summary}
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="px-8 py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-brand-primary/20 transition-all hover:scale-105"
              >
                View Projects <ArrowUpRight size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-4 border border-border-dark text-text-main rounded-xl font-bold flex items-center gap-2 hover:bg-card-dark transition-all"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          <div className="flex items-center justify-center">
            <img
              src={portfolioImage}
              alt="Portfolio"
              className="rounded-full aspect-square object-cover object-right w-72 h-72 md:w-[460px] md:h-[460px] lg:w-[500px] lg:h-[500px] mx-auto max-w-none"
            />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-card-dark/30 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Specialized Services" subtitle="Capabilities" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <Workflow />, 
                title: "Workflow Automation", 
                desc: "End-to-end design and optimization of business processes using No-Code/Low-Code tools like Zapier and Make." 
              },
              { 
                icon: <Database />, 
                title: "CRM Optimization", 
                desc: "Setup, customization, and data structuring for sales pipelines, lead routing, and lifecycle tracking." 
              },
              { 
                icon: <Zap />, 
                title: "AI Integrations", 
                desc: "Leveraging LLMs and AI-powered automation to enhance decision-making and customer response times." 
              },
              { 
                icon: <Code2 />, 
                title: "API & Webhooks", 
                desc: "Seamlessly connecting disparate software systems through custom API integrations and webhook listeners." 
              },
              { 
                icon: <Briefcase />, 
                title: "Business Process Automation", 
                desc: "Transforming manual, repetitive tasks into scalable, ROI-driven automated systems." 
              },
              { 
                icon: <Terminal />, 
                title: "Technical Support", 
                desc: "High-level application support, troubleshooting, and maintenance for enterprise-grade systems." 
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 glow-on-hover transition-all group relative overflow-hidden"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-bg-dark transition-all duration-300 shadow-[0_0_15px_var(--shadow-brand)]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-text-muted leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Work Experience" subtitle="Career Path" />
          
          <div className="space-y-12">
            {RESUME_DATA.experience.map((exp, idx) => (
              <ExperienceItem key={idx} exp={exp} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-card-dark/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Scalable Projects" subtitle="Portfolio" />
          
          <div className="grid md:grid-cols-2 gap-8">
            {RESUME_DATA.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                id={project.platform.toLowerCase().replace(/\s+/g, '-') + '-card'}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="glass-card group cursor-pointer relative overflow-hidden"
                onClick={() => {
                  if (project.isComingSoon && project.cta === "Coming Soon") return;
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="aspect-video bg-black overflow-hidden relative">
                  {(project as any).bgImage && (
                    <img 
                      src={(project as any).bgImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover rounded-t-xl"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  
                  <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-700 ${
                    isDarkMode 
                      ? 'from-bg-dark/70 via-bg-dark/10 to-transparent group-hover:opacity-20' 
                      : 'from-black/80 via-black/25 to-transparent group-hover:opacity-40'
                  }`} />
                  <div className="absolute bottom-6 left-6 pr-6 flex items-center gap-4">
                    {project.logoUrl && (
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 ${
                        project.platform === "Go High Level"
                          ? "bg-white p-2 border border-white group-hover:bg-white"
                          : "bg-card-dark border border-border-dark p-3 backdrop-blur-sm group-hover:bg-card-dark/80"
                      }`}>
                        <img 
                          src={project.logoUrl} 
                          alt={`${project.platform} logo`} 
                          className={`w-full h-full object-contain transition-all duration-300 ${
                            project.platform !== "Go High Level" && !isDarkMode && (project as any).invertInLight ? 'invert brightness-0' : ''
                          }`}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <h3 className={`text-5xl font-bold transition-all duration-500 leading-tight tracking-tighter group-hover:translate-x-2 ${getProjectColor(project.color)}`}>
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8 flex items-center justify-between bg-card-dark backdrop-blur-md border-t border-border-dark">
                  <span className={`text-xl font-bold ${getProjectColor(project.color)}`}>{project.platform}</span>
                  <div 
                    className={`${project.isComingSoon && project.cta === "Coming Soon" ? 'cursor-not-allowed' : ''}`}
                  >
                    <motion.div 
                      whileHover={project.isComingSoon && project.cta === "Coming Soon" ? {} : { x: 8, color: "var(--color-brand-primary)" }}
                      className={`flex items-center gap-2 text-sm font-bold transition-all duration-300 ${project.isComingSoon && project.cta === "Coming Soon" ? 'text-text-muted' : ''}`}
                    >
                      {(project as any).cta} 
                      {!(project.isComingSoon && project.cta === "Coming Soon") && <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Study Modal (Lightbox) */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-bg-dark/95 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${isDarkMode ? 'bg-[#0b0c10] border-white/10' : 'bg-white border-border-dark'} w-full max-w-5xl h-[85vh] rounded-2xl flex flex-col overflow-hidden`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-50 p-2 bg-card-dark hover:bg-card-dark/80 rounded-full border border-border-dark transition-colors"
                >
                  <X size={24} />
                </button>

                <div className={`${hasVisuals && showDetails ? "grid grid-cols-1 lg:grid-cols-12 gap-0 h-full" : "block"}`}>
                  {/* Left Side: Image/Workflow */}
                  {hasVisuals && (
                    <div className={`p-4 md:p-6 lg:p-8 bg-card-dark/50 flex flex-col justify-between select-none h-full min-h-0 ${hasVisuals && showDetails ? 'lg:col-span-7 xl:col-span-8 border-b lg:border-b-0 lg:border-r border-border-dark' : 'w-full'}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`text-xs font-mono uppercase tracking-widest ${selectedProject.color}`}>
                          {selectedProject.catalog?.length && selectedProject.catalog.length > 0 
                            ? `Visual Catalog (${currentImageIndex + 1}/${selectedProject.catalog.length})` 
                            : 'Technical Workflow'}
                        </div>
                      </div>

                      {selectedProject.catalog?.length && selectedProject.catalog.length > 0 ? (
                        <div className="relative w-full mx-auto flex-1 min-h-0 flex items-center justify-center p-2">
                          {/* Flanking Prev button */}
                          {selectedProject.catalog.length > 1 && (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(prev => (prev === 0 ? (selectedProject.catalog?.length ?? 1) - 1 : prev - 1));
                              }}
                              className="absolute left-2 lg:left-4 z-40 p-3 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white transition-all cursor-pointer shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95"
                              title="Previous Slide"
                            >
                              <ChevronLeft size={24} />
                            </button>
                          )}

                          {/* --- CLEAN VIEWPORT BOUNDS --- */}
                          <div 
                            className="flex-1 w-full min-h-0 max-h-full flex items-center justify-center p-2 bg-black/10 overflow-hidden relative"
                            onClick={() => {
                              const itemToEnlarge = selectedProject?.catalog?.[currentImageIndex];
                              if (itemToEnlarge) {
                                setEnlargedItem(itemToEnlarge);
                              }
                            }}
                          >
                            <div className="w-full h-full flex items-center justify-center cursor-zoom-in">
                              {selectedProject.catalog?.[currentImageIndex]?.type === "combined" ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full items-center justify-center">
                                  {selectedProject.catalog?.[currentImageIndex]?.images?.map((imgUrl: string, idx: number) => (
                                    <img 
                                      key={idx}
                                      src={imgUrl} 
                                      alt={`${selectedProject.title} original blueprint workflow ${idx + 1}`} 
                                      className="w-auto max-w-full max-h-full object-contain block rounded-lg antialiased" 
                                      style={{ 
                                        imageRendering: '-webkit-optimize-contrast',
                                        WebkitFontSmoothing: 'antialiased',
                                        transform: 'none',
                                        filter: 'none'
                                      }}
                                      referrerPolicy="no-referrer"
                                    />
                                  ))}
                                </div>
                              ) : (
                                <img 
                                  src={selectedProject.catalog?.[currentImageIndex]?.image} 
                                  alt={`${selectedProject.title} original blueprint workflow`} 
                                  className="w-auto max-w-full max-h-full object-contain block rounded-lg antialiased" 
                                  style={{ 
                                    imageRendering: '-webkit-optimize-contrast',
                                    WebkitFontSmoothing: 'antialiased',
                                    transform: 'none',
                                    filter: 'none'
                                  }} 
                                  referrerPolicy="no-referrer"
                                />
                              )}
                            </div>
                            
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const itemToEnlarge = selectedProject?.catalog?.[currentImageIndex];
                                if (itemToEnlarge) {
                                  setEnlargedItem(itemToEnlarge);
                                }
                              }}
                              className="absolute bottom-4 right-4 px-4 py-2 bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 rounded-lg text-white text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl"
                            >
                              <Maximize2 size={14} />
                              View Full Blueprint
                            </button>
                          </div>

                          {/* Flanking Next button */}
                          {selectedProject.catalog?.length && selectedProject.catalog.length > 1 && (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(prev => (prev === (selectedProject.catalog?.length ?? 1) - 1 ? 0 : prev + 1));
                              }}
                              className="absolute right-2 lg:right-4 z-40 p-3 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white transition-all cursor-pointer shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95"
                              title="Next Slide"
                            >
                              <ChevronRight size={24} />
                            </button>
                          )}
                        </div>
                      ) : (
                        <div 
                          className="flex-1 w-full min-h-0 max-h-full flex items-center justify-center p-2 bg-black/10 overflow-hidden relative"
                          onClick={() => setEnlargedItem({ type: "single", title: "Workflow Logic", image: selectedProject.workflowImage })}
                        >
                          <div className="w-full h-full flex items-center justify-center cursor-zoom-in">
                            <img 
                              src={selectedProject.workflowImage} 
                              alt="Workflow Logic" 
                              className="w-auto max-w-full max-h-full object-contain block rounded-lg antialiased" 
                              style={{ 
                                imageRendering: '-webkit-optimize-contrast',
                                WebkitFontSmoothing: 'antialiased',
                                transform: 'none',
                                filter: 'none'
                              }}
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setEnlargedItem({ type: "single", title: "Workflow Logic", image: selectedProject.workflowImage });
                            }}
                            className="absolute bottom-4 right-4 px-4 py-2 bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 rounded-lg text-white text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl"
                          >
                            <Maximize2 size={14} />
                            View Full Blueprint
                          </button>
                        </div>
                      )}

                      {/* Indicator Bullets for the slides */}
                      {selectedProject.catalog?.length && selectedProject.catalog.length > 1 && (
                        <div className="flex justify-center flex-wrap gap-1.5 mt-4">
                          {selectedProject.catalog.map((_: any, i: number) => (
                            <button
                              key={i}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(i);
                              }}
                              className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                                i === currentImageIndex 
                                  ? 'bg-orange-500' 
                                  : 'bg-white/25 hover:bg-white/50'
                              }`}
                              title={`Slide ${i + 1}`}
                            />
                          ))}
                        </div>
                      )}

                      {selectedProject.workflowImage ? (
                        <p className="mt-auto pt-4 text-xs text-text-muted italic text-center">
                          Visual representation of the multi-step automation logic. Click the image to expand details.
                        </p>
                      ) : (
                        <p className="mt-auto pt-4 text-xs text-text-muted/60 italic text-center">
                          Click active slide or chevron arrows to browse and expand into full pixel-perfect clarity.
                        </p>
                      )}
                    </div>
                  )}

                  {/* Right Side: Details */}
                  {showDetails && (
                    <div className={`p-6 lg:p-8 flex flex-col h-full overflow-y-auto custom-scrollbar ${hasVisuals ? 'lg:col-span-5 xl:col-span-4' : 'w-full'}`}>
                      <div className="space-y-6">
                        {((currentSlide?.tools?.length ?? 0) > 0 || (selectedProject?.toolsUsed?.length ?? 0) > 0 || (selectedProject?.tags?.length ?? 0) > 0) && (
                          <div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                              <Cpu size={24} className={selectedProject.color} />
                              Tools & Integration
                            </h3>
                            <div className="flex flex-wrap gap-4">
                              {(currentSlide?.tools || selectedProject?.toolsUsed || selectedProject?.tags || []).map((tool: string, i: number) => (
                                <span key={i} className="px-5 py-2.5 bg-card-dark border border-border-dark rounded-2xl text-base font-bold shadow-sm">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {(currentSlide?.problem || selectedProject.businessProblem) && (
                          <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                              <AlertCircle size={24} className={selectedProject.color} />
                              Business Problem
                            </h3>
                            <p className="text-text-muted leading-relaxed">
                              {currentSlide?.problem || selectedProject.businessProblem}
                            </p>
                          </div>
                        )}

                        {(currentSlide?.effects || selectedProject.negativeEffects) && (
                          <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                              <XCircle size={24} className={selectedProject.color} />
                              Negative Effects
                            </h3>
                            <p className="text-text-muted leading-relaxed">
                              {currentSlide?.effects || selectedProject.negativeEffects}
                            </p>
                          </div>
                        )}

                        {(currentSlide?.solution || selectedProject.solution) && (
                          <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                              <Lightbulb size={24} className={selectedProject.color} />
                              The Solution
                            </h3>
                            <p className="text-text-muted leading-relaxed">
                              {currentSlide?.solution || selectedProject.solution}
                            </p>
                          </div>
                        )}

                        {(currentSlide?.benefitsList || currentSlide?.benefits || selectedProject?.strategicBenefits) && (
                          <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                              <CheckCircle2 size={24} className={selectedProject?.color} />
                              Strategic Benefits
                            </h3>
                            {currentSlide?.benefitsList ? (
                              <div className="space-y-3">
                                {currentSlide.benefitsList.map((item, i) => (
                                  <div key={i} className="flex flex-col gap-0.5">
                                    <span className="font-bold text-sm">{item.label}</span>
                                    <span className="text-text-muted text-sm leading-relaxed">{item.value}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-text-muted leading-relaxed">
                                {currentSlide?.benefits || selectedProject?.strategicBenefits}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>        {/* Fullscreen Lightbox */}
        <AnimatePresence>
          {enlargedItem && currentEnlargedItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-6"
              onClick={() => setEnlargedItem(null)}
            >
              {/* Floating Title (Absolute to maximize vertical space) */}
              {currentEnlargedItem.title && (
                <div className="absolute top-6 left-6 bg-black/65 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 z-[10000] pointer-events-none hidden sm:block">
                  <span className="text-white text-xs font-mono uppercase tracking-widest font-semibold">
                    {currentEnlargedItem.title}
                  </span>
                </div>
              )}

              {/* Slide Counter Overlay for Lightbox */}
              {selectedProject?.catalog?.length && selectedProject.catalog.length > 1 && (
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[10000] bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-white text-sm font-mono font-semibold shadow-md pointer-events-none">
                  Slide {currentImageIndex + 1} of {selectedProject.catalog.length}
                </div>
              )}

              {/* Close Button */}
              <button 
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-[10000] cursor-pointer transition-colors shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95"
                onClick={() => setEnlargedItem(null)}
                title="Close"
              >
                <X size={28} />
              </button>

              {/* Floating Navigation Chevrons inside Lightbox */}
              {selectedProject?.catalog?.length && selectedProject.catalog.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => (prev === 0 ? (selectedProject.catalog?.length ?? 1) - 1 : prev - 1));
                    }}
                    className="absolute left-6 z-[10000] p-4 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white transition-all cursor-pointer shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 animate-fade-in"
                    title="Previous Slide"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => (prev === (selectedProject.catalog?.length ?? 1) - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-6 z-[10000] p-4 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white transition-all cursor-pointer shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 animate-fade-in"
                    title="Next Slide"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}

              <div className="w-full h-full max-h-[92vh] flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                {currentEnlargedItem.type === "combined" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center max-w-5xl mx-auto">
                    {currentEnlargedItem.images?.map((imgUrl: string, idx: number) => (
                      <div key={idx} className="bg-card-dark/60 border border-border-dark rounded-2xl p-4 flex items-center justify-center">
                        <img 
                          src={imgUrl}
                          alt={`${currentEnlargedItem.title} - Zoom View ${idx + 1}`}
                          className="max-w-full h-auto object-contain block rounded-xl antialiased"
                          style={{ 
                            transform: 'none', 
                            filter: 'none' 
                          }}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <img 
                    src={currentEnlargedItem.image}
                    alt={currentEnlargedItem.title || "Enlarged View"}
                    className="max-w-full max-h-[80vh] h-auto object-contain mx-auto block rounded-xl antialiased"
                    style={{ 
                      transform: 'none', 
                      filter: 'none' 
                    }}
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Testimonials/References Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Professional Endorsements" subtitle="Network" />
          
          <div className="grid md:grid-cols-3 gap-6">
            {RESUME_DATA.references.map((ref, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 text-center group"
              >
                <div className="w-16 h-16 bg-card-dark rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border border-border-dark group-hover:border-brand-primary transition-colors">
                  <img src={`https://picsum.photos/seed/${ref.name}/100/100`} alt={ref.name} referrerPolicy="no-referrer" />
                </div>
                <MessageSquare className="text-brand-primary/20 mx-auto mb-4 group-hover:text-brand-primary/40 transition-colors" size={32} />
                <p className="text-text-muted italic mb-6">
                  "Fidel is a highly skilled professional in the field of {ref.role.toLowerCase()}. His dedication to workflow architecture and automation is exceptional."
                </p>
                <div className="font-bold">{ref.name}</div>
                <div className="text-xs text-text-muted uppercase tracking-widest mt-1">{ref.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-brand-primary/5 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-primary/5 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-16 grid lg:grid-cols-2 gap-12"
          >
            <div>
              <SectionHeading title="Let's Build Something Efficient" subtitle="Contact" />
              <p className="text-text-muted mb-10 text-lg">
                Ready to automate your business processes or optimize your CRM? Reach out and let's discuss how I can help you scale.
              </p>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: <img 
                      src="https://cdn.simpleicons.org/gmail/EA4335" 
                      className="w-6 h-6 group-hover:brightness-0 transition-all" 
                      alt="Gmail" 
                      referrerPolicy="no-referrer" 
                    />, 
                    label: "Gmail", 
                    value: RESUME_DATA.email, 
                    href: `mailto:${RESUME_DATA.email}`, 
                    color: "#EA4335" 
                  },
                  { 
                    icon: <img 
                      src="https://cdn.simpleicons.org/whatsapp/25D366" 
                      className="w-6 h-6 group-hover:brightness-0 transition-all" 
                      alt="WhatsApp" 
                      referrerPolicy="no-referrer" 
                    />, 
                    label: "WhatsApp", 
                    value: RESUME_DATA.phone, 
                    href: `https://wa.me/63${RESUME_DATA.phone.substring(1)}`, 
                    color: "#25D366" 
                  },
                  { icon: <Linkedin />, label: "LinkedIn", value: "fidel-resuello", href: RESUME_DATA.linkedin, color: "#0077B5" },
                  { 
                    icon: <img 
                      src="https://cdn.simpleicons.org/upwork/6FDA44" 
                      className="w-6 h-6 group-hover:brightness-0 transition-all" 
                      alt="Upwork" 
                      referrerPolicy="no-referrer" 
                    />, 
                    label: "Upwork", 
                    value: "View Profile", 
                    href: RESUME_DATA.upwork,
                    color: "#6FDA44"
                  },
                  { 
                    icon: <img 
                      src="https://www.onlinejobs.ph/favicon.ico" 
                      className="w-6 h-6 group-hover:brightness-0 transition-all" 
                      style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(164deg) brightness(101%) contrast(101%)' }}
                      alt="OnlineJobs" 
                      referrerPolicy="no-referrer" 
                      onError={(e) => { 
                        (e.target as HTMLImageElement).src = 'https://cdn.simpleicons.org/google/00AEEF';
                      }} 
                    />, 
                    label: "OnlineJobs.ph", 
                    value: "View Profile", 
                    href: RESUME_DATA.onlinejobs,
                    color: "#00AEEF"
                  }
                ].map((item, i) => (
                  <motion.a 
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div 
                      className="w-12 h-12 bg-card-dark rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--item-color)] group-hover:text-bg-dark"
                      style={{ 
                        color: item.color,
                        '--item-color': item.color 
                      } as any}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500 uppercase font-mono">{item.label}</div>
                      <div 
                        className="font-medium transition-colors group-hover:text-[var(--item-color)]"
                        style={{ '--item-color': item.color } as any}
                      >
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-8 py-12 px-6 bg-card-dark border border-border-dark rounded-3xl relative overflow-hidden group">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-brand-primary mb-2 relative z-10">
                <Zap size={40} className="animate-pulse" />
              </div>
              
              <div className="text-center relative z-10">
                <h3 className="text-3xl font-bold mb-4">Ready to Automate?</h3>
                <p className="text-text-muted max-w-md mx-auto mb-8">
                  Let's discuss how we can cut your manual work by 70% and streamline your operations with a custom AI & CRM strategy.
                </p>
              </div>

              <motion.a 
                href="https://calendly.com/fidelresuello413/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-brand-primary text-white rounded-2xl font-bold text-lg shadow-2xl shadow-brand-primary/30 flex items-center gap-3 relative z-10"
              >
                Book a Free Consultation <ChevronRight size={20} />
              </motion.a>
              
              <p className="text-xs text-text-muted font-mono relative z-10">
                Available: Mon - Sun · 30-min Strategy Session
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">F</span>
            </div>
            <span className="font-bold tracking-tight">
              Fidel Juan Resuello
            </span>
          </div>
          
          <div className="text-neutral-500 text-sm font-mono">
            © {new Date().getFullYear()} — Built with Precision
          </div>
          
          <div className="flex items-center gap-6">
            <motion.a whileHover={{ y: -3 }} href={RESUME_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brand-primary transition-colors"><Linkedin size={20} /></motion.a>
            <motion.a whileHover={{ y: -3 }} href={`mailto:${RESUME_DATA.email}`} className="text-text-muted hover:text-brand-primary transition-colors">
              <img src="https://cdn.simpleicons.org/gmail/EA4335" className="w-5 h-5 grayscale hover:grayscale-0 transition-all" alt="Gmail" referrerPolicy="no-referrer" />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}
