import { company, services, socials } from "@/constants/footer-items";
import Image from "next/image";
import Link from "next/link";
import footer_logo from "@/assets/icons/tekbayt-footer-logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-blue-100 px-5 md:px-20 w-screen items-center pt-10 pb-5">
      <div className="grid grid-cols-1 place-items-baseline mx-auto md:flex md:flex-row md:justify-between md:items-start gap-20 xl:gap-0 w-full 2xl:max-w-7xl 2xl:mx-auto">
        {/* Logo */}
        <div className="flex flex-col gap-8 items-center">
          <Link href={"/"}>
            <Image
              src={footer_logo}
              width={150}
              height={150}
              quality={100}
              alt="ClearLink footer Logo"
              className="object-contain"
            />
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socials.map((social, idx) => (
              <Link href={social.url} target="_blank" key={idx}>
                <social.icon
                  size={20}
                  className="text-white/80 hover:text-white"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-white text-base">Services</h2>
          <div className="flex flex-col gap-4">
            {services.map((item, idx) => (
              <Link
                key={idx}
                href={`/services#${item.path}`}
                className="text-white/70 hover:text-white text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-white text-base">Company</h2>
          <div className="flex flex-col gap-4">
            {company.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                target="_blank"
                className="text-white/70 hover:text-white text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center pt-10 w-full">
        <div className="w-full bg-white/50 h-[1px] mb-4" />

        {/* Copyright */}
        <p className="font-normal text-white/70 text-xs">
          © 2022 - {new Date().getFullYear()} Tekbayt. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
