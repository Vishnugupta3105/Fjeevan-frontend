import ChatCard from "../components/ChatCard";

const personalities = [
  { name: "Osho", path: "osho" },
  { name: "J. Krishnamurti", path: "krishnamurti" },
  { name: "Sardar Patel", path: "patel" },
  { name: "Jawaharlal Nehru", path: "nehru" },
  { name: "A.P.J. Abdul Kalam", path: "kalam" },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-blue-200 flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-10">Choose Your Mentor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {personalities.map((personality) => (
          <ChatCard key={personality.name} {...personality} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
