import Link from 'next/link';

const Navbar = () => (
  <>
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
        background: #f3f3f3;
        color: #fff;
        list-style: none;
        display: flex;
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
  </>
);

export default Navbar;
