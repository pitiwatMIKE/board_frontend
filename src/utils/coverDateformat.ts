import { DateTime } from "luxon";

export const coverDateformat = (date: string) => {
  const time = DateTime.fromISO(date);
  return (
    time.toRelative({
      style: "narrow",
      unit: ["years", "months", "days", "hours", "minutes", "seconds"],
    }) || ""
  );
};
