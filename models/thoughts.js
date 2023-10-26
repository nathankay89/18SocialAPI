const { Schema, model } = require("mongoose");
const Reaction = require("./reactions");


// Schema to create Thought model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        require: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [Reaction],
},
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

thoughtSchema.path("createdAt").get(function (timestamp) {
    return formatDate(timestamp);
});

function formatDate(timestamp) {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };
    return new Date(timestamp).toLocaleString(undefined, options);
}

// Virtual to get total count of reactions on retrieval
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// Create the Thought model using the thoughtSchema
const Thought = model("thought", thoughtSchema);

module.exports = Thought;