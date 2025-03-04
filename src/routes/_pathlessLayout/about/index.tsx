import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Heart, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/_pathlessLayout/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About TaskManager
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                A modern task management solution designed to help you stay
                organized and productive.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Our Mission
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    To provide a simple yet powerful task management solution
                    that helps individuals and teams achieve their goals.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    We believe in creating tools that are accessible, intuitive,
                    and effective. Our focus is on delivering a seamless
                    experience that helps you focus on what matters most.
                  </p>
                </div>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl border bg-muted">
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-muted-foreground">Mission Image</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Values
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                The principles that guide our development
              </p>
            </div>
            <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Simplicity</CardTitle>
                  <CardDescription>
                    Creating intuitive experiences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  We believe in making task management straightforward and
                  accessible to everyone.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Collaboration</CardTitle>
                  <CardDescription>Enabling effective teamwork</CardDescription>
                </CardHeader>
                <CardContent>
                  Our tools are designed to help teams work together seamlessly
                  and efficiently.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Accessibility</CardTitle>
                  <CardDescription>Available wherever you are</CardDescription>
                </CardHeader>
                <CardContent>
                  Access your tasks and projects from any device, anywhere in
                  the world.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Key Features
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Tools designed to enhance your productivity
              </p>
            </div>
            <div className="grid gap-6 mt-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Task Management</CardTitle>
                  <CardDescription>
                    Organize and track your tasks efficiently
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Create and organize tasks</li>
                    <li>Set priorities and due dates</li>
                    <li>Track progress in real-time</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Team Collaboration</CardTitle>
                  <CardDescription>Work together seamlessly</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Share tasks and projects</li>
                    <li>Real-time updates</li>
                    <li>Team communication tools</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] md:text-xl">
                  Have questions? We'd love to hear from you.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button variant="secondary" size="lg">
                  Support
                  <ArrowRight className="ml-2 h-4 w-4" />
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
              Need help?{" "}
              <Link to="/" className="underline underline-offset-4">
                Visit our support center
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
