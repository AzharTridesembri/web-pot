"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
    {
      name: "WhatsApp",
      href: "#",
      icon: FaWhatsapp,
    },
  ];

  const footerLinks = {
    company: [
      { name: "About", href: "/about" },
      { name: "Products", href: "/products" },
      { name: "Gallery", href: "/gallery" },
      { name: "Contact", href: "/contact" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Shipping", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-2xl font-bold text-teal-400">
                Rachmad Pot
              </Link>
            </motion.div>
            <p className="text-slate-300 text-sm">
              Membuat dunia lebih indah melalui desain pot beton berkualitas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-slate-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-slate-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section - REMOVE and REPLACE with address */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-teal-400 mb-2">
              Alamat Toko
            </h3>
            <p className="text-slate-300">
              Pangkalan Pot Rachmat
              <br />
              HQ2G+75H, Jl. Puri Bukit Depok
              <br />
              Ragajaya, Kecamatan Bojonggede
              <br />
              Kabupaten Bogor, Jawa Barat 16920
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300 text-sm">
              © {currentYear} Rachmad Pot. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-slate-300 hover:text-teal-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
