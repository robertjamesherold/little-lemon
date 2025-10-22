type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return <main className="flex-1 max-w-6xl flex flex-col mx-auto w-full">
          <div className="flex h-full w-full mx-auto items-center justify-center px-6 py-12">
            {children}
            </div></main>;
}


export function HomePageMain({ children }: MainProps) {
  return <main className="flex-1 max-w-6xl flex flex-col mx-auto w-full">
          <div className="flex h-full w-full mx-auto items-center justify-center md:px-6 md:py-12">
            {children}
            </div></main>;
}