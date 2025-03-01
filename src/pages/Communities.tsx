import React, { useState, useEffect, Fragment } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUiStore } from '@/store';
import { Link } from 'react-router-dom';
import SearchBar from '@/components/community/SearchBar';
import CommunityCard from '@/components/community/CommunityCard';
import { getGroups } from '@/services/api';
import { Helmet } from 'react-helmet-async';

export default function Communities() {
  const { setLoginModalOpen } = useUiStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      setIsLoading(true);
      const fetchedGroups = await getGroups(category);
      setGroups(fetchedGroups);
      setIsLoading(false);
    };

    fetchGroups();
  }, [category]);

  const categories = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Hobbies",
      value: "hobbies",
    },
    {
      label: "Music",
      value: "music",
    },
    {
      label: "Money",
      value: "money",
    },
    {
      label: "Tech",
      value: "tech",
    },
    {
      label: "Health",
      value: "health",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Discover Communities | KlanPeak</title>
        <meta name="description" content="Explore a wide range of communities on KlanPeak. Find groups based on your interests and connect with like-minded individuals." />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover communities
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Explore a wide range of communities and connect with like-minded
              individuals.
            </p>

            <div className="max-w-2xl mx-auto">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>

          <div
            className="flex flex-wrap justify-center gap-4 mt-10 mb-16 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={category === cat.value ? "default" : "outline"}
                size="lg"
                className="rounded-full"
                onClick={() => setCategory(cat.value)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Community List */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <h2 className="text-3xl font-bold">All Communities</h2>
            <Link to="/create">
              <Button>Create a community</Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="text-center">Loading communities...</div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              {groups.map((community) => (
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
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 mx-auto text-center animate-fade-up" style={{ animationDelay: "500ms" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to start your community?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Join thousands of creators and build your own thriving community
              today.
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
