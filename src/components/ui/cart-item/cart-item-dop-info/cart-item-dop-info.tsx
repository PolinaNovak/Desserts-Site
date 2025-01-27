import { ReactNode } from "react";

export const CartItemDopInfo = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        gap: "10px",
      }}
    >
      {children}
    </div>
  );
};
