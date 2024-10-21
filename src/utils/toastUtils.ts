import toast from "react-hot-toast";
import { ToastFunctionType } from "../types";

const showSuccessToast: ToastFunctionType = (text: string) => {
  toast.success(text, { duration: 1000, icon: "ⓘ" });
};

const showFailureToast: ToastFunctionType = (text) => {
  toast.error(text, { duration: 1000 });
};

export { showSuccessToast, showFailureToast };
