import { useState } from 'react';

export default function Form({ onAddItems }) {
  const [desc, setDesc] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    if (!desc) return;
    const newItem = { desc, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    // resetting state to intial values
    setDesc('');
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>
      <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
