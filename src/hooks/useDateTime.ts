import { useEffect, useState } from "react";

interface UseDateTimeOptions {
  locale?: string;
}

export function useDateTime({ locale = "en-US" }: UseDateTimeOptions = {}) {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = new Intl.DateTimeFormat(locale, {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(now);

  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  const time = `${hours}:${minutes} ${ampm}`;

  return {
    now,
    date,
    time,
  };
}
