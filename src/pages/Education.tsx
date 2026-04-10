import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Target, Award, ArrowRight, GraduationCap, Lightbulb, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Education = () => {
  const handleGetInvolved = () => {
    const googleFormUrl = "https://docs.google.com/forms/d/1SYbwPyiAMtrZBklhF_vFpw-i5vASj7Pmu8xWSzZTZR8/edit";
    window.open(googleFormUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/uploads/432c84aa-78f0-480f-94c9-6cff82cd5eda.png" alt="WeAreYouth Foundation Logo" className="h-10 w-10 mr-3" />
              <Link to="/" className="text-2xl font-bold text-primary">WeAreYouth Foundation</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/journey" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Our Journey</Link>
                <Link to="/education" className="text-primary px-3 py-2 rounded-md text-sm font-medium">Education</Link>
                <Link to="/gallery" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Education is the
              <span className="block text-orange-400">Foundation of Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
              "Education is the most powerful weapon which you can use to change the world"
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover how education transforms lives and communities, and learn about our mission to provide quality education to every youth
            </p>
            <Button size="lg" onClick={handleGetInvolved} className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Join Our Mission <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Importance of Education */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Education Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Education is not just about learning facts, it's about empowering individuals to transform their lives and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-none">
              <CardContent className="p-8">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Knowledge & Skills</h3>
                <p className="text-gray-600 leading-relaxed">
                  Education provides essential knowledge and practical skills that enable individuals to solve problems, think critically, and adapt to changing circumstances.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-orange-50 border-none">
              <CardContent className="p-8">
                <div className="bg-orange-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Breaking Barriers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quality education breaks the cycle of poverty, opens doors to opportunities, and creates pathways for social and economic mobility.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50 border-none">
              <CardContent className="p-8">
                <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  When individuals are educated, entire communities benefit through innovation, leadership, and sustainable development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Educational Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Educational Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through our comprehensive programs, we're making education accessible and impactful for youth across communities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-full p-3 flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Literacy Programs</h3>
                  <p className="text-gray-600">
                    We've equipped over 300 youth with essential digital skills, preparing them for the modern workforce and bridging the digital divide in rural communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mentorship Networks</h3>
                  <p className="text-gray-600">
                    Our mentorship program connects 200+ youth with professionals and educators, providing guidance, career counseling, and personal development support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 rounded-full p-3 flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scholarship Programs</h3>
                  <p className="text-gray-600">
                    We've provided educational scholarships to 150+ deserving students, ensuring financial barriers don't prevent access to quality education.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Education Statistics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Students Supported</span>
                    <span className="text-2xl font-bold text-orange-400">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Digital Skills Trained</span>
                    <span className="text-2xl font-bold text-orange-400">300+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Scholarships Awarded</span>
                    <span className="text-2xl font-bold text-orange-400">150+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Educational Programs</span>
                    <span className="text-2xl font-bold text-orange-400">25+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Educational Programs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Educational Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to address different aspects of education and skill development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-none">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4 w-16 h-16 mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Skill Development Workshops</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Interactive workshops covering communication skills, leadership development, technical skills, and entrepreneurship to prepare youth for future challenges.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Communication & Public Speaking
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Leadership & Team Building
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Entrepreneurship Training
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-none">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-4 w-16 h-16 mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Career Guidance Programs</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive career counseling and guidance programs to help youth make informed decisions about their educational and professional paths.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Career Assessment & Planning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Industry Expert Sessions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Job Placement Support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Educational Mission</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Help us create a world where every young person has access to quality education and the opportunity to reach their full potential
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" onClick={handleGetInvolved} className="bg-white text-blue-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg px-10 py-4 rounded-full shadow-lg">
              Volunteer With Us
            </Button>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-300 text-lg px-10 py-4 rounded-full">
                See Our Impact
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
