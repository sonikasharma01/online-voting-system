import { auth } from "./firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const provider = new GoogleAuthProvider();

document.getElementById("googleSignIn").onclick = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
    alert("Login Successful ✅");
    window.location.href = "vote-india.html";
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

document.getElementById("submitBtn").onclick = () => {
  const voterId = document.getElementById("Vid").value;
  localStorage.setItem("currentVoter", voterId);
  window.location.href = "vote-india.html";
};