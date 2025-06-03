
import React from 'react';

interface Judge {
  name: string;
  title: string;
  company: string;
  image: string;
  expertise: string;
}

interface JudgeCardProps {
  judge: Judge;
  delay: number;
}

const JudgeCard: React.FC<JudgeCardProps> = ({ judge, delay }) => {
  return (
    <div 
      className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/25 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-white/20 group"
      style={{animationDelay: `${delay}ms`}}
    >
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-accent to-brand-light mx-auto p-1">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-2xl font-bold text-brand-primary">
                {judge.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <span className="text-brand-primary text-sm font-bold">★</span>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
        {judge.name}
      </h3>
      <p className="text-brand-accent font-semibold mb-1">{judge.title}</p>
      <p className="text-white/90 text-sm mb-3">{judge.company}</p>
      <div className="inline-block bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-xs font-medium">
        {judge.expertise}
      </div>
    </div>
  );
};

export default JudgeCard;
