const settings = {
  async: true,
  crossDomain: true,
  headers: {
    accept: "application/json",
    "Content-type": "application/json",
  },
};

addEventListener("load", (event) => {
  console.log("extension start");
  $.ajax({
    url: "https://qiita.com/api/v2/items",
    method: "GET",
    ...settings,
  }).done(function (response) {
    console.log(response);
  });
});
