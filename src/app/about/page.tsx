import Header from "@/components/header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-3xl py-10">OUR MISSION</h1>
        <p className="max-w-3xl mx-auto text-center leading-7 font-Cardo">
          Sasha and Farris bonded over their love for creating beautiful
          experiences for their friends, family, and community. As Rosewood
          Studio continues to grow, we want to share this passion with our
          clients and community. Whether your event is big or small, we want to
          ensure that our floral designs and decor enhance your moment. We are
          pairing with locally owned artists to help build this vision and
          beautify the Morningside community. Additionally, we want to give back
          by partnering with local charities and schools to fund charitable
          endeavors and provide learning experiences to youth. Come join us on
          this new adventure as we strive to bring beauty to your world.
        </p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <h2 className="text-3xl py-10">OUR LEADERS</h2>
        <div className="grid grid-cols-2 gap-x-20">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="https://rosewoodstudio.wpenginepowered.com/wp-content/uploads/2024/03/sasha-scaled.jpeg"
              alt="Sasha Fierro"
              width={200}
              height={200}
              className="rounded-full h-[250px] w-[250px] object-cover pb-3 object-top"
            />
            <h2 className="text-center font-Cardo">Sasha Fierro</h2>
            <p className="text-center pb-10 font-Cardo">
              Sasha Fierro Founder + Lead Designer
              <br />
              Sasha@RosewoodStudioATL.com Phone?
            </p>
            {/* <p>
              The most beautiful flowers can only bloom from soil that has been
              fertilized with all the stages of life. Rosewood Studio is that
              flower for Sasha Fierro. Sasha began modeling at a young age, but
              quickly fell in love with the design and behind the scenes
              elements. She started her journey managing luxury salons before
              working for a fashion consulting company and then interned for
              Eddie Collins Design. Growing up in Utah, she always dreamed of
              having a neighborhood flower shop. When she moved to Atlanta that
              vision started to blossom in 2020 when she started 27 Florista to
              help provide for her and her daughter. Sasha was able to learn
              from some of the best floral and event designers in Georgia. A
              cancer diagnosis continued to challenge Sasha, but she persevered
              and continued to grow this dream as she moved into a space at
              Casseroles thanks to an introduction to Betsy McKay by one of her
              dear friends. The time has come for Sasha’s garden to expand as we
              launch Rosewood Studio ATL.
            </p> */}
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://rosewoodstudio.wpenginepowered.com/wp-content/uploads/2024/03/farris-scaled.jpeg"
              alt="Sasha Fierro"
              width={200}
              height={200}
              className="rounded-full h-[250px] w-[250px] object-cover object-center pb-3"
            />
            <h2 className="text-center font-Cardo">Farris France</h2>
            <p className="text-center pb-10 font-Cardo">
              Farris France Managing Partner
              <br />
              Farris@RosewoodStudioATL.com Phone?
            </p>
            {/* <p>
              Farris came to Rosewood Studio with a unique background and set of
              work experiences. Farris started work at thirteen, heavily
              influenced by her step-father who grew up during the Great
              Depression. Primarily, she has spent fourteen years in public
              education as a high school librarian and literature teacher.
              Additionally, she has experience as a chef, yoga instructor, and
              as a restaurant franchisee. Farris brings a multifaceted
              background to Rosewood and has used this to build our brand and
              pursue our mission to give back to our community.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
