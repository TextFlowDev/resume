import { Badge } from "@/components/ui/badge";

type Props = {
  items: string[];
  className?: string;
};

export function BadgeGroup({ items, className }: Props) {
  return (
    <div className={className ?? "flex flex-wrap gap-2"}>
      {items.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  );
}
