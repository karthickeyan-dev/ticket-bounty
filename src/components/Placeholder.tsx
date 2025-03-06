import { LucideTriangleAlert } from "lucide-react";
import { cloneElement, JSX } from "react";

type PlaceholderProps = {
  label: string;
  icon?: JSX.Element;
  button?: JSX.Element | null;
};

export default function Placeholder({
  label,
  icon = <LucideTriangleAlert />,
  button = null,
}: PlaceholderProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      {cloneElement(icon, {
        className: "size-12",
      })}
      <h2 className="text-center text-lg">{label}</h2>
      {button}
    </div>
  );
}
