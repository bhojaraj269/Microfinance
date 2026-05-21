const http = require("http");

const data = JSON.stringify({
  phone: "8722992405"
});

const options = {
  hostname: "127.0.0.1",
  port: 5000,
  path: "/api/auth/admin/forgot-password/send-otp",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length
  }
};

const req = http.request(options, (res) => {
  let body = "";
  res.on("data", (chunk) => body += chunk);
  res.on("end", () => {
    console.log("STATUS:", res.statusCode);
    console.log("BODY:", body);
  });
});

req.on("error", (e) => {
  console.error("Problem with request:", e.message);
});

req.write(data);
req.end();
