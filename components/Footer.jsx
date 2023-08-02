import Link from 'next/link';

export const Footer = () => {
  return (
    <nav>
      <Link
        className="nav-link"
        href="https://youtu.be/dQw4w9WgXcQ"
        target="_blank"
      >
        About Us
      </Link>
      <Link
        className="nav-link"
        href="https://youtu.be/dQw4w9WgXcQ"
        target="_blank"
      >
        Discord
      </Link>
      <Link
        className="nav-link"
        href="https://youtu.be/dQw4w9WgXcQ"
        target="_blank"
      >
        GitHub
      </Link>
    </nav>
  );
};
