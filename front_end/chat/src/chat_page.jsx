import { FaCommentNodes } from 'react-icons/fa';
import Style from './chat_page.module.css';
const Chat_place = () => {
  return (
    <>
      <h1>Chat Pages</h1>
      <FaCommentNodes className={Style.chatIcon} />
    </>
  )
}
export default Chat_place;