"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { digilogo } from "@/assets";
import { BiChevronDown } from "react-icons/bi";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // tracks which dropdown is open

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };
  // const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    {
      label: "SOLUTIONS",
      icon: BiChevronDown,
      mega: true,
      dropdown: [
        { label: "Solutions", href: "/solutions" },
        {
          label: "SMS & USSD Authentication Solutions (OTP & 2FA)",
          href: "/solutions/sms-ussd",
        },
        {
          label: "Product Authenticity & Verification",
          href: "/solutions/product-auth",
        },
        {
          label: "Content Subscription & Delivery Solutions",
          href: "/solutions/content-subscription",
        },
        { label: "Voiced Based Solution", href: "/solutions/voiced-based" },
        {
          label: "Micro Payments Solutions",
          href: "/solutions/micro-payments",
        },
        { label: "Custom API Development", href: "/developer" },
      ],
    },

    { href: "/developer", label: "DEVELOPER" },
    { href: "/career", label: "CAREER" },
    {
      label: "CONTACTS",
      icon: BiChevronDown,
      mega: false,
      dropdown: [
        { label: "Contact", href: "/contact" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      label: "POLICIES",
      icon: BiChevronDown,
      mega: false,
      dropdown: [
        { label: "Privacy Policy", href: "/policies" },
        { label: "IT & Platform Policy", href: "/policies/ITPolicy" },
      ],
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={digilogo}
              alt="digiline-Logo"
              width={200}
              height={200}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link, index) => {
              const Icon = link.icon;

              return (
                <div key={index} className="relative group">
                  {link.dropdown ? (
                    <button
                      type="button"
                      className="flex items-center gap-1 text-[14px] font-semibold text-ring hover:text-primary transition-colors uppercase tracking-wide"
                    >
                      {link.label}
                      {Icon && (
                        <Icon
                          size={16}
                          className="transition-transform duration-200 group-hover:rotate-180"
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-[14px] font-semibold text-ring hover:text-primary transition-colors uppercase tracking-wide"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.dropdown && link.mega && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 p-7.5 w-[437px] h-[264px] bg-white shadow-xl rounded-sm opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                      <div className="grid grid-cols-2 gap-5 mt-6">
                        {link.dropdown.map((item, i) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`transition ${
                              i === 0
                                ? "col-span-2 text-base font-semibold text-[#0C6EB5] mb-3"
                                : "text-[#0C6EB5] text-sm hover:text-primary"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Normal Dropdown */}
                  {link.dropdown && !link.mega && (
                    <div className="absolute left-0 top-full mt-4 w-40 h-34 py-2.5 px-3 flex flex-col gap-[10px] bg-white shadow-xl rounded-sm opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                      {link.dropdown.map((item, i) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`transition ${
                            i === 0
                              ? "col-span-2 text-base font-semibold text-[#0C6EB5] mb-3"
                              : "text-[#0C6EB5] text-sm hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            {links.map((link, index) => (
              <div
                key={link.href ? link.href : `mobile-link-${index}`}
                className="flex flex-col"
              >
                {/* Main link */}
                {link.href ? (
                  <Link
                    href={link.href}
                    className="block px-2 py-2 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded uppercase tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  // Dropdown toggle for links with sublinks
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="w-full flex justify-between items-center px-2 py-2 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded uppercase tracking-wide"
                  >
                    {link.label}
                    <BiChevronDown
                      className={`transition-transform duration-300 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}

                {/* Sublinks */}
                {link.dropdown && openDropdown === link.label && (
                  <div className="flex flex-col pl-5 mt-1 mb-2">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-2 py-1 rounded ${
                          i === 0
                            ? "font-semibold text-[#0C6EB5]"
                            : "text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
