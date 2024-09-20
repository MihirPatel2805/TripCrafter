// import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom';

// const PaymentPage = () => {
//   const [paymentMode, setPaymentMode] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate()

//   const handleSubmitUPI = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//         setLoading(false); 
//         navigate('/thankyou');
//     }, 2000);
//   };

//   const handleSubmitCard = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//         setLoading(false); 
//         navigate('/thankyou');
//     }, 2000);
//   };

//   const handleSubmitPayPal = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//         setLoading(false); 
//         navigate('/thankyou');
//     }, 2000);
//   };

//   const handleSubmitWallet = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//         setLoading(false); 
//         navigate('/thankyou');
//     }, 2000);
//   };

//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-6 col-md-8 col-sm-12">
//           <div className="card shadow">
//             <div className="card-body">
//               <h2 className="text-center mb-4">Payment</h2>

//               <div className="mb-4 text-center">
//                 <h5>Select Payment Mode</h5>
//                 <div className="btn-group d-flex" role="group">
//                   <button
//                     type="button"
//                     className={`btn btn-outline-primary ${paymentMode === 'upi' ? 'active' : ''}`}
//                     onClick={() => setPaymentMode('upi')}
//                   >
//                     UPI
//                   </button>
//                   <button
//                     type="button"
//                     className={`btn btn-outline-primary ${paymentMode === 'card' ? 'active' : ''}`}
//                     onClick={() => setPaymentMode('card')}
//                   >
//                     Credit/Debit Card
//                   </button>
//                   <button
//                     type="button"
//                     className={`btn btn-outline-primary ${paymentMode === 'paypal' ? 'active' : ''}`}
//                     onClick={() => setPaymentMode('paypal')}
//                   >
//                     PayPal
//                   </button>
//                   <button
//                     type="button"
//                     className={`btn btn-outline-primary ${paymentMode === 'wallet' ? 'active' : ''}`}
//                     onClick={() => setPaymentMode('wallet')}
//                   >
//                     Wallet
//                   </button>
//                 </div>
//               </div>

//               <div>
//                 {paymentMode === 'upi' && (
//                   <form onSubmit={handleSubmitUPI}>
//                     <div className="mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter UPI ID"
//                         required
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="btn btn-primary w-100"
//                       disabled={loading}
//                     >
//                       {loading ? 'Processing...' : 'Pay via UPI'}
//                     </button>
//                   </form>
//                 )}

//                 {paymentMode === 'card' && (
//                   <form onSubmit={handleSubmitCard}>
//                     <div className="mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Card Number"
//                         required
//                       />
//                     </div>
//                     <div className="mb-3 d-flex gap-2">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Expiry Date (MM/YY)"
//                         required
//                       />
//                       <input
//                         type="password"
//                         className="form-control"
//                         placeholder="CVV"
//                         required
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="btn btn-primary w-100"
//                       disabled={loading}
//                     >
//                       {loading ? 'Processing...' : 'Pay via Card'}
//                     </button>
//                   </form>
//                 )}

//                 {paymentMode === 'paypal' && (
//                   <form onSubmit={handleSubmitPayPal}>
//                     <div className="mb-3">
//                       <input
//                         type="email"
//                         className="form-control"
//                         placeholder="Enter PayPal Email"
//                         required
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="btn btn-primary w-100"
//                       disabled={loading}
//                     >
//                       {loading ? 'Processing...' : 'Pay via PayPal'}
//                     </button>
//                   </form>
//                 )}

//                 {paymentMode === 'wallet' && (
//                   <form onSubmit={handleSubmitWallet}>
//                     <div className="mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter Wallet ID"
//                         required
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="btn btn-primary w-100"
//                       disabled={loading}
//                     >
//                       {loading ? 'Processing...' : 'Pay via Wallet'}
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [paymentMode, setPaymentMode] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateUPI = (upiID) => {
    if (!upiID.includes('@')) {
      return 'UPI ID must contain "@"';
    }
    return '';
  };

  const validateCard = (cardNumber, expiryDate, cvv) => {
    let error = {};
    if (!/^\d{16}$/.test(cardNumber)) {
      error.cardNumber = 'Card number must be 16 digits';
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      error.expiryDate = 'Expiry date must be in MM/YY format';
    }
    if (!/^\d{3}$/.test(cvv)) {
      error.cvv = 'CVV must be 3 digits';
    }
    return error;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format';
    }
    return '';
  };

  const handleSubmitUPI = (e) => {
    e.preventDefault();
    const upiID = e.target.upi.value;
    const upiError = validateUPI(upiID);

    if (upiError) {
      setErrors({ upi: upiError });
    } else {
      setLoading(true);
      setErrors({});
      setTimeout(() => {
        setLoading(false);
        navigate('/thankyou');
      }, 2000);
    }
  };

  const handleSubmitCard = (e) => {
    e.preventDefault();
    const cardNumber = e.target.cardNumber.value;
    const expiryDate = e.target.expiryDate.value;
    const cvv = e.target.cvv.value;
    const cardErrors = validateCard(cardNumber, expiryDate, cvv);

    if (Object.keys(cardErrors).length > 0) {
      setErrors(cardErrors);
    } else {
      setLoading(true);
      setErrors({});
      setTimeout(() => {
        setLoading(false);
        navigate('/thankyou');
      }, 2000);
    }
  };

  const handleSubmitPayPal = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const emailError = validateEmail(email);

    if (emailError) {
      setErrors({ email: emailError });
    } else {
      setLoading(true);
      setErrors({});
      setTimeout(() => {
        setLoading(false);
        navigate('/thankyou');
      }, 2000);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Payment</h2>

              <div className="mb-4 text-center">
                <h5>Select Payment Mode</h5>
                <div className="btn-group d-flex" role="group">
                  <button
                    type="button"
                    className={`btn btn-outline-primary ${paymentMode === 'upi' ? 'active' : ''}`}
                    onClick={() => setPaymentMode('upi')}
                  >
                    UPI
                  </button>
                  <button
                    type="button"
                    className={`btn btn-outline-primary ${paymentMode === 'card' ? 'active' : ''}`}
                    onClick={() => setPaymentMode('card')}
                  >
                    Credit/Debit Card
                  </button>
                  <button
                    type="button"
                    className={`btn btn-outline-primary ${paymentMode === 'paypal' ? 'active' : ''}`}
                    onClick={() => setPaymentMode('paypal')}
                  >
                    PayPal
                  </button>
                </div>
              </div>

              <div>
                {paymentMode === 'upi' && (
                  <form onSubmit={handleSubmitUPI}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="upi"
                        placeholder="Enter UPI ID"
                        required
                      />
                      {errors.upi && <small className="text-danger">{errors.upi}</small>}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : 'Pay via UPI'}
                    </button>
                  </form>
                )}

                {paymentMode === 'card' && (
                  <form onSubmit={handleSubmitCard}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="cardNumber"
                        placeholder="Card Number"
                        required
                      />
                      {errors.cardNumber && <small className="text-danger">{errors.cardNumber}</small>}
                    </div>
                    <div className="mb-3 d-flex gap-2">
                      <input
                        type="text"
                        className="form-control"
                        name="expiryDate"
                        placeholder="Expiry Date (MM/YY)"
                        required
                      />
                      <input
                        type="password"
                        className="form-control"
                        name="cvv"
                        placeholder="CVV"
                        required
                      />
                      {errors.expiryDate && <small className="text-danger">{errors.expiryDate}</small>}
                      {errors.cvv && <small className="text-danger">{errors.cvv}</small>}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : 'Pay via Card'}
                    </button>
                  </form>
                )}

                {paymentMode === 'paypal' && (
                  <form onSubmit={handleSubmitPayPal}>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter PayPal Email"
                        required
                      />
                      {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : 'Pay via PayPal'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
