import { Link } from "wouter";
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="container_">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-xl font-bold">Bayu Ferdianto</span>
              </div>
              <p className="text-gray-400">Ikuti saya di sosial media.</p>
              <div className="flex space-x-4">
                {/* Github */}
                <a
                  href="https://github.com/ferdibytwer"
                  target="_blank"
                  className="nav-link"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.725-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.604-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.241 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.625-5.475 5.92.432.372.816 1.102.816 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/_z1729"
                  target="_blank"
                  class="nav-link"
                >
                  <span class="sr-only">Instagram</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/bayu-ferdianto1729"
                  target="_blank"
                  class="nav-link"
                >
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-subheading-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="nav-link">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h3 className="text-subheading-2">Projects</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/projects?category=web-programming"
                    className="nav-link"
                  >
                    Web Programming
                  </a>
                </li>
                <li>
                  <a
                    href="/projects?category=ui/ux-design"
                    className="nav-link"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="/projects?category=software-development"
                    className="nav-link"
                  >
                    Software Development
                  </a>
                </li>
                <li>
                  <a
                    href="/projects?category=karya-ilmiah"
                    className="nav-link"
                  >
                    Karya Ilmiah
                  </a>
                </li>
                <li>
                  <a href="/projects?category=sastra" className="nav-link">
                    Sastra
                  </a>
                </li>
                <li>
                  <a href="/projects?category=seni" className="nav-link">
                    Seni
                  </a>
                </li>
                <li>
                  <a href="/projects?category=blog" className="nav-link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-subheading-2">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/services" className="nav-link">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="/services" className="nav-link">
                    Landing Pages
                  </a>
                </li>
                <li>
                  <a href="/services" className="nav-link">
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-subheading-2">Contact Me</h3>
              <address className="not-italic text-gray-400">
                {/* {{-- Belum buat Email untuk Usaha --}} */}
                <p className="mt-2 whitespace-nowrap">
                  Bussines Mail :{" "}
                  <a
                    href="mailto:ferdibisnis24@gmail.com"
                    target="_blank"
                    className="hover:text-white transition"
                  >
                    ferdibisnis24@gmail.com
                  </a>
                </p>
                <p className="whitespace-nowrap">
                  Whatsapp :{" "}
                  <a
                    href="https://wa.me/6283850147419"
                    className="hover:text-white transition"
                    target="_blank"
                  >
                    083850147419
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              All rights reserved © Bayu Ferdianto 2025.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
