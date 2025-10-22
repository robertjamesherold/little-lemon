import { useMemo, useState, type FormEvent } from "react";
import { Step1DateTime } from "./Step1DateTime";
import { Step2Details } from "./Step2Details";
import { Step3Confirmation } from "./Step3Confirmation";
import type { ReservationData } from "./types";
import { Header } from "../global/Header";
import { Button } from "../ui";

const STEP_TITLES = [
  "Reserve a table",
  "Reserve a table",
  "Reserve a table",
] as const;

type ReservationFormProps = {
  onCancel?: () => void;
  onComplete?: (data: ReservationData) => void;
};

const createEmptyReservation = (): ReservationData => ({
  date: "",
  time: "",
  guests: "",
  name: "",
  email: "",
  phone: "",
  special: "",
});

export function ReservationForm({ onCancel, onComplete }: ReservationFormProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<ReservationData>(() => createEmptyReservation());

  const isFinalStep = step === STEP_TITLES.length - 1;
  const isStep1Complete = Boolean(
    formData.date && formData.time && formData.guests
  );
  const isStep2Complete = Boolean(
    formData.name && formData.email && formData.phone
  );

  const canProceed = useMemo(() => {
    if (step === 0) return isStep1Complete;
    if (step === 1) return isStep2Complete;
    return true;
  }, [step, isStep1Complete, isStep2Complete]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if ((step === 0 && !isStep1Complete) || (step === 1 && !isStep2Complete)) {
      return;
    }

    if (isFinalStep) {
      if (onComplete) {
        onComplete(formData);
        setFormData(createEmptyReservation());
        setStep(0);
      } else {
        alert("Table reserved! 🍋");
      }
      return;
    }

    setStep((current) => Math.min(current + 1, STEP_TITLES.length - 1));
  };

  const handleBack = () => {
    if (step === 0) {
      onCancel?.();
      return;
    }

    setStep((current) => Math.max(current - 1, 0));
  };

  const showBackButton = step > 0 || Boolean(onCancel);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-visible min-h-fit"
    >
      <Header className="primary-backgroundcolor-2 text-white px-4 py-2  text-center text-lg font-semibold overflow-hidden rounded-t-lg">
        <h2>{STEP_TITLES[step]}</h2>
      </Header>

      <div className="flex-1 p-4">
        {step === 0 && <Step1DateTime data={formData} setData={setFormData} />}
        {step === 1 && <Step2Details data={formData} setData={setFormData} />}
        {step === 2 && <Step3Confirmation data={formData} />}
      </div>

      <div className="flex gap-2 p-4 pt-0">
        {showBackButton && (
          <Button
            type="button"
            onClick={handleBack}
            className="w-full"
            variant="secondary"
            size='md'
          >
            Back
          </Button>
        )}
        <Button
          type="submit"
          className="w-full"
          variant="primary"
          disabled={!canProceed}
          size='md'
        >
          {isFinalStep ? "Confirm" : "Continue"}
        </Button>
      </div>
    </form>
  );
}
