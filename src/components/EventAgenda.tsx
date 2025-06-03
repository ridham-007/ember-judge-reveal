
import React from 'react';
import { Clock, Users, Award, Network, Presentation } from 'lucide-react';

const EventAgenda = () => {
  const agendaItems = [
    {
      time: "6:00 PM",
      title: "Networking & Registration",
      description: "Welcome reception, registration check-in, and networking with attendees",
      icon: Network,
      color: "from-blue-500 to-cyan-500"
    },
    {
      time: "6:30 PM",
      title: "Introductions",
      description: "Opening remarks and event overview by the hosts",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      time: "6:45 PM",
      title: "Startup Pitches + Q&A",
      description: "5-minute pitches from each startup followed by 5-minute Q&A sessions",
      icon: Presentation,
      color: "from-brand-accent to-yellow-500"
    },
    {
      time: "8:30 PM",
      title: "Winners Announcement & Awards",
      description: "Judges deliberation results and awards ceremony",
      icon: Award,
      color: "from-green-500 to-emerald-500"
    },
    {
      time: "8:30-9:00 PM",
      title: "Closing Networking",
      description: "Final networking session and farewell",
      icon: Network,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black text-white mb-4 bg-gradient-to-r from-white to-brand-accent bg-clip-text text-transparent">
          EVENT PROGRAM
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          A carefully curated evening of innovation, networking, and discovery
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-accent via-white to-brand-accent transform md:-translate-x-1/2"></div>
          
          {agendaItems.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${item.color} transform md:-translate-x-1/2 z-10 shadow-lg`}></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} ml-16 md:ml-0`}>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="bg-brand-accent/20 text-brand-accent px-4 py-2 rounded-full font-bold text-sm">
                      {item.time}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/90 leading-relaxed">
                    {item.description}
                  </p>
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
