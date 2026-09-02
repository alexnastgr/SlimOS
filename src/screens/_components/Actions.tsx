import { Icon } from "@iconify/react";

interface Props {
  onSwitch: () => void;
  onReboot: () => void;
}
export default function Actions({ onSwitch, onReboot }: Props) {
  return (
    <div className="flex flex-row gap-6 absolute bottom-0">
      {/* reboot action */}
      <div className="action" onClick={onReboot}>
        <div className="icon">
          <Icon icon="iconamoon:restart" width={25} />
        </div>
        <div>Reboot</div>
      </div>

      {/*  switch user  */}
      <div className="action" onClick={onSwitch}>
        <div className="icon">
          <Icon icon="fluent-mdl2:switch-user" width={25} />
        </div>

        <div>Switch User</div>
      </div>
    </div>
  );
}
