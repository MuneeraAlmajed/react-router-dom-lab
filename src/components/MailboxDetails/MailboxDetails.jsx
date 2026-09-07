import {useParams} from 'react-router-dom';

const MailboxDetails = (props) => {
    const {mailboxId} = useParams();

    const selectedBox = props.mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)
);


    return (
        <>
        <main>
        <h1>Mailbox Details</h1>
        <p>Mailbox ID: {selectedBox._id}</p>
        <p>Owner: {selectedBox.boxOwner}</p>
        <p>Size: {selectedBox.boxSize}</p>


        </main>
        </>
    )
}

export default MailboxDetails;