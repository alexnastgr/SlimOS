
import Buttons from "../Buttons";
import DateTime from "../DateTime";
function RightPanel() {
  return (
    <div className="rightPanel">
        <DateTime showDate={true} />
        <Buttons />
    </div>
  )
}

export default RightPanel