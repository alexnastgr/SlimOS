import { useDateTime } from "@/hooks/useDateTime";

interface Props {
  showDate?: boolean;
}

export default function DateTime({ showDate }: Props) {
  const { date, time } = useDateTime();

  return (
    <div className="dateTime">
      {showDate && <div>{date}</div>}

      <div>{time}</div>
    </div>
  );
}
