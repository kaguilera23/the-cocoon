const {Schema, model} = require("mongoose")
const reactionSchema = require("./Reaction")

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true, 
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date, 
            default: Date.now //use a getter method to format the timestamp on query
        },
        //the user that created this thought
        username: {
            type: String,
            required: true
        },
        //these are like replies
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length
})

const Thought = model("thought", thoughtSchema);

module.exports = Thought;