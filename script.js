     import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

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

    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    onValue(ref(database, 'formData'), (snapshot) => {
      dataTable.innerHTML = '';
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        const row = dataTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);
        const cell8 = row.insertCell(7);
        const cell9 = row.insertCell(8);
        const cell10 = row.insertCell(9);
        const cell11 = row.insertCell(10);
        const cell12 = row.insertCell(11);
        cell1.innerHTML = data.city;
        cell2.innerHTML = data.course;
        cell3.innerHTML = data.Firstname;
        cell4.innerHTML = data.Lastnamem;
        cell5.innerHTML = data.nic;
        cell6.innerHTML = data.fnic;
        cell7.innerHTML = data.dob;
        cell8.innerHTML = data.address;
        cell9.innerHTML = data.gender;
        cell10.innerHTML = data.laptop;
        cell11.innerHTML = data.qualification;
        cell12.innerHTML = data.Img;



      });
    }); 