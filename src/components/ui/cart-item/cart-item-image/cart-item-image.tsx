interface CartItemImageProps {
  image?: string;
  name: string;
}
export const CartItemImage = ({ image = "", name }: CartItemImageProps) => {
  return (
    <img
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      src={image}
      alt={name}
      loading="lazy"
      width="100"
      height="96"
    />
  );
};
