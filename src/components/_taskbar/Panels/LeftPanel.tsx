import { Icon } from "@iconify/react";

function LeftPanel() {
  return (
    <div className="leftPanel text-black">
      <div className="text-primary">
        <Icon icon="solar:box-minimalistic-bold-duotone" width={23} />
      </div>

      {/* show focused app name */}
      <div className="font-semibold">Finder</div>
    </div>
  );
}

export default LeftPanel;
