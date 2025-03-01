
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface CommunityCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  memberCount: number;
  price: string | number;
  rank?: number;
}

export default function CommunityCard({
  id,
  slug,
  title,
  description,
  imageUrl,
  category,
  memberCount,
  price,
  rank,
}: CommunityCardProps) {
  return (
    <Link to={`/communities/${slug}`} className="block card-hover">
      <Card className="h-full overflow-hidden border">
        <div className="relative">
          {rank && (
            <div className="absolute top-2 left-2 bg-black/70 text-white text-sm font-medium px-2 py-1 rounded-md z-10">
              #{rank}
            </div>
          )}
          <div className="overflow-hidden h-48">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 lazy-load"
            />
          </div>
        </div>
        <CardContent className="p-5">
          <div className="flex items-center mb-2">
            <Badge variant="outline" className="category-chip bg-secondary">
              {category}
            </Badge>
          </div>
          <h3 className="text-xl font-bold line-clamp-1 mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        </CardContent>
        <CardFooter className="px-5 py-4 border-t bg-gray-50 flex justify-between items-center">
          <span className="text-sm font-medium">{memberCount.toLocaleString()} Members</span>
          <span className="text-sm font-semibold">
            {price === "Free" || price === 0 ? "Free" : `$${price}/month`}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
