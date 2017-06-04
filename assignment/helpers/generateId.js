module.exports = {
    generateId: generateId
};

function generateId() {
    return (new Date()).getTime().toString();
}