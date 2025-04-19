export default function Footer() {
    return (
        <footer className="bg-gray-50 py-8 border-t">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 text-sm">
            <p>
            © {new Date().getFullYear()} <span className="font-semibold text-gray-800">Course Hub</span>. All rights reserved.
            </p>
        </div>
        </footer>
    );
}
