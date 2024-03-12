const mongoose = require('mongoose')

const ChatModel = mongoose.Schema({
    chatName: { type:String, trim: true },
    isGroup: { type: Boolean, default: false },
    users: [{
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }],
    latest: {
        type: mongoose.Schema.Types.ObjectId, ref: "Msg"
    },
    isAdmin: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }
},
    { timestamps: true }
)

const Chat = mongoose.model('Chat', ChatModel)

module.exports = Chat