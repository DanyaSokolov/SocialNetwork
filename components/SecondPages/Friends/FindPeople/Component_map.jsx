import React from "react";
import content from "./Content.module.css";
import findPeple from "./find_people.module.css";
import User from "../../../../user_logo_two.png";
import { NavLink } from "react-router-dom"; 


    // if (window.matchMedia("(max-width: 600px)").matches) {
    //     var text_cut = (text) => {
    //         var tt = text.substring(6, text.length - 255 );
    //         if(tt.length < 6) {
    //             return tt
    //         } else {
    //             return tt + "..."
    //         }
    //     }
    // } else {
    //     var text_cut = (text) => {
    //         return text
    // }
    // }


const PeopleFilter = (props) => props.people.map(el => <div key={el.id} >
    <div className={content.a_user}>
        <div className={content.user_main}>
            <div className={content.user_main2}>
                <NavLink className={content.user_main2_nav} to={"/profile/" + el.id}>
                    <img className={content.logo_user} src={el.photos.small != null ? el.photos.small : User} />
                </NavLink>
                <div className={content.name}>{el.name}</div> 
            </div>
            {el.subscribed
                ? <button disabled={props.isDisabled} onClick={() => {

                    // props.is_disabled(true)
                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                    //     {
                    //         withCredentials: true,
                    //         headers: {
                    //             'api-key': '3183939b-27f9-4f50-956c-849001487a71'
                    //         }
                    //     }
                    // ).then(response => {
                    //     console.log(response.data)
                    //     if(response.data.resultCode == 0) {
                    //         props.is_disabled(false)
                    //         props.unSubscribe(el.id)
                    //     }
                    // })

                    props.unSubThunk(el.id)

                    // props.unSubscribe(el.id)

                }} className={findPeple.nav_link_sub_1} >
                    <div className={findPeple.nav_link_sub2_1}>Subscribed</div>
                </button>
                : <button disabled={props.isDisabled} onClick={() => { 
                //     props.is_disabled(true)
                //     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                //     {},
                //     {
                //         withCredentials: true,
                //         headers: {
                //             'api-key': '3183939b-27f9-4f50-956c-849001487a71'
                //         }
                //     }
                // ).then(response => {
                //     console.log(response.data)
                //     if(response.data.resultCode == 0) {
                //         props.is_disabled(false)
                //         props.Subscribe(el.id)
                //     }
                // })

                props.subThunk(el.id)

                // props.Subscribe(el.id)
                    
                    }} className={findPeple.nav_link_sub_2} >
                    <div className={findPeple.nav_link_sub2_2}>Subscribe</div>
                </button>
            }
        </div>
    </div>
</div>)


export default PeopleFilter;