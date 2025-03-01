
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Policy() {
  const { tab } = useParams<{ tab?: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("rules");

  // Set the active tab based on the URL parameter
  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    } else {
      // Redirect to the default tab if no tab is specified
      navigate("/policy/rules", { replace: true });
    }
  }, [tab, navigate]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/policy/${value}`);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Policy | KlanPeak</title>
        <meta name="description" content="KlanPeak policies and terms of service." />
      </Helmet>

      <div className="container px-4 mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Policies</h1>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
            <TabsTrigger value="rules">Rules</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="terms">Terms</TabsTrigger>
            <TabsTrigger value="cookies">Cookies</TabsTrigger>
            <TabsTrigger value="transaction">Transaction</TabsTrigger>
            <TabsTrigger value="acceptable-use">Acceptable Use</TabsTrigger>
          </TabsList>
          
          <div className="mt-8 p-6 bg-white rounded-lg border">
            <TabsContent value="rules" className="space-y-4">
              <h2 className="text-2xl font-bold">KlanPeak Rules</h2>
              <p>These rules govern your use of KlanPeak and ensure a safe environment for all community members.</p>
              
              <h3 className="text-xl font-semibold mt-6">1. Respect Other Users</h3>
              <p>Treat everyone with respect. Harassment, hate speech, or discrimination of any kind is not allowed.</p>
              
              <h3 className="text-xl font-semibold mt-6">2. No Harmful Content</h3>
              <p>Don't post or share content that could harm others, including malware, phishing attempts, or scams.</p>
              
              <h3 className="text-xl font-semibold mt-6">3. Community Guidelines</h3>
              <p>Follow the specific guidelines set by community owners in addition to these platform-wide rules.</p>
            </TabsContent>
            
            <TabsContent value="privacy" className="space-y-4">
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
              <p>This Privacy Policy explains how we collect, use, and protect your personal information.</p>
              
              <h3 className="text-xl font-semibold mt-6">Information We Collect</h3>
              <p>We collect information you provide directly to us, such as your name, email address, and payment information when you create an account or make a purchase.</p>
              
              <h3 className="text-xl font-semibold mt-6">How We Use Your Information</h3>
              <p>We use your information to provide, maintain, and improve our services, process transactions, send communications, and for security purposes.</p>
              
              <h3 className="text-xl font-semibold mt-6">Information Sharing</h3>
              <p>We do not sell your personal information. We may share information with third-party service providers that help us operate our business.</p>
            </TabsContent>
            
            <TabsContent value="terms" className="space-y-4">
              <h2 className="text-2xl font-bold">Terms and Conditions</h2>
              <p>These Terms and Conditions constitute a legally binding agreement between you and KlanPeak.</p>
              
              <h3 className="text-xl font-semibold mt-6">1. Account Terms</h3>
              <p>You are responsible for maintaining the security of your account and password. KlanPeak cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.</p>
              
              <h3 className="text-xl font-semibold mt-6">2. Payment Terms</h3>
              <p>You are responsible for paying all fees associated with your use of KlanPeak. You agree to provide complete and accurate billing information.</p>
              
              <h3 className="text-xl font-semibold mt-6">3. Cancellation and Termination</h3>
              <p>You are solely responsible for properly canceling your account. An email or phone request to cancel your account is not considered cancellation.</p>
            </TabsContent>
            
            <TabsContent value="cookies" className="space-y-4">
              <h2 className="text-2xl font-bold">Cookie Policy</h2>
              <p>This Cookie Policy explains how we use cookies and similar technologies on KlanPeak.</p>
              
              <h3 className="text-xl font-semibold mt-6">What Are Cookies</h3>
              <p>Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>
              
              <h3 className="text-xl font-semibold mt-6">How We Use Cookies</h3>
              <p>We use cookies to understand how you use our platform, remember your preferences, and improve your experience.</p>
              
              <h3 className="text-xl font-semibold mt-6">Managing Cookies</h3>
              <p>Most web browsers allow you to control cookies through their settings. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.</p>
            </TabsContent>
            
            <TabsContent value="transaction" className="space-y-4">
              <h2 className="text-2xl font-bold">Transaction Terms</h2>
              <p>These Transaction Terms govern all transactions conducted through KlanPeak.</p>
              
              <h3 className="text-xl font-semibold mt-6">Pricing and Fees</h3>
              <p>KlanPeak charges a 2.9% transaction fee on all payments processed through the platform. This fee is in addition to any payment processor fees that may apply.</p>
              
              <h3 className="text-xl font-semibold mt-6">Refunds</h3>
              <p>Refund policies are set by individual community owners. KlanPeak does not process refunds directly but provides tools for community owners to issue refunds.</p>
              
              <h3 className="text-xl font-semibold mt-6">Payment Processing</h3>
              <p>KlanPeak uses third-party payment processors to process payments. By making a purchase, you agree to their terms of service as well.</p>
            </TabsContent>
            
            <TabsContent value="acceptable-use" className="space-y-4">
              <h2 className="text-2xl font-bold">Acceptable Use Policy</h2>
              <p>This Acceptable Use Policy outlines permitted and prohibited uses of KlanPeak.</p>
              
              <h3 className="text-xl font-semibold mt-6">Prohibited Content</h3>
              <p>You may not use KlanPeak to publish, post, distribute, or disseminate any defamatory, obscene, or otherwise unlawful material or information.</p>
              
              <h3 className="text-xl font-semibold mt-6">Prohibited Activities</h3>
              <p>You may not use KlanPeak to engage in any activity that violates any laws, infringes on the rights of others, or interferes with the use of KlanPeak by others.</p>
              
              <h3 className="text-xl font-semibold mt-6">Enforcement</h3>
              <p>Violation of this Acceptable Use Policy may result in the termination of your access to KlanPeak without notice.</p>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
