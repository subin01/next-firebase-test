/* eslint-disable react-hooks/rules-of-hooks */
import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, doc } from 'firebase/firestore'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore'


console.log("-------process.env.NEXT_PUBLIC_----------", process.env.NEXT_PUBLIC_PROJECTID)

 const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
}

 export const firebaseApp = initializeApp(firebaseConfig)

// export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)
// const functions = getFunctions(firebaseApp, 'asia-south1')

// const matchRef = collection(db, 'match')

// const signOut = async () => {
//   try {
//     auth.signOut()
//     router.push('/login')
//   } catch {
//     console.log('Failed to log out')
//   }
// }

// const matchRunningAPI = httpsCallable(functions, 'matchRunning')
// const matchRunning = async (match, action) => matchRunningAPI({ match, action })
