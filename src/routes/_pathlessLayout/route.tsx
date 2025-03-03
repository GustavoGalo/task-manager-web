import { Button } from "@/components/ui/button";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { ListTodo } from "lucide-react";

export const Route = createFileRoute("/_pathlessLayout")({
  component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <ListTodo className="h-5 w-5" />
            <span className="text-xl">TaskManager</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Button asChild variant="ghost" size="sm">
              <Link to="/features">Features</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/pricing">Pricing</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/about">About</Link>
            </Button>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm">
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
