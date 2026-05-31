import { useNavigate } from 'react-router-dom';
import Style from './Register.module.css';
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';
const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={Style.container}>
        <div className={Style.topGlowDecor}></div>
        <h1 className={Style.title}>Relay</h1>
        <h2>Create your relay account</h2>


        <div className={Style.inputWrapper}>
          <FaUser className={Style.icon} />
          <input type='text' placeholder='Username' className={Style.input} />
        </div>


        <div className={Style.inputWrapper}>
          <FaEnvelope className={Style.icon} />
          <input type='email' placeholder='Email' className={Style.input} />
        </div>


        <div className={Style.inputWrapper}>
          <FaLock className={Style.icon} />
          <input type='password' placeholder='Password' className={Style.input} />
        </div>



        <button className={Style.button} onClick={() => navigate('/chat')}>
          Get Started <FaArrowRight className={Style.buttonIcon} />
        </button>

        <div className={Style.log_text}>


          <h4>Already have an account? </h4>
          <h4 className={Style.log_button} onClick={() => navigate('/Log_in.jsx')}>
            Log in
          </h4>
        </div>
      </div>
    </>
  )
}
export default Register;