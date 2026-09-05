import type { TaskCardProps } from "../libs/Todolist";

export default function TaskCard({
  title,
  description,
  isDone,
}: TaskCardProps) {
  return (
    <div className="card mb-2 shadow-sm">
      <div className="card-body">
        <h5
          className="card-title"
          style={{ textDecoration: isDone ? "line-through" : "none" }}
        >
          {title}
        </h5>
        <p className="card-text text-muted mb-0">{description}</p>
      </div>
    </div>
  );
}
