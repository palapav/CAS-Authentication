// convert everything to CommonJS later (standard node syntax)

const express = require("express");
const login = require("./endpoints/login.js");
const logout = require("./endpoints/logout.js");


const app = express();
const port = process.env.PORT || 3000;

// not using middleware here -> check to see if we need to

// defining routes
app.use("/login", login);
app.use("/logout", logout);

// switch back to 
app.get('/', (req, res) => {
  // console.log("I'm here " + dirname("index.html"));
  res.sendFile(__dirname + "/index.html");
});

app.get('/login', (req, res) => {
  res.send("This is the authenticated interface" +
   "that displays your username")
});

app.get('/logout/cas', (req, res) => {
  res.send("You have been logged out of CAS and the app")
});

// need cors?



app.use((err, _req, res, next) => {
  console.log(err);
  res.status(500).send("Uh oh! An unexpected error occured.")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});