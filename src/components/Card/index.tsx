const classes = {
  card: "h-64 bg-slate-500 overflow-hidden rounded-md",
  image: "h-full w-full object-cover object-center"
};

const Card = (props: { src?: string; alt?: string }) => {
  return (
    <figure className={classes.card}>
      {Boolean(props.src) && Boolean(props.alt) && (
        <img
          src={props.src}
          alt={props.alt}
          className={classes.image}
        />
      )}
    </figure>
  );
};
export default Card;
