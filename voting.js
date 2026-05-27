import { db } from "./firebase.js";
import {
  ref,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

async function addVote(party) {
  const voterId = localStorage.getItem("currentVoter");

  // Feature 1: Block double voting
  if (localStorage.getItem("voted_" + voterId)) {
    alert("⚠️ You have already submitted your vote!");
    return;
  }

  // Feature 2: Confirmation popup
  const confirmVote = confirm("Are you sure you want to vote for " + party + "?");
  if (!confirmVote) {
    alert("❌ Vote cancelled.");
    return;
  }

  // Submit vote to Firebase
  const voteRef = ref(db, "votes/" + party);
  const snapshot = await get(voteRef);
  let count = snapshot.val() || 0;
  await set(voteRef, count + 1);

  // Mark this voter as having voted
  localStorage.setItem("voted_" + voterId, "true");

  alert("✅ Vote Submitted Successfully!");
  window.location.href = "result.html";
}

document.getElementById("bjpBtn").onclick = () => addVote("BJP");
document.getElementById("congressBtn").onclick = () => addVote("Congress");
document.getElementById("spBtn").onclick = () => addVote("Samajwadi Party");
document.getElementById("ncpBtn").onclick = () => addVote("NCP");