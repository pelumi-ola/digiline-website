"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { digilogo } from "@/assets";
import { BiChevronDown } from "react-icons/bi";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // tracks which dropdown is open

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };
  // const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      label: "Solutions",
      icon: BiChevronDown,
      mega: true,
      products: [
        { label: "Lottery - Spin it", href: "/products/lottery" },
        { label: "Trivia - Edu-Digi", href: "/products/trivia" },
        {
          label: "Mobile Games",
          href: "/products/mobile-games",
        },
        { label: "Content Service", href: "/products/content-service" },
        // { label: "Interactive Voiced Response (IVR)", href: "/products/IVR" },
        { label: "Ring Back Tone (RBT)", href: "/products/RBT" },
      ],
      services: [
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

    { href: "/developer", label: "Developer" },
    { href: "/career", label: "Career" },
    {
      label: "Contacts",
      icon: BiChevronDown,
      mega: false,
      dropdown: [
        { label: "Contact", href: "/contact" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      label: "Policies",
      icon: BiChevronDown,
      mega: false,
      dropdown: [
        { label: "Privacy Policy", href: "/policies" },
        { label: "IT & Platform Policy", href: "/policies/ITPolicy" },
      ],
    },
  ];

  const isParentActive = (link) => {
    if (link.href) return pathname === link.href;

    const children = [
      ...(link.products || []),
      ...(link.services || []),
      ...(link.dropdown || []),
    ];

    return children.some((item) => pathname === item.href);
  };

  const isChildActive = (child) => pathname === child.href;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
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
          <div className="hidden md:flex gap-5">
            {links.map((link, index) => {
              const Icon = link.icon;

              return (
                <div key={index} className="relative group">
                  {link.dropdown || link.mega ? (
                    <button
                      type="button"
                      className={`flex items-center gap-1 text-[14px] font-semibold p-2 rounded transition-colors capitalize tracking-wide ${
                        isParentActive(link)
                          ? "bg-[hsla(271,49%,83%,1)] text-white border-b-2 border-primary"
                          : "text-ring hover:text-white hover:bg-[hsla(271,49%,83%,1)]"
                      }`}
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
                      className={`flex items-center gap-1 text-[14px] font-semibold p-2 rounded transition-colors capitalize tracking-wide ${
                        pathname === link.href
                          ? "bg-[hsla(271,49%,83%,1)] text-white border-b-2 border-primary"
                          : "text-ring hover:text-white hover:bg-[hsla(271,49%,83%,1)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.mega && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 p-8 w-[520px] bg-white shadow-xl rounded-sm opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                      <div className="grid grid-cols-2 gap-10">
                        {/* Products */}
                        <div>
                          <Link
                            href="/products"
                            className={`text-sm font-bold mb-4 uppercase transition ${
                              pathname === "/products"
                                ? "text-primary border-b-2 border-primary"
                                : "text-[#0C6EB5] hover:text-primary"
                            }`}
                          >
                            Products
                          </Link>

                          <div className="flex flex-col gap-3 mt-5">
                            {link.products?.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm transition ${
                                  pathname === item.href
                                    ? "text-primary font-semibold border-b-2 border-primary"
                                    : "text-[#0C6EB5] hover:text-primary"
                                }`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Services */}
                        <div>
                          <Link
                            href="/services"
                            className={`text-sm font-bold uppercase transition ${
                              pathname === "/services"
                                ? "text-primary border-b-2 border-primary"
                                : "text-[#0C6EB5] hover:text-primary"
                            }`}
                          >
                            Services
                          </Link>

                          <div className="flex flex-col gap-3 mt-5">
                            {link.services?.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm transition ${
                                  pathname === item.href
                                    ? "text-primary font-semibold border-b-2 border-primary"
                                    : "text-[#0C6EB5] hover:text-primary"
                                }`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Normal Dropdown */}
                  {link.dropdown && !link.mega && (
                    <div className="absolute left-0 top-full mt-4 w-[150px] h-34 py-2.5 px-3 flex flex-col gap-[10px] bg-white shadow-xl rounded-sm opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`transition px-2 py-1 rounded ${
                            isChildActive(item)
                              ? "bg-[hsla(271,49%,83%,1)] text-white font-semibold"
                              : "text-[#0C6EB5] hover:text-primary"
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
                    className={`flex items-center gap-1 text-[14px] font-semibold p-2 rounded transition-colors capitalize tracking-wide ${
                      pathname === link.href
                        ? "bg-[hsla(271,49%,83%,1)] text-white border-b-2 border-primary"
                        : "text-ring hover:text-white hover:bg-[hsla(271,49%,83%,1)]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  // Dropdown toggle for links with sublinks
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className={`flex items-center gap-1 text-[14px] font-semibold p-2 rounded transition-colors capitalize tracking-wide ${
                      isParentActive(link)
                        ? "bg-[hsla(271,49%,83%,1)] text-white border-b-2 border-primary"
                        : "text-ring hover:text-white hover:bg-[hsla(271,49%,83%,1)]"
                    }`}
                  >
                    {link.label}
                    <BiChevronDown
                      className={`transition-transform duration-300 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}

                {/* Sublinks for mobile */}
                {(link.dropdown || link.mega) &&
                  openDropdown === link.label && (
                    <div className="flex flex-col pl-5 mt-1 mb-2">
                      {/* For normal dropdown */}
                      {link.dropdown?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-2 py-1 rounded ${
                            pathname === item.href
                              ? "bg-[hsla(271,49%,83%,1)] text-white font-semibold"
                              : "text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}

                      {/* For mega menu */}
                      {link.mega &&
                        [
                          ...(link.products || []),
                          ...(link.services || []),
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-2 py-1 rounded ${
                              pathname === item.href
                                ? "bg-[hsla(271,49%,83%,1)] text-white font-semibold"
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
