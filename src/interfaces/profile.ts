import { Project } from "./project";

export interface Profile {
  email: string;
  name: string;
  username: string;
  projects: Project[];
}
