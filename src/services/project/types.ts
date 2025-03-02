export interface Project {
  name: string,
  description: string,
  id: string,
  active: boolean,
  createdAt: string,
  updatedAt: string,
  userId: string
}
export type ListAllProjectsApiResponse = Project[]