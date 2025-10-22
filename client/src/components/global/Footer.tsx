export function Footer() {
  return <footer className="primary-backgroundcolor-2 text-green-100">
       <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Little Lemon. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:reservations@littlelemon.com" className="hover:text-white transition">
              reservations@littlelemon.com
            </a>
            <a href="tel:+491234567890" className="hover:text-white transition">
              +49 123 456 7890
            </a>
          </div>
        </div>
    </footer>;
}
