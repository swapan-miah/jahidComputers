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
const videoContainer = document.getElementById("video_container");

// Reference to your Firebase Storage folder (replace 'bbb' with your folder name)
var storageRef = firebase.storage().ref("suborno_video/");

// Get a list of all items in the folder
storageRef
  .listAll()
  .then(function (result) {
    console.log(result);
    result.items.forEach(function (item) {
      // Get the download URL for each image
      item
        .getDownloadURL()
        .then(function (url) {
          // Create a video element and set its source to the download URL
          const videoElement = document.createElement("video");
          videoElement.src = url;
          videoElement.controls = true; // Add video controls (play, pause, etc.)
          videoElement.classList.add("col-md-6");
          videoElement.classList.add("col-lg-4");
          videoElement.classList.add("mb-4");

          // Append the video element to the container
          videoContainer.appendChild(videoElement);
        })
        .catch(function (error) {
          console.error("Error getting download URL: ", error);
        });
    });
  })
  .catch(function (error) {
    console.error("Error listing items in the folder: ", error);
  });
