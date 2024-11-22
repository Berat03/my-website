export default function BottomBar() {
    return (
      <div className="relative w-full h-40">
        <svg
          className="absolute inset-0"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path 
            d="
              M 0,0 
              L 20,0 
              C 25,0 35,30 40,50 
              L 60,50 
              C 65,30 75,0 80,0 
              L 100,0 
              L 100,100 
              L 0,100 
              Z
            "
            fill="#6B7280"
          />
        </svg>
      </div>
    );
  }
  