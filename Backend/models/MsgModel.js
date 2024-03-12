const moongose = require('mongoose')

const MsgModel = moongose.Schema({
    sender: { type: moongose.Schema.Types.ObjectId, ref:"User" },
    content: { type: String, trim: true },
    chat: { type: moongose.Schema.Types.ObjectId, ref: "Chat" },
    readBy: [{type:moongose.Schema.Types.ObjectId, ref: "User"}]
},
    {timestamps: true}
)

const Msg = moongose.model('Msg', MsgModel)

module.exports = Msg