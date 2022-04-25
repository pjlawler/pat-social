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
    statics: true
  }, id: false
});

ReactionSchema.virtual('username') {
    User.findById(this.user, function(err, username) {
        return username
    });
});

module.exports = ReactionSchema;