import "./backgroundMovie.scss";

interface BackgroundMovieProps {
  srcBanner: string;
  srcBannerMobile: string;
}

export const BackgroundMovie = ({ srcBanner, srcBannerMobile }: BackgroundMovieProps) => {
  return (
     <picture>
      <source media="(max-width: 768px)" srcSet={srcBannerMobile} />
      <img
        className="bg-movie-root"
        src={srcBanner}
        alt="Banner filme"
      />
    </picture>
  );
};
