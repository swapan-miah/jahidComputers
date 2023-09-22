// Initialize Firebase (replace with your own Firebase config)
// Initialize Firebase (replace with your own Firebase config)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVC8FkPtepahw046SbVAEdIqSa0x8SY-0",

  authDomain: "amphs-f9aae.firebaseapp.com",

  projectId: "amphs-f9aae",

  storageBucket: "amphs-f9aae.appspot.com",

  messagingSenderId: "116747605866",

  appId: "1:116747605866:web:2576e5eeb46ce2b464f713",

  measurementId: "G-5MRXZSRPK2",
};

firebase.initializeApp(firebaseConfig);

// Reference to your Firebase Storage folder (replace 'notice' with your folder name)
var storageRef = firebase.storage().ref("result");

// Get a list of all items (PDFs) in the folder
storageRef
  .listAll()
  .then(async function (result) {
    var tableBody = document.getElementById("noticeTableBody");

    for (let index = 0; index < result.items.length; index++) {
      const item = result.items[index];
      // Get the file name
      const fileName = item.name;

      // Create a table row
      const row = document.createElement("tr");

      // Create a table cell for SI (serial number)
      const siCell = document.createElement("td");
      siCell.textContent = index + 1; // Add 1 to start counting from 1

      // Create a table cell for the file name
      const nameCell = document.createElement("td");
      nameCell.textContent = fileName;

      // Create a download link for the PDF
      const downloadLinkCell = document.createElement("td");
      const downloadLink = document.createElement("a");
      downloadLink.textContent = "Download";
      downloadLink.href = await item.getDownloadURL(); // Wait for the URL
      downloadLink.setAttribute("download", fileName); // Set the file name for download
      downloadLinkCell.appendChild(downloadLink);

      // Append cells to the row
      row.appendChild(siCell);
      row.appendChild(nameCell);
      row.appendChild(downloadLinkCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    }
  })
  .catch(function (error) {
    console.error("Error listing items in the folder: ", error);
  });
