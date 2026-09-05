interface TaskProps {
  task: {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
  };
}

export const TaskCard = ({ task }: TaskProps) => (
  <div className="card mb-2 p-3">
    <h5>{task.title}</h5>
    <p>{task.description}</p>
    <div>
      <button className="btn btn-success me-2">Done</button>
      <button className="btn btn-danger">Delete</button>
    </div>
  </div>
);
