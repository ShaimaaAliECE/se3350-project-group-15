import React, { useState } from "react";

function Home() {
  const [unsorted, setUnsorted] = useState([1, 7, 3, 4, 6]);

  return (
    <div>
      {unsorted.map((number) => (
        <span>{number}</span>
      ))}
    </div>
  );
}

export default Home;
