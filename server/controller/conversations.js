const express = require("express");
const { verifyaccess } = require("../services/authorization");
const app = express();
const conversations = require("../services/conversations");

app.post(`/`, verifyaccess, conversations.add);

app.post(`/get-all`, verifyaccess, conversations.getAll);

<<<<<<< HEAD
app.get('/conversations/:userId', conversations.conversations);
app.get('/getAllConversations', conversations.getAllConversations);
=======
app.get(`/:conversationId`, verifyaccess, conversations.get);
>>>>>>> origin/master

app.delete(`/:conversationId`, verifyaccess, conversations.delete);

app.put("/:conversationId", verifyaccess, conversations.finish);

<<<<<<< HEAD
//app.get('/getConversation', messages.getConversation);


app.put('/editTitle', conversations.editTitle);

app.delete('/delete/id', conversations.deleteById);
app.delete('/delete/names', conversations.deleteByName);

module.exports = app;
=======
module.exports = app;
>>>>>>> origin/master
