import { initializeApp }from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getDatabase }from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPJZPslQygjsR8GCnSRpm2buJerJsHXGE",
  authDomain: "online-voting-system-7d53d.firebaseapp.com",
  projectId: "online-voting-system-7d53d",
  storageBucket: "online-voting-system-7d53d.firebasestorage.app",
  messagingSenderId: "576975150183",
  appId: "1:576975150183:web:45fad56eaf1fbb76f388c2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

databaseURL: "https://online-voting-system-7d53d-default-rtdb.firebaseio.com/"