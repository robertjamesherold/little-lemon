import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { ReservationData } from "../components/reservation/types";
import { Button } from "../components/ui";
import { Section, Article, ThankPageMain } from "../components/global";

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
        typeof candidate.vorname === "string" &&
        typeof candidate.nachname === "string" &&
        typeof candidate.email === "string" &&
        typeof candidate.address === "string" &&
        typeof candidate.number === "string" &&
        typeof candidate.postal === "string" &&
        typeof candidate.city === "string" 
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
  <ThankPageMain className='px-0'>
        <div className="flex w-full flex-col py-10 md:py-0 gap-10">

    <Section className="flex w-full justify-center" ariaLabel="Reservierungsbestätigung">
      <Article className="w-full sm:max-w-lg space-y-8 sm:rounded-2xl primary-backgroundcolor-2 p-4 text-center text-white shadow-lg backdrop-blur-sm">
        
        <div className="space-y-2">
          <h3 className="text-sm uppercase tracking-[0.4em]">Thank you</h3>
          <h1 className="primary-color-1 tracking-wide">Your reservation is confirmed!</h1>
          <p className="text-base max-w-[40ch] place-self-center">
        We look forward to welcoming you to Little Lemon soon. A confirmation has been sent via email.          </p>
        </div>
        <h3 className='mb-2 text-left'>Date & Time</h3>
        <Article className="rounded-xl border border-green-100 bg-white/90 px-6 py-2 text-left text-sm text-green-900 mb-2 grid grid-cols-1 sm:grid-cols-3">
          <Detail label="Date" className='col-span-1' value={data.date} />
                    <Detail label="Time" className='col-span-1' value={[data.time, 'PM']}/>

          <Detail label="Guests" className='col-span-1' value={data.guests} />
</Article>
<h3 className='mb-2 text-left'>Contact</h3>
           <Article className="rounded-xl border border-green-100 bg-white/90 px-6 py-2 gap-4 mb-2 text-left text-sm text-green-900 grid grid-cols-1">
          <Detail label="Name" value={[data.vorname, data.nachname]}  />
          <Detail label="Phone" value={data.phone} />
          <Detail label="Address" value={[data.address, data.number, data.postal, data.city]} />
          <Detail label="E-Mail" value={data.email} />
          </Article>
          {data.special && <h3 className='mb-2 text-left'>Special requests</h3>}
          {data.special && <Article className="rounded-xl border border-green-100 bg-white/90 px-6 py-2 text-left text-sm text-green-900 grid grid-cols-1">
              <Detail className='col-span-1' label=" requests" value={data.special} />
          </Article>
          } 

        <div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
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
    </ThankPageMain>
  );
}

type DetailProps = {
  label: string;
  className?: string;
  value: string | (string | undefined)[];
};

function Detail({ label, value, className }: DetailProps) {
  if (
    value == null ||
    (Array.isArray(value) && value.every((v) => !v)) ||
    (!Array.isArray(value) && value === "")
  ) {
    return null;
  }

  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-wide primary-color-2">
        {label}
      </p>

      {Array.isArray(value) ? (
        <>
          {value
            .filter(Boolean)
            .reduce<string[][]>((rows, item, i) => {
              if (i % 2 === 0) rows.push([item!]);
              else rows[rows.length - 1].push(item!);
              return rows;
            }, [])
            .map((row, i) => (
              <p key={i} className="text-sm text-green-700">
                {row.join(" ")}
              </p>
            ))}
        </>
      ) : (
        <p className="text-sm text-green-700">{value}</p>
      )}
    </div>
  );
}