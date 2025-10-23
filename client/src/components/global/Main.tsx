type MainProps = {
  children: React.ReactNode;
  className?: string
};

export function Main({ children }: MainProps) {
  return <main className="relative min-h-[90vh] flex-1 max-w-6xl flex flex-col mx-auto h-full w-full justify-center">
          <div className="flex h-full w-full mx-auto items-center justify-center px-6 py-12">
            {children}
            </div></main>;
}


export function HomePageMain({ children }: MainProps) {
  return <main className="relative min-h-[90vh] flex-1 max-w-6xl flex flex-col mx-auto h-full w-full items-start">
          <div className="flex h-full w-full mx-auto items-center justify-center md:px-6 md:py-6">
            {children}
            </div></main>;
}

export function ThankPageMain({ children, className }: MainProps) {
  return <main className={`relative flex-1 flex min-h-[100vh] flex-col mx-auto h-full w-full items-start justify-center ${className}`}>
          <div className="flex h-full w-full mx-auto items-center justify-center md:px-6 py-0 md:py-6">
            {children}
            </div></main>;
}

