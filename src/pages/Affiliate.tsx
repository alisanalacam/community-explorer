
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Copy, BookOpen } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/components/ui/use-toast";

export default function Affiliate() {
  const [referralLink, setReferralLink] = useState("https://klanpeak.com/signup?ref=4a8f3c2e1b0d9a8f7");
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      description: "Referral link copied to clipboard!",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Affiliate Program | KlanPeak</title>
        <meta name="description" content="Earn 40% of recurring revenue for life by referring people to KlanPeak. Join our affiliate program today." />
      </Helmet>

      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-8">Earn 40% of recurring revenue</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Refer people to KlanPeak and earn 40% of monthly recurring revenue for life.
            <br />
            If somebody creates a community from your referral, we attribute it to you automatically.
          </p>

          <div className="mt-10">
            <Button 
              size="lg" 
              className="px-10 py-6 text-lg font-semibold bg-amber-300 hover:bg-amber-400 text-black"
            >
              BECOME AN AFFILIATE
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Step 1 */}
          <div className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">1. Share your link</h2>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Copy size={18} className="text-gray-500" />
                <span className="font-medium">Your referral link</span>
              </div>
              <div className="flex items-center gap-2">
                <Input 
                  value={referralLink} 
                  readOnly 
                  className="text-sm"
                />
                <Button 
                  variant="outline" 
                  onClick={copyToClipboard}
                >
                  COPY
                </Button>
              </div>
            </div>
            <p className="text-gray-600">
              Share your referral link with your friends, followers, or customers.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">2. Somebody signs up</h2>
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">
                  <span className="text-brand-blue">k</span>
                  <span className="text-brand-red">l</span>
                  <span className="text-brand-yellow">a</span>
                  <span className="text-brand-teal">n</span>
                  <span className="text-gray-800">Peak</span>
                </div>
                <p className="text-lg font-semibold">Create your KlanPeak account</p>
                <div className="flex items-center justify-center gap-2 mt-3 text-sm">
                  <span>You were referred by</span>
                  <span className="font-semibold">Sam Ovens</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              When your friend signs up for KlanPeak, they will be attributed to you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">3. Earn 40% commission</h2>
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="flex justify-between mb-2 text-sm text-gray-500">
                  <span>Pending</span>
                  <span>Available</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-2xl font-bold">$0</span>
                  <span className="text-2xl font-bold">$39</span>
                </div>
                <Button className="w-full bg-amber-300 hover:bg-amber-400 text-black">
                  PAY OUT
                </Button>
              </div>
            </div>
            <p className="text-gray-600">
              You'll earn 40% of their monthly subscription fee for life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left Box */}
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="flex gap-3 mb-4">
              <div className="bg-amber-200 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <div className="text-amber-700 font-bold">$</div>
              </div>
              <h3 className="text-xl font-bold">Your community earns money automatically</h3>
            </div>
            <p className="text-gray-600">
              If you have a community and one of your members creates a community — we'll attribute the referral to you automatically. This makes KlanPeak an income stream, not a cost.
            </p>
          </div>

          {/* Right Box */}
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="flex gap-3 mb-4">
              <div className="bg-amber-200 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <BookOpen size={20} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-bold">Get free training on how to promote it</h3>
            </div>
            <p className="text-gray-600">
              Don't know where to begin? Learn best practices for promoting KlanPeak and making money. We share the best methods we know so you can get up to speed fast!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
