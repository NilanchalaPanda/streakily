import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Eye, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { Button } from "./ui/button";

const ChallengeTables = () => {
  const tasks = [
    {
      id: 1,
      task: "Task 1",
      title: "Finish Documentation",
      status: "In Progress",
      priority: "High",
    },
    {
      id: 2,
      task: "Task 2",
      title: "Develop New Feature",
      status: "Completed",
      priority: "Medium",
    },
    {
      id: 3,
      task: "Task 3",
      title: "Test User Interface",
      status: "Pending",
      priority: "Low",
    },
    {
      id: 4,
      task: "Task 4",
      title: "Fix Bugs in App",
      status: "In Progress",
      priority: "High",
    },
    {
      id: 5,
      task: "Task 5",
      title: "Deploy to Production",
      status: "Completed",
      priority: "High",
    },
  ];

  return (
    <section className="mt-10 rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow className="rounded-t-lg">
            <TableHead className="select-none">Task</TableHead>
            <TableHead className="w-[60%] select-none">Title</TableHead>
            <TableHead className="select-none text-left">Status</TableHead>
            <TableHead className="select-none text-left">Priority</TableHead>
            <TableHead className="w-[80px] select-none"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.length !== 0 ? (
            tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="font-medium">{task.task}</TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>{task.priority}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open Menu</span>
                        <MoreHorizontal />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-md border bg-black p-1">
                      <DropdownMenuItem className="text-md flex flex-row gap-x-2 rounded-md px-2 py-1 pr-5 outline-none hover:cursor-pointer hover:bg-zinc-900 hover:text-white">
                        <Eye size={16} /> View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-md flex flex-row gap-x-2 rounded-md px-2 py-1 pr-5 outline-none hover:cursor-pointer hover:bg-zinc-900 hover:text-white">
                        <Pencil size={16} /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-md flex flex-row gap-x-2 rounded-md px-2 py-1 pr-5 outline-none hover:cursor-pointer hover:bg-red-500 hover:text-white">
                        <Trash size={16} /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="h-28 text-center">
                No results
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
};

export default ChallengeTables;
