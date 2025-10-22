import { Link, NavLink} from "react-router-dom";


export function Nav() {
  return <nav className="bg-white/80 backdrop-blur border-b border-green-100"><div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <Link to="/" className="text-lg font-semibold text-green-800">
              Little Lemon
            </Link>
            <div className="flex items-center gap-6 text-sm font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition hover:text-green-700 ${
                    isActive ? "text-green-800" : "text-gray-600"
                  }`
                }
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/reserve"
                className={({ isActive }) =>
                  `transition hover:text-green-700 ${
                    isActive ? "text-green-800" : "text-gray-600"
                  }`
                }
              >
                Reservierung
              </NavLink>
            </div>
          </div>
          </nav>;
}
