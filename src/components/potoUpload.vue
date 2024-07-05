<template>
    <div class="upload-image">
      <h2>Upload Image</h2>
      <input type="file" @change="onFileChange" />
      <button @click="uploadImage">Upload</button>
      <p v-if="error">{{ error }}</p>
      <p v-if="imageUrl">Uploaded Image URL: <a :href="imageUrl" target="_blank">{{ imageUrl }}</a></p>
      <div v-if="imageUrl">
        <h3>Uploaded Image:</h3>
        <img :src="imageUrl" alt="Uploaded Image" />
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
  import { db } from '../firebase/config'; // Correct path to firebase.js
  import { collection, addDoc } from 'firebase/firestore';
  
  export default {
    name: 'UploadImage',
    setup() {
      const file = ref(null);
      const error = ref(null);
      const imageUrl = ref(null);
  
      const onFileChange = (e) => {
        file.value = e.target.files[0];
      };
  
      const uploadImage = async () => {
        if (!file.value) {
          error.value = 'Please select a file first';
          return;
        }
  
        const storage = getStorage();
        const storageReference = storageRef(storage, `images/${file.value.name}`);
  
        try {
          const snapshot = await uploadBytes(storageReference, file.value);
          const url = await getDownloadURL(snapshot.ref);
  
          // Save the image URL to Firestore
          await addDoc(collection(db, 'images'), {
            url,
            name: file.value.name,
            createdAt: new Date()
          });
  
          imageUrl.value = url;
          error.value = null;
        } catch (err) {
          error.value = `Error uploading image: ${err.message}`;
        }
      };
  
      return {
        onFileChange,
        uploadImage,
        error,
        imageUrl
      };
    }
  };
  </script>
  
  <style>
  .upload-image {
    text-align: center;
    margin: 20px;
  }
  
  .upload-image input {
    margin: 10px;
  }
  
  .upload-image button {
    margin: 10px;
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .upload-image button:hover {
    background-color: #36a56b;
  }
  
  .upload-image p {
    margin: 10px;
  }
  
  .upload-image img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
  }
  </style>
  