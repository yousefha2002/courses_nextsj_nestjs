import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavbarLink({ href, children, className = "" }: NavbarLinkProps) {
    return (
        <Link
        href={href}
        className={`text-gray-700 hover:text-primary transition ${className}`}
        >
        {children}
        </Link>
    );
}