import { ToastContainer, toast } from "react-toastify";
import { subscribeKey } from "valtio/utils";
import { store } from "@firebase-api";

export default function Toast() {
  subscribeKey(store, "notifications", (v) => {
    console.log("state.count has changed to", v);
    toast(v.body);
  });

  return <ToastContainer />;
}
