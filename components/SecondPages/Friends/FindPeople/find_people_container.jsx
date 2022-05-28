import React from "react";
import Find_people from "./find_people";
import { Sub } from "../../../../State/findPeople_section";
import { unSub } from "../../../../State/findPeople_section";
import { setPeopleAC } from "../../../../State/findPeople_section";
import { setCurrPage } from "../../../../State/findPeople_section";
import { isLoad, isErrorPage } from "../../../../State/findPeople_section";
import { isDisabled } from "../../../../State/findPeople_section";
import { connect } from "react-redux";
import { getUsersThunk } from "../../../../State/findPeople_section";
import { getUsersThunk_changed } from "../../../../State/findPeople_section";
import { subThunk } from "../../../../State/findPeople_section";
import { unSubThunk } from "../../../../State/findPeople_section";

class find_people_con extends React.Component { 

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize, this.props.is_disabled)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk_changed(pageNumber, this.props.pageSize, this.props.is_disabled)
    }

    render() {
        return (
            <Find_people
                unSubscribe={this.props.unSubscribe}
                Subscribe={this.props.Subscribe}
                people={this.props.people}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                is_load={this.props.is_load}
                isFetch={this.props.isFetch}
                isDisabled={this.props.isDisabled}
                is_disabled={this.props.is_disabled}
                subThunk={this.props.subThunk}
                unSubThunk={this.props.unSubThunk}
                isAuth={this.props.isAuth}
                isErrorPage={this.props.isErrorPage}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.findPeopleSection.people,
        pageSize: state.findPeopleSection.pageSize,
        totalUsersCount: state.findPeopleSection.totalUsersCount,
        currentPage: state.findPeopleSection.currentPage,
        isFetch: state.findPeopleSection.isFetch,
        isDisabled: state.findPeopleSection.isDisabled,
        isAuth: state.authSection.isAuth,
        isErrorPage: state.findPeopleSection.isErrorPage
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         Subscribe: (usId) => {
//             console.log(Sub(usId))
//             dispatch(Sub(usId))
//         },
//         unSubscribe: (usId) => {
//             console.log(unSub(usId))
//             dispatch(unSub(usId))
//         },
//         setPeople: (people) => {
//             dispatch(setPeopleAC(people))
//         },
//         setCP: (p) => {
//             dispatch(setCurrPage(p))
//         },
//         is_load: (load) => {
//             dispatch(isLoad(load))
//         }
//     }
// }

const FindPeople_container_connect = connect(mapStateToProps,
    {
        Subscribe: Sub,
        unSubscribe: unSub,
        setPeople: setPeopleAC,
        setCP: setCurrPage,
        is_load: isLoad,
        is_disabled: isDisabled,
        getUsersThunk: getUsersThunk,
        getUsersThunk_changed: getUsersThunk_changed,
        subThunk: subThunk,
        unSubThunk: unSubThunk
    }
)(find_people_con);

export default FindPeople_container_connect;