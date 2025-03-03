import { createFileRoute } from "@tanstack/react-router";
import { Building2, Mail, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/_pathlessLayout/contact/")({
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
                Get in Touch
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Have a question? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <MessageCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Support</CardTitle>
                  <CardDescription>
                    Need help with your account?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our support team is available Monday through Friday, 9am-5pm
                    EST.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Visit Support Center
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Mail className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>Send us an email directly</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    We aim to respond to all emails within 24 hours.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <a href="mailto:support@example.com">Send Email</a>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Phone className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Sales</CardTitle>
                  <CardDescription>Interested in enterprise?</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Talk to our sales team about TaskMaster for Enterprise.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Enterprise Info
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Send us a message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
                <Separator className="my-4" />
                <div className="grid gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-muted-foreground">
                        123 Task Street, Suite 100
                      </p>
                      <p className="text-muted-foreground">
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">
                        support@example.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex h-24 flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Need immediate assistance?{" "}
              <Button variant="link">Visit our help center</Button>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
