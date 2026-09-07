import { Icon } from "@iconify/react";

interface Props {
  showReboot?: boolean;
  showSwitch?: boolean;
  onSwitch: () => void;
  onReboot: () => void;
}
export default function Actions({
  showReboot,
  showSwitch,
  onSwitch,
  onReboot,
}: Props) {
  return (
    <div className="flex flex-row gap-6 absolute bottom-0">
      {/* reboot action */}
      {showReboot && (
        <div className="actions" onClick={onReboot}>
          <div className="icon">
            <Icon icon="iconamoon:restart" width={25} />
          </div>
          <div>Reboot</div>
        </div>
      )}

      {/*  switch user  */}
      {showSwitch && (
        <div className="actions" onClick={onSwitch}>
          <div className="icon">
            <Icon icon="fluent-mdl2:switch-user" width={25} />
          </div>

          <div>Switch User</div>
        </div>
      )}
    </div>
  );
}
