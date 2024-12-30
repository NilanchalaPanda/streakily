"use client";

import ChallengeTables from "@/components/challenges-table";
import { useSidebar } from "@/components/ui/sidebar";
import React from "react";

const Challenges = () => {
  const challenges = [
    {
      days: 30,
    },
    {
      days: 45,
    },
    {
      days: 60,
    },
    {
      days: 100,
    },
  ];

  const { open } = useSidebar();

  return (
    <main className={`${!open ? "mx-auto w-[90%]" : ""}`}>
      <h1 className="text-3xl font-bold">Challenges</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea mollitia
        error ducimus et earum, soluta non laboriosam perspiciatis dignissimos
        distinctio assumenda, nihil reiciendis nulla reprehenderit odio tempore
        nobis harum suscipit modi? Maiores ad optio aperiam deserunt illo,
        architecto, vel voluptas similique dolorem minus distinctio esse,
        consequuntur incidunt sunt rerum accusamus!
      </p>

      {/* LIST OF FAMOUS GO-TO CHALLENGES */}
      <div className="flex flex-row gap-x-2 py-3">
        {challenges.map((challenge, index): any => (
          <div
            className="select-none rounded-full border-2 border-gray-500 bg-zinc-900 px-4 py-1 text-gray-300 transition-all hover:cursor-pointer hover:border-gray-300 hover:bg-zinc-800 hover:text-gray-200"
            key={index}
          >
            #{challenge.days} days
          </div>
        ))}
      </div>

      {/* CHALLENGES TABLE */}
      <ChallengeTables />
    </main>
  );
};

export default Challenges;
