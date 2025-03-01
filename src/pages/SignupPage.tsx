
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { signup } from '@/services/api';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store';

export default function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [referrerInfo, setReferrerInfo] = useState<{ firstName: string; lastName: string } | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { setReferrer } = useAuthStore();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const refCode = searchParams.get('ref');
    
    if (refCode) {
      // In a real app, you would fetch the referrer's info using the ref code
      // For now, let's simulate this with dummy data
      const dummyReferrer = { firstName: 'John', lastName: 'Doe' };
      setReferrerInfo(dummyReferrer);
      setReferrer(dummyReferrer);
    }
  }, [location, setReferrer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await signup({
        firstName,
        lastName,
        email,
        password,
        referralCode: new URLSearchParams(location.search).get('ref') || undefined
      });
      
      toast({
        title: "Account created successfully",
        description: "Welcome to KlanPeak! You can now log in to your account.",
      });
      
      navigate('/');
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md animate-fade-up">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Create your KlanPeak account</h1>
          {referrerInfo && (
            <p className="mt-2 text-muted-foreground">
              You were referred by {referrerInfo.firstName} {referrerInfo.lastName}
            </p>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="signup-firstName">First Name</Label>
              <Input 
                id="signup-firstName" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-lastName">Last Name</Label>
              <Input 
                id="signup-lastName" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input 
              id="signup-email" 
              type="email" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input 
              id="signup-password" 
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
          
          <div className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Button variant="link" className="p-0 h-auto" onClick={() => navigate('/')}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
