import { useState} from 'react';
import {useNavigate} from 'react-router-dom'

const MailboxForm = (props) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        boxOwner: '',
        boxSize: 'Small',
    })

    const handleChange = (event)=>{
        setFormData({...formData,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.addBox(formData);
        navigate('/mailboxes')
    }


    return(
        <>
        <main>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Box Owner: </label>
                <input 
                type="text"
                id="boxOwner"
                name="boxOwner"
                onChange={handleChange}
                />

                <label htmlFor="boxSize">Box Size: </label>
                <select
                id="boxSize"
                name="boxSize"
                onChange={handleChange}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>

                <button type="submit">Create Mailbox</button>
            </form>
        </main>
    
        </>
    )
}

export default MailboxForm;