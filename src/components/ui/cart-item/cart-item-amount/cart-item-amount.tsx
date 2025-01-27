export const CartItemAmount = ({ children }: { children: string | number }) => {
  return (
    <span
      style={{
        color: "var(--red-color)",
        fontWeight: "700",
      }}
    >{`${children}x`}</span>
  );
};
