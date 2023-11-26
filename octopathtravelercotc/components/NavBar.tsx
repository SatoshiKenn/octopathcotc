// components/NavBar.tsx
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-primary p-4">
      <ul className="flex">
        <li className="mr-4">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-4">
          <Link href="/teams">Teams</Link>
        </li>
        <li>
          <Link href="/travelers">Travelers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
