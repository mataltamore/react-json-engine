import React from "react";
import ComponentsList from "../../assets/components.json";
import Cards from "../Cards/Cards";

const MAP = new Map();
MAP.set("cards", Cards);

function App() {
  return (
    <>
      {ComponentsList.map((component) => {
        if (!MAP.has(component.name)) return null;

        return (
          <main style={{ display: "flex" }}>
            {React.createElement(MAP.get(component.name), component.props)}
          </main>
        );
      })}
    </>
  );
}

export default App;
