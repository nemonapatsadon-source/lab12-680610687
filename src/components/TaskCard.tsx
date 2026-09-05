interface TaskCardProps {
  title: string;
  description: string;
  done: boolean;
  onDelete: () => void;
  onDone: () => void;
}

export default function TaskCard({
  title,
  description,
  done,
  onDelete,
  onDone,
}: TaskCardProps) {
  return (
    <div className="card mb-2 p-3 d-flex flex-row justify-content-between align-items-center">
      <div style={{ flex: 1 }}>
        <h5 style={{ textDecoration: done ? "line-through" : "none" }}>
          {title}
        </h5>
        <p
          className="text-muted mb-0"
          style={{ textDecoration: done ? "line-through" : "none" }}
        >
          {description}
        </p>
      </div>
      <div className="d-flex gap-2">
        <button
          className={`btn ${done ? "btn-secondary" : "btn-success"}`}
          onClick={onDone}
        >
          {done ? "Undo" : "Done"}
        </button>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
