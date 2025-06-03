
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { X, Mail, User, Building, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    interest: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate registration
    toast({
      title: "Registration Successful! 🎉",
      description: "You'll receive a confirmation email shortly with event details.",
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      role: '',
      interest: '',
      message: ''
    });
    
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-primary flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            Register for LEAD Tank Pitch Event
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-brand-primary font-medium">
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="border-brand-primary/30 focus:border-brand-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-brand-primary font-medium">
                Last Name *
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="border-brand-primary/30 focus:border-brand-primary"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-brand-primary font-medium flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="border-brand-primary/30 focus:border-brand-primary"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-brand-primary font-medium flex items-center gap-2">
                <Building className="w-4 h-4" />
                Company/Organization
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="border-brand-primary/30 focus:border-brand-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role" className="text-brand-primary font-medium">
                Role/Title
              </Label>
              <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                <SelectTrigger className="border-brand-primary/30 focus:border-brand-primary">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                  <SelectItem value="investor">Investor</SelectItem>
                  <SelectItem value="researcher">Researcher</SelectItem>
                  <SelectItem value="healthcare-professional">Healthcare Professional</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest" className="text-brand-primary font-medium">
              Primary Interest in Event
            </Label>
            <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
              <SelectTrigger className="border-brand-primary/30 focus:border-brand-primary">
                <SelectValue placeholder="What interests you most?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pitching">I want to pitch</SelectItem>
                <SelectItem value="investing">Investment opportunities</SelectItem>
                <SelectItem value="networking">Networking</SelectItem>
                <SelectItem value="learning">Learning about innovations</SelectItem>
                <SelectItem value="partnership">Partnership opportunities</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-brand-primary font-medium flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Additional Message (Optional)
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="border-brand-primary/30 focus:border-brand-primary min-h-[100px]"
              placeholder="Tell us more about your interest in the event or any specific questions..."
            />
          </div>

          <div className="bg-brand-primary/5 p-4 rounded-lg border border-brand-primary/20">
            <h4 className="font-semibold text-brand-primary mb-2">Event Details Reminder:</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>📅 Tuesday, June 17, 2024</li>
              <li>🕐 18:00 - 21:00 GMT-7</li>
              <li>📍 Japan Innovation Campus, Palo Alto, CA</li>
              <li>🎯 Focus: Bio + Health Innovation</li>
            </ul>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-brand-primary text-brand-primary hover:bg-brand-primary/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-brand-primary hover:bg-brand-light text-white px-8"
            >
              Register Now
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
