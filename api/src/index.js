const { app } = require('@azure/functions');

app.setup({
    enableHttpStream: true,
});

module.exports = async function (context, req) {
    context.res.json({
        text: "Hello from the API"
    });
};