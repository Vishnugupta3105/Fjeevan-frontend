const MessageBubble = ({ sender, text }) => {
    const isUser = sender === 'user';
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2`}>
        <div className={`${isUser ? 'bg-green-200' : 'bg-gray-300'} p-3 rounded-lg max-w-md`}>
          {text}
        </div>
      </div>
    );
  };
  
  export default MessageBubble;
  