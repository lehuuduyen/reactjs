import React, { Component } from 'react';    
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';    
import './App.css';  
class Toastr {
    success(message) {
        console.log(message);
        toast.success(message)
    }
    info(message) {
        toast.info(message)
    }
    error(message) {
        toast.error(message)
    }
    warning(message) {
        toast.warning(message)
    }

}  
  
export default Toastr  