import { useState } from "react";
import type { Step1DateTimeProps } from "./types";
import {
  DateField,
  TimeField,
  GuestsField,
  SpecialRequestsField,
} from "./fields";

export function Step1DateTime({ data, setData }: Step1DateTimeProps) {
  const [openPicker, setOpenPicker] = useState<
    "calendar" | "time" | "select" | null
  >(null);

  const togglePicker = (type: "calendar" | "time" | "select") => {
    setOpenPicker((prev) => (prev === type ? null : type));
  };

  const closePickers = () => setOpenPicker(null);

  return (
    <div className="flex flex-col gap-4">
        <h3 className="text-gray-900">
          Confirm Your Reservation
        </h3>
      <DateField
        value={data.date}
        onChange={(value) => setData({ ...data, date: value })}
        isOpen={openPicker === "calendar"}
        onToggle={() => togglePicker("calendar")}
        onClose={closePickers}
      />

      <TimeField
        value={data.time}
        onChange={(value) => setData({ ...data, time: value })}
        isOpen={openPicker === "time"}
        onToggle={() => togglePicker("time")}
        onClose={closePickers}
      />

      <GuestsField
        value={data.guests}
        onChange={(value) => setData({ ...data, guests: value })}
        isOpen={openPicker === "select"}
        onToggle={() => togglePicker("select")}
        onClose={closePickers}
      />

      <SpecialRequestsField
        value={data.special}
        onChange={(value) => setData({ ...data, special: value })}
      />
    </div>
  );
}
