export interface TaskCardProps {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
}

export interface SidebarProps {
  username: string;
  type: string;
}

export interface FooterProps {
  year: string;
  fullName: string;
  studentId: string;
}

export const initialTasks: TaskCardProps[] = [
  {
    id: 1,
    title: "Read a book",
    description: "Vite + React + Bootstrap + TS",
    isDone: false,
  },
  {
    id: 2,
    title: "Write code",
    description: "Finish project for class",
    isDone: false,
  },
  {
    id: 3,
    title: "Deploy app",
    description: "Push project to GitHub Pages",
    isDone: true,
  },
];
