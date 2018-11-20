exports.handler = function(event, context, callback) {
  console.log('this function was triggered');

  callback(null, {
    statusCode: 200,
    body: 'the function was triggered',
  });
};
