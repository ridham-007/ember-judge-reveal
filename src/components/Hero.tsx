
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RegisterModal from './RegisterModal';

const Hero = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            BIO + HEALTH INNOVATION
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6">
            LEAD Tank Pitch Event
          </h1>
          
          <p className="text-xl text-gray-600 mb-12">
            Where breakthrough bio-health innovations meet world-class investors and industry leaders
          </p>

          {/* Event Details Card */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 text-brand-primary mb-3" />
                <h3 className="font-semibold text-brand-primary text-lg">Date</h3>
                <p className="text-gray-600">Tuesday, June 17</p>
                <p className="text-sm text-gray-500">18:00 - 21:00 GMT-7</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-brand-primary mb-3" />
                <h3 className="font-semibold text-brand-primary text-lg">Location</h3>
                <p className="text-gray-600">Japan Innovation Campus</p>
                <p className="text-sm text-gray-500">Palo Alto, California</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-brand-primary mb-3" />
                <h3 className="font-semibold text-brand-primary text-lg">Duration</h3>
                <p className="text-gray-600">3 Hours</p>
                <p className="text-sm text-gray-500">Networking & Pitches</p>
              </div>
            </div>

            <Button 
              onClick={() => setIsRegisterOpen(true)}
              className="bg-brand-primary hover:bg-brand-light text-white px-8 py-3 text-lg font-semibold rounded-lg"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-gray-500 mt-3 text-sm">Free registration • Limited seats</p>
          </div>

          {/* Simple Event Agenda */}
          <div className="text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-primary mb-6 text-center">Event Schedule</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-brand-primary">6:00 PM</span>
                <span className="text-gray-700">Networking & Registration</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-brand-primary">6:30 PM</span>
                <span className="text-gray-700">Introductions</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-brand-primary">6:45 PM</span>
                <span className="text-gray-700">Startup Pitches + Q&A</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-brand-primary">8:30 PM</span>
                <span className="text-gray-700">Winners Announcement & Awards</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-medium text-brand-primary">8:30-9:00 PM</span>
                <span className="text-gray-700">Closing Networking</span>
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
