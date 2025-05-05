import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Filter, Plus } from 'lucide-react';

function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'books', name: 'Books' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'personality', name: 'Personality Items' },
  ];

  const items = [
    {
      id: 1,
      title: 'Smartphone',
      price: '$299',
      image: '/images/marketplace/phone.jpg',
      category: 'electronics',
      location: 'New York',
      time: '2 hours ago',
    },
    {
      id: 2,
      title: 'Vintage Books Collection',
      price: '$150',
      image: '/images/marketplace/books.jpg',
      category: 'books',
      location: 'Los Angeles',
      time: '1 day ago',
    },
    {
      id: 3,
      title: 'Designer Jacket',
      price: '$199',
      image: '/images/marketplace/jacket.jpg',
      category: 'clothing',
      location: 'Chicago',
      time: '3 days ago',
    },
  ];

  const personalityItems = [
    {
      id: 1,
      title: 'Einstein\'s Notebook Replica',
      price: '$49',
      image: '/images/marketplace/einstein-notebook.jpg',
      category: 'personality',
      personality: 'Albert Einstein',
      description: 'A replica of Einstein\'s famous notebook with his original notes and equations.',
      location: 'Princeton',
      time: '1 hour ago',
    },
    {
      id: 2,
      title: 'Gandhi\'s Spinning Wheel',
      price: '$79',
      image: '/images/marketplace/spinning-wheel.jpg',
      category: 'personality',
      personality: 'Mahatma Gandhi',
      description: 'A handcrafted spinning wheel replica used by Gandhi for his self-sufficiency movement.',
      location: 'Ahmedabad',
      time: '2 hours ago',
    },
    {
      id: 3,
      title: 'Vivekananda\'s Meditation Mat',
      price: '$39',
      image: '/images/marketplace/meditation-mat.jpg',
      category: 'personality',
      personality: 'Swami Vivekananda',
      description: 'A traditional meditation mat inspired by Swami Vivekananda\'s practices.',
      location: 'Kolkata',
      time: '1 day ago',
    },
  ];

  const filteredItems = [...items, ...personalityItems].filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Marketplace</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Sell Item
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search for items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
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

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">{item.title}</h3>
                <span className="font-bold text-indigo-600">{item.price}</span>
              </div>
              {item.personality && (
                <p className="text-sm text-gray-500 mt-1">
                  From: {item.personality}
                </p>
              )}
              {item.description && (
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              )}
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>{item.location}</span>
                <span>{item.time}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Marketplace; 