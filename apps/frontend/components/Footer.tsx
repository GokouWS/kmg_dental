import {HomepageAcfData} from "@/types/wordpress";
import ContainerSection from "./ContainerSection";
import ContainerSocials from "./ContainerSocials";
import {FaTwitter, FaInstagram, FaFacebookF} from "react-icons/fa";
import ImageDisplayFooter from "./ImageDisplayFooter";

interface FooterProps {
  data: HomepageAcfData;
}

export default function Footer({data}: FooterProps) {
  const socials = [
    {url: data?.footer_social_one, icon: <FaTwitter className="h-full w-full" />},
    {url: data?.footer_social_two, icon: <FaInstagram className="h-full w-full" />},
    {url: data?.footer_social_three, icon: <FaFacebookF className="h-full w-full" />},
  ];

  const images = [
    data?.footer_image_one,
    data?.footer_image_two,
    data?.footer_image_three,
  ];

  const privacyPolicy = data?.footer_privacy_policy;

  return (
    <footer className="bg-primary-dark-grey w-full flex justify-center md:h-[21.6vh] md:max-h-[312px]">
      <ContainerSection>
        <div className="w-full">
          <ImageDisplayFooter images={images} />
          <p className="md:mt-[30px]">{data?.footer_copyright}</p>
          <p dangerouslySetInnerHTML={{__html: privacyPolicy}} />
        </div>
        <ContainerSocials socials={socials} />
      </ContainerSection>
    </footer>
  );
}
