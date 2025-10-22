import type { Step3ConfirmationProps } from "./types";


export function Step3Confirmation({ data }: Step3ConfirmationProps) {
  return (
    <div className="flex flex-col gap-4">
        <h3 className=" text-gray-900">
          Confirm Your Reservation
        </h3>
    

      <div className="text-sm text-gray-700 w-full text-left">
        <p><strong>Date:</strong></p>
        <p>{data.date}</p>
        <p><strong>Time:</strong></p>
        <p>{data.time}</p>
        <p><strong>Guests:</strong></p>
        <p>{data.guests}</p>
        {data.special && <p><strong>Special requests:</strong></p>}
        {data.special && <p>{data.special}</p>}
        <p><strong>Name:</strong></p>
        <p>{data.name}</p>
        <p><strong>Email:</strong></p>
        <p>{data.email}</p>
        <p><strong>Phone:</strong></p>
        <p>{data.phone}</p>
      </div>

    </div>
  );
}
