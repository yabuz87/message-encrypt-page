import React,{useState,useEffect} from 'react'
import CryptoJS from 'crypto-js'
import "./home.css"

const Home = () => {
    const [encryptText,setEncryptText] = useState('')
    const [decryptText,setDecryptText] = useState('')
    const [data,setData] = useState('')

   function encryptData(message,secretKey){
    const cipherText=CryptoJS.AES.encrypt(message,secretKey).toString();
    return cipherText;
   }
   function decryption(message,secretKey)
   {
    const bytes = CryptoJS.AES.decrypt(message, secretKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
   }

    <div>
    <h3>
        Encrypt and Decrypt your data using the AES(Advanced Encryption Standard) algorithm
    </h3>
      <div className="container">
       <div className="first-col">
       <h2>Encrypt</h2>
       <textarea placeholder="Enter your text here" value={data} onChange={(e)=>{setData(e.target.value)}}></textarea>
       <h2>Encrypted Data</h2>
       <textarea placeholder="Encrypted data will appear here" value={encryptText} readOnly></textarea>
       </div>
       <div className="second-col">
        <h2>Decrypt</h2>
        <textarea placeholder="Enter your text here" value={data} onChange={(e)=>{setData(e.target.value)}}></textarea>
        <h2>Decrypted Data</h2>
        <textarea placeholder="Decrypted data will appear here" value={decryptText}></textarea>
       </div>
      </div>
    </div>
  )
}

export default Home
