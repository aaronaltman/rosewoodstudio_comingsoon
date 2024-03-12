import Header from "@/components/header";
import Image from "next/image";

export default function SubscribePage() {
  return (
    <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
      <Header />
      <h1 className="text-center py-10 text-3xl">Subscribe</h1>
      <p className="text-center leading-7 font-Cardo pb-10">
        We would love to help you make your home, office or business space a
        <br />
        little more beautiful. We offer weekly, biweekly, and monthly
        subscriptions in a variety of sizes to fit all budgets.
      </p>
      <div className="flex gap-10 px-4 text-[#AD5F43]">
        <Image
          src="https://rosewoodstudio.wpenginepowered.com/wp-content/uploads/2024/03/photo3-scaled.jpeg"
          alt="rosewoodstudio"
          width={200}
          height={200}
          className="flex justify-center items-center rounded-small shadow-sm h-[250px] w-[250px] object-cover pb-3"
        />
        <div className="">
          <h2 className="flex items-center justify-center">Monthly Large</h2>
          <p className="justify-center items-center font-Cardo">
            $120 Medium
            <br />
            $90 Small
            <br />
            $70 Bouquet
          </p>
          <p className="font-Cardo">
            Biweekly Large $220 Medium $160 Small $120 Bouquet $40
          </p>
          <p className="font-Cardo">
            Weekly Large $400 Medium $280 Small $200 Bouquet $60
          </p>
        </div>
        <Image
          src="https://rosewoodstudio.wpenginepowered.com/wp-content/uploads/2024/03/photo3-scaled.jpeg"
          alt="rosewoodstudio"
          width={200}
          height={200}
          className="rounded-sm shadow-sm h-[250px] w-[250px] object-cover pb-3"
        />
      </div>
    </div>
  );
}
