import React, { useState } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

export let name = "Basic (TS)";

export let Example = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div>
      <button onClick={() => setShowDialog(true)}>Show Dialog</button>
      <Dialog aria-label="Announcement" isOpen={showDialog}>
        <button onClick={() => setShowDialog(false)}>Close Dialog</button>
        <p>This is killer!</p>
        <input type="text" />
        <br />
        <input type="text" />
        <button>Ayyyyyy</button>
      </Dialog>
    </div>
  );
};
