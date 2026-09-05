import { useState } from "react";

export default function TaskInput({
  onAdd,
}: {
  onAdd: (t: string, d: string) => void;
}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="card p-3 mb-3">
      <input
        className="form-control mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="form-control mb-2"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          onAdd(title, desc);
          setTitle("");
          setDesc("");
        }}
      >
        Add Task
      </button>
    </div>
  );
}
