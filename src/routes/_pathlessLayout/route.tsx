import { Button } from "@/components/ui/button";
import { FileRoutesByTo } from "@/routeTree.gen";
import {
  Link,
  Outlet,
  createFileRoute,
  useMatchRoute,
} from "@tanstack/react-router";
import { ListTodo } from "lucide-react";

export const Route = createFileRoute("/_pathlessLayout")({
  component: PathlessLayoutComponent,
});

const routes: Array<{ name: string; path: keyof FileRoutesByTo }> = [
  {
    name: "Features",
    path: "/features",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function PathlessLayoutComponent() {
  const matchRoute = useMatchRoute();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <ListTodo className="h-5 w-5" />
            <span className="text-xl">TaskManager</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  matchRoute({ to: route.path })
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {route.name}
              </Link>
            ))}
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
