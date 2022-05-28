import GirlLara from "../girlLara.jpg";
import BoyMax from "../boyMax.jpg";
import Cat from "../cat.jpg";
import Enot from "../enot.jpg";
import Spider from "../SpiderMan.png";
export const deleteFriend = (friendId) => ({ type: "delete-friend", friendId })

let startSection = {
        friends: [
            { id: 0, user: GirlLara, name: "lara grom" },
            { id: 1, user: BoyMax, name: "maXworker" },
            { id: 2, user: Cat, name: "black-cat" },
            { id: 3, user: Enot, name: "raccoon123" },
            { id: 4, user: Spider, name: "Spider-Man" },
        ],
}

let friendsSection = (state = startSection, action) => {
    if(action.type === "delete-friend") {
        return {
            ...state,
            friends: state.friends.filter(el => el.id != action.friendId)
        }
    }
    return state;
}

export default friendsSection;