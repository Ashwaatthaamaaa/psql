const db = require("../db/queries");

async function getUsernames(req, res) {


  const search = req.query.search;

  if(search){

    const users = await db.searchUser(search);
    console.log(users);
    res.send(users.map(user=>user.username).join(","));
    
  }else{
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
  }


}

async function createUsernameGet(req, res) {
  res.render("form");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}


async function deleteAll(req,res) {
  await db.deleteAll();
  res.redirect('/');
}


module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteAll
};
