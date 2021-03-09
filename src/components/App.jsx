import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emojis) {
  return (
    <Entry
      key={emojis.id}
      name={emojis.name}
      emoji={emojis.emoji}
      meaning={emojis.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
