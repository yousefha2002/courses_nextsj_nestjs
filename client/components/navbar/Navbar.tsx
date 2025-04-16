'use client';
import { useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import NavbarLinks from "./NavbarLinks";
import NavbarActions from "./NavbarActions";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
        <Container className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-primary">
            Course Hub
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
            <NavbarLinks />
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
            <NavbarActions />
            </div>

            {/* Mobile Toggle */}
            <button
            className="md:hidden text-gray-700 text-2xl font-bold"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? "✕" : "☰"}
            </button>
        </Container>

        {/* Mobile Menu */}
        {isOpen && <MobileMenu close={() => setIsOpen(false)} />}
    </header>
  );
}