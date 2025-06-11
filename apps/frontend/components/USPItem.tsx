interface USPItemProps {
  usp: {
    text: string;
  };
}

const USPItem = ({usp}: USPItemProps) => {
  const formattedText = usp.text;
  return (
    <div>
      <div className="text-primary-mid-pink">√</div>
      <p dangerouslySetInnerHTML={{__html: formattedText}} />
    </div>
  );
};

export default USPItem;
