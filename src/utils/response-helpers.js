const success = (message, obj) => {
    obj.success = true;
    obj.message = message;
    return obj;
};

const fail = (message, obj) => {
    obj.success = false;
    obj.message = message;
    return obj;
};

module.exports = {
    success,
    fail,
};
