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
        className="passField"
      />
    </div>
  );
}

export default Password;
