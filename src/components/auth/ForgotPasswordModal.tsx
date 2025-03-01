
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from '@/components/ui/use-toast';
import { requestPasswordReset } from '@/services/api';

interface ForgotPasswordModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBackToLogin: () => void;
}

export default function ForgotPasswordModal({ open, onOpenChange, onBackToLogin }: ForgotPasswordModalProps) {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md animate-zoom-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            {isSuccess ? "Check your email" : "Reset your password"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {isSuccess 
              ? "We've sent password reset instructions to your email."
              : "Enter your email address and we'll send you a link to reset your password."}
          </DialogDescription>
        </DialogHeader>
        
        {isSuccess ? (
          <div className="space-y-4 pt-4">
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
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="reset-email">Email</Label>
              <Input 
                id="reset-email" 
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
            <div className="text-center text-sm">
              <Button variant="link" className="p-0 h-auto" onClick={onBackToLogin}>
                Back to login
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
