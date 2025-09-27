import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import prateekCV from "@/assets/Prateek-Dubey-9080882637.pdf";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
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

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">
            Prateek
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Download CV Button */}
          <div className="hidden md:block">
            <Button
              className="bg-accent hover:bg-accent-light text-accent-foreground rounded-full px-6"
              onClick={downloadCV}
            >
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("experience")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Contact
              </button>
              <Button
                className="bg-accent hover:bg-accent-light text-accent-foreground rounded-full px-6 w-fit mt-4"
                onClick={downloadCV}
              >
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;