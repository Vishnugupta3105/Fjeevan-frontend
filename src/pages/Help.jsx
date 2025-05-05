import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, MessageSquare, BookOpen, Video, Mail } from 'lucide-react';

function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'personalities', name: 'Personalities' },
    { id: 'interactions', name: 'Interactions' },
    { id: 'account', name: 'Account' },
    { id: 'privacy', name: 'Privacy' },
  ];

  const faqs = [
    {
      id: 1,
      category: 'personalities',
      question: 'How do I start a conversation with a personality?',
      answer: 'To start a conversation with a personality, go to the Interact page, select a category, and choose the personality you want to chat with. Click on their profile and select "Start Chat" to begin your conversation.',
    },
    {
      id: 2,
      category: 'interactions',
      question: 'Can I save my conversations with personalities?',
      answer: 'Yes, all your conversations with personalities are automatically saved to your profile. You can access them in the "Interactions" tab of your profile page.',
    },
    {
      id: 3,
      category: 'account',
      question: 'How do I change my profile picture?',
      answer: 'To change your profile picture, go to Settings > Profile. Click on your current profile picture and select "Upload New Photo" to change it.',
    },
    {
      id: 4,
      category: 'privacy',
      question: 'Who can see my personality interactions?',
      answer: 'You can control who sees your personality interactions in Settings > Privacy. You can choose to make them public, visible to friends only, or private.',
    },
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Help Center</h1>
        <Button variant="outline">
          <Mail className="h-4 w-4 mr-2" />
          Contact Support
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search for help..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Categories */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <MessageSquare className="h-6 w-6 text-indigo-600" />
            <div>
              <h3 className="font-semibold">Chat Support</h3>
              <p className="text-sm text-gray-500">
                Get instant help from our support team
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            <div>
              <h3 className="font-semibold">Documentation</h3>
              <p className="text-sm text-gray-500">
                Read our detailed guides and tutorials
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Video className="h-6 w-6 text-indigo-600" />
            <div>
              <h3 className="font-semibold">Video Tutorials</h3>
              <p className="text-sm text-gray-500">
                Watch step-by-step video guides
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* FAQs */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
        {filteredFaqs.map((faq) => (
          <Card key={faq.id} className="p-6">
            <h3 className="font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
          </Card>
        ))}
      </div>

      {/* Contact Support */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Still need help?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our support team is available 24/7 to assist you
            </p>
          </div>
          <Button className="mt-4 md:mt-0">
            <Mail className="h-4 w-4 mr-2" />
            Contact Support
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Help; 