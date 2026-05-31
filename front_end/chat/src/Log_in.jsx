import { useNavigate } from 'react-router-dom';
import Style from './Log_in.module.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
const Log_in = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1> its log in place</h1>

      <div className={Style.container}>

        <div className={Style.inputWrapper}>
          <FaEnvelope className={Style.icon} />
          <input type='text' placeholder='Email' className={Style.input} />
        </div>

        <div className={Style.inputWrapper}>
          <FaLock className={Style.icon} />
          <input type='password' placeholder='Password' className={Style.input} />
        </div>

      </div>
    </>
  )
}
export default Log_in;