import type { FooterProps } from "../libs/Todolist";

export default function Footer({ year, fullName, studentId }: FooterProps) {
  return (
    <footer className="p-3 bg-light text-center border-top mt-auto">
      <p className="mb-0 text-muted">
        Copyright © {year} {fullName} {studentId}
      </p>
    </footer>
  );
}
