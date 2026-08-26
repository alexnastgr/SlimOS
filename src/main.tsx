import "./index.css";
import { createRoot } from "react-dom/client";
import SlimOS from "@/SlimOS.tsx";
import { Provider } from "react-redux";
import { store } from "@/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <SlimOS />
  </Provider>,
);
