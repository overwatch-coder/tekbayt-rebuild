import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Page Not Found - Tekbayt",
  description: "Page Not Found",
};

const NotFound = () => {
  return (
    <section className="py-20 flex flex-col items-center mt-10 space-y-5">
      <h1 className="font-bold font-[georgia] text-6xl text-orange-100">404</h1>
      <h2 className="text-2xl font-semibold">Page not found</h2>
      <p className="text-gray-600">
        We are sorry, the page you requested could not be found.
      </p>
      <Link
        href={"/"}
        className="px-5 py-3 text-white uppercase bg-orange-100 hover:bg-transparent border hover:border-orange-100 hover:text-orange-100"
      >
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;
