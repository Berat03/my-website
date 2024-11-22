import SingleBox from "./singleBox";



export default function GridLayout() {

    const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`); // add our paths to open each application
  
    return (
      <div className="min-h-screen p-4">
        <div className="grid grid-cols-4 grid-rows-3 gap-12">
          {items.map((item, index) => (
            <SingleBox key={String(index)} content={item} />
          ))}
          {/* Empty divs retain 4x3 structure, removed border when complete */}
          {Array.from({ length: 12 - items.length }).map((_, index) => (
            <div key={`empty-${index}`} className="bg-transparent border border-gray-200"></div>
          ))}
        </div>
      </div>
    );
  }