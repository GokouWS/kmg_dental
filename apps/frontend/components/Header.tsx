import {HomepageAcfData} from "@/types/wordpress";
import IconItem from "./IconItem";
import ButtonCTA from "./ButtonCTA";
import Image from "next/image";
import ContainerSection from "./ContainerSection";

interface HeaderProps {
  data: HomepageAcfData;
}

export default function Header({data}: HeaderProps) {
  return (
    <header className="bg-primary-dark-grey w-full py-3 px-section-x h-[9.7vw] md:max-h-[140px] md:max-w-section-max flex justify-center">
      <ContainerSection>
        <div className="relative flex justify-start h-full max-h-[73px] w-full max-w-[413px]">
          <Image
            className="object-contain w-full max-w-[150px] h-full"
            src={data.header_image_left.url}
            fill
            alt={data.header_logo.alt}
          />
        </div>
        <div className="relative h-full w-full max-w-[413px]">
          <Image
            className="object-contain"
            src={data.header_logo.url}
            fill
            alt={data.header_logo.alt}
          />
        </div>
        <div className="flex">
          <div className="inline-block">
            <ButtonCTA text={data.cta_button_one_text} />
          </div>
          <div className="space-y-[9px]">
            <IconItem icon={data.header_icon_phone.url} text={data.phone_number} />
            <IconItem icon={data.header_icon_email.url} text={data.email_address} />
          </div>
        </div>
      </ContainerSection>
    </header>
  );
}
