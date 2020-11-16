const { accountSid, authToken } = require("./config");

var client = require("twilio")(accountSid, authToken);
// console.log(client);
client.calls.create(
  {
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+84984968364",
    from: "+12543748441",
  },
  function (err, call) {
    console.log(err, call);
  }
);
