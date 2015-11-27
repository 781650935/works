
var ChatApp = require('./components/ChatApp.react');
var ChatExampleData = require('./ChatExampleData');
var ChatWebAPIUtils = require('./utils/ChatWebAPIUtils');
var React = require('react');

window.React = React;
ChatExampleData.init();

ChatWebAPIUtils.getAllMessages();

React.render(
    <ChatApp />,
    document.getElementById('react')
);