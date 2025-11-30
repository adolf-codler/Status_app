//Imports
import { db } from "./firebase.js";
import { collection, getDoc, doc, updateDoc} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";


//Constants
const but1 = document.querySelectorAll(".but1")
const but2 = document.querySelectorAll(".but2")

const lab1 = document.querySelectorAll(".lab1")
const lab2 = document.querySelectorAll(".lab2")

const ref = doc(db, "testuser", "5uxsZYIRwgMFgSzPcfgr");

//Updating where 
but1.forEach(but1 => {
  but1.addEventListener("click", async () => {
  await updateDoc(ref, {
  where_at: but1.textContent,
});
  })
 })

lab1.forEach(lab1 => {
  lab1.addEventListener("input", async () => {
   await updateDoc(ref, {
  where_at: lab1.textContent,
});

  })
 })

//Updating Doing
but2.forEach(but2 => {
  but2.addEventListener("click", async () => {
    await updateDoc(ref, {
      doing_what: but2.textContent,
    })
  })
 })

lab2.forEach(lab2 => {
  lab2.addEventListener("input", async () => {
    await updateDoc(ref, {
      doing_what:lab2.textContent
    })
  })
 })
