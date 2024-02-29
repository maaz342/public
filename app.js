import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKDT_qs5ADmRrI7aF_aISRZNNoP21ba-c",
  authDomain: "fir-1-666d7.firebaseapp.com",
  databaseURL: "https://fir-1-666d7-default-rtdb.firebaseio.com",
  projectId: "fir-1-666d7",
  storageBucket: "fir-1-666d7.appspot.com",
  messagingSenderId: "649911425742",
  appId: "1:649911425742:web:ac8ac5ee03d3455f604e9f",
  measurementId: "G-LDMKJ1VRQ8"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city=document.getElementById("inputCity").value;
  const course=document.getElementById("inputCourse").value;
  const fname=document.getElementById("Fname").value;
  const lnamem=document.getElementById("Lname").value;
const nic=document.getElementById("NIC").value;
const fnic=document.getElementById("FNIC").value;
const dob=document.getElementById("DOB").value
const addres=document.getElementById("inputAddress").value;
const gend=document.getElementById("Gender").value;
const lap=document.getElementById("inputAddress3").value;
const quali=document.getElementById("inputAddress2").value;
const image=document.getElementById("image-upload").value  
const formDataRef = ref(database, 'formData');
  push(formDataRef, {
    city: city,
    course: course,
    Firstname:fname,
    Lastnamem:lnamem,
    nic:nic,
    fnic:fnic,
    dob:dob,
    address:addres,
    gender:gend,
    laptop:lap,
    qualification:quali,
    Img:image

  });

  form.reset();
});