import { useState, useEffect } from "react";
import storage from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { Buttontwo } from "./Buttontwo";
import { Modal } from "../DataPDFOne/Modal";

export const PracticeGuide = () => {
  const [modal, setModal] = useState(false);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    getDownloadURL(ref(storage, "GUIADEPRACTICAS_N1_BALANCEDEPOTENCIA.pdf")).then((url) => {
      setResume(url);
    });
  }, []);

  return ( 
    <>
    <Buttontwo setModal={setModal}/>
     {modal===true&&(
        <Modal setModal={setModal} resume={resume}/>
    )}
    </>
  );
};
