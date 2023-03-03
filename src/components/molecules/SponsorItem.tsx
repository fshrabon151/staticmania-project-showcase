import Heading2 from "@components/atoms/Heading2";
import Image from "next/image";

const SponsorItem = () => (
  <div
    style={{
      background: "linear-gradient(to bottom, #fff 70%, 30%, #14142B)",
    }}
    className="pt-16"
  >
    <div className="container bg-staticBlue py-20 space-y-14">
      <Heading2 className="text-center text-white">Our Sponsor</Heading2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <Image
          src="/assets/sponser-logo-1.png"
          className="mx-auto opacity-80"
          width={172}
          height={34}
          alt="sponser-logo-1"
        />
        <Image
          src="/assets/sponser-logo-2.png"
          className="mx-auto opacity-80"
          width={166}
          height={39}
          alt="sponser-logo-2"
        />
        <Image
          src="/assets/sponser-logo-3.png"
          className="mx-auto opacity-80"
          alt="sponser-logo-3"
          width={152}
          height={36}
        />
        <Image
          src="/assets/sponser-logo-4.png"
          className="mx-auto opacity-80"
          alt="sponser-logo-4"
          width={162}
          height={38}
        />
      </div>
    </div>
  </div>
);

export default SponsorItem;
