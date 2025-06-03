
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RegisterModal from './RegisterModal';
import JudgeCard from './JudgeCard';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const judges = [
    {
      name: "Matt Caspari",
      title: "Managing Partner",
      company: "at Alumni Ventures",
      image: "/lovable-uploads/2900982e-12cc-4917-afc2-cf2975a793cd.png",
      expertise: "Healthcare Investments"
    },
    {
      name: "Pervez Alam",
      title: "Head of Strategic Channels",
      company: "Alliances, Eco-systems at QA North America",
      image: "/lovable-uploads/2900982e-12cc-4917-afc2-cf2975a793cd.png",
      expertise: "Strategic Partnerships"
    }
  ];

  const eventHighlights = [
    {
      icon: Users,
      title: "Cutting-edge pitches from emerging health innovators",
      description: "Witness groundbreaking solutions in bio + health innovation"
    },
    {
      icon: Award,
      title: "Expert panel of scientists, investors & healthcare leaders",
      description: "Learn from industry veterans and thought leaders"
    },
    {
      icon: Clock,
      title: "A chance to see the next big breakthrough",
      description: "Before it hits the market - be part of innovation history"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary via-brand-light to-brand-lighter relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-brand-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-white/5 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 bg-brand-accent/15 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block bg-brand-accent text-brand-primary px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse-glow">
            BIO + HEALTH INNOVATION
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            INNOVATION MEETS
            <br />
            <span className="text-brand-accent">IMPACT</span> AT THE
            <br />
            LEAD TANK
            <br />
            <span className="bg-gradient-to-r from-white to-brand-accent bg-clip-text text-transparent">
              PITCH EVENT
            </span>
          </h1>
        </div>

        {/* Event Details Card */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-brand-primary" />
                <div>
                  <p className="font-semibold text-brand-primary">Tuesday, June 17</p>
                  <p className="text-gray-600">18:00 - 21:00 GMT-7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-brand-primary" />
                <div>
                  <p className="font-semibold text-brand-primary">Japan Innovation Campus</p>
                  <p className="text-gray-600">Palo Alto, California</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <CountdownTimer targetDate="2024-06-17T18:00:00" />
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={() => setIsRegisterOpen(true)}
                className="bg-brand-primary hover:bg-brand-light text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                Register Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Why Attend Section */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Attend?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {eventHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-white/20"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                <p className="text-white/80">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Distinguished Judges Section */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            DISTINGUISHED PANEL OF JUDGES
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {judges.map((judge, index) => (
              <JudgeCard key={index} judge={judge} delay={index * 200} />
            ))}
          </div>
        </div>

        {/* Hosted By Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-900 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Hosted By</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
                  <span className="text-brand-primary font-semibold text-sm">MK</span>
                </div>
                <span className="text-white">Margarette Kesselman</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">AA</span>
                </div>
                <span className="text-white">Armine Abramyan</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">MC</span>
                </div>
                <span className="text-white">Manmeet Chhabra</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">EA</span>
                </div>
                <span className="text-white">E Alexei</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
};

export default Hero;
