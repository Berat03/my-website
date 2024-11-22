import SingleBox from "./singleBox";
import "./box.css";

export default function GridLayout() {
  const items = [
    {
      id: "1", 
      gifUrl: "/gifs/chess.gif",
      link: "/applications", 
    },
    {
      id: "2", 
      gifUrl: "/gifs/linkedin.gif",
      link: "https://www.linkedin.com/in/beratbulbul/", 
    },
    {
      id: "3",
      gifUrl: "/gifs/github.png",
      link: "https://github.com/Berat03",
    },
  ];

  return (
    <div className="min-h-screen pl-10 pr-10 pt-14">
      <div className="grid grid-cols-4 grid-rows-3 gap-10">
        {/* Render SingleBox components */}
        {items.map((item) => (
          <SingleBox
            key={item.id} // React's internal key for list rendering
            id={item.id} // Pass ID as a prop to SingleBox
            gifUrl={item.gifUrl}
            link={item.link}
          />
        ))}

        {/* Render empty boxes to fill grid */}
        {Array.from({ length: 12 - items.length }).map((_, index) => (
          <div
            key={`empty-${index}`} 
            className="box empty-box" 
          ></div>
        ))}
      </div>
    </div>
  );
}
