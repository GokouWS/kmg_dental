interface ContainerSocialsProps {
  socials: {
    icon: React.ReactNode;
    url: string;
  }[];
}

const ContainerSocials = ({socials}: ContainerSocialsProps) => {
  return (
    <div className="flex justify-center items-start h-full pt-[60px]">
      {socials.map((social, index) => (
        <a key={index} href={social.url} className="h-12 w-12 py-2.5">
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default ContainerSocials;
