//define
const { Schema } = require("mongoose");

//schema model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: new ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (date) => {
        if (date) return date.toISOString().split("T")[0];
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//export
module.exports = reactionSchema;
