import { useState, useEffect } from "react";
import storage from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { Button} from "../DataPDFOne/Button";
import { Modal } from "../DataPDFOne/Modal";

export const BringPdfFour = () => {
  const [modal, setModal] = useState(false);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    getDownloadURL(ref(storage, "Capitulo_4info.pdf")).then((url) => {
      setResume(url);
    });
  }, []);

  return ( 
    <>
    <Button setModal={setModal}/>
     {modal===true&&(
        <Modal setModal={setModal} resume={resume}/>
    )}
    </>
  );
};