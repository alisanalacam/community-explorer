
import { useState, useEffect } from "react";
import { getGroups } from "@/services/api";
import SearchBar from "@/components/community/SearchBar";
import CategoryFilter from "@/components/community/CategoryFilter";
import CommunityCard from "@/components/community/CommunityCard";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface Community {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  memberCount: number;
  price: string | number;
}

const CATEGORIES = [
  { id: 'hobbies', name: 'Hobbies', icon: '🏄' },
  { id: 'music', name: 'Music', icon: '🎵' },
  { id: 'money', name: 'Money', icon: '💰' },
  { id: 'spirituality', name: 'Spirituality', icon: '🧘' },
  { id: 'tech', name: 'Tech', icon: '💻' },
  { id: 'health', name: 'Health', icon: '🏋️' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'self-improvement', name: 'Self-improvement', icon: '📈' },
  { id: 'relationships', name: 'Relationships', icon: '❤️' },
];

export default function Communities() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [filteredCommunities, setFilteredCommunities] = useState<Community[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        setIsLoading(true);
        // In production, this would fetch from your API
        // For now we'll use placeholder data
        const data = await getGroups();
        
        // If API fails, use placeholder data
        const placeholderData = [
          {
            id: "1",
            slug: "brotherhood-of-scent",
            title: "Brotherhood Of Scent",
            description: "#1 Fragrance Community 🏆 Our mission is to help YOU leverage the power of scent to become the man you know yourself to be.",
            imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tbXVuaXR5fGVufDB8fDB8fHww",
            category: "hobbies",
            memberCount: 5500,
            price: "Free",
            rank: 1
          },
          {
            id: "2",
            slug: "calligraphy-skool",
            title: "Calligraphy Skool",
            description: "Modern calligraphy made easy! Learn to create beautiful handwritten pieces in just minutes a day.",
            imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
            category: "self-improvement",
            memberCount: 1200,
            price: 7,
            rank: 2
          },
          {
            id: "3",
            slug: "school-of-mentors",
            title: "School of Mentors",
            description: "🌍 💰 Join The #1 Community In The World For Entrepreneurs And Get Mentored Every Week By The Millionaires And Billionaires Who've Built 8-10 Figure Businesses From Scratch!",
            imageUrl: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D",
            category: "money",
            memberCount: 3600,
            price: 39,
            rank: 3
          },
          {
            id: "4",
            slug: "trading-fanatics",
            title: "Trading Fanatics",
            description: "Helping Beginner-Intermediate level traders make their First Trading Profits through a systematic trading plan & Risk Management.",
            imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww",
            category: "money",
            memberCount: 8100,
            price: "Free"
          },
          {
            id: "5",
            slug: "player-accelerator",
            title: "Player Accelerator",
            description: "Building players up to the pro academy level ⚽ If you need help getting inside email for support",
            imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzfGVufDB8fDB8fHww",
            category: "sports",
            memberCount: 2400,
            price: "Paid"
          },
          {
            id: "6",
            slug: "kourse",
            title: "Kourse (Free)",
            description: "Start YouTube. Sell Courses. Build your online business from scratch with our step-by-step system.",
            imageUrl: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww",
            category: "tech",
            memberCount: 96800,
            price: "Free"
          }
        ];
        
        setCommunities(data && data.length > 0 ? data : placeholderData);
        setIsLoading(false);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load communities. Please try again later.",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    };

    fetchCommunities();
  }, [toast]);

  useEffect(() => {
    let result = [...communities];
    
    // Apply category filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (community) => community.category === selectedCategory
      );
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (community) =>
          community.title.toLowerCase().includes(query) ||
          community.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredCommunities(result);
  }, [communities, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen pb-16 pt-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Discover communities</h1>
            <p className="text-lg text-muted-foreground">
              or <Link to="/create" className="text-primary hover:underline">create your own</Link>
            </p>
          </div>
          <Link to="/create">
            <Button size="lg" className="gap-2">
              <Plus size={18} />
              Create a community
            </Button>
          </Link>
        </div>
        
        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        
        <CategoryFilter 
          categories={CATEGORIES} 
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
        
        <Separator className="my-8" />
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="rounded-lg bg-gray-100 animate-pulse h-80"></div>
            ))}
          </div>
        ) : filteredCommunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCommunities.map((community) => (
              <CommunityCard
                key={community.id}
                id={community.id}
                slug={community.slug}
                title={community.title}
                description={community.description}
                imageUrl={community.imageUrl}
                category={CATEGORIES.find(cat => cat.id === community.category)?.name || community.category}
                memberCount={community.memberCount}
                price={community.price}
                rank={(community as any).rank}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-600 mb-4">No communities found</h3>
            <p className="text-muted-foreground mb-8">
              Try adjusting your search or filters, or create a new community.
            </p>
            <Link to="/create">
              <Button size="lg">Create a community</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
