export default function Item({ items, onDeleteitem, onPacked }) {
  return (
    <li>
      <input type="checkbox" onClick={() => onPacked(items.id)} />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button onClick={() => onDeleteitem(items.id)}>❌</button>
    </li>
  );
}
