import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart2,
  Calendar,
  CheckCircle2,
  Clock,
  ListTodo,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/_pathlessLayout/")({
  component: Index,
});

function Index() {
  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Organize your tasks with ease
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    TaskManager helps you manage your daily tasks, set
                    priorities, and track your progress all in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link to="/">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/">See Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
                  <div className="relative h-full w-full rounded-xl border bg-background p-4 shadow-xl">
                    <div className="space-y-4">
                      <div className="h-2 w-24 rounded bg-primary/20" />
                      <div className="h-4 w-full rounded bg-muted" />
                      <div className="h-4 w-3/4 rounded bg-muted" />
                      <div className="h-24 w-full rounded bg-muted" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-12 rounded bg-muted" />
                        <div className="h-12 rounded bg-muted" />
                      </div>
                      <div className="h-4 w-1/2 rounded bg-muted" />
                      <div className="h-4 w-3/4 rounded bg-muted" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Features that make task management simple
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to stay organized and productive
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Task Tracking</CardTitle>
                  <CardDescription>
                    Create, organize, and complete tasks with ease
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Keep track of all your tasks in one place with custom
                    categories and priority levels.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Calendar View</CardTitle>
                  <CardDescription>
                    Visualize your tasks on a daily, weekly, or monthly calendar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Plan ahead with our intuitive calendar interface that shows
                    all your upcoming deadlines.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Progress Analytics</CardTitle>
                  <CardDescription>
                    Track your productivity with detailed reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Get insights into your productivity patterns and track your
                    progress over time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Reminders</CardTitle>
                  <CardDescription>
                    Never miss a deadline with timely notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Set up custom reminders for important tasks and receive
                    notifications when they're due.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Add and complete tasks with minimal clicks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our streamlined interface lets you add and manage tasks
                    quickly without unnecessary steps.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ListTodo className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Custom Lists</CardTitle>
                  <CardDescription>
                    Organize tasks into custom lists and projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Create custom lists for different projects, areas of your
                    life, or any organizational system you prefer.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Loved by productive people everywhere
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our users have to say about TaskManager
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20" />
                    <div>
                      <CardTitle className="text-base">Sarah Johnson</CardTitle>
                      <CardDescription>Marketing Manager</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "TaskManager has completely transformed how I manage my
                    team's projects. The intuitive interface and powerful
                    features make it a joy to use every day."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20" />
                    <div>
                      <CardTitle className="text-base">Michael Chen</CardTitle>
                      <CardDescription>Software Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "As a developer juggling multiple projects, TaskManager
                    helps me stay focused and organized. The custom lists
                    feature is a game-changer for my workflow."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20" />
                    <div>
                      <CardTitle className="text-base">
                        Emily Rodriguez
                      </CardTitle>
                      <CardDescription>Freelance Designer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "I've tried dozens of task managers, and TaskManager is by
                    far the best. The calendar integration and progress tracking
                    help me manage my client deadlines effortlessly."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to boost your productivity?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of users who have transformed their task
                  management with TaskManager.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/">Get Started for Free</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 TaskManager. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="/"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Terms
            </Link>
            <Link
              to="/"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
            <Link
              to="/"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
