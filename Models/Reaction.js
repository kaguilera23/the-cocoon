const {Schema, model} = require("mongoose")

//this is not a model, will be used as reaction schema in Thought Model
const reactionSchema = new Schema(
    {
         reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
          },
          reactionBody: {
            type: String,
            required: true, 
            max: 280
          },
          username: {
            type: String,
            required: true
          },
          createdAt: {
            type: Date,
            default: Date.now //use a getter method to format the timestamp on query
          }
    }
)