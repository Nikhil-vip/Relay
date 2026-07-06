import Style from './chat_page.module.css';
import { FaComments } from 'react-icons/fa';

const Chat_place = () => {
  return (
    <>
      <h1>Chat Pages</h1>
      <form className={Style.searchForm}>
        <input type="text" placeholder="Search..." className={Style.searchInput} />
        <FaComments className={Style.icon} />
      </form>
      <div className={Style.message_box}>


        <div className="pic"></div>


        <div className={Style.namecont}>
          <div className={Style.name}>Name</div>
          <div className={Style.message}>bekbc</div>
        </div>


      </div>
    </>
  )
}
export default Chat_place;