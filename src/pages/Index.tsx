import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowRight, Users, Target, Heart, Globe, Mail, Phone, Instagram, MapPin, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";

import realisticHero from "@/assets/realistic-hero.jpg";
import realisticEducation from "@/assets/realistic-education.jpg";
import realisticCommunity from "@/assets/realistic-community.jpg";
import realisticDigital from "@/assets/realistic-digital.jpg";
import realisticFood from "@/assets/realistic-food.jpg";
import realisticWomen from "@/assets/realistic-women.jpg";
import realisticVolunteer from "@/assets/realistic-volunteer.jpg";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const volunteerSchema = z.object({
  full_name: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Phone number is required"),
  age: z.coerce.number().min(16, "You must be at least 16 to volunteer"),
  city: z.string().min(2, "City is required"),
  area_of_interest: z.enum(["Education", "Digital Skills", "Community Service", "Events", "Fundraising", "Other"], {
    errorMap: () => ({ message: "Please select an area of interest" })
  }),
  availability: z.enum(["Weekdays", "Weekends", "Both"], {
    errorMap: () => ({ message: "Please select your availability" })
  }),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type VolunteerFormValues = z.infer<typeof volunteerSchema>;

const Index = () => {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const volunteerForm = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: { full_name: "", email: "", phone: "", age: undefined, city: "", message: "" },
  });

  const handleGetInvolved = () => {
    setIsSubmitSuccess(false);
    volunteerForm.reset();
    setIsVolunteerModalOpen(true);
  };

  const onSubmitContact = async (data: ContactFormValues) => {
    const { error } = await supabase.from("contact_submissions").insert([data]);
    
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Message sent! We will get back to you soon.");
      contactForm.reset();
    }
  };

  const onSubmitVolunteer = async (data: VolunteerFormValues) => {
    const { error } = await supabase.from("volunteer_applications").insert([data]);
    
    if (error) {
      toast.error(error.message);
    } else {
      setIsSubmitSuccess(true);
      setTimeout(() => {
        setIsVolunteerModalOpen(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/uploads/432c84aa-78f0-480f-94c9-6cff82cd5eda.png" alt="WeAreYouth Foundation Logo" className="h-10 w-10 mr-3" />
              <h1 className="text-2xl font-bold text-primary">WeAreYouth Foundation</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/journey" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Our Journey</Link>
                <Link to="/education" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Education</Link>
                <Link to="/gallery" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={realisticHero} alt="Youth Empowerment" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/80 to-purple-700/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            WeAreYouth
            <span className="block text-orange-400">Foundation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
            "Empowering Dreams, Building Futures"
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforming lives through education, innovation, and community development initiatives that create lasting positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/journey">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" onClick={handleGetInvolved} className="border-2 border-white text-white hover:bg-white hover:text-blue-700 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Get Involved
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Youth Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Programs Launched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
              <div className="text-gray-600">Volunteers Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work across multiple domains to create comprehensive impact in youth development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600">Quality education programs and skill development initiatives</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Technology and innovation workshops for future leaders</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Building stronger, more connected communities</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                <p className="text-gray-600">Creating positive change that extends beyond borders</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Work in Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
              "Together, we are building a brighter tomorrow"
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              See how we're making a real difference in communities across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={realisticEducation} alt="Youth Education Program" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Education Excellence</h3>
                <p className="text-sm">"Knowledge is the foundation of empowerment"</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={realisticDigital} alt="Digital Skills Training" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Digital Innovation</h3>
                <p className="text-sm">"Technology bridges dreams and reality"</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={realisticCommunity} alt="Community Service" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Community Service</h3>
                <p className="text-sm">"Service to others is the rent we pay for our room here on Earth"</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={realisticFood} alt="Food Distribution" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Food Relief</h3>
                <p className="text-sm">"Nourishing bodies to nurture hopes"</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={realisticWomen} alt="Women Empowerment" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Women & Girls</h3>
                <p className="text-sm">"Empowering she to change the world"</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={realisticVolunteer} alt="Volunteer Drives" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Our Volunteers</h3>
                <p className="text-sm">"The dedicated hands driving real change"</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                "Every young person deserves the opportunity to reach their full potential"
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Through our comprehensive programs, we're not just changing individual lives – we're transforming entire communities and building a stronger, more equitable future for all.
              </p>
              <Link to="/education">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Explore Our Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Stack */}
      <section id="contact-info" className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 text-center text-lg">Get in touch with us to learn more about our mission and how you can get involved</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-orange-100 to-orange-50">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Email</h3>
                <div className="space-y-2">
                  <p className="text-gray-700 text-sm">anupamfrench@gmail.com</p>
                  <p className="text-gray-700 text-sm">weareyouthfoundation@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-blue-100 to-blue-50">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Phone</h3>
                <div className="space-y-2">
                  <p className="text-gray-700 text-sm">+91 95207 72131</p>
                  <p className="text-gray-700 text-sm">+91 89519 59583</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-pink-100 to-purple-50 cursor-pointer"
                  onClick={() => window.open('https://www.instagram.com/wayforindia/', '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Instagram</h3>
                <p className="text-gray-700 text-sm">@wayforindia</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-green-100 to-teal-50 cursor-pointer"
                  onClick={() => window.open('https://www.google.com/maps/place/We+Are+Youth+Foundation/@25.355833,82.9315045,17z/data=!3m1!4b1!4m6!3m5!1s0x398e2db7b2c9b645:0xb817cbd73c502956!8m2!3d25.3558282!4d82.9363754!16s%2Fg%2F11w3vk1_4_?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D', '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="bg-green-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Address</h3>
                <div className="space-y-1">
                  <p className="text-gray-700 text-sm">Kariya baba Mandir, Chamaw</p>
                  <p className="text-gray-700 text-sm">Shivpur, Ahiran, Varanasi</p>
                  <p className="text-gray-700 text-sm">Uttar Pradesh, 221003</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send us a Message</h3>
            <Form {...contactForm}>
              <form onSubmit={contactForm.handleSubmit(onSubmitContact)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={contactForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={contactForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl><Input placeholder="+91 99999 99999" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-center">
                  <Button type="submit" size="lg" className="w-full md:w-auto px-10 bg-blue-600 hover:bg-blue-700" disabled={contactForm.formState.isSubmitting}>
                    {contactForm.formState.isSubmitting ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                    ) : "Send Message"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pink-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Ready to Make a Difference?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our community of changemakers and help us empower the next generation
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" onClick={handleGetInvolved} className="bg-white text-blue-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg px-10 py-4 rounded-full shadow-lg">
              Volunteer With Us
            </Button>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-300 text-lg px-10 py-4 rounded-full">
                See Our Impact
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer Application Modal */}
      <Dialog open={isVolunteerModalOpen} onOpenChange={setIsVolunteerModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center font-bold text-blue-700">Volunteer Application</DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Take the first step towards creating real impact. Fill out the form below.
            </DialogDescription>
          </DialogHeader>

          {isSubmitSuccess ? (
            <div className="py-12 text-center flex flex-col items-center animate-in fade-in zoom-in duration-300">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
              <p className="text-gray-600">We have received your application and will be in touch shortly.</p>
            </div>
          ) : (
            <Form {...volunteerForm}>
              <form onSubmit={volunteerForm.handleSubmit(onSubmitVolunteer)} className="space-y-4 py-4">
                <FormField
                  control={volunteerForm.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={volunteerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl><Input type="email" placeholder="email@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={volunteerForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone *</FormLabel>
                        <FormControl><Input placeholder="+91..." {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={volunteerForm.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age *</FormLabel>
                        <FormControl><Input type="number" min="1" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={volunteerForm.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City *</FormLabel>
                        <FormControl><Input placeholder="E.g., Varanasi" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={volunteerForm.control}
                  name="area_of_interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area of Interest *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an area..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="Digital Skills">Digital Skills</SelectItem>
                          <SelectItem value="Community Service">Community Service</SelectItem>
                          <SelectItem value="Events">Events</SelectItem>
                          <SelectItem value="Fundraising">Fundraising</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={volunteerForm.control}
                  name="availability"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Availability *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select availability..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Weekdays">Weekdays</SelectItem>
                          <SelectItem value="Weekends">Weekends</SelectItem>
                          <SelectItem value="Both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={volunteerForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Why do you want to volunteer? (Optional)</FormLabel>
                      <FormControl><Textarea className="resize-none" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" disabled={volunteerForm.formState.isSubmitting}>
                  {volunteerForm.formState.isSubmitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
                  ) : "Submit Application"}
                </Button>
              </form>
            </Form>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/uploads/432c84aa-78f0-480f-94c9-6cff82cd5eda.png" alt="WeAreYouth Foundation Logo" className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">WeAreYouth Foundation</h3>
              </div>
              <p className="text-gray-400">
                Empowering youth through education, innovation, and community development.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/journey" className="text-gray-400 hover:text-white">Our Journey</Link></li>
                <li><Link to="/education" className="text-gray-400 hover:text-white">Education</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
                <li><a href="#contact-info" className="text-gray-400 hover:text-white" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' });
                }}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
              <Button onClick={handleGetInvolved} className="bg-orange-500 hover:bg-orange-600">
                Join Our Mission
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WeAreYouth Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Index;
