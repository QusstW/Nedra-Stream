import React from "react";

import { AutoContext } from "../provider/AutoProvider";

export default function useAutoHook() {
  return React.useContext(AutoContext);
}
