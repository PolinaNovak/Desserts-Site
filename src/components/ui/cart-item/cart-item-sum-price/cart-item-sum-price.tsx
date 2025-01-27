export const CartItemSumPrice = ({
  children,
}: {
  children: string | number;
}) => {
  return <span>{`$${children}`}</span>;
};
