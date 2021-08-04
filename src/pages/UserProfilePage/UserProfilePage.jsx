import {useLocation } from 'react-router-dom';
import UserComments from '../../components/UserComments/UserComments';
import UserCommentsForm from '../../components/UserCommentsForm/UserCommentsForm';


export default function UserProfilePage(props){
    const {state: {user}}  = useLocation()
    return (
        <>
        <h1>USER PROFILE</h1>
        {user.name}
        {user.comments.map(comment => (
            <UserComments user={props.user} comment={comment} key={comment._id} setComments={props.setComments} />
        ))}
        <UserCommentsForm user={props.user} comments={props.comments} setComments={props.setComments} />
        </>
    )
}