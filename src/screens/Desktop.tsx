import "@/styles/desktop.css";
import type { CSSProperties } from "react";
// hoks
import { useSettings } from "@/hooks/useSettings";

import { useAuthGuard } from "@/guards/useAuthGuard";
// desktop components
import Taskbar from "@/components/_taskbar";

function Desktop() {
  const { wallpaper } = useSettings();

  const isAuthenticated = useAuthGuard();

  const bg: CSSProperties = {
    backgroundImage: `url("${wallpaper.image}")`,
  };

  if (!isAuthenticated) {
    return null;
  }
  return (
    <div className="desktop" style={bg}>
      <Taskbar />
    </div>
  );
}

export default Desktop;
