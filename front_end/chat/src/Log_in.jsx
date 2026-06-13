import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Style from './Log_in.module.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';

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

const Log_in = () => {
  // ✅ Moved inside the component
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

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
        <h1 className={Style.title}>Relay</h1>
        <h2>Login into your relay account</h2>

        <div className={Style.inputWrapper}>
          <FaEnvelope className={Style.icon} />
          <input type='text' placeholder='Email' className={Style.input} onChange={(e) => setemail(e.target.value)} />
        </div>

        <div className={Style.inputWrapper}>
          <FaLock className={Style.icon} />
          <input type='password' placeholder='Password' className={Style.input} onChange={(e) => setpassword(e.target.value)} />
        </div>

        <button className={Style.button} onClick={() => navigate('/chat_page')}>Login</button>
      </motion.div>
    </>
  );
};

export default Log_in;