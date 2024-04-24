import Image from 'next/image';

export const About = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-10 px-4 w-full  left-0 top-0 flex flex-row gap-40 ">
      <div>
        <h1 className="text-4xl md:text-7xl font-bold text-white">About Us</h1>
        <p className="max-w-2xl text-lg md:text-xl mt-8 text-neutral-200">
          Tech Udbhav 2024, the flagship technical fest presented by the IETE
          Students Forum, is on the horizon! Get ready to immerse yourself in a
          world where creativity knows no bounds and innovation takes center
          stage. Tech Udbhav is more than just a fest; it is an experience that
          will leave you inspired and awestruck. Stay tuned as we reveal more
          about our lineup of events, attractions and surprises in store.
        </p>
      </div>

      <div>
        <Image
          src="/assets/hero-bannerr.jpeg"
          alt=""
          width={300}
          height={700}
        />
      </div>
    </div>
  );
};
