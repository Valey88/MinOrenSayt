import "./EventBlock.css";
export default function EventBlock({ color, children }) {
  return (
    <div className={`programmContentBlock ${color}`}>
      <div className="programmContentInfo">
        <h2>{children}</h2>
      </div>
      <div className="programmContentButton">
        <a className="programmButton" href="\public\Архитектура Форума ОК_2.docx">
          <img src="add_circle.svg" alt="" width={40} />
        </a>
      </div>
    </div>
  );
}
