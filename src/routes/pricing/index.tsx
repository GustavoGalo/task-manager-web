import { CheckCircle2, ListTodo, MinusCircle } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export const Route = createFileRoute("/pricing/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <ListTodo className="h-5 w-5" />
            <span>TaskMaster</span>
          </Link>
          <Button asChild size="sm">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Simple, transparent pricing
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Choose the perfect plan for your needs. All plans include a
                14-day free trial.
              </p>
              <div className="flex items-center gap-4 rounded-full border p-1">
                <Button
                  variant={isAnnual ? "ghost" : "secondary"}
                  size="sm"
                  onClick={() => setIsAnnual(false)}
                >
                  Monthly
                </Button>
                <Button
                  variant={isAnnual ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setIsAnnual(true)}
                >
                  Annually
                  <span className="ml-1.5 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                    Save 20%
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>Perfect for getting started</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Up to 10 projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Basic task management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Simple calendar view</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="relative border-primary">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Perfect for professionals</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$12</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Unlimited projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Advanced task management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Team collaboration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to="/signup">Start Free Trial</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Perfect for large teams</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">Custom</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Dedicated support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Custom contracts</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              Compare Plans
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Feature</TableHead>
                  <TableHead>Free</TableHead>
                  <TableHead>Pro</TableHead>
                  <TableHead>Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Projects</TableCell>
                  <TableCell>Up to 10</TableCell>
                  <TableCell>Unlimited</TableCell>
                  <TableCell>Unlimited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Team Members</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>Up to 10</TableCell>
                  <TableCell>Unlimited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Storage</TableCell>
                  <TableCell>1 GB</TableCell>
                  <TableCell>50 GB</TableCell>
                  <TableCell>Custom</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Task History</TableCell>
                  <TableCell>30 days</TableCell>
                  <TableCell>1 year</TableCell>
                  <TableCell>Unlimited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Priority Support
                  </TableCell>
                  <TableCell>
                    <MinusCircle className="h-4 w-4 text-muted-foreground" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">API Access</TableCell>
                  <TableCell>
                    <MinusCircle className="h-4 w-4 text-muted-foreground" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="billing">
                <AccordionTrigger>How does billing work?</AccordionTrigger>
                <AccordionContent>
                  We offer both monthly and annual billing. Annual billing comes
                  with a 20% discount. You can upgrade, downgrade, or cancel
                  your plan at any time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="trial">
                <AccordionTrigger>Can I try before I buy?</AccordionTrigger>
                <AccordionContent>
                  Yes! We offer a 14-day free trial on all paid plans. No credit
                  card required.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cancel">
                <AccordionTrigger>
                  Can I cancel my subscription?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel your subscription at any time. If you
                  cancel, you'll have access to your paid features until the end
                  of your billing period.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="refund">
                <AccordionTrigger>What's your refund policy?</AccordionTrigger>
                <AccordionContent>
                  If you're not satisfied with our service, contact us within 30
                  days of your purchase and we'll refund your payment.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to get started?
                </h2>
                <p className="mx-auto max-w-[600px] md:text-xl">
                  Start your 14-day free trial today. No credit card required.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Sales</Link>
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
              <Link to="/contact" className="underline underline-offset-4">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
