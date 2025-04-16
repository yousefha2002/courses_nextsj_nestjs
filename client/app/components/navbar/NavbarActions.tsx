import NavbarLink from "./NavbarLink";

export default function NavbarActions() {
  return (
    <>
        <NavbarLink href="/login">Login</NavbarLink>
        <NavbarLink
            href="/dashboard"
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium"
        >
            Dashboard
        </NavbarLink>
    </>
  );
}
