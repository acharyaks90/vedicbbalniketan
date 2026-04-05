import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide quality education that develops intellectual curiosity, critical thinking, and moral character in every student.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be a leading educational institution that empowers students to become responsible global citizens and lifelong learners.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in academics, sports, arts, and all aspects of student development.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a strong, supportive community where students, teachers, and parents work together.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760267973986-5370a55550f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN0dWR5aW5nJTIwbGlicmFyeSUyMGJvb2tzfGVufDF8fHx8MTc3MzUwOTM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl mb-4">About Vedic Bal Niketan</h1>
          <p className="text-xl">
            A legacy of excellence in education
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6 text-gray-900">Who We Are</h2>
          <p className="text-gray-600 text-lg mb-4">
            Indian School, established with a vision to provide quality education, has been serving the community of Chhainsa Ballabhgarh, Faridabad for years. We are committed to nurturing young minds and preparing them for the challenges of tomorrow.
          </p>
          <p className="text-gray-600 text-lg">
            Our school combines traditional values with modern teaching methodologies to create a holistic learning environment where every child can thrive academically, socially, and emotionally.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Our Facilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <ImageWithFallback
                src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzY2hvb2wlMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzM1MDkzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Smart Classrooms"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl mb-2 text-gray-900">Smart Classrooms</h3>
              <p className="text-gray-600">Modern classrooms equipped with digital learning tools</p>
            </div>
            
            <div className="text-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766297247194-9b635e9eea56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHNjaG9vbCUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MzUwOTM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Science Labs"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl mb-2 text-gray-900">Science Laboratories</h3>
              <p className="text-gray-600">Well-equipped labs for practical learning</p>
            </div>
            
            <div className="text-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1716139144526-d25486684559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmaWVsZCUyMHBsYXlncm91bmQlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzM1MDkzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sports Facilities"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl mb-2 text-gray-900">Sports Complex</h3>
              <p className="text-gray-600">Dedicated sports facilities for physical development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-8 text-center">Why Choose Vedic Bal Niketan?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <div className="flex items-start space-x-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p>Experienced and qualified teaching staff</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p>Focus on holistic student development</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p>State-of-the-art infrastructure and facilities</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p>Safe and nurturing learning environment</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p>Strong emphasis on values and character building</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p>Comprehensive curriculum and co-curricular activities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}