import {Link} from 'react-router-dom';

const MailboxList = (props) => {
    return (
        <>
        <main>
            <h1>Mailboxes</h1>
            {props.mailboxes.map((mailbox) => {
                return (

                    <div className="mail-box" key={mailbox._id}>
                        <Link to={`/mailboxes/${mailbox._id}`}>
                    <h2>{mailbox._id}</h2>
                        </Link>
                </div>
                )
            })}
        </main>

        </>
    )
}

export default MailboxList;