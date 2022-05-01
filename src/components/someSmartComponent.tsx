import React, { FC, ReactNode } from "react";
import { someCalculations } from "../utils/synthetic";

export const SomeSmartComponent: FC<{ children?: ReactNode }> = ({ children }) => {
  someCalculations()

  return <>{children}</>
}
