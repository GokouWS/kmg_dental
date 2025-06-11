import Image from "next/image";

interface IconBadgeProps {
  icon?: string;
  heading: string;
  description: string;
}

const IconBadge = ({icon, heading, description}: IconBadgeProps) => {
  return (
    <div className="flex items-center grow gap-4">
      {icon && <Image src={icon} height={50} width={50} alt="" />}
      <div>
        <h4 className="font-semibold">{heading}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default IconBadge;
