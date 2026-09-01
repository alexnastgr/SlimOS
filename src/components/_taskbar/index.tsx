import BtnStart from "./BtnStart";
import DateTime from "./DateTime";

function Taskbar() {
  return (
    <div className="taskBar">
      {/* left panel */}
      <div className="absolute left-0">
        <BtnStart />
      </div>

      {/* right panel */}
      <div className="absolute right-2">
        <DateTime showDate={true} />
      </div>
    </div>
  );
}

export default Taskbar;
