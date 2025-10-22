import clsx from "clsx";

type StepItem = { label: string };
type StepsProps = { steps: StepItem[]; currentStep: number };

export function Steps({ steps, currentStep }: StepsProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto">
      {steps.map((step, i) => {
        const isActive = i + 1 === currentStep;
        const isDone = i + 1 < currentStep;

        return (
          <div key={step.label} className="flex flex-col items-center flex-1">
            <div
              className={clsx(
                "w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-medium",
                isDone
                  ? "bg-blue-600 border-blue-600 text-white"
                  : isActive
                  ? "border-blue-600 text-blue-600"
                  : "border-gray-300 text-gray-500"
              )}
            >
              {i + 1}
            </div>
            <span
              className={clsx(
                "mt-2 text-xs",
                isActive ? "text-blue-600" : "text-gray-500"
              )}
            >
              {step.label}
            </span>
            {i < steps.length - 1 && (
              <div
                className={clsx(
                  "h-0.5 w-full mt-[-18px]",
                  isDone ? "bg-blue-600" : "bg-gray-300"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}