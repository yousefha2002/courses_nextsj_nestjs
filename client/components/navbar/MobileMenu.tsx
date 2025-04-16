import Container from "../ui/Container";
import NavbarLink from "./NavbarLink";

interface MobileMenuProps {
  close: () => void;
}

export default function MobileMenu({ close }: MobileMenuProps) {
  return (
        <div className="md:hidden bg-white border-t shadow-sm">
        <Container className="flex flex-col gap-4 py-4">
            <NavbarLink href="/" className="text-gray-700 hover:text-primary" >Home</NavbarLink>
            <NavbarLink href="/courses" className="text-gray-700 hover:text-primary" >Courses</NavbarLink>
            <NavbarLink href="/instructors" className="text-gray-700 hover:text-primary" >Instructors</NavbarLink>
            <NavbarLink href="/login" className="text-gray-700 hover:text-primary" >Login</NavbarLink>
            <NavbarLink
            href="/dashboard"
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-center text-sm font-medium"
            >
            Dashboard
            </NavbarLink>
        </Container>
        </div>
  );
}
