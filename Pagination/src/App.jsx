import React from "react";
import PaginationComponent from "./PaginationComponent";

const App = () => {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="container mt-4">
      <PaginationComponent items={items} />
    </div>
  );
};

export default App;
