import "@/styles/desktop.css";
import type { CSSProperties } from "react";
// hoks
import { useSettings } from "@/hooks/useSettings";
// desktop components
import Taskbar from "@/components/_taskbar";

function Desktop() {
  const { wallpaper } = useSettings();

  const bg: CSSProperties = {
    backgroundImage: `url("${wallpaper.image}")`,
  };

  return (
    <div className="desktop" style={bg}>
      <Taskbar />
    </div>
  );
}

export default Desktop;
