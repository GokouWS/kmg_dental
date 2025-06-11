import {AcfImage} from "@/types/wordpress";
import Image from "next/image";

interface ImageDisplayFooterProps {
  images: AcfImage[];
}

const ImageDisplayFooter = ({images}: ImageDisplayFooterProps) => {
  const imageLeft = images[0];
  const imageCenter = images[1];
  const imageRight = images[2];

  return (
    <div className="max-h-[106px] h-[7.3vw] flex items-center w-full">
      <div className="relative w-full max-w-[170px] mr-10 h-full object-cover">
        <Image src={imageLeft.url} fill alt={imageLeft.alt} />
      </div>
      <div className="border border-solid border-primary-mid-pink h-full w-px" />
      <div className="relative w-full max-w-[150px] mx-10 h-[68%] object-cover">
        <Image src={imageCenter.url} fill alt={imageCenter.alt} />
      </div>
      <div className="border border-solid border-primary-mid-pink h-full w-px" />
      <div className="relative w-full max-w-[222px] mx-10 h-full object-cover">
        <Image src={imageRight.url} fill alt={imageRight.alt} />
      </div>
    </div>
  );
};

export default ImageDisplayFooter;
