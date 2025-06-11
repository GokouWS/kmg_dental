import {HomepageAcfData} from "@/types/wordpress";
import IconItem from "./IconItem";

interface HeaderProps {
  data: HomepageAcfData;
}

export default function Header({data}: HeaderProps) {
  return (
    <header className="bg-primary-dark-grey w-full flex justify-between">
      <div>Logo 1</div>
      <div>Logo 2</div>
      <div className="flex">
        <button>button</button>
        <div>
          <IconItem text={data.phone_number} />
          <IconItem text={data.email_address} />
        </div>
      </div>
    </header>
  );
}
