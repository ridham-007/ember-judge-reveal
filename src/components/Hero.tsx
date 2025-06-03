
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Users, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import RegisterModal from './RegisterModal';

const Hero = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const judges = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief Medical Officer, BioTech Ventures",
      image: "/placeholder.svg",
      expertise: "Precision Medicine"
    },
    {
      name: "Mark Rodriguez",
      title: "Partner, Health Innovation Fund",
      image: "/placeholder.svg",
      expertise: "Digital Health"
    },
    {
      name: "Dr. Emily Watson",
      title: "Director of Innovation, Stanford Medicine",
      image: "/placeholder.svg",
      expertise: "Medical Devices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-primary to-brand-light rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-brand-light to-brand-accent rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-brand-primary to-brand-lighter rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Header */}
          <div className="animate-fade-in-up">
            <div className="inline-block bg-gradient-to-r from-brand-primary to-brand-light text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg animate-pulse-glow">
              🧬 BIO + HEALTH INNOVATION 🚀
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-brand-primary via-brand-light to-brand-accent bg-clip-text text-transparent mb-6 animate-gradient-x">
              LEAD Tank Pitch Event
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Where breakthrough bio-health innovations meet world-class investors and industry leaders
            </p>
          </div>

          {/* Event Details Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Event Info Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Event Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
                    <Calendar className="w-8 h-8 text-brand-primary" />
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">Tuesday, June 17, 2024</p>
                      <p className="text-sm text-gray-600">18:00 - 21:00 GMT-7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
                    <MapPin className="w-8 h-8 text-brand-light" />
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">Japan Innovation Campus</p>
                      <p className="text-sm text-gray-600">Palo Alto, California</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-red-50 rounded-lg">
                    <Clock className="w-8 h-8 text-brand-accent" />
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">3 Hours Event</p>
                      <p className="text-sm text-gray-600">Networking & Pitches</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Judges Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Expert Judges Panel
                </h3>
                <div className="space-y-4">
                  {judges.map((judge, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-50 to-amber-50 rounded-lg hover:scale-105 transition-transform duration-200">
                      <Avatar className="w-12 h-12 border-2 border-brand-primary/30">
                        <AvatarImage src={judge.image} alt={judge.name} />
                        <AvatarFallback className="bg-gradient-to-r from-brand-primary to-brand-light text-white font-bold">
                          {judge.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="font-semibold text-gray-800">{judge.name}</p>
                        <p className="text-sm text-gray-600">{judge.title}</p>
                        <p className="text-xs text-brand-primary font-medium">{judge.expertise}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Event Schedule */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center justify-center gap-2">
                <Users className="w-6 h-6" />
                Event Schedule
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { time: "6:00 PM", event: "Networking & Registration", icon: Users, color: "brand-primary" },
                  { time: "6:30 PM", event: "Introductions", icon: Star, color: "brand-light" },
                  { time: "6:45 PM", event: "Startup Pitches + Q&A", icon: Award, color: "brand-lighter" },
                  { time: "8:30 PM", event: "Winners Announcement", icon: Award, color: "brand-accent" },
                  { time: "8:30-9:00 PM", event: "Closing Networking", icon: Users, color: "brand-primary" }
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-red-50 to-amber-50 hover:scale-105 transition-all duration-200 animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                    <item.icon className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                    <p className="font-bold text-brand-primary text-sm mb-1">{item.time}</p>
                    <p className="text-xs text-gray-600">{item.event}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={() => setIsRegisterOpen(true)}
              className="bg-gradient-to-r from-brand-primary to-brand-light hover:from-brand-light hover:to-brand-lighter text-white px-12 py-4 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Register Now - It's FREE!
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <p className="text-gray-600 mt-4 text-lg">✨ Limited seats • Premium networking • Expert feedback</p>
          </div>
        </div>
      </div>

      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
};

export default Hero;
