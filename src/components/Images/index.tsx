import Card from "../Card";
import { Basic } from "unsplash-js/dist/methods/photos/types";

const classes = {
  image: "my-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
  info: "font-semibold text-md text-center py-20",
};

const Images = ({
  images,
  error,
  loading,
}: {
  images: Basic[];
  error?: string;
  loading: boolean;
}) => {
  if (loading) {
    return (
      <ul className={classes.image}>
        {Array.from(Array(10).keys()).map((index) => (
          <li key={`${index}`}>
            <Card />
          </li>
        ))}
      </ul>
    );
  }

  if (error || images.length < 1)
    return <p className={classes.info}>{error || "No images found"}</p>;

  return (
    <ul className={classes.image}>
      {images.map((image) => (
        <li key={image.id}>
          <Card src={image.urls.regular} alt={image.alt_description || ""} />
        </li>
      ))}
    </ul>
  );
};

export default Images;
