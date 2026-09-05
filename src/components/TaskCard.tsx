interface TaskCardProps {
  title: string;
  description: string;
  onDelete: () => void;
}

export default function TaskCard({
  title,
  description,
  onDelete,
}: TaskCardProps) {
  return (
    <div className="card mb-2 p-3 d-flex flex-row justify-content-between align-items-center">
      <div style={{ flex: 1 }}>
        <h5 className="mb-0">{title}</h5>
        <p className="text-muted mb-0">{description}</p>
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-success">Done</button>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
