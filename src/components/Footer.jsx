export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        <div>
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="bg-blue-600 text-white p-2 rounded-md">
              {"</>"}
            </span>
            <span>Kumar Devansh</span>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Full-stack developer crafting scalable, maintainable and
            production-ready web applications using modern technologies.
          </p>

          <p className="mt-4 text-xs text-gray-500">
            // status: open for freelance & collaborations
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">$ navigation</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>$ Home</li>
            <li>$ About</li>
            <li>$ Services</li>
            <li>$ Projects</li>
            <li>$ Skills</li>
            <li>$ Testimonials</li>
            <li>$ Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">$ contact</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>// Lucknow, Uttar pradesh</li>
            <li>giridevansh484@gmail.com</li>
            <li>+91 87656 63296</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t pt-6 text-sm text-gray-500 flex justify-between max-w-6xl mx-auto px-6">
        <p>© 2026 Kumar.Devansh — all rights reserved</p>
        <p>built with ❤️ & clean code</p>
      </div>
    </footer>
  );
}
