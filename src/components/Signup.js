


import React from 'react';
import { NavLink, json } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
  const data = { name: '', email: '', password: '' };
  const [inputData, setInputData] = useState(data);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <>
      <div className="login">
        <div className="container">
          <div className="row login-box">
            <div className="col-lg-6 col-md-12 bg-img">
              <div className="info">
                <div className="info-text">
                  <div className="waivy">
                    <span>W</span>
                    <span>e</span>
                    <span>l</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>e</span>
                    <span style={{ color: '#ff0000' }}>t</span>
                    <span style={{ color: '#ff0000' }}>o</span>
                    <span>l</span>
                    <span>o</span>
                    <span>g</span>
                    <span>y</span>
                  </div>
                  <p className="waivy-info">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when
                  </p>
                  <div className="social-button">
                    <a href="/" className="social-btn social-btn-facebook">
                      <i className="fa-brands fa-facebook" />
                    </a>
                    <a href="/" className="social-btn social-btn-twitter">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="/" className="social-btn social-btn-google">
                      <i className="fa-brands fa-google"></i>
                    </a>
                    <a href="/" className="social-btn social-btn-linkedin">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 form-info" style={{ padding: '80px 90px' }}>
              <div className="form-section">
                <div className="logo">
                  <a href="/">
                    <img src=".\form-images\logo-2.png" alt="" />
                  </a>
                </div>
                <h3> Create An Account</h3>
                {/* / form start  */}
                <div className="login-inner-form">
          <pre style={{}}>{JSON.stringify(inputData)}</pre>

                  <form action="#" onSubmit={handleSubmit}>
                    <div className="form-group form-box">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="form-control"
                        value={inputData.name}
                        onChange={handleData}
                        name="name"
                        required
                      />
                      <p id='errorMessage'></p>
                      <i className="fa-regular fa-user icon-input"></i>
                    </div>
                    <div className="form-group form-box">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-control"
                        value={inputData.email}
                        onChange={handleData}
                        name="email"
                        required
                      />
                      <p id='errorMessage'></p>
                      <i className="fa-regular fa-envelope icon-input"></i>
                    </div>
                    <div className="form-group form-box">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        value={inputData.password}
                        onChange={handleData}
                        name="password"
                        required
                      />
                      <p id='errorMessage'></p>
                      <i className="fa-solid fa-lock icon-input"></i>
                    </div>
                    <div className="check-box form-group form-box">
                      <input
                        type="checkbox"
                        id="remeber-me"
                        value={inputData.rememberMe}
                        onChange={handleData}
                        required
                      />
                      <label className="form-check-label" htmlFor="remeber-me">
                        I agree to all <a href="/">terms and services</a>
                      </label>
                    </div>
                    <div className="form-group form-box">
                      <button type="submit" className="btn btn-register">
                        <NavLink to="/">Register</NavLink>
                      </button>
                    </div>
                    <p id="text">
                      Already a member ?
                      <NavLink to="/Login"> Login here </NavLink>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// export default function Signup() {
//   const initialData = { name: '', email: '', password: '' };
//   const [inputData, setInputData] = useState(initialData);
//   const [errors, setErrors] = useState({});

//   function handleData(e) {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     // Perform form validation
//     const newErrors = {};
//     if (!inputData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
//     if (!inputData.email.trim()) {
//       newErrors.email = 'Email is required';
//     }
//     if (!inputData.password.trim()) {
//       newErrors.password = 'Password is required';
//     }

//     // If there are errors, update the state and return
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // If no errors, continue with form submission logic
//     // ...

//     // Reset form and errors after successful submission (if needed)
//     setInputData(initialData);
//     setErrors({});
//   }

//   return (
//     <>
//       <div className="login">
//         <div className="container">
//           <div className="row login-box">
//             <div className="col-lg-6 col-md-12 bg-img">
//               <div className="info">
//                 <div className="info-text">
//                   <div className="waivy">
//                     <span>W</span>
//                     <span>e</span>
//                     <span>l</span>
//                     <span>c</span>
//                     <span>o</span>
//                     <span>m</span>
//                     <span>e</span>
//                     <span style={{ color: '#ff0000' }}>t</span>
//                     <span style={{ color: '#ff0000' }}>o</span>
//                     <span>l</span>
//                     <span>o</span>
//                     <span>g</span>
//                     <span>y</span>
//                   </div>
//                   <p className="waivy-info">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                     industry's standard dummy text ever since the 1500s, when
//                   </p>
//                   <div className="social-button">
//                     <a href="/" className="social-btn social-btn-facebook">
//                       <i className="fa-brands fa-facebook" />
//                     </a>
//                     <a href="/" className="social-btn social-btn-twitter">
//                       <i className="fa-brands fa-twitter"></i>
//                     </a>
//                     <a href="/" className="social-btn social-btn-google">
//                       <i className="fa-brands fa-google"></i>
//                     </a>
//                     <a href="/" className="social-btn social-btn-linkedin">
//                       <i class="fa-brands fa-linkedin"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-12 form-info" style={{ padding: '80px 90px' }}>
//               <div className="form-section">
//                 <div className="logo">
//                   <a href="/">
//                     <img src=".\form-images\logo-2.png" alt="" />
//                   </a>
//                 </div>
//                 <h3> Create An Account</h3>
//                 <div className="login-inner-form">
//                   <form onSubmit={handleSubmit}>
//                     <div className="form-group form-box">
//                       <input
//                         type="text"
//                         placeholder="Full Name"
//                         className="form-control"
//                         value={inputData.name}
//                         onChange={handleData}
//                         name="name"
//                         required
//                       />
//                       <p id="errorMessage">{errors.name}</p>
//                       <i className="fa-regular fa-user icon-input"></i>
//                     </div>
//                     <div className="form-group form-box">
//                       <input
//                         type="email"
//                         placeholder="Email Address"
//                         className="form-control"
//                         value={inputData.email}
//                         onChange={handleData}
//                         name="email"
//                         required
//                       />
//                       <p id="errorMessage">{errors.email}</p>
//                       <i className="fa-regular fa-envelope icon-input"></i>
//                     </div>
//                     <div className="form-group form-box">
//                       <input
//                         type="password"
//                         placeholder="Password"
//                         className="form-control"
//                         value={inputData.password}
//                         onChange={handleData}
//                         name="password"
//                         required
//                       />
//                       <p id="errorMessage">{errors.password}</p>
//                       <i className="fa-solid fa-lock icon-input"></i>
//                     </div>
//                     <div className="check-box form-group form-box">
//                       <input
//                         type="checkbox"
//                         id="remeber-me"
//                         value={inputData.rememberMe}
//                         onChange={handleData}
//                         required
//                       />
//                       <label className="form-check-label" htmlFor="remeber-me">
//                         I agree to all <a href="/">terms and services</a>
//                       </label>
//                     </div>
//                     <div className="form-group form-box">
//                       <button type="submit" className="btn btn-register">
//                         <NavLink to="/">Register</NavLink>
//                       </button>
//                     </div>
//                     <p id="text">
//                       Already a member ?
//                       <NavLink to="/Login"> Login here </NavLink>
//                     </p>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// export default function Signup() {
//   const initialData = { name: '', email: '', password: '' };
//   const [inputData, setInputData] = useState(initialData);
//   const [errors, setErrors] = useState({});

//   function handleData(e) {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//     // Clear the corresponding error when user starts typing
//     setErrors({ ...errors, [e.target.name]: '' });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     // Perform form validation
//     const newErrors = {};
//     if (!inputData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
//     if (!inputData.email.trim()) {
//       newErrors.email = 'Email is required';
//     }
//     if (!inputData.password.trim()) {
//       newErrors.password = 'Password is required';
//     }

//     // If there are errors, update the state and return
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // If no errors, continue with form submission logic
//     // ...

//     // Reset form and errors after successful submission (if needed)
//     setInputData(initialData);
//     setErrors({});
//   }

//   return (
//     <>
//       <div className="login">
//         <div className="container">
//           <div className="row login-box">
//             <div className="col-lg-6 col-md-12 bg-img">
//               <div className="info">
//                 <div className="info-text">
//                   <div className="waivy">
//                     <span>W</span>
//                     <span>e</span>
//                     <span>l</span>
//                     <span>c</span>
//                     <span>o</span>
//                     <span>m</span>
//                     <span>e</span>
//                     <span style={{ color: '#ff0000' }}>t</span>
//                     <span style={{ color: '#ff0000' }}>o</span>
//                     <span>l</span>
//                     <span>o</span>
//                     <span>g</span>
//                     <span>y</span>
//                   </div>
//                   <p className="waivy-info">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                     industry's standard dummy text ever since the 1500s, when
//                   </p>
//                   <div className="social-button">
//                     <a href="/" className="social-btn social-btn-facebook">
//                       <i className="fa-brands fa-facebook" />
//                     </a>
//                     <a href="/" className="social-btn social-btn-twitter">
//                       <i className="fa-brands fa-twitter"></i>
//                     </a>
//                     <a href="/" className="social-btn social-btn-google">
//                       <i className="fa-brands fa-google"></i>
//                     </a>
//                     <a href="/" className="social-btn social-btn-linkedin">
//                       <i class="fa-brands fa-linkedin"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-12 form-info" style={{ padding: '80px 90px' }}>
//               <div className="form-section">
//                 <div className="logo">
//                   <a href="/">
//                     <img src=".\form-images\logo-2.png" alt="" />
//                   </a>
//                 </div>
//                 <h3> Create An Account</h3>
//                 <div className="login-inner-form">
//                   <form onSubmit={handleSubmit}>
//                     <div className="form-group form-box">
//                       <input
//                         type="text"
//                         placeholder="Full Name"
//                         className="form-control"
//                         value={inputData.name}
//                         onChange={handleData}
//                         name="name"
//                         required
//                       />
//                       <p id="errorMessage">{errors.name}</p>
//                       <i className="fa-regular fa-user icon-input"></i>
//                     </div>
//                     <div className="form-group form-box">
//                       <input
//                         type="email"
//                         placeholder="Email Address"
//                         className="form-control"
//                         value={inputData.email}
//                         onChange={handleData}
//                         name="email"
//                         required
//                       />
//                       <p id="errorMessage">{errors.email}</p>
//                       <i className="fa-regular fa-envelope icon-input"></i>
//                     </div>
//                     <div className="form-group form-box">
//                       <input
//                         type="password"
//                         placeholder="Password"
//                         className="form-control"
//                         value={inputData.password}
//                         onChange={handleData}
//                         name="password"
//                         required
//                       />
//                       <p id="errorMessage">{errors.password}</p>
//                       <i className="fa-solid fa-lock icon-input"></i>
//                     </div>
//                     <div className="check-box form-group form-box">
//                       <input
//                         type="checkbox"
//                         id="remeber-me"
//                         value={inputData.rememberMe}
//                         onChange={handleData}
//                         required
//                       />
//                       <label className="form-check-label" htmlFor="remeber-me">
//                         I agree to all <a href="/">terms and services</a>
//                       </label>
//                     </div>
//                     <div className="form-group form-box">
//                       <button type="submit" className="btn btn-register">
//                         <NavLink to="/">Register</NavLink>
//                       </button>
//                     </div>
//                     <p id="text">
//                       Already a member ?
//                       <NavLink to="/Login"> Login here </NavLink>
//                     </p>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
