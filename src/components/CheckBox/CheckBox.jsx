import "./CheckBox.css";
export default function EventBlock({ value, children }) {
  return (
    <label className="check option">
      <input
        className="checkInput"
        type="checkbox"
        value={value}
        onChange={(e) => setEvents(e.target.value)}
      />
      <span className="checkBox"></span>
      {children}
    </label>
  );
}
