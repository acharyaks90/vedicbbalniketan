import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry Form Submitted:", formData);
    
    // Construct WhatsApp message with form data
    const phoneNumber = "919467883050"; // Format: country code + number without spaces or special characters
    const message = `Contact Enquiry:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}

Hello! I would like to enquire about Vedic Bal Niketan.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast.success("Thank you for your enquiry! We will get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Chhainsa Ballabhgarh, Faridabad",
    },
    {
      icon: Phone,
      title: "Phone",
      content: (
        <div className="flex flex-col">
          <a href="tel:9467883040" className="hover:text-[#7A1515] transition-colors">
            9467883040
          </a>
          <a href="tel:9467883050" className="hover:text-[#7A1515] transition-colors">
            9467883050
          </a>
          <a href="tel:7027343447" className="hover:text-[#7A1515] transition-colors">
            7027343447
          </a>
        </div>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a href="mailto:info@vedicbalniketan.com" className="hover:text-[#7A1515] transition-colors">
          info@vedicbalniketan.com
        </a>
      ),
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Saturday: 8:00 AM - 4:00 PM",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7A1515] to-[#D2691E] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-xl">
            We're here to answer your questions and help you get started
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-[#D4A574]/20">
                <CardContent className="pt-6">
                  <div className="bg-[#7A1515]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-[#7A1515]" />
                  </div>
                  <h3 className="text-xl mb-2 text-[#2C1810]">{info.title}</h3>
                  <div className="text-[#6B5D52]">{info.content}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form and Map */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Enquiry Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us an Enquiry</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#7A1515] hover:bg-[#5A0F0F]" size="lg">
                    Send Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Visit Our Campus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.2599452!2d77.4619733!3d28.2599452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ccf309c7f58bd%3A0x5e37da874ba1fe7a!2sChhainsa!5e0!3m2!1sen!2sin!4v1647419456789!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <p className="text-gray-600">
                  We welcome parents and prospective students to visit our campus and experience our learning environment firsthand. Please call ahead to schedule a campus tour.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Why Choose Vedic Bal Niketan?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Experienced and dedicated faculty</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Modern infrastructure and facilities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Focus on holistic development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Safe and nurturing environment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Strong academic track record</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#7A1515] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join the Vedic Bal Niketan family and give your child the gift of quality education
          </p>
          <a href="/admissions">
            <Button size="lg" className="bg-white text-[#7A1515] hover:bg-[#F5F1E8]">
              Apply for Admission
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}