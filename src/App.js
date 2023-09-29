import React, { useState } from 'react';
import './App.css';

const emojiData = [
  { emoji: "😀", name: "grinning" },
  { emoji: "😃", name: "grinning with big eyes" },
  { emoji: "😄", name: "grinning with smiling eyes" },
  { emoji: "😁", name: "beaming with smiling eyes" },
  { emoji: "😆", name: "grinning squinting" },
  { emoji: "😅", name: "grinning with sweat" },
  { emoji: "😂", name: "tears of joy" },
  { emoji: "🤣", name: "rolling on the floor laughing" },
  { emoji: "😊", name: "smiling with smiling eyes" },
  { emoji: "😇", name: "smiling with halo" },
  { emoji: "🙂", name: "slightly smiling" },
  { emoji: "🙃", name: "upside-down" },
  { emoji: "😉", name: "winking" },
  { emoji: "😌", name: "relieved" },
  { emoji: "😍", name: "heart eyes" },
  { emoji: "🥰", name: "smiling with hearts" },
  { emoji: "😘", name: "face blowing a kiss" },
  { emoji: "😋", name: "savoring food" },
  { emoji: "😛", name: "tongue out" },
  { emoji: "🤪", name: "zany" },
  { emoji: "😜", name: "winking with tongue out" },
  { emoji: "🤓", name: "nerd" },
  { emoji: "🧐", name: "with monocle" },
  { emoji: "😎", name: "cool" },
  { emoji: "🤩", name: "star-struck" }
];


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState(emojiData);

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      const filtered = emojiData.filter(e => e.name.includes(term));
      setFilteredEmojis(filtered);
    } else {
      setFilteredEmojis(emojiData);
    }
  }

  return (
    <div className="App">
      <h1>Emoji Search by Name</h1>
      <input
        type="text"
        placeholder="Search for an emoji by name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="emoji-list">
        {filteredEmojis.map((emojiObj, index) => (
          <span key={index} className="emoji">
            {emojiObj.emoji}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;