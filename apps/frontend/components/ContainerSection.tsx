interface ContainerSectionProps {
  children: React.ReactNode;
}

const ContainerSection = ({children}: ContainerSectionProps) => {
  return (
    <div className="flex items-center justify-between md:w-container @container md:max-w-[1240px]">
      {children}
    </div>
  );
};

export default ContainerSection;
