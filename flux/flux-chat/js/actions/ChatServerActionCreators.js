var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');

var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

    receiveAll: function (rawMessages) {
        console.log('开始执行flux数据流！');
        ChatAppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_MESSAGES,
            rawMessages: rawMessages
        });
    },

    receiveCreatedMessage: function (createdMessage) {
        ChatAppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_CREATED_MESSAGE,
            rawMessage: createdMessage
        });
    }

};
