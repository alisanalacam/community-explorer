
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getGroupBySlug } from "@/services/api";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Share, Lock, Users, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "@/components/ui/skeleton";

interface CommunityDetails {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  category: string;
  memberCount: number;
  price: string | number;
  isPrivate?: boolean;
  creatorName?: string;
  creatorRole?: string;
  creatorPhoto?: string;
  links?: Array<{ title: string; url: string }>;
  onlineCount?: number;
  adminCount?: number;
}

export default function CommunityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [community, setCommunity] = useState<CommunityDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchCommunityDetails = async () => {
      try {
        setIsLoading(true);
        // In a real app, this would come from your API
        // For now, let's use placeholder data based on the slug
        const data = await getGroupBySlug(slug || "");
        
        // If API fails, use placeholder data
        let communityData: CommunityDetails;
        
        switch(slug) {
          case "brotherhood-of-scent":
            communityData = {
              id: "1",
              slug: "brotherhood-of-scent",
              title: "Brotherhood Of Scent",
              description: "#1 Fragrance Community 🏆 Our mission is to help YOU leverage the power of scent to become the man you know yourself to be.",
              longDescription: "Welcome to the Brotherhood of Scent, where we explore the art and science of fragrances. Our community is dedicated to helping men harness the power of scent to enhance their personal presence and confidence. Whether you're a beginner looking to find your signature scent or a seasoned fragrance enthusiast, our community provides resources, reviews, and a supportive environment to discuss all things related to men's fragrances.",
              imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tbXVuaXR5fGVufDB8fDB8fHww",
              category: "Hobbies",
              memberCount: 5500,
              price: "Free",
              isPrivate: true,
              creatorName: "Antonio O. Centeno",
              creatorRole: "Founder",
              creatorPhoto: "https://i.pravatar.cc/150?u=antonio",
              links: [
                { title: "Watch Lover Community", url: "#" },
                { title: "RealMenRealStyle Community", url: "#" },
                { title: "Mission Fragrances", url: "#" }
              ],
              onlineCount: 16,
              adminCount: 17
            };
            break;
          case "calligraphy-skool":
            communityData = {
              id: "2",
              slug: "calligraphy-skool",
              title: "Calligraphy Skool",
              description: "Modern calligraphy made easy! Learn to create beautiful handwritten pieces in just minutes a day.",
              longDescription: "Discover the art of modern calligraphy with our supportive community. We believe anyone can create beautiful handwritten pieces with the right guidance. Our structured approach breaks down complex techniques into simple, daily practices that even beginners can master. Join fellow calligraphy enthusiasts and transform your handwriting into art.",
              imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
              category: "Self-improvement",
              memberCount: 1200,
              price: 7,
              isPrivate: false,
              creatorName: "Emily Wells",
              creatorRole: "Calligraphy Artist",
              creatorPhoto: "https://i.pravatar.cc/150?u=emily",
              onlineCount: 8,
              adminCount: 3
            };
            break;
          default:
            // Create placeholder data for any other slug
            communityData = {
              id: "0",
              slug: slug || "unknown",
              title: slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Unknown Community",
              description: "A vibrant community focused on sharing knowledge and expertise.",
              longDescription: "This is a detailed description about the community. It would typically contain information about what the community offers, its mission, and what members can expect after joining.",
              imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww",
              category: "Miscellaneous",
              memberCount: 1000,
              price: "Free",
              isPrivate: false,
              creatorName: "Community Creator",
              creatorRole: "Founder",
              creatorPhoto: "https://i.pravatar.cc/150?u=creator",
              onlineCount: 5,
              adminCount: 2
            };
        }
        
        setCommunity(data || communityData);
        setIsLoading(false);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load community details. Please try again later.",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchCommunityDetails();
    }
  }, [slug, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen pb-16 pt-24">
        <div className="container px-4 mx-auto">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/communities">
                <ArrowLeft size={16} className="mr-2" />
                Back to communities
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <Skeleton className="h-80 w-full rounded-lg mb-6" />
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-6 w-1/2 mb-8" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-8" />
            </div>
            
            <div className="w-full lg:w-1/3">
              <Skeleton className="h-64 w-full rounded-lg mb-6" />
              <Skeleton className="h-10 w-full mb-4" />
              <Skeleton className="h-24 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!community) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Community Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The community you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/communities">Browse Communities</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{community.title} | KlanPeak</title>
        <meta name="description" content={community.description} />
      </Helmet>

      <div className="min-h-screen pb-16 pt-24">
        <div className="container px-4 mx-auto">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/communities">
                <ArrowLeft size={16} className="mr-2" />
                Back to communities
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <div className="overflow-hidden rounded-lg mb-6 animate-fade-in">
                <img 
                  src={community.imageUrl} 
                  alt={community.title} 
                  className="w-full h-80 object-cover"
                />
              </div>
              
              <div className="animate-fade-up">
                <div className="flex items-center gap-2 mb-2">
                  <Badge>{community.category}</Badge>
                  {community.isPrivate && (
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Lock size={12} /> Private
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{community.title}</h1>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    <span>{community.memberCount.toLocaleString()} Members</span>
                  </div>
                  <div>
                    {typeof community.price === 'number' 
                      ? `$${community.price}/month` 
                      : community.price}
                  </div>
                </div>
                
                <div className="prose max-w-none mb-8">
                  <p className="text-lg">{community.description}</p>
                  
                  {community.longDescription && (
                    <>
                      <Separator className="my-6" />
                      <p>{community.longDescription}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg border p-6 mb-6 animate-fade-up">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Users size={16} className="mr-2 text-muted-foreground" />
                    <span className="font-medium">{community.memberCount.toLocaleString()}</span>
                  </div>
                  {community.onlineCount && (
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm text-muted-foreground">{community.onlineCount} Online</span>
                    </div>
                  )}
                  {community.adminCount && (
                    <div className="text-sm text-muted-foreground">
                      {community.adminCount} Admins
                    </div>
                  )}
                </div>
                
                <Button className="w-full mb-3 py-6 text-lg">JOIN GROUP</Button>
                
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Share size={16} />
                  Share
                </Button>
              </div>
              
              {community.creatorName && (
                <div className="bg-white rounded-lg border p-6 animate-fade-up">
                  <h3 className="font-medium mb-4">Created by</h3>
                  <div className="flex items-center">
                    {community.creatorPhoto && (
                      <img 
                        src={community.creatorPhoto} 
                        alt={community.creatorName}
                        className="w-12 h-12 rounded-full mr-3"
                      />
                    )}
                    <div>
                      <div className="font-medium">{community.creatorName}</div>
                      {community.creatorRole && (
                        <div className="text-sm text-muted-foreground">{community.creatorRole}</div>
                      )}
                    </div>
                  </div>
                  
                  {community.links && community.links.length > 0 && (
                    <>
                      <Separator className="my-4" />
                      <ul className="space-y-2">
                        {community.links.map((link, index) => (
                          <li key={index}>
                            <a 
                              href={link.url} 
                              className="text-primary hover:underline flex items-center"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="mr-2">→</span>
                              {link.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
