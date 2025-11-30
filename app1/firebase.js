    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
    import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
    // firebase config
    const firebaseConfig = {
      apiKey: "AIzaSyBAt2VmTzNeMNDD2vC5xGX84_ng7V9zvEY",
      authDomain: "chugli-6b8ca.firebaseapp.com",
      projectId: "chugli-6b8ca",
      storageBucket: "chugli-6b8ca.firebasestorage.app",
      messagingSenderId: "402907168682",
      appId: "1:402907168682:web:6fcc9a156fe99f25c1b5d3"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Use `export` so script.js can import `db`
    export { db };
