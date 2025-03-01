
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useUiStore } from "@/store";

export default function Pricing() {
  const { setSignupModalOpen } = useUiStore();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Simple Pricing | KlanPeak</title>
        <meta name="description" content="KlanPeak offers simple, transparent pricing with everything included. Start your 14-day free trial today." />
      </Helmet>

      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Simple pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            1 plan with everything included. No hidden fees.
            <br />Get started with a 14-day free trial. Cancel anytime.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold">$99/month</h2>
          </div>

          <div className="space-y-4 max-w-md mx-auto mb-8">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-green-100 rounded-full p-1">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <span className="font-bold text-xl">1</span> group
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-green-100 rounded-full p-1">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <span className="font-bold text-xl">All</span> features
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-green-100 rounded-full p-1">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <span className="font-bold text-xl">Unlimited</span> courses
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-green-100 rounded-full p-1">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <span className="font-bold text-xl">Unlimited</span> members
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-green-100 rounded-full p-1">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <span className="font-bold text-xl">2.9%</span> transaction fee
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="w-full max-w-md py-6 text-lg bg-amber-300 hover:bg-amber-400 text-black"
              onClick={() => setSignupModalOpen(true)}
            >
              START 14-DAY FREE TRIAL
            </Button>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl text-muted-foreground">KlanPeak has the cheapest transaction fees.</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
          <div className="space-y-2">
            <p className="text-muted-foreground">Patreon</p>
            <p className="font-bold text-xl">14%</p>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">Discord</p>
            <p className="font-bold text-xl">16%</p>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">Gumroad</p>
            <p className="font-bold text-xl">14%</p>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">Kajabi</p>
            <p className="font-bold text-xl">4.9%</p>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">Stripe</p>
            <p className="font-bold text-xl">4.9%</p>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">KlanPeak</p>
            <p className="font-bold text-xl">2.9%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
