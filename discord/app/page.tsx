"use client";

import Clock from "@/components/ui/clock";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (time === null) return null;

  console.log(time);

  return (
    <>
        <Clock time={time} />
    </>
  );
}
