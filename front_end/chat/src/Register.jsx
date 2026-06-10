import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Style from './Register.module.css';
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';

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

  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handle_register = async (e) => {
    e.preventDefault();

    if (email === '' || password === '' || username === '') {
      alert('Please fill all the fields');
      return;
    }

    res.post('api/register', { email, password, username });
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

        <button className={Style.button} onClick={handle_register}>
          Get Started <FaArrowRight className={Style.buttonIcon} />
        </button>

        <div className={Style.log_text}>
          <h4>Already have an account?</h4>
          <h4 className={Style.log_button} onClick={() => navigate('/login')}>
            Log in
          </h4>
        </div>
      </motion.div>
    </>
  );
};

export default Register;