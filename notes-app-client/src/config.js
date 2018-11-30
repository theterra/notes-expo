export default {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notesexpo"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://ecbmfqh1og.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_5VC6UN5fV",
      APP_CLIENT_ID: "6mhf5e16qhmqd10r2a3qho5qkp",
      IDENTITY_POOL_ID: "us-west-2:c1cb77f0-225d-4c90-8ff0-bcbb147457c5"
    },
    MAX_ATTACHMENT_SIZE: 5000000
  };