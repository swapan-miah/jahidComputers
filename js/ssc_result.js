// Initialize Firebase (make sure to replace with your own Firebase config)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Reference to your Firebase Storage folder (replace 'bbb' with your folder name)
var storageRef = firebase.storage().ref("ssc_board_result/");

// Get a list of all items in the folder
storageRef
  .listAll()
  .then(function (result) {
    result.items.forEach(function (item) {
      // Get the download URL for each image
      item
        .getDownloadURL()
        .then(function (url) {
          // Create an img element and set its src attribute
          var img = document.createElement("img");
          img.src = url;
          img.classList.add("img-fluid");

          // Append the img element to the imageGallery div
          document.getElementById("imageGallery").appendChild(img);
        })
        .catch(function (error) {
          console.error("Error getting download URL: ", error);
        });
    });
  })
  .catch(function (error) {
    console.error("Error listing items in the folder: ", error);
  });
