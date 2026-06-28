import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Style from './Register.module.css';
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';


const pageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 1.1 },
};

const pageTransition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};

const Register = () => {
  const navigate = useNavigate();
  const vite_url = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handle_register = async (e) => {
    if (e) e.preventDefault();

    if (email === '' || password === '' || username === '') {
      alert('Please fill all the fields');
      return;
    }

    try {
      const response = await axios.post(`${vite_url}/api/auth/register`, { email, password, username });
      if (response.status === 201) {
        alert('Registration successful!');
        navigate('/Chat_page.jsx');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred.');
      console.log(error);
    }
  };

  return (
    <>
      <motion.div
        className={Style.container}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={Style.topGlowDecor}></div>
        <h1 className={Style.title}>Relay</h1>
        <h2>Create your relay account</h2>


        <form onSubmit={handle_register}>
          <div className={Style.inputWrapper}>
            <FaUser className={Style.icon} />
            <input type='text' placeholder='Username' className={Style.input} onChange={(e) => setusername(e.target.value)} />
          </div>

          <div className={Style.inputWrapper}>
            <FaEnvelope className={Style.icon} />
            <input type='email' placeholder='Email' className={Style.input} onChange={(e) => setemail(e.target.value)} />
          </div>

          <div className={Style.inputWrapper}>
            <FaLock className={Style.icon} />
            <input type='password' placeholder='Password' className={Style.input} onChange={(e) => setpassword(e.target.value)} />
          </div>

          <button type='submit' className={Style.button}>
            Get Started <FaArrowRight className={Style.buttonIcon} />
          </button>

          <div className={Style.log_text}>
            <h4>Already have an account?</h4>
            <h4 className={Style.log_button} onClick={() => navigate('/Log_in.jsx')}>
              Log in
            </h4>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default Register;