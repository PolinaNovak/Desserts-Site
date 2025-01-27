export const CartItemPrice = ({ children }: { children: number | string }) => {
  return <span>{`$${children}`}</span>;
};
