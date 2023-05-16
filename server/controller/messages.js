const express = require("express");
const { verifyaccess } = require("../services/authorization");
const app = express();
const messages = require("../services/messages");

app.post("/init", verifyaccess, messages.init);

app.post(`/`, verifyaccess, messages.add);

<<<<<<< HEAD
app.get('/getConversation/:conversationId', messages.getConversation);
=======
app.get(`/:conversationId`, verifyaccess, messages.getAllMessages);
>>>>>>> origin/master

app.put(`/seen`, messages.seen);

app.delete(`/:messageId`, messages.delete);

<<<<<<< HEAD
app.put('/edit', messages.edit);

app.delete('/delete', messages.delete);

app.put('/seen', messages.seen);

app.get('/conversations/:conversationId/messages', async (req, res) => {
    const { conversationId } = req.params;
    const conversation = await Conversation.findById(conversationId);
  
    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }
  
    const messages = conversation.messages;
    res.json(messages);
  });
  

module.exports = app;
=======
module.exports = app;
>>>>>>> origin/master
