"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InputForm() {
  const router = useRouter();

  const [currentRole, setCurrentRole] = useState("");
  const [targetInterest, setTargetInterest] = useState("tech");
  const [educationLevel, setEducationLevel] = useState("high-school");
  const [location, setLocation] = useState("");
  const [goal, setGoal] = useState("switch careers");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams({
      currentRole,
      targetInterest,
      educationLevel,
      location,
      goal,
    });

    router.push(`/results?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Start your search</h2>
        <p className="mt-2 text-sm leading-6 text-white/65">
          Tell us where you are now and where you want to go. This first version
          will generate example second-career paths and funding directions.
        </p>
      </div>

      <div className="grid gap-5">
        <div>
          <label htmlFor="currentRole" className="mb-2 block text-sm font-medium text-white/85">
            Current job or background
          </label>
          <input
            id="currentRole"
            type="text"
            value={currentRole}
            onChange={(e) => setCurrentRole(e.target.value)}
            placeholder="Example: retail, warehouse, teacher, admin"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-300/50"
          />
        </div>

        <div>
          <label htmlFor="targetInterest" className="mb-2 block text-sm font-medium text-white/85">
            Interested field
          </label>
          <select
            id="targetInterest"
            value={targetInterest}
            onChange={(e) => setTargetInterest(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-300/50"
          >
            <option value="tech">Tech</option>
            <option value="healthcare">Healthcare</option>
            <option value="trades">Trades</option>
          </select>
        </div>

        <div>
          <label htmlFor="educationLevel" className="mb-2 block text-sm font-medium text-white/85">
            Education level
          </label>
          <select
            id="educationLevel"
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-300/50"
          >
            <option value="high-school">High school</option>
            <option value="some-college">Some college</option>
            <option value="associate">Associate degree</option>
            <option value="bachelor">Bachelor degree</option>
            <option value="career-change">Career changer / self-taught</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className="mb-2 block text-sm font-medium text-white/85">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Example: Utah, New Jersey, Remote"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-300/50"
          />
        </div>

        <div>
          <label htmlFor="goal" className="mb-2 block text-sm font-medium text-white/85">
            Main goal
          </label>
          <select
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-300/50"
          >
            <option value="switch careers">Switch careers</option>
            <option value="find training">Find training</option>
            <option value="get a job">Get a job</option>
            <option value="explore options">Explore options</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-white px-5 text-sm font-semibold text-black transition hover:scale-[1.01] hover:bg-cyan-200"
      >
        Find My Path
      </button>
    </form>
  );
}
