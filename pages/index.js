import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Title from "../pages/comps/Title";
import UploadForm from "../pages/comps/UploadForm";
import ImageGrid from "../pages/comps/ImageGrid";
import ImageModal from "../pages/comps/ImageModal";
import {useState} from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Head>
        <title>Firegram Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImage={setSelectedImage}/>

        { selectedImage && <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/> }

      </div>

      {/*<footer className={styles.footer}>*/}
      {/*  <a*/}
      {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Powered by{' '}*/}
      {/*    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />*/}
      {/*  </a>*/}
      {/*</footer>*/}
    </div>
  )
}
