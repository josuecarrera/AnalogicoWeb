import { useState, useEffect } from "react";
import storage from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { Modal } from "../DataPDFOne/Modal";
import { Buttonthree } from "./Buttonthree";

export const Problems = () => {
  const [modal, setModal] = useState(false);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    getDownloadURL(ref(storage, "PROBLEMAS_PROPUESTOS_U1.pdf")).then(
      (url) => {
        setResume(url);
      }
    );
  }, []);
  return (
    <>
      <Buttonthree setModal={setModal} />
      {modal === true && <Modal setModal={setModal} resume={resume} />}
    </>
  );
};
