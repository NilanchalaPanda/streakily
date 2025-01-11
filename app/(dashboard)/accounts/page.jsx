"use client";

import { useSidebar } from "@/components/ui/sidebar";
// import Link from "next/link";

const Accounts = () => {
  const { open } = useSidebar();
  return (
    <main className={`${!open ? "mx-auto w-[90%]" : ""}`}>
      <h1 className="text-3xl font-bold">Accounts</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea mollitia
        error ducimus et earum, soluta non laboriosam perspiciatis dignissimos
        distinctio assumenda, nihil reiciendis nulla reprehenderit odio tempore
        nobis harum suscipit modi? Maiores ad optio aperiam deserunt illo,
        architecto, vel voluptas similique dolorem minus distinctio esse,
        consequuntur incidunt sunt rerum accusamus!
      </p>

      <div>
        <h1>GitHub OAuth with Next.js</h1>
        {/* {!user ? (
          <Link
            href="http://localhost:8000/api/v1/acc/github"
            className="border px-2 py-3"
          >
            Login with GitHub
          </Link>
        ) : (
          <div>
            <h2>Welcome, {user.name}</h2>
            <img src={user.avatar_url} alt={user.name} width={100} />
            <p>GitHub Username: {user.login}</p>
          </div>
        )} */}
      </div>
    </main>
  );
};

export default Accounts;
