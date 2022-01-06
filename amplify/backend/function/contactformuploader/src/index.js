const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const name = streamedItem.dynamodb.NewImage.name.S
      const email = streamedItem.dynamodb.NewImage.email.S
      const message = streamedItem.dynamodb.NewImage.message.S

      await ses
          .sendEmail({
            Destination: {
              ToAddresses: [process.env.SES_EMAIL],
            },
            Source: process.env.SES_EMAIL,
            Message: {
              Subject: { Data: 'Website Contact Submission' },
              Body: {
                Text: { 
                  Data: `Name: ${name}\nEmail: ${email}\n\n${message}`
                },
              },
            },
          })
          .promise()
    }
  }
  return { status: 'done' }
}