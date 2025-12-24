import { useState } from 'react';
import { Layout, Breadcrumb } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const procedures = [
  'Rhinoplasty',
  'Double Eyelid Surgery',
  'V-Line Surgery',
  'Liposuction',
  'Face Lift',
  'Botox',
  'Fillers',
  'Ultherapy',
  'Hair Transplant',
  'Skin Treatment',
  'Other',
];

const countries = [
  'United States',
  'United Kingdom',
  'Australia',
  'Canada',
  'Singapore',
  'Malaysia',
  'Thailand',
  'Vietnam',
  'Indonesia',
  'Philippines',
  'United Arab Emirates',
  'Saudi Arabia',
  'Other',
];

export default function Consultation() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    procedure: '',
    message: '',
    privacy: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: 'Please accept the privacy policy',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual Supabase integration
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Consultation request submitted!',
      description: 'We will contact you within 24 hours.',
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      procedure: '',
      message: '',
      privacy: false,
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className="container-custom py-8">
        <Breadcrumb items={[{ label: 'Free Consultation' }]} />

        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Get Your Free Consultation
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Tell us about your goals and our medical tourism experts will connect you with the best clinics for your needs.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg bg-accent p-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">100% Free</p>
                <p className="text-sm text-muted-foreground">No hidden fees</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-accent p-4">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">24hr Response</p>
                <p className="text-sm text-muted-foreground">Quick follow-up</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-accent p-4">
              <MessageCircle className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">Expert Guidance</p>
                <p className="text-sm text-muted-foreground">Personalized advice</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="mt-10">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) => setFormData({ ...formData, country: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="procedure">Interested Procedure *</Label>
                  <Select
                    value={formData.procedure}
                    onValueChange={(value) => setFormData({ ...formData, procedure: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a procedure" />
                    </SelectTrigger>
                    <SelectContent>
                      {procedures.map((procedure) => (
                        <SelectItem key={procedure} value={procedure}>
                          {procedure}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals, questions, or any specific clinics you're interested in..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) => setFormData({ ...formData, privacy: checked as boolean })}
                  />
                  <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to the{' '}
                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> and consent to being contacted about my inquiry.
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* What Happens Next */}
          <div className="mt-12">
            <h2 className="text-center font-serif text-2xl font-bold">What Happens Next?</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <h3 className="mt-4 font-semibold">We Review Your Request</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our team analyzes your goals and preferences
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <h3 className="mt-4 font-semibold">Personalized Recommendations</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We suggest the best clinics and procedures for you
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <h3 className="mt-4 font-semibold">Connect with Clinics</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Schedule consultations directly with chosen clinics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}