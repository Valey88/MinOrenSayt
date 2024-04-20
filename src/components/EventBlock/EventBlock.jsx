import "./EventBlock.css";
export default function EventBlock({ color, children, eventList }) {
  return (
    <div className={`eventContentBlock ${color}`}>
      <div className="eventContentInfo">
        <h2>{children}</h2>
      </div>
      <div className="eventContentButton">
        <a className="eventButton" href={eventList}>
          <img src="/public/DownloadIcon.svg" alt="" width={40} />
        </a>
      </div>
    </div>
  );
}

// МОДАЛКА ЗНАЧЕНИЕ ДРУГОЙ РЕГИОН РФ
