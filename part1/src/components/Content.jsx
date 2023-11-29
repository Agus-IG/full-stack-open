import React from "react";
import Part from "./Part";

function Content({part1, part2, part3}) {
  return (
    <div>
      <Part part1={part1} />
      <Part part2={part2} />
      <Part part3={part3} />
    </div>
  );
}

export default Content;
