import type {HomepageAcfData} from "@/types/wordpress"; // Assuming you have this type
import IconBadge from "./IconBadge";
import ContainerSection from "./ContainerSection";
import ContainerUSP from "./ContainerUSP";
import FromBox from "./FromBox";
import GoogleReview from "./GoogleReview";

interface HeroProps {
  data: HomepageAcfData;
}

export default function SectionHero({data}: HeroProps) {
  const imageUrl = data.hero_background_image.url;

  return (
    <section
      className="relative md:max-h-section-max h-section md:bg-cover flex flex-col items-center" // Tailwind classes for positioning and size
      style={{backgroundImage: `url(${imageUrl})`}} // Inline style for the DYNAMIC URL
    >
      <div className="bg-overlay-dark w-full md:flex justify-center hidden md:max-h-[90px] h-[6vw]">
        <ContainerSection>
          <IconBadge
            icon={data.hero_badge_icon_left.url}
            heading={data.hero_badge_header_left}
            description={data.hero_badge_description_left}
          />
          <IconBadge
            icon={data.hero_badge_icon_middle.url}
            heading={data.hero_badge_header_middle}
            description={data.hero_badge_description_middle}
          />
          <IconBadge
            icon={data.hero_badge_icon_right.url}
            heading={data.hero_badge_header_right}
            description={data.hero_badge_description_right}
          />
        </ContainerSection>
      </div>
      <ContainerSection>
        <div className="w-full flex flex-col items-center">
          <h1 className="place-self-start text-[62px] w-1/2 leading-[66px]">
            {data.hero_headline}
          </h1>
          <div className="flex w-full relative text-primary-dark-grey">
            <ContainerUSP />
            <FromBox
              textTop={data.hero_from_box_text_top}
              textBottom={data.hero_from_box_text_bottom}
            />
            <GoogleReview rating={data.hero_google_review_rating} />
          </div>
        </div>
      </ContainerSection>
      <div className="flex items-center justify-center min-h-fit">
        {/* <h1 className="text-white text-4xl font-bold">{data.hero_headline}</h1> */}
      </div>
    </section>
  );
}
