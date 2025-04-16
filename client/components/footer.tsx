import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-50 py-8 border-t">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 text-sm">
            <p>
            © {new Date().getFullYear()} <span className="font-semibold text-gray-800">Course Hub</span>. All rights reserved. |
            <Link href="/privacy-policy" className="ml-1 hover:text-primary underline">
                Privacy Policy
            </Link>
            </p>
        </div>
        </footer>
    );
}
