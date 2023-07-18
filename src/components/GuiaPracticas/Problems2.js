import { useState, useEffect } from "react";
import storage from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { Modal } from "../DataPDFOne/Modal";
import { Buttonfour } from "./Buttonfour";

export const Problems2 = () => {
  const [modal, setModal] = useState(false);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    getDownloadURL(ref(storage, "PROBLEMAS_PROPUESTOS_U2.pdf")).then(
      (url) => {
        setResume(url);
      }
    );
  }, []);
  return (
    <>
      <Buttonfour setModal={setModal} />
      {modal === true && <Modal setModal={setModal} resume={resume} />}
    </>
  );
};
