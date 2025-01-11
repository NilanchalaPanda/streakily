"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { CalendarCheck, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PlatformTarget {
  platform: string;
  goal: number;
}

const OathDialog: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateSelect = (date: Date | undefined) => {
    setStartDate(date || null);
  };

  const handleEndDateSelect = (date: Date | undefined) => {
    setEndDate(date || null);
  };

  const form = useForm({
    defaultValues: {
      name: "",
      title: "",
      type: "",
      description: "",
      platforms: {
        github: 0,
        leetcode: 0,
        codechef: 0,
        geeksforgeeks: 0,
      },
      signature: "",
    },
  });

  const onSubmit = useCallback(
    async (data: any) => {
      if (!startDate || !endDate) return;

      // Transform form data into API format
      //   const platformTargets: PlatformTarget[] = Object.entries(data.platforms)
      //     .filter(([_, value]) => value > 0)
      //     .map(([platform, goal]) => ({
      //       platform,
      //       goal: Number(goal),
      //     }));

      const challengeData = {
        title: data.title,
        type: data.type,
        description: data.description,
        startingDate: startDate.toISOString(),
        endingDate: endDate.toISOString(),
        platformTargets: data.platforms,
      };

      try {
        // Replace with your API endpoint
        const response = await fetch("/api/challenges", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(challengeData),
        });

        if (response.ok) {
          form.reset();
          setStartDate(null);
          setEndDate(null);
          setOpen(false);
        }
      } catch (error) {
        console.error("Error creating challenge:", error);
      }
    },
    [form, startDate, endDate],
  );

  const generateOath = useCallback(() => {
    const formData = form.getValues();
    const platforms = Object.entries(formData.platforms)
      .filter(([_, value]) => value > 0)
      .map(([platform, goal]) => `${goal} number of questions from ${platform}`)
      .join(", ");

    return `I, ${formData.name} hereby take oath to complete the ${
      formData.type
    } challenge starting from ${startDate ? format(startDate, "PPP") : "[date]"} until ${
      endDate ? format(endDate, "PPP") : "[date]"
    } with full dedication and sincerity. Along the journey, I pledge to complete ${platforms} on everyday basis.
    
${formData.signature}`;
  }, [form, startDate, endDate]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 text-white hover:bg-purple-700">
          Take Oath
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Take a New Challenge</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Card>
              {/* <CardHeader>
                <CardTitle>Challenge Details</CardTitle>
                <CardDescription>
                  Enter the details of your new challenge
                </CardDescription>
              </CardHeader> */}
              <CardContent className="grid gap-6">
                {/* <h4 className="pt-2 font-medium">Generated Oath</h4> */}
                <p className="space-y-2 pt-2 text-justify">
                  I{" "}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="inline-block">
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your Name"
                            className="w-40 border-none outline-none"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />{" "}
                  hereby take oath to complete the{" "}
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem className="inline-block">
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Challenge Title"
                            className="w-60 border-none outline-none"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />{" "}
                  challenge of type{" "}
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="inline-block">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="#30days">#30days</SelectItem>
                            <SelectItem value="#100days">#100days</SelectItem>
                            <SelectItem value="#365days">#365days</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  starting from{" "}
                  <div className="inline-block">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-none px-2 underline outline-none"
                        >
                          {startDate ? format(startDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate || undefined}
                          onSelect={handleStartDateSelect}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>{" "}
                  until{" "}
                  <div className="inline-block">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-none px-2 outline-none"
                        >
                          {endDate ? format(endDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate || undefined}
                          onSelect={handleEndDateSelect}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>{" "}
                  with full dedication and sincerity. Along the journey, I
                  pledge to complete{" "}
                  <FormField
                    control={form.control}
                    name="platforms.github"
                    render={({ field }) => (
                      <FormItem className="inline-block">
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            placeholder="GitHub Commits"
                            className="w-24 border-b border-gray-400 outline-none"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />{" "}
                  commits and{" "}
                  <FormField
                    control={form.control}
                    name="platforms.leetcode"
                    render={({ field }) => (
                      <FormItem className="inline-block">
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            placeholder="LeetCode Questions"
                            className="w-24 border-b border-gray-400 outline-none"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />{" "}
                  questions daily.
                </p>
                <p>
                  Signed,{" "}
                  <FormField
                    control={form.control}
                    name="signature"
                    render={({ field }) => (
                      <FormItem className="inline-block">
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your Signature"
                            className="w-40 border-b border-gray-400 outline-none"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </p>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-purple-600 text-white">
                  Take the Oath
                </Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default OathDialog;
