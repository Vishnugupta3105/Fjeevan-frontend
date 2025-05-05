import { Link } from 'react-router-dom';

const ChatCard = ({ name, path }) => {
  return (
    <Link 
      to={`/chat/${path}`} 
      className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105 text-center"
    >
      <h2 className="text-xl font-semibold">{name}</h2>
    </Link>
  );
};

export default ChatCard;
