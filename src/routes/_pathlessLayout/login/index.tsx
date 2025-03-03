import { LoginForm } from "@/components/login-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_pathlessLayout/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-1">
      <div className="container flex flex-1 items-center justify-center py-12 md:py-24">
        <LoginForm />
      </div>
    </main>
  );
}
