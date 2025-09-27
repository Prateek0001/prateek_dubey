import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code, 
  Smartphone, 
  Cloud, 
  Database,
  Award,
  MapPin,
  Calendar,
  Users,
  Star,
  Download,
  Play,
  ArrowRight
} from "lucide-react";
import prateekProfile from "@/assets/prateek-profile.jpeg";
import prateekCV from "@/assets/Prateek-Dubey-9080882637.pdf";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Prateek Dubey",
      };

      await emailjs.send(
        'service_7vowh3s', // Service ID
        'template_w28wkbl', // Template ID
        templateParams,
        '-GGTG61ciyLL1QB0c' // Public Key
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error sending message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = prateekCV;
    link.download = 'Prateek-Dubey-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: "Flutter", level: 95, icon: Smartphone },
    { name: "Dart", level: 95, icon: Code },
    { name: "Kotlin", level: 85, icon: Code },
    { name: "Java", level: 80, icon: Code },
    { name: "Firebase", level: 90, icon: Database },
    { name: "GitHub Actions", level: 85, icon: Cloud },
    { name: "AWS", level: 75, icon: Cloud },
  ];

  const projects = [
    {
      title: "AI-Powered Voice Assistant",
      description: "Multimodal assistant with speech-to-text, text-to-speech, and image generation using Flutter and Gemini 2.5 Pro.",
      tech: ["Flutter", "Gemini 2.5", "AI", "Speech Recognition"],
      github: "#",
      image: "🤖"
    },
    {
      title: "E-commerce App",
      description: "Full-featured e-commerce app with JWT authentication, WooCommerce integration, and scalable state management.",
      tech: ["Flutter", "Provider", "WooCommerce", "JWT"],
      github: "#",
      image: "🛒"
    },
    {
      title: "GakudoAI - Career Guidance",
      description: "AI-driven career advice platform with Razorpay integration, session booking, and personalized recommendations.",
      tech: ["Flutter", "Bloc", "AI", "Razorpay"],
      github: "#",
      image: "🎓"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/20">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-accent/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-32 left-10 w-4 h-4 bg-accent rotate-45"></div>
          <div className="absolute bottom-32 right-16 w-3 h-3 bg-primary rounded-full"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-accent rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <div className="mb-6">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  👋 Hello, I'm
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Prateek Dubey <br />
                <span className="text-primary">Frontend Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Building modern, scalable, and user-friendly applications with Flutter & Android. 
                4+ years of experience creating exceptional mobile experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  className="bg-accent hover:bg-accent-light text-accent-foreground rounded-full px-8 py-6 text-lg font-semibold"
                  onClick={() => scrollToSection("projects")}
                >
                  Hire Me
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold"
                  onClick={downloadCV}
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download CV
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-muted-foreground">Users Impacted</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/Prateek0001" className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/prateek-dubey-0001" className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:prateekofficial0001@gmail.com" className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 scale-110"></div>
                <img 
                  src={prateekProfile}
                  alt="Prateek Dubey - Frontend Developer"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover ring-8 ring-white/20 shadow-2xl"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-10 right-0 bg-white rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">Years<br />Experience</div>
                </div>

                {/* Customer Badge */}
                <div className="absolute bottom-10 left-0 bg-white rounded-lg px-3 py-2 shadow-lg flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-primary rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-accent rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-muted rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold">Best Customer</div>
                    <div className="text-muted-foreground">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium uppercase tracking-wider">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Expertise Service! Let's check it out
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive mobile development solutions from concept to deployment, 
              specializing in Flutter and Android technologies with DevOps excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mobile App Development */}
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-primary/5">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Native Android and cross-platform Flutter applications with modern UI/UX design, 
                  performance optimization, and scalable architecture.
                </p>
              </CardContent>
            </Card>

            {/* DevOps & CI/CD - Highlighted */}
            <Card className="text-center p-8 bg-primary text-primary-foreground hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">DevOps & CI/CD</h3>
                <p className="text-white/90 leading-relaxed">
                  Complete DevOps solutions with automated deployment pipelines, 
                  testing frameworks, and cloud infrastructure management for scalable applications.
                </p>
              </CardContent>
            </Card>

            {/* Cross-Platform Solutions */}
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-accent/5">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Code className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cross-Platform Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unified codebase solutions using Flutter and Kotlin Native for 
                  efficient development and consistent user experience across platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-accent/10 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image and Stats */}
            <div className="relative">
              <div className="text-center mb-8">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium uppercase tracking-wider">
                  About Me
                </span>
              </div>
              
              <div className="relative max-w-md mx-auto">
                <img 
                  src={prateekProfile}
                  alt="Prateek Dubey"
                  className="w-full rounded-2xl shadow-2xl"
                />
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-xs text-muted-foreground">Complete Project</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">4+</div>
                    <div className="text-xs text-muted-foreground">Years of Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Designing Solutions, Not Just Visuals
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate Frontend Developer with 4+ years of experience creating exceptional mobile applications. 
                My expertise spans Flutter, Android development, and modern DevOps practices, always focusing on 
                delivering customer-first solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I graduated with a B.Tech in Computer Science from Dr. M.G.R. Educational and Research Institute 
                with a CGPA of 7.9. I blend technical expertise with business understanding to create applications 
                that not only function flawlessly but also drive real business results.
              </p>
              
              {/* Key Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">End-to-end mobile app development expertise</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-medium">DevOps & CI/CD implementation specialist</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">Customer-first mindset with proven results</span>
                </div>
              </div>

              <Button 
                className="bg-accent hover:bg-accent-light text-accent-foreground rounded-full px-8 py-6"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium uppercase tracking-wider">
              Working Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              My Working Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Business Planning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Understanding requirements, analyzing target audience, and creating comprehensive 
                project roadmaps for successful delivery.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Design Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating intuitive user experiences with modern design principles, 
                wireframing, and prototyping for optimal user engagement.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Grow Your Business</h3>
              <p className="text-muted-foreground leading-relaxed">
                Implementing scalable solutions with CI/CD pipelines, 
                performance optimization, and ongoing support for business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium uppercase tracking-wider">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">My Professional Journey</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
              
              {/* Experience Item 1 */}
              <div className="relative mb-12 md:ml-16">
                <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20 hidden md:block"></div>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Lead Frontend Engineer</h3>
                        <p className="text-primary font-semibold text-lg">TradeBook Consultancy Services</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2 lg:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">Feb 2025 - Present</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Developed stock broking app with advisory & screener functionalities</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Implemented deep linking, push notifications (+25% retention)</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Led development lifecycle → 10,000+ downloads with 4.9+ rating</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>SDK integrations for comprehensive analytics tracking</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                        <Download className="w-4 h-4 text-primary" />
                        <span className="font-medium">10,000+ downloads</span>
                      </div>
                      <div className="flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-accent" />
                        <span className="font-medium">4.9+ rating</span>
                      </div>
                      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-medium">Mumbai</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Experience Item 2 */}
              <div className="relative md:ml-16">
                <div className="absolute -left-20 top-6 w-4 h-4 bg-accent rounded-full ring-4 ring-accent/20 hidden md:block"></div>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Software Engineer</h3>
                        <p className="text-accent font-semibold text-lg">Raxa Health Information Services</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2 lg:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">Nov 2021 - Dec 2024</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Enhanced app with 'Login with Amazon', realtime chat (WebSockets)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Implemented AI transcription and published on Play Store & App Store</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Set up CI/CD with Fastlane, In-App purchases</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Multi-platform solutions (Kotlin Native + Flutter)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full">
                        <Download className="w-4 h-4 text-accent" />
                        <span className="font-medium">10,000+ downloads</span>
                      </div>
                      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="font-medium">4.5+ rating</span>
                      </div>
                      <div className="flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span className="font-medium">Delhi</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <Card key={skill.name} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <skill.icon className="w-8 h-8 text-primary" />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold">{skill.name}</h3>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Digital Product Showcases Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Digital Product Showcases
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore my latest mobile applications and development projects, 
              featuring modern technologies and user-centered design solutions.
            </p>
          </div>

          {/* Project Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium">
              All Projects
            </button>
            <button className="px-6 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full font-medium transition-colors">
              Mobile Apps
            </button>
            <button className="px-6 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full font-medium transition-colors">
              AI Solutions
            </button>
            <button className="px-6 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full font-medium transition-colors">
              E-commerce
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-12">
                  <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={tech} className={`px-3 py-1 rounded-full text-xs font-medium ${
                        techIndex === 0 ? 'bg-primary/20 text-primary' : 
                        techIndex === 1 ? 'bg-accent/20 text-accent' : 
                        'bg-muted text-muted-foreground'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">What People Say About Us</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="p-6 border-0 shadow-lg bg-white">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Prateek delivered an exceptional Flutter app that exceeded our expectations. 
                  His attention to detail and technical expertise made our project a huge success."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    P
                  </div>
                  <div>
                    <div className="font-semibold">Praveen Kumar</div>
                    <div className="text-sm text-muted-foreground">Product Manager</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-6 border-0 shadow-lg bg-white">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Amazing work on our mobile app! The CI/CD pipeline setup and DevOps integration 
                  saved us months of development time. Highly recommended!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-semibold">
                    T
                  </div>
                  <div>
                    <div className="font-semibold">Tarun Sachdeva</div>
                    <div className="text-sm text-muted-foreground">Tech Lead</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-6 border-0 shadow-lg bg-white">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Professional, reliable, and incredibly skilled. Prateek transformed our idea 
                  into a beautiful, functional app that our users absolutely love."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    H
                  </div>
                  <div>
                    <div className="font-semibold">Himanshu Deshwal</div>
                    <div className="text-sm text-muted-foreground">Founder & CEO</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="card-hover text-center">
              <CardContent className="p-6">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Mobile App Development</h3>
                <p className="text-sm text-muted-foreground">Flutter & Android native development</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardContent className="p-6">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cross-Platform Solutions</h3>
                <p className="text-sm text-muted-foreground">Flutter, Kotlin Native integrations</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardContent className="p-6">
                <Cloud className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">DevOps & CI/CD</h3>
                <p className="text-sm text-muted-foreground">Fastlane, GitHub Actions, Codemagic</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardContent className="p-6">
                <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cloud Integration</h3>
                <p className="text-sm text-muted-foreground">Firebase, AWS, backend solutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium uppercase tracking-wider">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Get In Touch</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you need a mobile app, want to discuss a collaboration, or just want to say hi, 
                  I'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:prateekofficial0001@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      prateekofficial0001@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:+919080882637" className="text-muted-foreground hover:text-accent transition-colors">
                      +91 9080882637
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <span className="text-muted-foreground">Mumbai, India</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Follow me on</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/Prateek0001" 
                    className="w-12 h-12 bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-lg flex items-center justify-center shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/prateek-dubey-0001" 
                    className="w-12 h-12 bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-lg flex items-center justify-center shadow-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:prateekofficial0001@gmail.com" 
                    className="w-12 h-12 bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-lg flex items-center justify-center shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-primary/5">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12 border-2 border-muted focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12 border-2 border-muted focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-2 border-muted focus:border-primary"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-accent hover:bg-accent-light text-accent-foreground rounded-lg font-semibold text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl font-bold mb-4 md:mb-0">Prateek Dubey</div>
            <div className="text-center md:text-right">
              <p className="text-primary-foreground/80">
                © 2025 Prateek Dubey. All rights reserved.
              </p>
              <p className="text-primary-foreground/60 text-sm mt-1">
                Let's connect on LinkedIn 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;