// Providers.js
"use client";

import store from "@/lib/store";
import { Provider } from "react-redux";

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
