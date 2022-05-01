import React, { FC, ReactNode } from "react";
import { someCalculations } from "../utils/synthetic";

// imitation of smart component with some business logic
export const SomeSmartComponent: FC<{ children?: ReactNode }> = ({ children }) => {
  someCalculations()

  return <>{children}</>
}
