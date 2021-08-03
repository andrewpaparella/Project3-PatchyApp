import {useLocation } from 'react-router-dom';
import UserComments from '../../components/UserComments/UserComments';
import UserCommentsForm from '../../components/UserCommentsForm/UserCommentsForm';


export default function UserProfilePage(){
    const {state: {user}}  = useLocation()
    return (
        <>
        <h1>USER PROFILE</h1>
        {user.name}
        <UserComments />
        <UserCommentsForm />
        </>
    )
}