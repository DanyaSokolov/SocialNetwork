import React, { useState, useEffect, memo, PureComponent } from "react";
import contentRight from "./ContentRight_Profile.module.css";
import imgLogo2 from "../../../../user_logo_two.png";
import Settings from "../../../../settings.png";

// class ContentRight_Profile extends React.Component {

//   componentDidMount() {
//     this.props.getStatusThunk(22495)
//     this.props.getMyProfileThunk(22495)
//   }

//   state = {
//     status: this.props.status,
//     isFocus: false
//   }

//   toFocuse() {
//     this.setState({
//       isFocus: true,
//       status: this.props.status
//     })
//   }

//   unFocuse() {
//     this.setState({
//       isFocus: false
//     })
//     this.props.updateStatusThunk(this.state.status)
//   }

//   onStatusChange = (event) => {
//     this.setState({
//       status: event.currentTarget.value
//     })
//   }

//   onPhotoChange = (event) => {
//     if (event.target.files.length) {
//       this.props.setPhoto(event.target.files[0])
//       this.props.getMyProfileThunk(22495)
//     }
//   }

//   render() {
//     console.log("RENDER")
//     // window.props.push(this.props) 
//     return (
//       <div>
//         <div className={contentRight.profile_top}>
//           <div className={contentRight.profile_top2}>
//             <div className={contentRight.prof_logo}>
//               <img id={contentRight.mainLogo2} src={this.props.user.photos.large != null ? this.props.user.photos.large : imgLogo2} />
//               {/* <img id={contentRight.mainLogo2} src={imgLogo2} /> */}
//             </div>
//             <div className={contentRight.prof_data}>
//               <div className={contentRight.settings}>
//                 <div className={contentRight.data_name}>
//                   {this.props.login}
//                 </div>
//                 {/* <div>
//             <img className={contentRight.img_settings} src={Settings}></img>
//           </div> */}
//               </div>
//               {this.state.isFocus ?
//                 <div onBlur={() => { this.unFocuse() }} className={contentRight.status}>
//                   <div className='data_birth data_total'>
//                     Status:
//                   </div>
//                   <input onChange={this.onStatusChange} value={this.state.status == null ? '' : this.state.status} autoFocus={true} type="text" className={contentRight.status_inp}>
//                   </input>
//                 </div> :
//                 <div onClick={() => { this.toFocuse() }} className='data_birth data_total'>
//                   Status: {this.props.status}
//                 </div>
//               }
//               <div className='data_city data_total'>
//                 Id: 22495
//               </div>
//               <div className='data_link data_total'>
//                 Web-site: <a className={contentRight.link_web} href='http://localhost:3000'>
//                   http://localhost:3000/#</a>
//               </div>
//             </div>
//           </div>
//           <button className={contentRight.nav_link_sub_2}>
//             <div onClick={() => { this.props.logOutThunk() }} className={contentRight.nav_link_sub2_2}>Log out</div>
//           </button>
//         </div>
//         <input className={contentRight.file} onChange={this.onPhotoChange} name="file" type="file"></input>
//         <span>{this.props.photoCh}</span>
//       </div>
//     )
//   }
// }

const ContentRight_Profile = (props) => {

  // setInterval(() => {
  //   setStatus({
  //     a: 12
  //   })
  // }, 3000)

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):       

  //   if (prevProps.activeItems !== this.props.activeItems) {
  //     this.props.doAction();
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):       

  //   if (prevProps.activeItems !== this.props.activeItems) {
  //     this.props.doAction();
  //   }
  // }

  // console.log("RENDER")

  const [isFocus, setFocus] = useState(false);
  const [status, setStatus] = useState(props.status);

  let unFocuse = () => {
    setFocus(false)
    props.updateStatusThunk(status)
  }

  let toFocuse = () => {
    setFocus(true)
  }

  let onStatusChange = (event) => {
      setStatus(event.currentTarget.value)
  }

  const onPhotoChange = (event) => {
        if (event.target.files.length) {
          props.setPhoto(event.target.files[0])
          props.getMyProfileThunk(props.id)

          // window.location.reload() 

        }
      }

  useEffect(() => {
    setStatus((props.status))
    props.getStatusThunk(props.id)
    props.getMyProfileThunk(props.id)
  } , [props.status])
  
  let userHref = "https://danyasokolov.github.io/SocialNetwork/#/profile/" + props.id

 return  ( 
      <div>
      <div className={contentRight.profile_top}>
        <div className={contentRight.profile_top2}>
        <div className={contentRight.prof_logo}>
        <img id={contentRight.mainLogo2} src={props.user.photos.large != null ? props.user.photos.large : imgLogo2} />
          {/* <img id={contentRight.mainLogo2} src={imgLogo2} /> */}
        </div>
        <div className={contentRight.prof_data}>
          <div className={contentRight.settings}>
            <div className={contentRight.data_name}>
            {props.login}
            </div>
            {/* <div>
            <img className={contentRight.img_settings} src={Settings}></img>
          </div> */}
          </div>
          {isFocus ?
            <div onBlur={() => {unFocuse() }} className={contentRight.status}>
              <div className={contentRight.status_inp2}> 
                Status:
              </div>
              <input onChange={onStatusChange} value={status == null ? '' : status} autoFocus={true} type="text" className={contentRight.status_inp}>
              </input>
            </div> :
            <div onClick={() => {toFocuse() }} className={contentRight.status_inp2}>
              Status: {props.status}
            </div>
          }
          <div className='data_city data_total'>
            Id: {props.id}
          </div>
          <div className={contentRight.link_web_main}>
            Web-site: <a className={contentRight.link_web} href={userHref}>
              {userHref}</a>
          </div>
        </div>
        </div>
        <button className={contentRight.nav_link_sub_2}>
          <div onClick={() => {props.logOutThunk()}} className={contentRight.nav_link_sub2_2}>Log out</div>
        </button>
      </div>
      <input className={contentRight.file} onChange={onPhotoChange} name="file" type="file"></input>
      <span className={contentRight.span_ch}>{props.photoCh}</span>
      </div>
    )
  }

export default ContentRight_Profile;