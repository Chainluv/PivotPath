"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import CareerCard from "@/components/CareerCard";

type Career = {
  title: string;
  salary: string;
  reason: string;
  steps: string[];
  funding: string[];
  jobs: string[];
};

const mockCareerData: Record<string, Career[]> = {
  tech: [
    {
      title: "Frontend Developer",
      salary: "$65,000 – $115,000",
      reason:
        "This path is strong for career changers who enjoy problem-solving, visual thinking, and building things people use every day.",
      steps: [
        "Learn HTML, CSS, JavaScript, and React fundamentals",
        "Build 3 portfolio projects that solve real problems",
        "Apply to junior roles, apprenticeships, and contract work",
      ],
      funding: [
        "Adult learner scholarships",
        "State workforce retraining grants",
        "Online degree or certificate tuition support",
      ],
      jobs: [
        "Junior Frontend Developer — Remote",
        "Web Content Assistant — Hybrid",
        "Entry-Level UI Support Specialist — On-site",
      ],
    },
    {
      title: "UI / UX Designer",
      salary: "$70,000 – $120,000",
      reason:
        "A good fit for people with communication, design, customer-facing, or creative backgrounds who want to move into product and digital work.",
      steps: [
        "Study UX basics, wireframing, and user research",
        "Create 2–3 case studies for a portfolio",
        "Target internships, freelance projects, and junior product teams",
      ],
      funding: [
        "Design bootcamp scholarships",
        "Workforce innovation training funds",
        "Community college certificate aid",
      ],
      jobs: [
        "Junior UX Designer — Remote",
        "Product Design Coordinator — Hybrid",
        "UI Designer I — Remote",
      ],
    },
    {
      title: "Data Analyst",
      salary: "$60,000 – $105,000",
      reason:
        "Great for people who like patterns, spreadsheets, business operations, reporting, and translating information into decisions.",
      steps: [
        "Learn Excel, SQL, dashboards, and data storytelling",
        "Build sample projects using public datasets",
        "Apply to analyst, operations, and reporting roles",
      ],
      funding: [
        "Career transition scholarships",
        "Local workforce grants",
        "Certificate reimbursement programs",
      ],
      jobs: [
        "Junior Data Analyst — Remote",
        "Operations Analyst — Hybrid",
        "Reporting Specialist — Remote",
      ],
    },
  ],
  healthcare: [
    {
      title: "Medical Coder",
      salary: "$45,000 – $75,000",
      reason:
        "This path can work well for detail-oriented career changers looking for structured, credential-based work with remote potential.",
      steps: [
        "Learn medical terminology and coding systems",
        "Prepare for a coding certification",
        "Apply to hospitals, clinics, and billing providers",
      ],
      funding: [
        "Healthcare workforce grants",
        "Adult certification scholarships",
        "Employer-sponsored training pathways",
      ],
      jobs: [
        "Medical Coding Trainee — Remote",
        "Coding Specialist I — Hybrid",
        "Healthcare Claims Analyst — Remote",
      ],
    },
    {
      title: "Health Information Technician",
      salary: "$45,000 – $70,000",
      reason:
        "A strong fit for career changers who want a healthcare-adjacent role without direct bedside patient care.",
      steps: [
        "Study health records, compliance, and data management",
        "Complete a certificate or degree pathway",
        "Apply to hospitals, insurers, and clinics",
      ],
      funding: [
        "State retraining grants",
        "Healthcare education scholarships",
        "Community college aid programs",
      ],
      jobs: [
        "Health Records Specialist — On-site",
        "HIM Assistant — Hybrid",
        "Data Quality Coordinator — Healthcare",
      ],
    },
    {
      title: "Patient Care Coordinator",
      salary: "$42,000 – $65,000",
      reason:
        "Ideal for people with customer service, scheduling, admin, or hospitality experience who want to pivot into healthcare operations.",
      steps: [
        "Build knowledge of scheduling and healthcare workflows",
        "Strengthen communication and software skills",
        "Apply to clinics, urgent care, and specialty practices",
      ],
      funding: [
        "Short-term healthcare training grants",
        "Workforce development scholarships",
        "Employer-sponsored onboarding programs",
      ],
      jobs: [
        "Patient Access Coordinator",
        "Care Navigator Assistant",
        "Medical Office Coordinator",
      ],
    },
  ],
  trades: [
    {
      title: "Electrician Apprentice",
      salary: "$40,000 – $85,000+",
      reason:
        "A strong path for hands-on career changers who want skill-building, paid training, and long-term earning potential.",
      steps: [
        "Research apprenticeship programs in your state",
        "Apply to union and non-union training pathways",
        "Prepare for entry requirements and interviews",
      ],
      funding: [
        "Apprenticeship grants",
        "State workforce funds",
        "Trade school scholarships",
      ],
      jobs: [
        "Electrical Apprentice",
        "Electrical Helper",
        "Apprentice Installer",
      ],
    },
    {
      title: "HVAC Technician",
      salary: "$45,000 – $80,000+",
      reason:
        "Good for people who want practical work, strong demand, and a direct path into a stable skilled trade.",
      steps: [
        "Complete HVAC fundamentals training",
        "Study for certifications if needed",
        "Apply to local service companies and apprenticeship roles",
      ],
      funding: [
        "Trade retraining grants",
        "Technical college assistance",
        "Workforce scholarship programs",
      ],
      jobs: [
        "HVAC Installer Helper",
        "Entry-Level Service Technician",
        "Maintenance Technician",
      ],
    },
    {
      title: "Plumbing Apprentice",
      salary: "$40,000 – $85,000+",
      reason:
        "This path fits hands-on learners who want paid training and a practical route into long-term earning power.",
      steps: [
        "Locate apprenticeship and helper opportunities",
        "Build familiarity with tools and safety basics",
        "Apply to local contractors and training programs",
      ],
      funding: [
        "Trade apprenticeship assistance",
        "State upskilling grants",
        "Adult learner support funds",
      ],
      jobs: [
        "Plumber Apprentice",
        "Plumbing Helper",
        "Maintenance Plumbing Assistant",
      ],
    },
  ],
};

export default function ResultsPage() {
  const searchParams = useSearchParams();

  const currentRole = searchParams.get("currentRole") || "your current field";
  const targetInterest = searchParams.get("targetInterest") || "tech";
  const educationLevel = searchParams.get("educationLevel") || "not specified";
  const location = searchParams.get("location") || "your area";
  const goal = searchParams.get("goal") || "switch careers";

  const careers = useMemo(() => {
    return mockCareerData[targetInterest] || mockCareerData.tech;
  }, [targetInterest]);

  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
              PivotPath Results
            </p>
            <h1 className="mt-2 text-3xl font-semibold md:text-5xl">
              Recommended paths for your pivot
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/65 md:text-lg">
              Based on your interest in <span className="text-white">{targetInterest}</span>,
              your background in <span className="text-white">{currentRole}</span>, and your goal to{" "}
              <span className="text-white">{goal}</span>, here are sample paths, funding options,
              and fresh opportunity directions for <span className="text-white">{location}</span>.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Edit Search
          </Link>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/50">Current Background</p>
            <p className="mt-1 font-medium">{currentRole}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/50">Target Area</p>
            <p className="mt-1 font-medium capitalize">{targetInterest}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/50">Education</p>
            <p className="mt-1 font-medium capitalize">{educationLevel}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/50">Location</p>
            <p className="mt-1 font-medium">{location}</p>
          </div>
        </div>

        <div className="grid gap-6">
          {careers.map((career) => (
            <CareerCard
              key={career.title}
              title={career.title}
              salary={career.salary}
              reason={career.reason}
              steps={career.steps}
              funding={career.funding}
              jobs={career.jobs}
            />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <h2 className="text-xl font-semibold">Phase 1 note</h2>
          <p className="mt-2 max-w-4xl text-white/70">
            This prototype uses mock data to show the product direction. In the next phase,
            this can be upgraded to real AI recommendations, live grants and scholarships,
            and recent job listings only.
          </p>
        </div>
      </section>
    </main>
  );
}
