interface FooterProps {
  year: number;
  fullName: string;
  studentId: string;
}

export const Footer = ({ year, fullName, studentId }: FooterProps) => (
  <footer className="text-center p-3 bg-secondary text-white">
    Copyright © {year} {fullName} {studentId}
  </footer>
);
