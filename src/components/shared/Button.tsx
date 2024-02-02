import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  name: string;
}

const Button = ({ url, className, name, ...props }: ButtonProps) => {
  return (
    <Link
      href={url}
      className={`bg-blue-100 hover:scale-105 transition text-white hover:bg-gradient-conic py-3 px-5 rounded ${className}`}
      {...props}
    >
      {name}
    </Link>
  );
};

export default Button;
