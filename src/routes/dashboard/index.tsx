import { isAuthenticated } from "@/services/auth/is-authenticated";
import { useListAllProjects } from "@/services/project/list-all-projects";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
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
  const { data } = useListAllProjects();

  return (
    <>
      <div>Hello "/dashboard/"!</div>
      <div>{data?.map((item) => <div key={item.id}>{item.name}</div>)}</div>
    </>
  );
}
