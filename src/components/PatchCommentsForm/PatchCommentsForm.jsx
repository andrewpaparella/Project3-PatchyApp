import { compareSync } from 'bcrypt';
import {useState} from 'react';
import * as patchNotesAPI from '../../utilities/patchnotes-api';


export default function PatchCommentsForm({comments, setComments, user, patch}) {
    const [formData, setFormData] = useState({
        name: user.name,
        body: '',
        date: Date.now(),
        patchId: patch._id,
        user: user
    })

    async function handleAddComments(newCommentData){
        console.log('patch', patch)
        const newComment = await patchNotesAPI.addComment(newCommentData);
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
                        value={formData.patchId}
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