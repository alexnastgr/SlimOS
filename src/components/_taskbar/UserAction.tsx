import { Icon } from "@iconify/react";

interface Props {
  icon: string;
  title: string;
  onClick: () => void;
}

function UserAction({ icon, title, onClick }: Props) {
  return (
    <button className="userAction" title={title} onClick={onClick}>
      <Icon icon={icon} width={20} />
    </button>
  );
}

export { UserAction };
