
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useUiStore } from '@/store';
import { Link } from 'react-router-dom';
import SearchBar from '@/components/community/SearchBar';
import CommunityCard from '@/components/community/CommunityCard';
import { Plus } from 'lucide-react';

export default function Index() {
  const { setLoginModalOpen } = useUiStore();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Featured communities - in a real app these would come from an API
  const featuredCommunities = [
    {
      id: "1",
      slug: "brotherhood-of-scent",
      title: "Brotherhood Of Scent",
      description: "#1 Fragrance Community 🏆 Our mission is to help YOU leverage the power of scent to become the man you know yourself to be.",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tbXVuaXR5fGVufDB8fDB8fHww",
      category: "Hobbies",
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
      category: "Self-improvement",
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
      category: "Money",
      memberCount: 3600,
      price: 39,
      rank: 3
    }
  ];

  const featureList = [
    {
      title: "Join thriving communities",
      description: "Connect with like-minded individuals across various interests and niches."
    },
    {
      title: "Build your own community",
      description: "Create and grow your own community with powerful moderation tools."
    },
    {
      title: "Monetize your expertise",
      description: "Offer premium content, courses, and memberships to community members."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover communities
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              or <Link to="/create" className="text-primary hover:underline">create your own</Link>
            </p>
            
            <div className="max-w-2xl mx-auto">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10 mb-16 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/communities?category=hobbies">🏄 Hobbies</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/communities?category=music">🎵 Music</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/communities?category=money">💰 Money</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/communities?category=tech">💻 Tech</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/communities?category=health">🏋️ Health</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/communities">View All</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Communities */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <h2 className="text-3xl font-bold">Featured Communities</h2>
            <Link to="/communities">
              <Button variant="outline">View all communities</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
            {featuredCommunities.map((community) => (
              <CommunityCard
                key={community.id}
                id={community.id}
                slug={community.slug}
                title={community.title}
                description={community.description}
                imageUrl={community.imageUrl}
                category={community.category}
                memberCount={community.memberCount}
                price={community.price}
                rank={community.rank}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <h2 className="text-3xl font-bold mb-4">Why choose KlanPeak?</h2>
            <p className="text-lg text-muted-foreground">
              The all-in-one platform for building and growing your online community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
            {featureList.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border shadow-sm">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 mx-auto text-center animate-fade-up" style={{ animationDelay: "500ms" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your community?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Join thousands of creators and build your own thriving community today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-primary"
                onClick={() => setLoginModalOpen(true)}
              >
                Log in
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link to="/create" className="flex items-center gap-2">
                  <Plus size={18} />
                  Create a community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
