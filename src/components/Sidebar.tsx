import type { SidebarProps } from "../libs/Todolist";

export default function Sidebar({ username, type }: SidebarProps) {
  return (
    <div className="p-3 bg-light border-end" style={{ minWidth: "220px" }}>
      <h5>User Profile</h5>
      <p className="mb-1">
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Role:</strong> {type}
      </p>
    </div>
  );
}
