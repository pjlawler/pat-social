const { Schema, Types } = require('mongoose');
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
    username: {
        type: String,
        required: true
    },
},
{
  toJSON: {
    getters: true,
    statics: true
  }, id: false
});

module.exports = ReactionSchema;


