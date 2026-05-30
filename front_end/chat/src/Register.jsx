import { useNavigate } from 'react-router-dom';
import Style from './Register.module.css';
const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className={Style.title}>Register</h1>
    </>
  )
}
export default Register;