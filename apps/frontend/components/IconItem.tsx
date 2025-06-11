import {SVGElementType} from "react";

interface IconItemProps {
  icon?: SVGElementType;
  text: string;
}

const IconItem = ({icon, text}: IconItemProps) => {
  return (
    <div className="flex">
      {icon && <div>{icon}</div>}
      <div>seperator</div>
      <p>{text}</p>
    </div>
  );
};

export default IconItem;
