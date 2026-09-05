import { type IUser } from "@/types/user";
import type { CSSProperties } from "react";

interface Props {
  user: IUser;
  select?: (user: IUser) => void;
}

export default function User({ user, select }: Props) {
  const style: CSSProperties = {
    backgroundImage: `url(/avatars/${user.avatar})`,
  };

  return (
    <div className="user group" onClick={() => select?.(user)}>
      <div className="avatar" style={style} />

      <div className="userName">
        {user.name}
      </div>
    </div>
  );
}
