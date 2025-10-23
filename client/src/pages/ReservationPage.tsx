import { useNavigate } from "react-router-dom";
import { ReservationForm } from "../components/reservation";
import type { ReservationData } from "../components/reservation/types";
import { Section, Article, Main } from "../components/global/";

export function ReservationPage() {
  const navigate = useNavigate();

  const handleCancel = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  const handleComplete = (data: ReservationData) => {
    navigate("/thank-you", { state: data });
  };

  return (
  <Main>
    <Section className="flex w-full h-full place-content-center place-items-center " ariaLabel="Reservierung">
      <Article className="w-full max-w-lg place-self-center h-full flex justify-center items-center">
        <ReservationForm onCancel={handleCancel} onComplete={handleComplete} />
      </Article>
    </Section>
    </Main>
  );
}
