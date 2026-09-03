import { Icon } from "@iconify/react";

import { useSession } from "@/hooks/useSession";
function LeftPanel() {
  const { currentUser } = useSession();

  return (
    <div className="leftPanel">
      <div className="text-primary">
        <Icon icon="solar:box-minimalistic-bold-duotone" width={23} />
      </div>

      {/* user name */}
      <div className="font-semibold text-sm">
        {currentUser?.name || "Guest"}
      </div>
    </div>
  );
}

export default LeftPanel;
