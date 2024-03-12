import Header from "@/components/header";
import Image from "next/image";

export default function SubscribePage() {
  return (
    <div className="flex flex-wrap flex-col items-center max-w-6xl mx-auto px-4">
      <Header />
      <h1 className="text-center py-10 text-2xl md:text-3xl lg:text-4xl">
        Subscribe
      </h1>
      <p className="text-center text-base md:text-lg leading-7 font-Cardo pb-10">
        We would love to help you make your home, office, or business space a
        little more beautiful. We offer weekly, biweekly, and monthly
        subscriptions in a variety of sizes to fit all budgets.
      </p>
      <div className="flex flex-wrap justify-around items-start w-full gap-4 md:gap-10 text-[#AD5F43]">
        <Image
          src="https://rosewoodstudio.wpenginepowered.com/wp-content/uploads/2024/03/photo3-scaled.jpeg"
          alt="Rosewood Studio Subscription Options"
          width={200}
          height={200}
          className="rounded-sm shadow-sm w-full md:w-[250px] h-auto object-cover"
        />
        <div className="flex flex-col space-y-4 w-full md:w-auto pb-10">
          <h2 className="text-center text-xl font-bold">Monthly</h2>
          <p className="font-Cardo text-center ">Large $120</p>
          <p className="font-Cardo text-center">Medium $90</p>
          <p className="font-Cardo text-center"> Bouquet $70 </p>
          <p className="font-Cardo text-center">Small $25 </p>

          <h2 className="text-center text-xl font-bold space-y-1 pt-4">
            Biweekly
          </h2>
          <p className="font-Cardo text-center">Large $220</p>
          <p className="font-Cardo text-center">Medium $160</p>
          <p className="font-Cardo text-center">Small $120</p>
          <p className="font-Cardo text-center">Bouquet $40</p>

          <h2 className=" text-center text-xl font-bold pt-4">Weekly Large</h2>
          <p className="font-Cardo text-center">Large $400</p>
          <p className="font-Cardo text-center"> Medium $280</p>
          <p className="font-Cardo text-center"> Small $200</p>
          <p className="font-Cardo text-center"> Bouquet $60</p>
        </div>
        <Image
          src="https://rosewoodstudio.wpenginepowered.com/wp-content/uploads/2024/03/photo3-scaled.jpeg"
          alt="rosewoodstudio"
          width={200}
          height={200}
          className="rounded-sm shadow-sm w-full md:w-[250px] h-auto object-cover"
        />
      </div>
    </div>
  );
}
