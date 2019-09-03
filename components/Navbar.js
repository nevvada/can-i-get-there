import Link from 'next/link';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>

    <style jsx>{`
      ul {
        list-style: none;
        display: flex;
        justify-content: flex-end;
      }

      ul li {
        font-size: 18px;
        margin-right: 20px;
      }

      ul li a {
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </nav>
);

export default Navbar;
