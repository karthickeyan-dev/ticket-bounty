import { LucideLoaderCircle } from "lucide-react";

export default function Spinner() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <LucideLoaderCircle className="size-16 animate-spin" />
    </div>
  );
}
