interface FromBoxProps {
  textTop: string;
  textBottom: string;
}

const FromBox = ({textTop, textBottom}: FromBoxProps) => {
  return (
    <div className="bg-primary-dark-grey rounded-[110px] max-h-[356px] max-w-[110px] h-[24.7vw] w-[7.6vw] flex flex-col text-center items-center justify-center md:gap-5 z-30 text-white">
      <p>{textTop}</p>
      <div className="max-h-[112px] h-full w-px border border-solid border-primary-mid-pink" />
      <p>{textBottom}</p>
    </div>
  );
};

export default FromBox;
