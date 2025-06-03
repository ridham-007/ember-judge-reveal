
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RegisterModal from './RegisterModal';
import JudgeCard from './JudgeCard';
import CountdownTimer from './CountdownTimer';
import EventAgenda from './EventAgenda';

const Hero = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            BIO + HEALTH INNOVATION
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6">
            LEAD Tank Pitch Event
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Where breakthrough bio-health innovations meet world-class investors and industry leaders
          </p>

          {/* Event Details */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center justify-center space-x-3">
                  <Calendar className="w-5 h-5 text-brand-primary" />
                  <div className="text-center">
                    <p className="font-semibold text-brand-primary">Tuesday, June 17</p>
                    <p className="text-gray-600 text-sm">18:00 - 21:00 GMT-7</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                  <div className="text-center">
                    <p className="font-semibold text-brand-primary">Japan Innovation Campus</p>
                    <p className="text-gray-600 text-sm">Palo Alto, California</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <CountdownTimer targetDate="2024-06-17T18:00:00" />
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => setIsRegisterOpen(true)}
                  className="bg-brand-primary hover:bg-brand-light text-white px-8 py-3 text-lg font-semibold rounded-lg"
                >
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-gray-500 mt-2 text-sm">Free registration • Limited seats</p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Agenda */}
        <EventAgenda />

        {/* Judges Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary text-center mb-8">
            Distinguished Panel of Judges
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {judges.map((judge, index) => (
              <JudgeCard key={index} judge={judge} delay={index * 200} />
            ))}
          </div>
        </div>

        {/* Hosted By */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-brand-primary mb-4">Hosted By</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">MK</span>
                </div>
                <span className="text-gray-700">Margarette Kesselman</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">AA</span>
                </div>
                <span className="text-gray-700">Armine Abramyan</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">MC</span>
                </div>
                <span className="text-gray-700">Manmeet Chhabra</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">EA</span>
                </div>
                <span className="text-gray-700">E Alexei</span>
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
