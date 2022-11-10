//define
const { Schema, model } = require("mongoose");
const reaction = require("./Reaction");

//new schema model will inout info from reaction
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (date) => {
        if (date) return date.toISOString().split("T")[0];
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//define model
const Thought = model("thought", thoughtSchema);

//schema settings
userSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

module.exports = Thought;
