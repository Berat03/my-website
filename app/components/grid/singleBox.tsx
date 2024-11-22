interface SingleBoxProps {
    key: string;
    content: string;
  }
  
  export default function SingleBox({ key, content }: SingleBoxProps) {
    return (
      <div
        id={key}
        className="flex items-center justify-center bg-blue-500 text-white text-lg"
        style={{ width: '18vw', height: '18vh' }} 
      >
        {content}
      </div>
    );
  }
  