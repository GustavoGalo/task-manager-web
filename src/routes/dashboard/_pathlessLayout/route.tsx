import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { profileQueryOptions } from "@/services/user/profile";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/_pathlessLayout")({
  component: RouteComponent,
  loader: async ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(profileQueryOptions()),
  pendingComponent: () => (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {Array.from({ length: 24 }).map((_, index) => (
        <div
          key={index}
          className="aspect-video h-12 w-full rounded-lg bg-muted/50"
        />
      ))}
    </div>
  ),
  errorComponent: () => <div>Error</div>,
});

function RouteComponent() {
  const data = Route.useLoaderData();

  return (
    <SidebarProvider>
      <AppSidebar data={data} />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
