import React, { useState } from "react";
import findPeple from "./find_people.module.css";
import { NavLink } from "react-router-dom";
import PeopleFilter from "./Component_map";
import Loading from "../../../../loading.png";
import Arrow from "../../../../arrow.png";
import LoadingIcon from "../../../../LoadingIcon/LoadingIcon";

const Find_people = (props, { portionSize = 3 }) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let updateP = () => {
        window.location.reload() 
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    const [useportionNumber, setPortionNumber] = useState(Math.floor(props.currentPage / 10) + 1);
    let leftPortionPageNumber = (useportionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = useportionNumber * portionSize;

    if (props.isAuth === true) {
        return (
            <div className={findPeple.main_right}>
                <div className={findPeple.block_name}>
                    <div>Users</div>
                    <NavLink className={findPeple.nav_link} to="/Friends">
                        <div className={findPeple.find_people}>Back</div>
                    </NavLink>
                </div>
                {props.isErrorPage ? 
                <div>Error!</div> :
                <div></div>
                }
                {props.isFetch ?
                    <div className={findPeple.loading_main}>
                        <img className={findPeple.loading} src={Loading}></img>
                    </div>
                    :
                    <div className={findPeple.main_right2}>
                        <PeopleFilter
                            is_disabled={props.is_disabled} isDisabled={props.isDisabled}
                            unSubscribe={props.unSubscribe} Subscribe={props.Subscribe}
                            people={props.people} subThunk={props.subThunk}
                            unSubThunk={props.unSubThunk} />
                        <div className={findPeple.more_main}>
                            {useportionNumber > 1 &&
                                <button onClick={() => { setPortionNumber(useportionNumber - 1) }} className={findPeple.nav_link_sub_2_b}>
                                    <div className={findPeple.arr_main}>
                                    <img className={findPeple.arr} src={Arrow}></img>
                                    <div className={findPeple.nav_link_sub2_2_b}>Prev</div>
                                    </div>
                                </button>
                            }
                            {pages
                                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                                .map(p => {
                                    return <span key={p} href="#" onClick={ (e) => { props.onPageChanged(p)} } className={props.currentPage === p ? findPeple.more_sel : findPeple.more} >{p}</span>
                                })}
                            {portionCount > useportionNumber &&
                                <button onClick={() => { setPortionNumber(useportionNumber + 1) }} className={findPeple.nav_link_sub_2_b}>
                                    <div className={findPeple.arr_main}>
                                    <img className={findPeple.arr2} src={Arrow}></img>
                                    <div className={findPeple.nav_link_sub2_2_b}>Next</div>
                                    </div>
                                </button>
                            }
                        </div>
                    </div>
                }
            </div>
        )
    } else {
        return (
            <div className={findPeple.main_right}>
                <div className={findPeple.block_name}>
                    <div>Users</div>
                    <NavLink className={findPeple.nav_link} to="/Friends">
                        <div className={findPeple.find_people}>Back</div>
                    </NavLink>
                </div>
                <LoadingIcon />
            </div>
        )

    }
}



export default Find_people;

