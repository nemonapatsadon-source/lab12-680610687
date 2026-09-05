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
      <div>
        <h5>{title}</h5>
        <p className="mb-0">{description}</p>
      </div>
      <button className="btn btn-danger" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
