import "@/styles/taskbar.css";
import { type CSSProperties } from "react";
// hooks
import { useSettings } from "@/hooks/useSettings";

// componets
import LeftPanel from "./Panels/LeftPanel";
import RightPanel from "./Panels/RightPanel";

function Taskbar() {
  const { darkMode } = useSettings();

  const style: CSSProperties = {
    backgroundColor: darkMode ? "rgb(18, 18, 18)" : "rgb(255, 255, 255)",
    color: darkMode ? "#fff" : "#000",
  };
  
  return (
    <div className="taskBar" style={style}>
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default Taskbar;
