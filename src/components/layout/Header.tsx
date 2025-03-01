
import { Button } from "@/components/ui/button";
import { useUiStore, useAuthStore } from "@/store";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { setLoginModalOpen } = useUiStore();
  const { isAuthenticated, logout } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/communities" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
            Discover
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
