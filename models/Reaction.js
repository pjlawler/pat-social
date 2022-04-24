const { Schema, Types } = require('mongoose');
const User = require('../models/User');
const { timeSince, format_date } = require('../utils/helpers')

ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => format_date(createdAtVal)
    },
    timeSince: {
        type: Date,
        default: Date.now,
        get: createdAtVal => timeSince(createdAtVal)
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
},
{
  toJSON: {
    getters: true,
    virtuals: true
  }, id: false
});

ReactionSchema.virtual('username').get(async function() {
    let username = await User.findById(this.user)
    .then(dbUserData => {
        return dbUserData.username;
    })
    console.log(username);
    return username || 'no name found'
});

module.exports = ReactionSchema;