import * as React from "react";

import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ProjectSwitcher } from "@/components/project-switcher";
import { Profile } from "@/interfaces/profile";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: Profile;
}

export function AppSidebar({
  data: { projects, name, email },
  ...props
}: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ProjectSwitcher projects={projects} />
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter>
        <NavUser user={{ avatar: "", name: name, email: email }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
