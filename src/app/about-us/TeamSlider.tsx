import { our_team_slide_images } from "@/constants/our-team";
import Image from "next/image";

const TeamSlider = () => {
  return (
    <div className="w-full relative py-5">
      <div className="absolute left-0 top-5 bg-white rounded-b-full h-1/4 w-screen z-40" />
      <div className="relative overflow-x-scroll">
        <div
          className={`animate-marquee hover:cursor-pointer flex flex-nowrap items-center gap-5 justify-center`}
          style={{
            width: `${our_team_slide_images.length * (100 / 1)}%`,
            height: 'auto'
          }}
        >
          {our_team_slide_images.map((item, idx) => (
            <Image
              key={idx}
              src={item}
              alt={`slider image ${idx + 1}`}
              width={400}
              height={400}
              className="object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
      <div className="absolute left-0 bottom-5 bg-white rounded-t-full h-1/4 w-screen z-40" />
    </div>
  );
};

export default TeamSlider;
