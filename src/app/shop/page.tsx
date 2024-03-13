import Header from "@/components/header";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function ShopPage() {
  return (
    <div className="bg-[#A07A56]">
      <Header />
      <h1 className="text-3xl py-10 text-white text-center">Shop</h1>
      <h2 className="text-2xl font-bold text-green-800 pb-2 uppercase text-center">
        Online Shopping Coming Soon
      </h2>
      <p className="text-zinc-50 text-center max-w-3xl mx-auto pt-2 font-Cardo">
        For now, come see us in person. We are located inside of Casseroles,
        1393 NORTH HIGHLAND AVENUE NORTHEAST, ATLANTA, GA, 30306, UNITED STATES
      </p>
      <h2 className="text-2xl font-bold text-green-800 pt-10 uppercase text-center">
        Our Brand Partners
      </h2>
      <p className="text-zinc-50 text-center max-w-3xl mx-auto pt-2 font-Cardo">
        We are committed to supporting local businesses and artists, especially
        women. Please join us in supporting these amazing creatives. If you are
        interested in partnering with us, please reach out to
        Owner@RosewoodStudioATL.com
      </p>
      <div className="flex flex-wrap justify-evenly max-w-3xl mx-auto py-10">
        <div className="flex flex-col">
          <Image
            src="https://rosewoodstudio.wpenginepowered.com/wp-content/uploads/2024/03/photo3-scaled.jpeg"
            width={200}
            height={200}
            alt="alt"
          />
          <h2 className="py-4 text-zinc-50 text-xl text-center">
            SOONSUN HOMEGOODS
          </h2>
          <InstagramLogoIcon className="flex justify-center items-center w-10 h-10 " />
        </div>
        <div>
          <Image
            src="https://rosewoodstudio.wpenginepowered.com/wp-content/uploads/2024/03/photo3-scaled.jpeg"
            width={200}
            height={200}
            alt="alt"
          />
          <h2 className="pt-4 text-zinc-50 text-xl text-center py-4">
            MARIA RUMERY DESIGN
          </h2>
          <InstagramLogoIcon className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
}
