import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId),
  );

  const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId),
  );

  if (!selectedBox) {
    return <h1>Mailbox Not Found!</h1>;
  }

  return (
    <main>
      <h1>Mailbox Details</h1>
      <p>Mailbox ID: {selectedBox._id}</p>
      <p>Owner: {selectedBox.boxOwner}</p>
      <p>Size: {selectedBox.boxSize}</p>

      <h2>Letters</h2>

      {selectedLetters.map((letter) => (
        <div key={letter.message}>
          <p>Recipient: {letter.recipient}</p>
          <p>Message: {letter.message}</p>
        </div>
      ))}
    </main>
  );
};

export default MailboxDetails;