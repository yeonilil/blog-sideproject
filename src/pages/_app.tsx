import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
        <ToastContainer autoClose={2000} />
      </AnimatePresence>
    </>
  );
}
