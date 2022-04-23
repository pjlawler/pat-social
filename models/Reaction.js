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
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
        get: createdAtVal => format_date(createdAtVal)
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        immutable: true,
        get: updatedAtVal => format_date(updatedAtVal)
    },
    timeSince: {
        type: Date,
        default: Date.now,
        get: createdAtVal => timeSince(createdAtVal)
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
},
{
toJSON: {
    getters: true
},
id: false
});
module.exports = ReactionSchema;