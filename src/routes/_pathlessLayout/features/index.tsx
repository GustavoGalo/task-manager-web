import type React from "react";
import {
  BarChart2,
  Calendar,
  CheckCircle2,
  Clock,
  Filter,
  Flag,
  Folders,
  Globe2,
  ListTodo,
  Share2,
  Tags,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_pathlessLayout/features/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Powerful features for powerful productivity
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover all the features that make TaskMaster the perfect tool
                for managing your tasks and boosting your productivity.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="task-management" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="task-management">
                  Task Management
                </TabsTrigger>
                <TabsTrigger value="organization">Organization</TabsTrigger>
                <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
                <TabsTrigger value="productivity">Productivity</TabsTrigger>
              </TabsList>
              <TabsContent value="task-management" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <FeatureCard
                    icon={<ListTodo className="h-12 w-12" />}
                    title="Task Creation"
                    description="Create tasks quickly with our intuitive interface. Add descriptions, due dates, and priority levels with ease."
                  />
                  <FeatureCard
                    icon={<CheckCircle2 className="h-12 w-12" />}
                    title="Task Completion"
                    description="Mark tasks as complete and track your progress. Celebrate your achievements with satisfying animations."
                  />
                  <FeatureCard
                    icon={<Clock className="h-12 w-12" />}
                    title="Due Dates"
                    description="Set due dates and reminders to stay on top of your tasks. Never miss a deadline again."
                  />
                </div>
              </TabsContent>
              <TabsContent value="organization" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <FeatureCard
                    icon={<Folders className="h-12 w-12" />}
                    title="Projects & Lists"
                    description="Organize tasks into projects and lists. Keep everything structured and easily accessible."
                  />
                  <FeatureCard
                    icon={<Tags className="h-12 w-12" />}
                    title="Tags & Labels"
                    description="Add custom tags and labels to categorize your tasks. Filter and find tasks quickly."
                  />
                  <FeatureCard
                    icon={<Filter className="h-12 w-12" />}
                    title="Smart Filters"
                    description="Use powerful filters to find exactly what you need. Save custom filters for quick access."
                  />
                </div>
              </TabsContent>
              <TabsContent value="collaboration" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <FeatureCard
                    icon={<Users className="h-12 w-12" />}
                    title="Team Sharing"
                    description="Share tasks and projects with team members. Collaborate effectively on shared goals."
                  />
                  <FeatureCard
                    icon={<Share2 className="h-12 w-12" />}
                    title="Task Delegation"
                    description="Assign tasks to team members and track their progress. Keep everyone accountable."
                  />
                  <FeatureCard
                    icon={<Globe2 className="h-12 w-12" />}
                    title="Real-time Updates"
                    description="Get instant updates when tasks are modified. Stay in sync with your team."
                  />
                </div>
              </TabsContent>
              <TabsContent value="productivity" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <FeatureCard
                    icon={<BarChart2 className="h-12 w-12" />}
                    title="Progress Tracking"
                    description="Monitor your productivity with detailed charts and statistics. Identify trends and improve your workflow."
                  />
                  <FeatureCard
                    icon={<Calendar className="h-12 w-12" />}
                    title="Calendar View"
                    description="View your tasks in a calendar format. Plan your schedule visually and manage your time better."
                  />
                  <FeatureCard
                    icon={<Flag className="h-12 w-12" />}
                    title="Goal Setting"
                    description="Set and track goals. Break down big objectives into manageable tasks."
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <DetailedFeature
                title="Smart Task Organization"
                description="Organize your tasks the way you want with our flexible organization system. Use projects, lists, tags, and filters to create a workflow that works for you."
                features={[
                  "Create unlimited projects and lists",
                  "Custom tags and labels",
                  "Smart filters and saved searches",
                  "Drag and drop organization",
                ]}
              />
              <DetailedFeature
                title="Powerful Collaboration"
                description="Work together effectively with built-in collaboration features. Share tasks, assign responsibilities, and keep everyone in the loop."
                features={[
                  "Team sharing and permissions",
                  "Task comments and discussions",
                  "Real-time notifications",
                  "Activity history and tracking",
                ]}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to boost your productivity?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of users who have transformed their task
                  management with TaskMaster.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link to="/signup">Get Started for Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex h-24 flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with love by TaskMaster team.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4 text-primary">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

function DetailedFeature({
  title,
  description,
  features,
}: {
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <ul className="grid gap-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
