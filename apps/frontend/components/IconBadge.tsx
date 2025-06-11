import {SVGElementType} from "react";

interface IconBadgeProps {
  icon?: SVGElementType;
  heading: string;
  description: string;
}

const IconBadge = ({icon, heading, description}: IconBadgeProps) => {
  return (
    <div>
      {icon && <div>{icon}</div>}
      <div>
        <h4>{heading}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default IconBadge;
