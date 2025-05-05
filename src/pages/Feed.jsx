import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';
import { Image, Video, Link as LinkIcon, Smile } from 'lucide-react';

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: 'John Doe',
        avatar: '/images/avatars/john.jpg',
      },
      content: 'Just had an amazing conversation with Albert Einstein about quantum physics! The Jeevansar interactive feature is incredible!',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      shares: 3,
    },
    {
      id: 2,
      user: {
        name: 'Jane Smith',
        avatar: '/images/avatars/jane.jpg',
      },
      content: 'I can\'t believe I got to chat with Mahatma Gandhi about peace and non-violence. This platform is revolutionary!',
      timestamp: '4 hours ago',
      likes: 45,
      comments: 12,
      shares: 5,
    },
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post = {
      id: posts.length + 1,
      user: {
        name: 'Current User',
        avatar: '/images/avatars/current-user.jpg',
      },
      content: newPost,
      timestamp: 'Just now',
      likes: 0,
      comments: 0,
      shares: 0,
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="space-y-4">
      {/* Create Post */}
      <Card className="p-4">
        <form onSubmit={handlePostSubmit} className="space-y-4">
          <div className="flex items-start space-x-4">
            <Avatar src="/images/avatars/current-user.jpg" alt="You" />
            <Input
              placeholder="What's on your mind?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="flex-1"
            />
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Image className="h-5 w-5 text-green-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-5 w-5 text-red-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <LinkIcon className="h-5 w-5 text-blue-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <Smile className="h-5 w-5 text-yellow-500" />
              </Button>
            </div>
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Post
            </Button>
          </div>
        </form>
      </Card>

      {/* Interactive Feature Promo */}
      <Card className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Connect with Historical Figures</h2>
            <p className="text-indigo-100">
              Experience conversations with famous personalities through our AI-powered interactive feature.
            </p>
          </div>
          <Button variant="outline" className="bg-white text-indigo-600 hover:bg-indigo-50">
            Try Now
          </Button>
        </div>
      </Card>

      {/* Posts */}
      {posts.map((post) => (
        <Card key={post.id} className="p-4">
          <div className="flex items-start space-x-4">
            <Avatar src={post.user.avatar} alt={post.user.name} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{post.user.name}</h3>
                  <p className="text-sm text-gray-500">{post.timestamp}</p>
                </div>
              </div>
              <p className="mt-2">{post.content}</p>
              <div className="flex items-center justify-between mt-4 text-gray-500">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm">
                    Like ({post.likes})
                  </Button>
                  <Button variant="ghost" size="sm">
                    Comment ({post.comments})
                  </Button>
                  <Button variant="ghost" size="sm">
                    Share ({post.shares})
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Feed; 