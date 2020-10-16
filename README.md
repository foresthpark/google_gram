## ➽ What is this?

- A simple gallery app using Firebase hosting and Firebase snapshots

<br/>

## ➽ Why did I build this?  

- Practicing the Next JS framework  
  

- Better understand firebase  
  

- Practice Bootstrap  
  

- Learning how to make custom hooks  

<br/>

## ➽ Demo  
- Check out the demo here: https://forest-firegram.web.app/  

<div align="center">
<img src="https://github.com/foresthpark/google_gram/blob/main/firegram_demo.gif" align="center" style="width: 100%" />
</div>

<br/>

## ➽ Languages and Tools  
<div align="center">  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="75" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="75" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="75" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="75" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/firebase.png" alt="Firebase" height="75" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="75" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="75" />  
</div>  
<br/>  

<br/>

## ➽ How do you use this? Getting started guide (Installation)
- Fork this repo: https://github.com/foresthpark/firebase_gallery  
  

- Head over to https://firebase.google.com/ and create a project  
  

- Follow instructions to create a Firebase config file at "~/firebase/config.js" and add the following:

```
import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECTID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGE_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectFireStore, projectStorage, timeStamp };
```
  

- Install npm packages
```
npm i  
```
```
npm run dev 
```


