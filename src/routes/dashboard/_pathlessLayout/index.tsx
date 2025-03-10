import { isAuthenticated } from "@/services/auth/is-authenticated";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/_pathlessLayout/")({
  component: RouteComponent,
  beforeLoad: async ({ location }) => {
    if (!isAuthenticated()) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

function RouteComponent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {Array.from({ length: 24 }).map((_, index) => (
        <div
          key={index}
          className="aspect-video h-12 w-full rounded-lg bg-muted/50"
        />
      ))}
    </div>
  );
}
