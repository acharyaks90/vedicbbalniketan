import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { toast } from "sonner";
import { GraduationCap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import kidsImage from "../../assets/kidsparent.png";

export function Admissions() {
  const [formData, setFormData] = useState({
    parentName: "",
    mobile: "",
    email: "",
    childName: "",
    grade: "",
    currentSchool: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Admission Enquiry Submitted:", formData);
    
    // Construct WhatsApp message with form data
    const phoneNumber = "919467883050"; // Format: country code + number without spaces or special characters
    const message = `Admission Enquiry:

Parent's Name: ${formData.parentName}
Mobile: ${formData.mobile}
Email: ${formData.email}
Child's Name: ${formData.childName}
Applying for Grade: ${formData.grade}
Current School & City: ${formData.currentSchool}
Message/Specific Questions: ${formData.message}

Hello! I would like to enquire about admissions at Vedic Bal Niketan.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast.success("Thank you for your enquiry! We will contact you soon.");
    // Reset form
    setFormData({
      parentName: "",
      mobile: "",
      email: "",
      childName: "",
      grade: "",
      currentSchool: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-white shadow-2xl overflow-hidden border-2 border-gray-200">
          <CardContent className="p-0">
            {/* Logo */}
            <div className="px-8 pt-8 pb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-[#7A1515] p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#7A1515]">VEDIC BAL</h3>
                  <h3 className="font-bold text-sm text-[#7A1515] -mt-1">NIKETAN</h3>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Left Side - Form */}
              <div>
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-[#D4A574] mr-4"></div>
                    <h1 className="text-3xl font-bold text-[#7A1515] text-center">
                      ADMISSIONS ENQUIRY
                    </h1>
                    <div className="w-3 h-3 rounded-full bg-[#D4A574] ml-4"></div>
                  </div>
                  <p className="text-center text-[#D2691E] text-sm font-medium tracking-wide">
                    START YOUR JOURNEY WITH US
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="parentName" className="text-[#2C1810] text-sm font-medium mb-2 block">
                      Parent's Full Name
                    </Label>
                    <Input
                      id="parentName"
                      placeholder="Enter name"
                      value={formData.parentName}
                      onChange={(e) => handleChange("parentName", e.target.value)}
                      className="bg-white border-gray-300 focus:border-[#7A1515] focus:ring-[#7A1515]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="mobile" className="text-[#2C1810] text-sm font-medium mb-2 block">
                      Mobile Number <span className="text-gray-400 text-xs">(WhatsApp Preferred)</span>
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="+91 00000-00000"
                      value={formData.mobile}
                      onChange={(e) => handleChange("mobile", e.target.value)}
                      className="bg-white border-gray-300 focus:border-[#7A1515] focus:ring-[#7A1515]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#2C1810] text-sm font-medium mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-white border-gray-300 focus:border-[#7A1515] focus:ring-[#7A1515]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="childName" className="text-[#2C1810] text-sm font-medium mb-2 block">
                      Child's Name
                    </Label>
                    <Input
                      id="childName"
                      placeholder="Enter child's name"
                      value={formData.childName}
                      onChange={(e) => handleChange("childName", e.target.value)}
                      className="bg-white border-gray-300 focus:border-[#7A1515] focus:ring-[#7A1515]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="grade" className="text-[#2C1810] text-sm font-medium mb-2 block">
                      Applying for Grade
                    </Label>
                    <Select value={formData.grade} onValueChange={(value) => handleChange("grade", value)} required>
                      <SelectTrigger className="bg-white border-gray-300 focus:border-[#7A1515] focus:ring-[#7A1515]">
                        <SelectValue placeholder="Select Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="lkg">LKG</SelectItem>
                        <SelectItem value="ukg">UKG</SelectItem>
                        <SelectItem value="1">Class 1</SelectItem>
                        <SelectItem value="2">Class 2</SelectItem>
                        <SelectItem value="3">Class 3</SelectItem>
                        <SelectItem value="4">Class 4</SelectItem>
                        <SelectItem value="5">Class 5</SelectItem>
                        <SelectItem value="6">Class 6</SelectItem>
                        <SelectItem value="7">Class 7</SelectItem>
                        <SelectItem value="8">Class 8</SelectItem>
                        <SelectItem value="9">Class 9</SelectItem>
                        <SelectItem value="10">Class 10</SelectItem>
                        <SelectItem value="11">Class 11</SelectItem>
                        <SelectItem value="12">Class 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="currentSchool" className="text-[#2C1810] text-sm font-medium mb-2 block">
                      Current School & City
                    </Label>
                    <Input
                      id="currentSchool"
                      placeholder="School Name, City"
                      value={formData.currentSchool}
                      onChange={(e) => handleChange("currentSchool", e.target.value)}
                      className="bg-white border-gray-300 focus:border-[#7A1515] focus:ring-[#7A1515]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#2C1810] text-sm font-medium mb-2 block">
                      Message/Specific Questions
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={3}
                      className="bg-white border-gray-300 focus:border-[#7A1515] focus:ring-[#7A1515] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#7A1515] hover:bg-[#5A0F0F] text-white py-6 text-base font-semibold rounded-full"
                  >
                    SUBMIT ENQUIRY
                  </Button>
                </form>
              </div>

              {/* Right Side - Image and Tagline */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  {/* Arched frame effect */}
                  <div className="relative w-64 h-80 overflow-hidden rounded-t-full border-8 border-[#D4A574]">
                    <ImageWithFallback
                      src={kidsImage}
                      alt="Parent and Child"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="mt-8 text-center max-w-sm">
                  <p className="text-sm text-[#6B5D52] italic leading-relaxed">
                    Fostering excellence through traditional values and modern innovation at Vedic Bal Niketan.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
