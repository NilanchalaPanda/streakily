"use client";

import { useSidebar } from "@/components/ui/sidebar";
import React from "react";

const Calender = () => {
  const { open } = useSidebar();

  return (
    <main className={`${!open ? "mx-auto w-[90%]" : ""}`}>
      <h1 className="text-3xl font-bold">Calendar</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea mollitia
        error ducimus et earum, soluta non laboriosam perspiciatis dignissimos
        distinctio assumenda, nihil reiciendis nulla reprehenderit odio tempore
        nobis harum suscipit modi? Maiores ad optio aperiam deserunt illo,
        architecto, vel voluptas similique dolorem minus distinctio esse,
        consequuntur incidunt sunt rerum accusamus!
      </p>
    </main>
  );
};

export default Calender;
