interface GoogleReviewProps {
  rating: string;
}

const GoogleReview = ({rating}: GoogleReviewProps) => {
  return (
    <div className="w-full bg-primary-mid-pink max-h-[134px] md:place-self-end h-[9.3vw] md:-ml-[2vw] z-20 text-right flex flex-col justify-center">
      <div></div>
      <p>
        RATED <span className="text-[44px]">{rating}</span> GOOGLE REVIEWS
      </p>
    </div>
  );
};

export default GoogleReview;
