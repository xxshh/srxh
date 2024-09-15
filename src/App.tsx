import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, UserCheck, Database } from 'lucide-react'

export default function CyberSecHomepage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">CyberGuard Solutions</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-blue-400">Services</a></li>
              <li><a href="#" className="hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Secure Your Digital Future</h2>
          <p className="text-xl mb-8">Cutting-edge cybersecurity solutions for businesses of all sizes</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">Get Started</Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Threat Detection", desc: "Advanced AI-powered threat detection and response" },
              { icon: Lock, title: "Encryption", desc: "State-of-the-art encryption for data at rest and in transit" },
              { icon: UserCheck, title: "Identity Management", desc: "Secure and efficient identity and access management" },
              { icon: Database, title: "Data Protection", desc: "Comprehensive data protection and privacy solutions" }
            ].map((service, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CyberGuard?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "24/7 Monitoring", desc: "Round-the-clock surveillance and rapid incident response" },
              { title: "Expert Team", desc: "Certified cybersecurity professionals with years of experience" },
              { title: "Tailored Solutions", desc: "Customized security strategies to fit your unique needs" }
            ].map((reason, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white">
              <CardContent className="p-8 text-center">
                <p className="text-xl mb-4">"CyberGuard Solutions has transformed our security posture. Their expertise and cutting-edge technology have given us peace of mind in an increasingly complex digital landscape."</p>
                <p className="font-semibold">- Sarah Johnson, CTO of TechCorp</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
          <p className="text-xl mb-8">Get in touch for a free security assessment</p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">Contact Us Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 CyberGuard Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}