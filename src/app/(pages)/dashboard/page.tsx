"use client";
import { useRouter } from "next/navigation";
import { fadeInCardAnimation } from "@/animations/FadeIn";
import ProblemCard from "@/components/shared/cards/ProblemCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import codingProblems from "@/data/data";
import React from "react";

const Dashboard = () => {

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/api/auth/signin?callbackUrl=/dashboard'); // Corrected callbackUrl
    },
});

  const router = useRouter();

  return (
    <div className="px-4 md:px-28 py-10">
      <h1 className="text-[1.5rem] md:text-[2.5rem] font-bold">
        Your <span className="text-purple-500 italic">Placement</span> Ready Problems
      </h1>

      <div className="flex mt-6 flex-col gap-5 justify-start">
        {codingProblems.map((problem, index) => (
          <div
            key={problem.id}
            className="cursor-pointer"
            onClick={() => router.push(`/code-editor/${problem.id}`)}
          >
            <ProblemCard
              animation={fadeInCardAnimation}
              index={index}
              difficulty={problem.difficulty}
              topic={problem.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
