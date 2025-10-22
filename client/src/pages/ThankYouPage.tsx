import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { ReservationData } from "../components/reservation/types";
import { Button } from "../components/ui";
import { Section, Article, HomePageMain } from "../components/global";

export function ThankYouPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = useMemo<ReservationData | null>(() => {
    if (location.state && typeof location.state === "object") {
      const candidate = location.state as Partial<ReservationData>;
      if (
        typeof candidate.date === "string" &&
        typeof candidate.time === "string" &&
        typeof candidate.guests === "string" &&
        typeof candidate.name === "string" &&
        typeof candidate.email === "string" &&
        typeof candidate.phone === "string"
      ) {
        return candidate as ReservationData;
      }
    }
    return null;
  }, [location.state]);

  useEffect(() => {
    if (!data) {
      navigate("/", { replace: true });
    }
  }, [data, navigate]);

  if (!data) {
    return null;
  }

  const handleBookAgain = () => navigate("/reserve", { replace: true });
  const handleGoHome = () => navigate("/", { replace: true });

  return (
  <HomePageMain>
        <div className="flex w-full flex-col py-10 md:py-0 gap-10">

    <Section className="flex w-full justify-center" ariaLabel="Reservierungsbestätigung">
      <Article className="w-full max-w-2xl space-y-8 md:rounded-2xl primary-backgroundcolor-2 p-4 text-center text-white shadow-lg backdrop-blur-sm">
        <div className="space-y-2">
          <h3 className="text-sm uppercase tracking-[0.4em]">Thank you</h3>
          <h1 className="primary-color-1">Your reservation is confirmed!</h1>
          <p className="text-base">
        We look forward to welcoming you to Little Lemon soon. A confirmation has been sent via email.          </p>
        </div>

        <Article className="space-y-3 rounded-xl border border-green-100 bg-white/90 p-6 text-left text-sm text-green-900">
          <Detail label="Date" value={data.date} />
          <Detail label="Time" value={data.time} />
          <Detail label="Guests" value={data.guests} />
          {data.special && <Detail label="Special requests" value={data.special} />}
          <Detail label="Name" value={data.name} />
          <Detail label="E-Mail" value={data.email} />
          <Detail label="Phone" value={data.phone} />
        </Article>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={handleBookAgain} variant="primary" size="lg" className="w-full sm:w-full">
            Further reservation
          </Button>
          <Button onClick={handleGoHome} variant="secondary" size="lg" className="w-full sm:w-full">
            Back home
          </Button>
        </div>
      </Article>
    </Section>
    </div>
    </HomePageMain>
  );
}

type DetailProps = {
  label: string;
  value: string;
};

function Detail({ label, value }: DetailProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide. primary-color-2">{label}</p>
      <p className="text-sm text-green-700">{value}</p>
    </div>
  );
}
