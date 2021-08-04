import * as usersAPI from '../../utilities/users-api';
import {Link} from 'react-router-dom';

export default function UserComments({comment, user, setComments}){

    async function handleDeleteComment(userId, commentId){
		await usersAPI.deleteOne(userId, commentId);
		setComments(user.filter(singleComment => singleComment._id !== commentId));
	}

    return (
    <div>
        <h2>{comment.name}</h2> 
        <div className='date'>{comment.createdAt}</div>
        <br /><span>{comment.body}</span>
        <br />
        <Link className='btn btn-xs btn-info'
            to={{
                pathname: '/editcomment',
                state: { comment, user },
            }}
            >
                Edit
            </Link>
        <button className='btn btn-xs btn-danger margin-left-10' onClick={() => handleDeleteComment(user._id, comment._id)}>
                    DELETE
                </button>
        <hr />
    </div>
    )
}