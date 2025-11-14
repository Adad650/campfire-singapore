interface FaqQuestionProps {
  className?: string;
  question?: string;
}

function FaqQuestion({ className = "", question = "What is a game jam?" }: FaqQuestionProps) {
  return (
    <div className={className}>
      <p 
        className="text-white text-5xl text-center font-bold leading-none w-full font-amatic"
      >
        {question}
      </p>
    </div>
  );
}

export default FaqQuestion;
