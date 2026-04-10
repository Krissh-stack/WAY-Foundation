import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Award, Globe, Target, Heart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Journey = () => {
  const handleJoinUs = () => {
    const googleFormUrl = "https://docs.google.com/forms/d/1SYbwPyiAMtrZBklhF_vFpw-i5vASj7Pmu8xWSzZTZR8/edit";
    window.open(googleFormUrl, '_blank');
  };

  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/uploads/432c84aa-78f0-480f-94c9-6cff82cd5eda.png" 
                alt="WeAreYouth Foundation Logo" 
                className="h-10 w-10 mr-3"
              />
              <Link to="/" className="text-2xl font-bold text-primary">WeAreYouth Foundation</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/journey" className="text-primary px-3 py-2 rounded-md text-sm font-medium">Our Journey</Link>
                <Link to="/education" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Education</Link>
                <Link to="/gallery" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Our Journey</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-4 font-medium">
              "From small beginnings come great things"
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover how our passion for youth empowerment has grown into a movement of positive change across communities
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700">
                  <Target className="h-6 w-6 mr-2" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To empower young people through comprehensive education, innovative programs, 
                  and community development initiatives that foster leadership, creativity, 
                  and social responsibility for lasting positive change.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <Lightbulb className="h-6 w-6 mr-2" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A world where every young person has access to quality education, 
                  meaningful opportunities, and the resources needed to become confident, 
                  capable leaders who drive positive transformation in their communities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Globe className="h-6 w-6 mr-2" />
                  Our Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2">
                  <li>• Reach 10,000+ youth by 2025</li>
                  <li>• Establish programs in 50+ communities</li>
                  <li>• Create sustainable impact models</li>
                  <li>• Build global partnerships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming lives through impactful programs and initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Past Programs</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">Digital Skills Academy</h4>
                  <p className="text-gray-600 mb-2">6-month intensive program teaching coding, digital marketing, and entrepreneurship</p>
                  <div className="text-sm text-gray-500">2023 • 150 graduates • 85% job placement rate</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-semibold text-orange-600 mb-2">Community Leadership Initiative</h4>
                  <p className="text-gray-600 mb-2">Empowering young leaders to drive positive change in their neighborhoods</p>
                  <div className="text-sm text-gray-500">2022-2023 • 75 participants • 25 community projects launched</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-semibold text-green-600 mb-2">Educational Support Program</h4>
                  <p className="text-gray-600 mb-2">Scholarships, tutoring, and mentorship for underprivileged students</p>
                  <div className="text-sm text-gray-500">2021-2024 • 300 students supported • 95% graduation rate</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Youth & Community Impact</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <div className="text-3xl font-bold text-blue-600">500+</div>
                      <div className="text-gray-600">Youth Directly Impacted</div>
                    </div>
                  </div>
                  <p className="text-gray-600">Young people who have participated in our programs and experienced measurable improvements in skills, confidence, and opportunities.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <Globe className="h-8 w-8 text-orange-600 mr-3" />
                    <div>
                      <div className="text-3xl font-bold text-orange-600">25+</div>
                      <div className="text-gray-600">Communities Transformed</div>
                    </div>
                  </div>
                  <p className="text-gray-600">Local communities that have benefited from our youth leadership programs and community development initiatives.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <Heart className="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <div className="text-3xl font-bold text-green-600">1000+</div>
                      <div className="text-gray-600">Lives Touched</div>
                    </div>
                  </div>
                  <p className="text-gray-600">Including families, friends, and community members who have been positively affected by our participants' growth and contributions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Strengths</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes us effective in creating lasting change
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Strategic Partnerships</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Educational Institutions</h4>
                  <p className="text-blue-700">Partnerships with 15+ schools and universities for program delivery</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800">Corporate Sponsors</h4>
                  <p className="text-orange-700">Collaboration with tech companies and local businesses for resources and internships</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Government Agencies</h4>
                  <p className="text-green-700">Working with local government for policy advocacy and program scaling</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Proven Results</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                  <div className="text-gray-600">Program Completion Rate</div>
                </div>
                <div className="text-center bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
                  <div className="text-gray-600">Employment Rate Post-Program</div>
                </div>
                <div className="text-center bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-600">Participant Satisfaction</div>
                </div>
                <div className="text-center bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
                  <div className="text-gray-600">Average Income Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the people who have been part of our journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="mb-6">
                <img 
                  src="/uploads/2f18d585-abcf-41ec-8098-8ae71b0c5bba.png" 
                  alt="Aman Yadav" 
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aman Yadav</h3>
              <p className="text-blue-600 font-semibold mb-4">Community Leader</p>
              <p className="text-gray-600 italic">
                "The impact WAY Foundation has made in our community is incredible. They truly understand what youth need to succeed."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="mb-6">
                <img 
                  src="/uploads/20417c41-3fca-4bff-a6fc-cfa97a6999ec.png" 
                  alt="Anupam Agarwal" 
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Anupam Agarwal</h3>
              <p className="text-orange-600 font-semibold mb-4">Program Graduate</p>
              <p className="text-gray-600 italic">
                "WAY Foundation gave me the confidence and skills I needed to pursue my dreams. The mentorship program changed my life completely."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="mb-6">
                <img 
                  src="/uploads/a0e725cc-c0f5-42c9-ae5a-7cbba30a6173.png" 
                  alt="Krishnam Kesarwani" 
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Krishnam Kesarwani</h3>
              <p className="text-green-600 font-semibold mb-4">Intern</p>
              <p className="text-gray-600 italic">
                "It's been a great time working with WAY Foundation, it sharpened my leadership and communication skills, teaching me how to engage meaningfully with youth and communities."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our journey to empower the next generation. Together, we can create lasting positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleJoinUs} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
              Join Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4">
                See Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};

export default Journey;
