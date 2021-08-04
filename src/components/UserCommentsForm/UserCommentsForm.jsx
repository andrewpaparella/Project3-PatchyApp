import {useState} from 'react';
import * as usersAPI from '../../utilities/users-api';


export default function UserCommentsForm({comments, setComments, user}) {
    const [formData, setFormData] = useState({
        name: user.name,
        body: '',
        date: Date.now(),
        userId: user._id,
    })

    async function handleAddComments(newCommentData){
        console.log('user', user)
        const newComment = await usersAPI.addComment(newCommentData);
        setComments([...comments, newComment])
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddComments(formData);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }



    return (
        <div>
				<div className='form-container'>
					<form autoComplete='off' onSubmit={handleSubmit}>
						<label>Body</label>
						<input
							type='text'
							name='body'
                            value={formData.body}
							onChange={handleChange}
							required
						/>
                        <input
							type='text'
							name='user'
                            value={formData.name}
							readOnly
							hidden
						/>
                         <input
							type='text'
							name='user'
                            value={formData.user}
							readOnly
							hidden
						/>
                        <input type='text'
                        name='patchId'
                        value={formData.userId}
                        readOnly
                        hidden
                        />
						<button type='submit' >
							Post
						</button>
					</form>
				</div>
			</div>
    )
}