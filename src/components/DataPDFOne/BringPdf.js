import { useState, useEffect } from "react";
import storage from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { Button} from "./Button";
import { Modal } from "./Modal";

export const BringPdf = () => {
  const [modal, setModal] = useState(false);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    getDownloadURL(ref(storage, "Capitulo_1info.pdf")).then((url) => {
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
