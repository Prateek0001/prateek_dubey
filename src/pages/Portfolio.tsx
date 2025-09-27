import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
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
  Download
} from "lucide-react";
import prateekProfile from "@/assets/prateek-profile.jpg";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <img 
                src={prateekProfile}
                alt="Prateek Dubey - Frontend Developer"
                className="w-40 h-40 rounded-full mx-auto mb-6 ring-4 ring-primary/20 shadow-xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Prateek Dubey
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Frontend Developer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Building modern, scalable, and user-friendly applications with Flutter & Android
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="btn-primary">
                View Portfolio
              </Button>
              <Button variant="outline" className="btn-outline">
                Get in Touch
              </Button>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/Prateek0001" className="p-3 rounded-full bg-card hover:bg-muted transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/prateek-dubey-0001" className="p-3 rounded-full bg-card hover:bg-muted transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:prateekofficial0001@gmail.com" className="p-3 rounded-full bg-card hover:bg-muted transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg mb-6 leading-relaxed">
                  I'm a passionate Frontend Developer with 4+ years of experience creating exceptional mobile applications. 
                  My expertise spans Flutter, Android development, and modern DevOps practices.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  I graduated with a B.Tech in Computer Science from Dr. M.G.R. Educational and Research Institute 
                  with a CGPA of 7.9, and have since dedicated myself to building customer-first solutions that 
                  scale and perform.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Mumbai, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>4+ Years Experience</span>
                </div>
              </div>
              <Card className="card-hover gradient-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Core Strengths</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>End-to-end mobile app development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>DevOps & CI/CD implementation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Customer-first mindset</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Team leadership & project management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              {/* Experience Item 1 */}
              <div className="relative mb-12 ml-16">
                <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20"></div>
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold">Lead Frontend Engineer</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Feb 2025 - Present</span>
                      </div>
                    </div>
                    <p className="text-primary font-medium mb-4">TradeBook Consultancy Services, Mumbai</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Developed stock broking app with advisory & screener functionalities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Implemented deep linking, push notifications (+25% retention)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Led development lifecycle → 10,000+ downloads with 4.9+ rating</span>
                      </li>
                    </ul>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>10,000+ downloads</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>4.9+ rating</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Experience Item 2 */}
              <div className="relative ml-16">
                <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20"></div>
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold">Software Engineer</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Nov 2021 - Dec 2024</span>
                      </div>
                    </div>
                    <p className="text-primary font-medium mb-4">Raxa Health Information Services, Delhi</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Enhanced app with 'Login with Amazon', realtime chat (WebSockets)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Implemented AI transcription and published on Play Store & App Store</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Set up CI/CD with Fastlane, In-App purchases, multi-platform solutions</span>
                      </li>
                    </ul>
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
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
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

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 text-center">{project.image}</div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a mobile app, want to discuss a collaboration, or just want to say hi, 
                I'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>prateekofficial0001@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 9080882637</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
            <Card className="card-hover">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full btn-primary">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Prateek Dubey. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;