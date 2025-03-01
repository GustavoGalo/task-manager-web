import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex h-14 items-center gap-2 px-4 border-b lg:h-16">
        <Button asChild variant="ghost" size="icon">
          <Link to="/">
            <ArrowLeft size={32} />
          </Link>
        </Button>
      </div>
      <main className="flex flex-1">
        <div className="container flex flex-1 items-center justify-center py-12 md:py-24">
          <LoginForm />
        </div>
      </main>
    </div>
  );
}
