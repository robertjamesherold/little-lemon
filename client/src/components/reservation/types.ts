import type { Dispatch, SetStateAction } from "react";

export type ReservationData = {
  date: string;
  time: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
  special: string;
};

export type Step1DateTimeProps = {
  data: ReservationData;
  setData: Dispatch<SetStateAction<ReservationData>>;
}

export type Step2DetailsProps = {
  data: ReservationData;
  setData: Dispatch<SetStateAction<ReservationData>>;
}

export type Step3ConfirmationProps = {
  data: ReservationData;
}