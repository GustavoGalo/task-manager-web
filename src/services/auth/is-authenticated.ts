export function isAuthenticated() {
  const token = localStorage.getItem("task-manager-token")

  return !!token;
}