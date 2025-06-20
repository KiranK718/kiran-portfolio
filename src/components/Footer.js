// components/Footer.js
export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-500 bg-black border-t border-gray-800">
      <p>
        © {new Date().getFullYear()} Kiran Kumar. All Rights Reserved.
      </p>
    </footer>
  );
}
