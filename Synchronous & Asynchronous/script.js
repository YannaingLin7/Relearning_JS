// login();
// fetchData();
// showUI();

// above codes will cause some problem because of asyncronous order;

const login = function () {
  const loginWithPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Login success");               // parameter ( resolve()/reject() ) ပေါ်တွင်မူတည်၍ then()/catch() ကို ဖမ်းမည်။
    }, 2000);
  });

  return loginWithPromise;                    // This function return a promise
};

const fetchData = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("Data can't be fetch!");
      resolve("Data has arrived...");
    }, 2000);
  });
};

const getUserPhoto = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("ERROR in fetching Photo!");
      resolve("Photo has been fetched.");
    }, 2000);
  });
};

const getUserFriends = function() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve("User friends have been fetched.")
    }, 2000);
  });
}

const showUI = function (data) {
  console.log("Showing UI with user data... : ", data);
};


// promise chainging
// promise chainging is used to avoid Call Back Hell and Pyramid of Doom
login()
  .then((loginData) => {
    console.log("1st .then() :: ", loginData);
    return fetchData();      // return ပြန်မပေးပါက fetchData() မှ ရသော promise မှ data ကို နောက်ဆက်တွဲ then()/catch() များတွင် parameter ခေါ်ယူ သုံးစွဲနိုင်မည်မဟုတ်ပါ။
  })
  .then((dataFromFetchData) => {
    console.log("2nd .then() :: ", dataFromFetchData);
    return getUserPhoto();
  })
  .then((userPhoto) => {
    console.log("3rd .then() :: ", userPhoto);
    return getUserFriends();
  })
  .then((userFriends) => {
    console.log("4th .then() :: ", userFriends);
    showUI(userFriends);
  })
  .catch((error) => {
    console.log("Inside Catch : ", error);
  });
