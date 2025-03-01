
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUiStore, useAuthStore } from "@/store";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, Plus, Search, Settings, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const { setLoginModalOpen } = useUiStore();
  const { isAuthenticated, logout } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed w-full top-0 z-40 bg-white/90 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="text-3xl font-bold">
              <span className="text-brand-blue">k</span>
              <span className="text-brand-red">l</span>
              <span className="text-brand-yellow">a</span>
              <span className="text-brand-teal">n</span>
              <span className="text-gray-800">Peak</span>
            </div>
          </Link>
          <div className="relative ml-2" ref={dropdownRef}>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={toggleDropdown}
            >
              <ChevronDown size={20} />
            </Button>
            
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-[320px] bg-white rounded-lg shadow-lg border z-50 animate-fade-in">
                <div className="p-3">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input
                      className="w-full pl-9"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Link 
                      to="/signup" 
                      className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-md transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="bg-gray-200 w-10 h-10 rounded-md flex items-center justify-center">
                        <Plus size={20} className="text-gray-500" />
                      </div>
                      <span className="font-medium">Create a community</span>
                    </Link>
                    
                    <Link 
                      to="/communities" 
                      className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-md transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="bg-gray-200 w-10 h-10 rounded-md flex items-center justify-center">
                        <Search size={20} className="text-gray-500" />
                      </div>
                      <span className="font-medium">Discover communities</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/communities" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
            Discover
          </Link>
          <Link to="/pricing" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
            Pricing
          </Link>
          <Link to="/create" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
            Create
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/my-communities" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
                My Communities
              </Link>
              <Button variant="ghost" onClick={logout}>Logout</Button>
            </>
          ) : (
            <Button onClick={() => setLoginModalOpen(true)}>Log in</Button>
          )}
        </nav>
        
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-white border-b shadow-lg animate-slide-down">
          <div className="px-4 py-2 space-y-1">
            <Link 
              to="/communities" 
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Discover
            </Link>
            <Link 
              to="/pricing" 
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/create" 
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Create
            </Link>
            {isAuthenticated ? (
              <>
                <Link 
                  to="/my-communities" 
                  className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Communities
                </Link>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                className="w-full mt-2" 
                onClick={() => {
                  setLoginModalOpen(true);
                  setMobileMenuOpen(false);
                }}
              >
                Log in
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
