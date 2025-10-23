import type { Dispatch, SetStateAction } from "react";

export type ReservationData = {
  date: string;
  time: string;
  guests: string;
  vorname: string;
  nachname: string;
  email: string;
  phone: string;
  special: string;
  address: string;
  number: string;
  postal: string;
  city: string;
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