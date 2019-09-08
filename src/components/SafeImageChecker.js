import axios from "axios";

const safeImgCheck = async image => {
  var reader = new FileReader();

  reader.addEventListener("load", function(e) {
    let data = e.target.result.split(",")[1];
    sendImgToGoogle(data);
  });

  reader.readAsDataURL(image);
};

const sendImgToGoogle = data => {
  let body = {
    requests: [
      {
        image: {
          content: data
        },
        features: [
          {
            type: "LABEL_DETECTION",
            maxResults: 1
          },
          {
            type: "SAFE_SEARCH_DETECTION"
          }
        ]
      }
    ]
  };

  console.log(body);

  let headers = {
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  };
  axios
    .post(
      "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAvl1xGgq41d8PNDiu4eWcba3uUILyRJSc",
      body,
      headers
    )
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export default safeImgCheck;
