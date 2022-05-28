import React from "react";
import contentRight from './ContentRight.module.css';
import ContentSpeaker from "./components/Content.jsx";
import Content2 from "./components/Content2.jsx";
import Send from "../../../send.png";
import User from "../../../user_logo_two.png";
import LoadingIcon from "../../../LoadingIcon/LoadingIcon";

const Messages_right = (props) => {

    let newPost = React.createRef();

    let addPost = () => {
        if (newPost.current.value != '') {
            let content = newPost.current.value;
            props.addPost_container(content, User);
            newPost.current.value = '';
        }
    }

    function keyUp(event) {
        if (event.code == "Enter") {
            addPost();
        }
    }

    let newMessageText = () => {
        props.newMessageText_container(newPost.current.value);
    }

    // return (
    //     <div className={contentRight.main_right}>
    //         <div className={contentRight.main_right2}>
    //             <div className={contentRight.block_name}>Messages</div>
    //             <div className={contentRight.scroll_users}>
    //              <ContentSpeaker speakers={props.speakers}/>
    //             </div>
    //         </div>
    //         <div className={contentRight.main_content}>
    //             <div className={contentRight.content_messages}>
    //              <Content2 messages={props.messages} />
    //             </div>
    //             <div className={contentRight.send_all}>
    //                 <div><input onKeyUp={keyUp} ref={newPost} type="text" placeholder="Send message.."
    //                  onChange={newMessageText} value={props.InputArea} className={contentRight.input_message}></input></div>
    //                 <div><a onClick={addPost} href="#"><img className={contentRight.send_arrow} src={Send}></img></a></div>
    //             </div>
    //         </div>
    //     </div>
    // )

    if (props.isAuth === true) {
        return (
            <div className={contentRight.main_right}>
                <div className={contentRight.main_right2}>
                    <div className={contentRight.block_name}>Messages</div>
                    <div className={contentRight.scroll_users}>
                        <ContentSpeaker speakers={props.speakers} />
                    </div>
                </div>
                <div className={contentRight.main_content}>
                    <div className={contentRight.content_messages}>
                        <Content2 me={props.me} messages={props.messages} />
                    </div>
                    <div className={contentRight.send_all}>
                        <div><input onKeyUp={keyUp} ref={newPost} type="text" placeholder="Send message.."
                            onChange={newMessageText} value={props.InputArea} className={contentRight.input_message}></input></div>
                        <div><a onClick={addPost}><img className={contentRight.send_arrow} src={Send}></img></a></div>
                    </div>
                </div>
            </div>
        )
    } else { 
        return (
            <div className={contentRight.main_right_notAuth}>
                <div className={contentRight.block_name}>Messages</div>
                <LoadingIcon />
            </div>
        )

    }
}

export default Messages_right;