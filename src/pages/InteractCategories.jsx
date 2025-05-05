import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

function InteractCategories() {
  const categories = [
    { title: 'Philosophers', icon: '📚', path: 'philosopher' },
    { title: 'Freedom Fighters', icon: '🗽', path: 'freedom-fighter' },
    { title: 'Scientists', icon: '🔬', path: 'scientist' },
    { title: 'Politicians', icon: '👔', path: 'politician' },
    { title: 'Sports Legends', icon: '🏆', path: 'sports' },
    { title: 'Actors', icon: '🎬', path: 'actor' },
    { title: 'Superheroes', icon: '⚡', path: 'superhero' },
    { title: 'Anime', icon: '🎨', path: 'anime' },
  ];

  return (
    <div className="min-h-screen py-16 px-6 bg-background text-foreground">
      <h1 className="text-4xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
        Choose a Category
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <Link to={`/personalities/${cat.path}`} key={index}>
            <Card className="hover:shadow-xl transition duration-200 border-indigo-100 hover:border-indigo-400 dark:hover:border-indigo-500 group cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className={`text-6xl mb-4 transition-transform group-hover:scale-110 filter drop-shadow-md ${
                  cat.path === 'superhero' ? 'animate-pulse' : ''
                }`}>
                  {cat.icon}
                </div>
                <CardTitle className="text-xl">{cat.title}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default InteractCategories;
