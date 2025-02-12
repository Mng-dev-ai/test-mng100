import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { 
  ArrowRight, 
  CheckCircle, 
  Rocket, 
  Shield, 
  Zap 
} from "lucide-react"
import { motion } from "framer-motion"
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Rocket className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">QuickSaaS</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#features" className="hover:text-primary">Features</a>
            <a href="#pricing" className="hover:text-primary">Pricing</a>
            <ModeToggle />
            <Button>Get Started</Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              Transform Your Business with <span className="text-primary">QuickSaaS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Streamline your workflow, boost productivity, and scale your business 
              with our cutting-edge SaaS solution.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </section>

        <section id="features" className="container mx-auto py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: "Lightning Fast", 
                description: "Accelerate your processes with our high-performance platform." 
              },
              { 
                icon: Shield, 
                title: "Secure", 
                description: "Bank-level encryption and advanced security protocols." 
              },
              { 
                icon: CheckCircle, 
                title: "Easy to Use", 
                description: "Intuitive interface designed for maximum productivity." 
              }
            ].map(({ icon: Icon, title, description }) => (
              <Card key={title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 QuickSaaS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}