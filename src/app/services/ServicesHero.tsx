import Image from "next/image";
import services_hero_image from "@/assets/services/services_hero_image.png";

const ServicesHero = () => {
  return (
    <section className="px-5 md:px-20 flex flex-col gap-10 items-center md:flex-row md:justify-between pt-5 pb-10">
      <div
        data-aos="fade-right"
        className="flex flex-col gap-5 items-center md:items-start text-center md:text-start"
      >
        <h1 className="text-2xl md:text-4xl font-semibold text-black-80 leading-loose tracking-wide">
          We are a team of young, talented & goal driven individuals
        </h1>

        <p className="text-black-80 font-normal text-sm md:text-base md:max-w-xl">
          We are set out to give you the best experience, provide solutions that
          gives your business speedy growth.
        </p>
      </div>

      <Image
        data-aos="fade-left"
        src={services_hero_image}
        alt="Tekbayt services hero image"
        width={800}
        height={800}
        quality={100}
        className="object-cover"
      />
    </section>
  );
};

export default ServicesHero;
