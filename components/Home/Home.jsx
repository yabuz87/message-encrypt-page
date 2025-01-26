import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import './home.css';

const Home = () => {
  const [encryptText, setEncryptText] = useState('');
  const [decryptText, setDecryptText] = useState('');
  const [dData, setDData] = useState('');
  const [eData, setEData] = useState('');

  // Define a constant secret key
  const secretKey = 'myConstantSecretKey123'; // This is your secret key

  // Encrypt the message
  function encryptData(message) {
    const cipherText = CryptoJS.AES.encrypt(message, secretKey).toString();
    return cipherText;
  }

  // Decrypt the message
  function decryption(message) {
    try {
      const bytes = CryptoJS.AES.decrypt(message, secretKey);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      if (!originalText) throw new Error('Decryption failed. Invalid data or key.');
      return originalText;
    } catch (error) {
      return 'Error: nothing has been decrypted';
    }
  }

  useEffect(() => {
    // Automatically encrypt and decrypt whenever the data changes
    const encrypted = encryptData(eData);
    setEncryptText(encrypted);
    const decrypted = decryption(dData);
    setDecryptText(decrypted);
  }, [dData,eData]); // Re-run when the input text changes

  return (
    <div>
      <h3>Encrypt and Decrypt your data using AES (Advanced Encryption Standard) algorithm</h3>
      <div className="container">
        <div className="first-col">
          <h2>Encrypt Plaintext</h2>
          <textarea
            placeholder="Enter your text here"
            value={eData}
            onChange={(e) => setEData(e.target.value)}
          />
          <h2>Encrypted Data</h2>
          <textarea placeholder="Encrypted data will appear here" value={encryptText} readOnly />
        </div>
        <div className="second-col">
        <h2>Decrypt Plaintext</h2>
          <textarea
            placeholder="Enter your text here"
            value={dData}
            onChange={(e) => setDData(e.target.value)}
          />
          <h2>Decrypted Data</h2>
          <textarea placeholder="Decrypted data will appear here" value={decryptText} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Home;
