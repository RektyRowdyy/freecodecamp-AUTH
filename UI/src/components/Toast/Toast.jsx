import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
export default function Toast() {
    return (
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition:Bounce
         />
    )
}