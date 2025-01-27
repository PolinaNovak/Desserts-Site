import { ReactNode } from "react";

export const CartItemDescription = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "10px",
        color: "gray",
      }}
    >
      {children}
    </div>
  );
};
