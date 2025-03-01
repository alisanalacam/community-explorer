
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
      <Input
        className="w-full pl-10 h-12 rounded-full bg-secondary/50 border-0 focus-visible:ring-offset-0"
        placeholder="Search for anything"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
