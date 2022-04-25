const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');
const User = require('./User');
const { timeSince, format_date } = require('../utils/helpers');

ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
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
        get: updatedAtVal => format_date(updatedAtVal)
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
    reactions: [ReactionSchema]
},
{
toJSON: {
    getters: true,
    virtuals: true
},
id: false
});

// get total count of comments and replies on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
