import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto">
        <ul className="flex items-center flex-wrap gap-4">
          <li className="mb-2">
            <Link className="links text-black hover:text-gray-300" href="/">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link className="links text-black hover:text-gray-300" href="/favorites">
              Favorites
            </Link>
          </li>
          <li className="mb-2">
            <Link className="links text-black hover:text-gray-300" href="/travelers">
              Travelers
            </Link>
          </li>
          <li className="mb-2">
            <Link className="links text-black hover:text-gray-300" href="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;