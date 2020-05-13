// this is for input request json validator
module.exports = {
    type: "object",
    properties: {
        min: { type: "string" },
    },
    required: ["min"],
};
