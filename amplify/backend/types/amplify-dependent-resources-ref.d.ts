export type AmplifyDependentResourcesAttributes = {
    "api": {
        "personalwebsite": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "function": {
        "contactformuploader": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "auth": {
        "personalwebsite": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "analytics": {
        "personalwebsite": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    },
    "storage": {
        "s3personalwebsitestoraged1o1cjjffo6jmz": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}