import {useState, useEffect} from 'react';
import {projectStorage, projectFireStore, timeStamp} from "../firebase/config";
import checkNsfw from "../hooks/CheckNSFW";


const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // References
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFireStore.collection("images");

    setError(null);

    storageRef.put(file).on("state_changed", (snap) => {
      let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percent);

    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();

      const nsfwCheck = await checkNsfw(url)

      if (nsfwCheck === true) {
        setProgress(0);
        setError("No noods allowed");

      } else {
        collectionRef.add({
          url: url,
          createdAt: timeStamp
        })
        setUrl(url);
      }



    })
  }, [file])

  return {progress, url, error}
}

export default useStorage;