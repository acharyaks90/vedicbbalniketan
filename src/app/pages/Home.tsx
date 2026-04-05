import { Link } from "react-router";
import { GraduationCap, Users, Award, BookOpen, Globe, Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import schoolImage from "../../assets/school.png";

export function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Comprehensive curriculum designed to develop critical thinking and creativity",
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Dedicated and qualified teachers committed to student excellence",
    },
    {
      icon: Globe,
      title: "Modern Facilities",
      description: "State-of-the-art infrastructure and learning resources",
    },
    {
      icon: Award,
      title: "Holistic Development",
      description: "Focus on academics, sports, arts, and character building",
    },
    {
      icon: Heart,
      title: "Safe Environment",
      description: "Secure and nurturing atmosphere for all students",
    },
    {
      icon: GraduationCap,
      title: "Career Guidance",
      description: "Professional counseling to help students choose the right path",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={schoolImage}
            alt="School Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#7A1515]/90 to-[#D2691E]/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl mb-6">
            Welcome to Vedic Bal Niketan
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Nurturing Minds, Building Futures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-white text-[#7A1515] hover:bg-[#F5F1E8]">
                Apply Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[#7A1515]">Why Choose Us</h2>
            <p className="text-[#6B5D52] max-w-2xl mx-auto">
              We are committed to providing an exceptional educational experience that prepares students for success in life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-[#D4A574]/20">
                <CardContent className="p-6">
                  <div className="bg-[#7A1515]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#7A1515]" />
                  </div>
                  <h3 className="text-xl mb-2 text-[#2C1810]">{feature.title}</h3>
                  <p className="text-[#6B5D52]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzY2hvb2wlMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzM1MDkzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students Learning"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6 text-[#7A1515]">About Our School</h2>
              <p className="text-[#6B5D52] mb-4">
                Vedic Bal Niketan, located in Chhainsa Ballabhgarh, Faridabad, is dedicated to providing quality education that shapes young minds and prepares them for a successful future.
              </p>
              <p className="text-[#6B5D52] mb-6">
                Our experienced faculty, modern infrastructure, and comprehensive curriculum ensure that every student receives the best possible education in a safe and nurturing environment.
              </p>
              <Link to="/about">
                <Button className="bg-[#7A1515] hover:bg-[#5A0F0F]">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#7A1515] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8">
            Take the first step towards a brighter future for your child
          </p>
          <Link to="/admissions">
            <Button size="lg" className="bg-white text-[#7A1515] hover:bg-[#F5F1E8]">
              Apply for Admission
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}