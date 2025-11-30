import { db } from "../firebase.js";
import { collection, getDoc, doc} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";


const write = document.getElementById('wher')
const doing = document.getElementById('do')
const meal = document.getElementById('meal')


async function loadUsers() {
  const ref = doc(db, "testuser", "5uxsZYIRwgMFgSzPcfgr")
  const snap = await getDoc(ref);

  if(snap.exists()){
    write.textContent = snap.data().where_at
    doing.textContent = snap.data().doing_what
    meal.textContent = snap.data().had_meal
  }
  else{
    console.log("not found")
  }
}

loadUsers();
