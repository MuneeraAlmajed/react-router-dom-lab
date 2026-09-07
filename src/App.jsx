import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import LetterForm from "./components/LetterForm/LetterForm";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addLetter = (data) => {
    setLetters([...letters, data]);
  };

  const addBox = (data) => {
    data._id = mailboxes.length + 1;

    setMailboxes([...mailboxes, data]);
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />

        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />

        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />

        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />

        <Route
          path="/new-letter"
          element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
        />
      </Routes>
    </>
  );
};

export default App;
