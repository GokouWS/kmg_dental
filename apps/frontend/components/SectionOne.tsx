import {HomepageAcfData} from "@/types/wordpress";
import Image from "next/image";
import ButtonCTA from "./ButtonCTA";
import ContainerSection from "./ContainerSection";

interface SectionOneProps {
  data: HomepageAcfData;
}
export default function SectionOne({data}: SectionOneProps) {
  return (
    <section className="md:max-h-section-max h-section bg-white md:flex justify-center md:py-20 py-10 px-5 text-black">
      <ContainerSection>
        <div className="flex md:w-1/2 pr-20">
          <div className="flex flex-col justify-between md:gap-[30px]">
            <div className="flex items-center gap-2.5">
              <div className="max-w-[50px] w-full border border-solid border-primary-mid-pink" />
              <p className="">{data.section_one_author}</p>
            </div>
            <div className="ml-[60px] space-y-[30px]">
              <h2 className="text-4xl font-normal text-primary-dark-grey">
                {data.section_one_header}
              </h2>
              <p className="text-primary-mid-dark-grey leading-[24px] text-base">
                {data.section_one_paragraph_one}
              </p>
              <p className="text-primary-mid-dark-grey">
                {data.section_one_paragraph_two}
              </p>
              <div>
                <ButtonCTA text="BOOK A FREE CONSULTATION" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:h-full md:w-1/2 object-cover">
          <Image src={data.section_one_image.url} alt="" fill />
        </div>
      </ContainerSection>
    </section>
  );
}
