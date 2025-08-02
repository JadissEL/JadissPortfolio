import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, Linkedin, MapPin, ExternalLink, Code, Brain, Languages, GraduationCap, Award, Briefcase, Target, TrendingUp, Calendar, BookOpen, ArrowRight, Star, Zap, Users, Globe, Rocket, CheckCircle, Laptop, Monitor, Github, Server, Database, Cloud, MessageSquare, Building, HeadphonesIcon, Layers } from "lucide-react";

export default function Index() {
  const handleDownloadResume = () => {
    window.open('https://cdn.builder.io/api/v1/assets/5c95f80b7df44c6f8e7125035af048e5/cv_premium_jadiss_el_antaki_final-ffeb6a', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
      {/* Modern Light Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Jadiss El Antaki
          </h1>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#devops" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              DevOps & Full Stack
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#startups" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              B2B Startups
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#consulting" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              Consulting
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#blog" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button onClick={handleDownloadResume} className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Modern Light Design */}
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="dots" patternUnits="userSpaceOnUse" width="40" height="40">
                <circle cx="20" cy="20" r="2" fill="currentColor" className="text-blue-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700 border border-blue-200">
                  <Zap className="w-4 h-4 mr-2" />
                  Available for New Opportunities
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Jadiss El Antaki
                </h1>
                <p className="text-2xl lg:text-3xl font-medium text-blue-600">
                  DevOps Leader & B2B Innovator
                </p>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                  Full-stack developer, B2B startup founder, and multilingual business consultant. 
                  Transforming ideas into scalable solutions with cutting-edge technology and strategic insight.
                </p>
              </div>
              
              {/* Contact Links */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="mailto:elantaki.dijadiss@gmail.com"
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a 
                  href="tel:+212629255325"
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  Phone
                </a>
                <a 
                  href="https://linkedin.com/in/jadiss-el-antaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/JadissEL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-lg border border-slate-200">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-600">Casablanca, Morocco</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" onClick={handleDownloadResume} className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" onClick={() => document.getElementById('devops')?.scrollIntoView()} className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 px-8 py-4">
                  Explore Work
                </Button>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl blur-3xl opacity-60"></div>
                <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center relative overflow-hidden border border-blue-100">
                    <img 
                      src="https://cdn.builder.io/api/v1/image/assets%2F5c95f80b7df44c6f8e7125035af048e5%2Ff30e930482a841bb8384a17786ac29b5?format=webp&width=400"
                      alt="Jadiss El Antaki Profile Picture"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-6 py-2 text-lg">
              <Brain className="w-5 h-5 mr-2" />
              AI & Technology Expert
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Innovative Solutions for Modern Business
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Combining deep technical expertise with entrepreneurial vision to create transformative business solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Artificial Intelligence</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    Advanced AI tools and frameworks mastery
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    Business process optimization solutions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    Custom AI model integration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    Cost-effective automation strategies
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group shadow-lg border-0 bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Full-Stack Development</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                    Modern web applications with Python & React
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                    Scalable architecture design
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                    Data visualization and analytics
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                    Rapid prototyping and development
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DevOps & Full Stack Leader Section */}
      <section id="devops" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-300 px-6 py-2 text-lg">
              <Server className="w-5 h-5 mr-2" />
              DevOps & Full Stack Leader
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Technical Excellence & Innovation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Leading development teams with cutting-edge DevOps practices and full-stack expertise
            </p>
          </div>

          {/* Featured Project - RoSiStrat */}
          <div className="mb-16">
            <Card className="group shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-700 hover:scale-105 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden flex items-center justify-center bg-slate-50">
                    <img 
                      src="https://cdn.builder.io/api/v1/image/assets%2F5c95f80b7df44c6f8e7125035af048e5%2F356e3bacd42f4b05be0d2b9701b9da2b?format=webp&width=600"
                      alt="RoSiStrat - European Roulette Strategy Simulator"
                      className="max-w-full max-h-96 object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <Badge className="mb-4 bg-green-100 text-green-800 border-green-300 px-4 py-2">
                        <Monitor className="w-4 h-4 mr-2" />
                        Featured Project
                      </Badge>
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        RoSiStrat
                      </h3>
                      <p className="text-xl text-blue-600 font-semibold mb-6">
                        European Roulette Strategy Simulator
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <p className="text-lg text-slate-700 leading-relaxed">
                        A sophisticated web application for simulating and analyzing European roulette betting strategies. 
                        Built with modern React and TypeScript to help users understand probability theory.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">500-spin comprehensive analysis engine</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">Multiple betting strategies including Martingale</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">Real-time probability calculations</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">Responsive design with modern UI</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'].map((tech) => (
                          <Badge key={tech} variant="outline" className="text-sm border-blue-200 text-slate-600">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        asChild
                        size="lg" 
                        className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
                      >
                        <a 
                          href="https://rosistrat-app-new.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-slate-300 hover:bg-slate-50"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* DevOps Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-slate-600 mb-4">AWS, Docker, Kubernetes deployment and scaling strategies</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">AWS</Badge>
                  <Badge variant="outline" className="text-xs">Docker</Badge>
                  <Badge variant="outline" className="text-xs">K8s</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Data & Analytics</h3>
                <p className="text-slate-600 mb-4">Database design, data pipelines, and visualization</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">SQL</Badge>
                  <Badge variant="outline" className="text-xs">Python</Badge>
                  <Badge variant="outline" className="text-xs">Analytics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">CI/CD Pipeline</h3>
                <p className="text-slate-600 mb-4">Automated testing, deployment, and monitoring</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">Git</Badge>
                  <Badge variant="outline" className="text-xs">CI/CD</Badge>
                  <Badge variant="outline" className="text-xs">Testing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* B2B Startup Founder Section */}
      <section id="startups" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-300 px-6 py-2 text-lg">
              <Building className="w-5 h-5 mr-2" />
              B2B Startup Founder
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Building Tomorrow's Business Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Founded and scaled multiple B2B ventures, creating innovative solutions that drive business growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* CleanColab */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">CleanColab</h3>
                    <p className="text-green-600 font-semibold">CEO & Founder</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-slate-700">
                    Leading a UK-based B2B platform focused on collaborative business solutions. 
                    Remote-first company serving international clients.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">2024</div>
                      <div className="text-sm text-slate-600">Founded</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">UK</div>
                      <div className="text-sm text-slate-600">Headquarters</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Strategic business development</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Remote team coordination</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Partnership management</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chkoun 7na */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                    <HeadphonesIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Chkoun 7na</h3>
                    <p className="text-blue-600 font-semibold">Founder & Host</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-slate-700">
                    Multimedia content platform focusing on podcasting and community building. 
                    Creating engaging content for Arabic and French-speaking audiences.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">2024</div>
                      <div className="text-sm text-slate-600">Launched</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">Multi</div>
                      <div className="text-sm text-slate-600">Languages</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Podcast production & editing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Community development</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Social media strategy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Metrics */}
          <div className="mt-16 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Business Impact</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-slate-600">Companies Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-slate-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-slate-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-slate-600">Remote</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multilingual Consulting Section */}
      <section id="consulting" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-300 px-6 py-2 text-lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              Multilingual Business Consulting
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Global Business Strategy & Consulting
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Bridging cultures and markets through strategic consulting in multiple languages
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Consulting Services</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">B2B Strategy</h4>
                    <p className="text-slate-600 text-sm">Market entry strategies, business development, and sales optimization for B2B companies.</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">International Expansion</h4>
                    <p className="text-slate-600 text-sm">Cross-cultural business strategies for entering European and North African markets.</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">Digital Transformation</h4>
                    <p className="text-slate-600 text-sm">Technology adoption strategies, AI implementation, and digital process optimization.</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">Team Building</h4>
                    <p className="text-slate-600 text-sm">Remote team management, cultural integration, and international collaboration.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Languages & Regions */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Languages & Markets</h3>
              <Card className="shadow-lg border-0 bg-white">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Languages</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-700 font-medium">French</span>
                          <Badge className="bg-green-100 text-green-800 border-green-300">Native</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-700 font-medium">English</span>
                          <Badge className="bg-blue-100 text-blue-800 border-blue-300">Fluent</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-700 font-medium">Italian</span>
                          <Badge className="bg-purple-100 text-purple-800 border-purple-300">Fluent</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-700 font-medium">Arabic</span>
                          <Badge className="bg-orange-100 text-orange-800 border-orange-300">Professional</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Markets</h4>
                      <div className="space-y-2 text-slate-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                          France & Francophone Africa
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                          United Kingdom
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                          Italy & Mediterranean
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                          Morocco & North Africa
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-300 px-6 py-2 text-lg">
              <Briefcase className="w-5 h-5 mr-2" />
              Professional Experience
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Career Journey
            </h2>
          </div>
          
          <div className="space-y-8">
            {/* Current - TELUS */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Business Account Manager – Sales & Retention</h3>
                    <p className="text-green-600 font-medium text-lg">TELUS Digital</p>
                    <p className="text-slate-600">May 2025 – Present • Casablanca, Morocco</p>
                  </div>
                  <Badge className="bg-green-500 text-white hover:bg-green-600 px-4 py-2">Current</Badge>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Managing a portfolio of business clients, delivering customized TELUS solutions in telecommunications, 
                  fibre internet, security, and streaming. Responsible for new sales, upsell, cross-sell, and retention 
                  through consultative relationship management.
                </p>
              </CardContent>
            </Card>

            {/* Recent Roles */}
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">B2B Sales Specialist | TaskUs</h3>
                    <p className="text-blue-600 font-medium">Thessaloniki, Greece</p>
                    <p className="text-slate-600 text-sm">November 2024 – January 2025</p>
                  </div>
                </div>
                <ul className="text-slate-700 space-y-1">
                  <li>• Prospecting and qualifying professional accounts</li>
                  <li>• Contract negotiation and sales cycle management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">B2B Customer Relations Specialist | Foundever</h3>
                    <p className="text-blue-600 font-medium">Athens, Greece</p>
                    <p className="text-slate-600 text-sm">May 2024 – November 2024</p>
                  </div>
                </div>
                <ul className="text-slate-700 space-y-1">
                  <li>• Partner relationship management and dispute resolution</li>
                  <li>• Content moderation following client guidelines</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <div className="text-center lg:text-left mb-12">
                <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-300 px-6 py-2 text-lg">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education
                </Badge>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Academic Excellence</h2>
              </div>

              <div className="space-y-6">
                <Card className="shadow-lg border-0 bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">Full Stack & DevOps Training</h4>
                        <p className="text-green-600 font-medium">Hassan II University, Casablanca</p>
                      </div>
                      <Badge className="bg-green-500 text-white">2024 – 2025</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900">Software Engineering (Erasmus)</h4>
                        <p className="text-blue-600 font-medium">Université Paris Cité, Paris</p>
                      </div>
                      <Badge variant="outline" className="border-slate-300">2020 – 2021</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900">Computer Programming</h4>
                        <p className="text-blue-600 font-medium">University of Turin, Italy</p>
                      </div>
                      <Badge variant="outline" className="border-slate-300">2019 – 2020</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Skills & Certifications */}
            <div>
              <div className="text-center lg:text-left mb-12">
                <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-300 px-6 py-2 text-lg">
                  <Award className="w-5 h-5 mr-2" />
                  Skills & Certifications
                </Badge>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
              </div>

              <div className="space-y-8">
                {/* Technical Skills */}
                <Card className="shadow-lg border-0 bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'React.js', 'TypeScript', 'Node.js', 'Docker', 'AWS', 'SQL', 'Git', 'Linux', 'CI/CD'].map((skill) => (
                        <Badge key={skill} variant="outline" className="text-sm border-blue-200 text-slate-600">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Certifications */}
                <Card className="shadow-lg border-0 bg-gradient-to-r from-orange-50 to-yellow-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Recent Certifications</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 font-medium">AWS Serverless CI/CD</span>
                        <Badge className="bg-orange-500 text-white">March 2025</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 font-medium">Postman API Expert</span>
                        <Badge className="bg-blue-500 text-white">March 2025</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 font-medium">Stripe Fundamentals</span>
                        <Badge variant="outline" className="border-slate-300">Dec 2024</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-300 px-6 py-2 text-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Latest Insights
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Blog & Articles
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Sharing insights on technology, entrepreneurship, and business development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group shadow-lg border-0 hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-blue-100 text-blue-800 border-blue-300">AI & Technology</Badge>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    The Future of AI in B2B Sales
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Exploring how artificial intelligence is revolutionizing B2B sales processes...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Jan 15, 2025</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group shadow-lg border-0 hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center">
                  <Rocket className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-green-100 text-green-800 border-green-300">Entrepreneurship</Badge>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                    Building Remote-First Startups
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Lessons learned from founding and scaling distributed teams...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Jan 10, 2025</span>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group shadow-lg border-0 hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-purple-100 text-purple-800 border-purple-300">Business Growth</Badge>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                    Scaling B2B Customer Success
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Strategies for building exceptional customer relationships...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Jan 5, 2025</span>
                    <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Let's Build Something Amazing</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborations, or consulting projects? Let's connect!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:elantaki.dijadiss@gmail.com"
              className="group p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-blue-100">elantaki.dijadiss@gmail.com</p>
            </a>
            
            <a 
              href="tel:+212629255325"
              className="group p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-8 h-8 mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+212 6 29 25 53 25</p>
            </a>
            
            <a 
              href="https://linkedin.com/in/jadiss-el-antaki"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-blue-100">Professional Network</p>
            </a>
          </div>

          <Button size="lg" onClick={handleDownloadResume} className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl text-lg px-8 py-4">
            <Download className="w-5 h-5 mr-2" />
            Download Resume PDF
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Jadiss El Antaki
            </h3>
            <p className="text-slate-400 text-lg italic max-w-2xl mx-auto">
              "Combining technical excellence and entrepreneurial vision for innovative business solutions"
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:elantaki.dijadiss@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/jadiss-el-antaki" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/JadissEL" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-500 text-sm">
              © 2025 Jadiss El Antaki. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
