import { BadgePercent } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="bg-[#cebdb5] h-150 overflow-hidden flex items-center justify-between px-6 w-full">
        <div className="w-1/2 pl-20">
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-full px-3 py-1 text-xl">
            <div className="flex items-center justify-right gap-x-2">
              <div className="flex items-center justify-center">
                <BadgePercent fill="#cebdb5"  />
                <span className="font-semibold">50% OFF</span>
                Summer Super Sale
              </div>
            </div>
          </div>
          {/* Sale  */}

          {/* Title  */}
          <h1>
            Step into Style : Your
            <br />
            Ultimate Fashion Destination
          </h1>

          {/* Description  */}

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Accusamus dolorem doloribus est, molestias ea nemo cum repellendus
            optio laboriosam.
          </p>

          {/* button  */}
          <button>Show Now</button>
        </div>
        <img
          src="https://i.pinimg.com/736x/9c/28/1f/9c281f68587fde906165d7c07ed881ce.jpg"
          alt="img"
          className="object-cover -scale-x-100"
        />
      </section>
    </>
  );
};

export default Hero;
