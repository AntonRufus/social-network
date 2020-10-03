import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
