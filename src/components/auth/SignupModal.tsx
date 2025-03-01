
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useUiStore, useAuthStore } from '@/store';
import { signup } from '@/services/api';
import { useToast } from '@/components/ui/use-toast';

export default function SignupModal() {
  const { signupModalOpen, setSignupModalOpen, setLoginModalOpen } = useUiStore();
  const { referrer } = useAuthStore();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await signup({
        firstName,
        lastName,
        email,
        password,
      });
      toast({
        title: "Account created successfully",
        description: "Welcome to KlanPeak! You can now log in to your account.",
      });
      setSignupModalOpen(false);
    } catch (error) {
      toast({
        title: "Signup failed",
        description: "There was an error creating your account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenLoginModal = () => {
    setSignupModalOpen(false);
    setLoginModalOpen(true);
  };

  return (
    <Dialog open={signupModalOpen} onOpenChange={setSignupModalOpen}>
      <DialogContent className="sm:max-w-md animate-zoom-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            Create your KlanPeak account
          </DialogTitle>
          {referrer && (
            <div className="text-center text-sm text-muted-foreground">
              You were referred by {referrer.firstName} {referrer.lastName}
            </div>
          )}
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Sign up"}
          </Button>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Button variant="link" className="p-0 h-auto" onClick={handleOpenLoginModal}>
              Login
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
