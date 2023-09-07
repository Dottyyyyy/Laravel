import React, { useState } from 'react'
import Nav from './Nav';

const Create = () => {
    const [state, setState] = useState({
        title: '',
        content: '',
        user: ''

    });
    const { title, content, user } = state;

    const handleChange = name => event => {
        console.log('name', name, "event", event.target.value);
        setState({ ...state, [name]: event.target.value });
    };
    return (
        <div>
            <Nav />
            <h1>Create Post</h1>
            <br />
            <form>
                <div className="form-group">
                    <label ClassName='text-muted'>Title</label>
                    <input
                        type="text"
                        className='form-group'
                        placeholder='Post Title'
                        required
                        onChange={handleChange('title')}
                        value={title} />
                </div>

                <div className="form-group">
                    <label ClassName='text-muted'>Content</label>
                    <textarea type="text"
                        className='form-control'
                        placeholder='Write Something...'
                        required
                        onChange={handleChange('content')}
                        value={content} />
                </div>

                <div className="form-group">
                    <label ClassName='text-muted'>User</label>
                    <input type="text" className='form-control' placeholder='Your Name' required onChange={handleChange('tuser')}
                        value={user} />
                </div>

                <div>
                    <button className='btn btn-primary' type='submit'>Create</button>
                </div>





            </form>
        </div>
    )

}
export default Create