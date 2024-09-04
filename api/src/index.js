const { app } = require('@azure/functions');

app.setup({
    enableHttpStream: true,
});

module.exports = async function (context, req) {
    context.res = {
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            message: 'Hello, world!'
        }
    };
};

// module.exports = async function (context, req) {
//     context.res = {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: {
//             message: 'Hello, world!'
//         }
//     };
// };