export class BaseHttp {
  apiPath = "http://localhost:3000/api";

  http = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    get: function(url) {
      return request(url, "GET", this.headers);
    },
    post: function(url, body) {
      return request(url, "POST", this.headers, body);
    },
    put: function(url, body) {
      return request(url, "PUT", this.headers, body);
    },

    delete: function(url, body) {
      return request(url, "DELETE", this.headers, body);
    }
  };
}

function request(url, method, headers, body) {
  return fetch(url, {
    headers: headers,
    method: method,
    body: JSON.stringify(body)
  })
    .then(function(res) {
      return res.json();
    })
    .catch(function(res) {
      console.log(res);
    });
}
