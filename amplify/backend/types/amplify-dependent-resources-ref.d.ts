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
            "IdentityPoolName": "string"
        }
    },
    "analytics": {
        "personalwebsite": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    }
}