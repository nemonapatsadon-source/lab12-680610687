interface SidebarProps {
  username: string;
  type: string;
}

export const Sidebar = ({ username, type }: SidebarProps) => (
  <aside className="bg-primary text-white p-3" style={{ minHeight: "100vh" }}>
    <h5>Note App</h5>
    <ul className="list-unstyled">
      <li>Todo List</li>
      <li>My Stuffs</li>
    </ul>
    <div>
      {username} : {type}
    </div>
  </aside>
);
