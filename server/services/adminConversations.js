const Conversations = require("../models/conversations");
const User = require("../models/user");
const Messages = require("../models/messages");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const conversations = await Conversations.find({})
        .populate("fromUserId", "firstName lastName")
        .populate("toUserId", "firstName lastName");

      const users = conversations.reduce((acc, conv) => {
        acc[conv.fromUserId._id] = conv.fromUserId;
        acc[conv.toUserId._id] = conv.toUserId;
        return acc;
      }, {});

      const usersList = Object.values(users);

      return res.send({
        users: usersList,
        conversations,
        status: true,
        message: null,
      });
    } catch (error) {
      // Handle error
      return res.status(500).send({
        status: false,
        message: "An error occurred",
      });
    }
  },

  getConversation: async (req, res) => {
    const conversationId = req.params.conversationId;

    await Messages.find({ conversationId })
      .sort({ createdAt: 1 })
      .exec()
      .then((messages) => {
        return res.status(200).send(messages);
      })
      .catch((err) => {
        return res.status(500).send("Failed to load messages" + err);
      });
  },
};
