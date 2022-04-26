const Thought = require('../models/Thought');

const reactionController = {
    addReaction({ params, body }, res) {       

        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: { user: params.userId, reactionBody: body.reactionBody  } } },
            { new: true, runValidators: true }) 
        .then(dbReactionData => {
            if(!dbReactionData) {
                res.status(404).json({message: 'No thought found with this id!'});
                return;
            }
            res.json(dbReactionData);
        })
        .catch(err => {
            res.sendStatus(500).json(err)
        });
    },
    deleteReaction({ params }, res){
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId }}},
            { new: true }
        )
        .then(dbReactionData => {
            if(!dbReactionData){
                res.status(404).json({ message: 'No thought found with this id!'});
                return;
            }
            res.json(dbReactionData)
        })
        .catch(err => {
            res.sendStatus(500).json(err)
        });
    }
}

module.exports = reactionController;