
import React from 'react';
import { Clock, Users, Award, Network, Presentation } from 'lucide-react';

const EventAgenda = () => {
  const agendaItems = [
    {
      time: "6:00 PM",
      title: "Networking & Registration",
      description: "Welcome reception, registration check-in, and networking with attendees",
      icon: Network
    },
    {
      time: "6:30 PM",
      title: "Introductions",
      description: "Opening remarks and event overview by the hosts",
      icon: Users
    },
    {
      time: "6:45 PM",
      title: "Startup Pitches + Q&A",
      description: "5-minute pitches from each startup followed by 5-minute Q&A sessions",
      icon: Presentation
    },
    {
      time: "8:30 PM",
      title: "Winners Announcement & Awards",
      description: "Judges deliberation results and awards ceremony",
      icon: Award
    },
    {
      time: "8:30-9:00 PM",
      title: "Closing Networking",
      description: "Final networking session and farewell",
      icon: Network
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-brand-primary text-center mb-8">
        Event Program
      </h2>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {agendaItems.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-brand-primary">{item.title}</h3>
                    <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventAgenda;
