
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from '@/components/ui/use-toast';
import { requestPasswordReset } from '@/services/api';

interface ForgotPasswordFormProps {
  onBackToLogin: () => void;
}

export default function ForgotPasswordForm({ onBackToLogin }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await requestPasswordReset(email);
      setIsSuccess(true);
      toast({
        title: "Reset link sent",
        description: "Please check your email for password reset instructions.",
      });
    } catch (error) {
      toast({
        title: "Request failed",
        description: "There was a problem sending the reset link. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setEmail('');
    setIsSuccess(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md animate-fade-up">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            {isSuccess ? "Check your email" : "Reset your password"}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {isSuccess 
              ? "We've sent password reset instructions to your email."
              : "Enter your email address and we'll send you a link to reset your password."}
          </p>
        </div>
        
        {isSuccess ? (
          <div className="space-y-4">
            <p className="text-center text-sm">
              Didn't receive the email? Check your spam folder or try again with a different email.
            </p>
            <Button 
              onClick={handleReset} 
              variant="outline" 
              className="w-full"
            >
              Try another email
            </Button>
            <Button 
              onClick={onBackToLogin} 
              className="w-full"
            >
              Back to login
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="forgot-email">Email</Label>
              <Input 
                id="forgot-email" 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send reset link"}
            </Button>
            <div className="text-center text-sm mt-4">
              <Button variant="link" className="p-0 h-auto" onClick={onBackToLogin}>
                Back to login
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
