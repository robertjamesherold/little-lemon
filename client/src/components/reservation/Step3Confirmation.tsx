import type { Step3ConfirmationProps } from "./types";


export function Step3Confirmation({ data }: Step3ConfirmationProps) {
  return (
    <div className="flex flex-col gap-4">
        <h3 className=" text-gray-900">
          Confirm Your Reservation
        </h3>
    

      <div className="text-sm text-gray-700 w-full text-left">
        <p><strong>Date:</strong></p>
        <p>{data.date} at {data.time} PM</p>
        <p><strong>Table for:</strong></p>
        <p>{data.guests}</p>
        <p><strong>Name:</strong></p>
        <p>{data.vorname} {data.nachname}</p>
        <p><strong>Email:</strong></p>
        <p>{data.email}</p>
        <p><strong>Address:</strong></p>
        <p>{data.address} {data.number}</p>
        <p>{data.postal} {data.city}</p>
        {data.phone && <p><strong>Phone:</strong></p>}
        {data.phone && <p>{data.phone}</p>}
        {data.special && <p><strong>Special requests:</strong></p>}
        {data.special && <p>{data.special}</p>}
      </div>

    </div>
  );
}
