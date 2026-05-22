import { db }

from "./firebase.js";

import {

  ref,
  onValue

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

onValue(ref(db, "votes"), (snapshot)=>{

    const data = snapshot.val();

    document.getElementById("bjp").innerText =
    data?.BJP || 0;

    document.getElementById("congress").innerText =
    data?.Congress || 0;

    document.getElementById("sp").innerText =
    data?.["Samajwadi Party"] || 0;

    document.getElementById("ncp").innerText =
    data?.NCP || 0;

});