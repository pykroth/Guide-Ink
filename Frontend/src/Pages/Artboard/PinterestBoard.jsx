import { useEffect } from "react";

const PinterestBoard = ({ boardUrl }) => {
  useEffect(() => {
    // Load Pinterest script dynamically
    const script = document.createElement("script");
    script.src = "https://assets.pinterest.com/js/pinit.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <a
        data-pin-do="embedBoard"
        data-pin-board-width="400"
        data-pin-scale-height="240"
        data-pin-scale-width="80"
        href={boardUrl}
      ></a>
    </div>
  );
};

export default PinterestBoard;
