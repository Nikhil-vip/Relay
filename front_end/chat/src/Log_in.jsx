import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // 1. Import motion
import Style from './Log_in.module.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';

// REPLACE the old pageVariants in Log_in.jsx with this:
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
  const navigate = useNavigate();
  return (
    <>
      {/* 2. Change div to motion.div and add the animation props */}
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
          <input type='text' placeholder='Email' className={Style.input} />
        </div>

        <div className={Style.inputWrapper}>
          <FaLock className={Style.icon} />
          <input type='password' placeholder='Password' className={Style.input} />
        </div>


        <button className={Style.button} onClick={() => navigate('/home')}>Login</button>
      </motion.div>
    </>
  )
}
export default Log_in;