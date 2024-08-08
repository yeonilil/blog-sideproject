import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Component {...pageProps} />
    <ToastContainer autoClose={2000}/>
    </>
    
  )
  ;
}
