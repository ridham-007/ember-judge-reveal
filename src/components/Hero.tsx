
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Award, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RegisterModal from './RegisterModal';
import JudgeCard from './JudgeCard';
import CountdownTimer from './CountdownTimer';
import EventAgenda from './EventAgenda';

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
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-brand-accent/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-white/5 rounded-full animate-float blur-2xl" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-brand-accent/8 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-accent/20 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/30 via-transparent to-brand-accent/20"></div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-12 transition-all duration-1500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-brand-accent to-yellow-400 text-brand-primary px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl animate-pulse-glow">
            <Sparkles className="w-4 h-4 mr-2" />
            BIO + HEALTH INNOVATION
            <Star className="w-4 h-4 ml-2" />
          </div>
          
          <h1 className="text-4xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            <span className="block text-6xl md:text-9xl bg-gradient-to-r from-white via-brand-accent to-white bg-clip-text text-transparent animate-gradient-x">
              INNOVATION
            </span>
            <span className="block text-5xl md:text-8xl">MEETS</span>
            <span className="block text-6xl md:text-9xl text-brand-accent drop-shadow-2xl">
              IMPACT
            </span>
            <span className="block text-3xl md:text-6xl text-white/90 mt-4">
              AT THE LEAD TANK
            </span>
            <span className="block text-4xl md:text-7xl bg-gradient-to-r from-brand-accent via-yellow-400 to-brand-accent bg-clip-text text-transparent font-extrabold">
              PITCH EVENT
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Where breakthrough bio-health innovations meet world-class investors and industry leaders
          </p>
        </div>

        {/* Enhanced Event Details Card */}
        <div className={`max-w-6xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center space-x-4 bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition-all">
                <div className="bg-brand-accent rounded-full p-3">
                  <Calendar className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Tuesday, June 17</p>
                  <p className="text-brand-accent font-semibold">18:00 - 21:00 GMT-7</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition-all">
                <div className="bg-brand-accent rounded-full p-3">
                  <MapPin className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Japan Innovation Campus</p>
                  <p className="text-brand-accent font-semibold">Palo Alto, California</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <CountdownTimer targetDate="2024-06-17T18:00:00" />
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={() => setIsRegisterOpen(true)}
                className="bg-gradient-to-r from-brand-accent via-yellow-400 to-brand-accent hover:from-yellow-400 hover:via-brand-accent hover:to-yellow-400 text-brand-primary px-12 py-6 text-xl font-bold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group border-2 border-brand-accent/50"
              >
                SECURE YOUR SPOT
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <p className="text-white/80 mt-4 text-sm">Limited seats available • Free registration</p>
            </div>
          </div>
        </div>

        {/* Event Agenda Section */}
        <EventAgenda />

        {/* Enhanced Why Attend Section */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl font-black text-white text-center mb-16 bg-gradient-to-r from-white to-brand-accent bg-clip-text text-transparent">
            Why Attend This Exclusive Event?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {eventHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-white/10 group hover:border-brand-accent/50"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-brand-accent to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl">
                  <highlight.icon className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">{highlight.title}</h3>
                <p className="text-white/90 text-lg leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Distinguished Judges Section */}
        <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl font-black text-white text-center mb-4 bg-gradient-to-r from-white to-brand-accent bg-clip-text text-transparent">
            DISTINGUISHED PANEL OF JUDGES
          </h2>
          <p className="text-xl text-white/80 text-center mb-12 max-w-3xl mx-auto">
            Meet the industry leaders who will evaluate groundbreaking innovations
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {judges.map((judge, index) => (
              <JudgeCard key={index} judge={judge} delay={index * 200} />
            ))}
          </div>
        </div>

        {/* Enhanced Hosted By Section */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 max-w-lg mx-auto border border-white/10 hover:bg-white/10 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 text-brand-accent">Hosted By</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-white/10 rounded-xl p-3">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-brand-primary font-bold text-lg">MK</span>
                </div>
                <span className="text-white font-semibold text-lg">Margarette Kesselman</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/10 rounded-xl p-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AA</span>
                </div>
                <span className="text-white font-semibold text-lg">Armine Abramyan</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/10 rounded-xl p-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MC</span>
                </div>
                <span className="text-white font-semibold text-lg">Manmeet Chhabra</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/10 rounded-xl p-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">EA</span>
                </div>
                <span className="text-white font-semibold text-lg">E Alexei</span>
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
