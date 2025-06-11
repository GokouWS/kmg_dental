interface ButtonCTAProps {
  text: string;
}

const ButtonCTA = ({text}: ButtonCTAProps) => {
  return (
    <button className="bg-linear-to-b from-pink-light to-pink-dark rounded-button py-3 px-5 text-white text-nowrap">
      {text}
    </button>
  );
};

export default ButtonCTA;
