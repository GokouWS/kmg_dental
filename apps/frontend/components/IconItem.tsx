import Image from "next/image";

interface IconItemProps {
  icon?: string;
  text: string;
}

const IconItem = ({icon, text}: IconItemProps) => {
  return (
    <div className="flex items-center align-middle gap-2.5">
      {icon && <Image src={icon} height={22} width={22} alt="" />}
      <div className="border border-primary-mid-pink border-solid h-5 w-px" />
      <p>{text}</p>
    </div>
  );
};

export default IconItem;
