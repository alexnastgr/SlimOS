import { Icon } from "@iconify/react";
import type { ChangeEvent } from "react";

interface Props {
  value: string;
  onChange: (text: string) => void;
  onLogin: () => void;
}

function Password({ value, onChange, onLogin }: Props) {
  const update = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="passFields">
      <input
        value={value}
        onChange={update}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onLogin();
          }
        }}
        type="password"
        inputMode="numeric"
        className="passField"
      />

      {/* login button */}
      <div className="btnLogin" onClick={onLogin} title="Login">
        <Icon icon="solar:lock-unlocked-bold-duotone" width={22} />
      </div>
    </div>
  );
}

export default Password;
