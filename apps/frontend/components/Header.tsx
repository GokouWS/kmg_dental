import IconItem from "./IconItem";

export default function Header() {
  return (
    <header className="bg-primary-dark-grey w-full flex justify-between">
      <div>Logo 1</div>
      <div>Logo 2</div>
      <div className="flex">
        <button>button</button>
        <div>
          <IconItem text="phone" />
          <IconItem text="email" />
        </div>
      </div>
    </header>
  );
}
