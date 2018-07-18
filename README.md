# Career Page
This project was created during the **Future-Hackdays** at IS24. It's a simple ReactJs webapplication that serves a modern career page specially for the engineering department at Scout24.

After some improvements, it is now turned into a general career page.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Development
1. Clone the project
2. run npm install within the project folder
3. run npm start

## Deployment

### Website
Using [Teamcity](https://teamcity.rz.is/project.html?projectId=EngineeringCareerPage)
 the files are build to a static web application, which is hosted on S3.
 
### Infrastructure
- Login to `s24-job-board` with PowerUserAccess using [scloud](https://docs.cloud.scout24.com/aws-accounts_cli-access.html)
- Deploy the s3 bucket manually using the awscli
```
aws cloudformation deploy --region eu-west-1 --stack-name job-board-bucket --template-file infrastructure/templates/s3-bucket.yml --parameter-overrides domainName=job-board.scout24.com
```
 
## Dependencies

Current job openings are requested from the Greenhouse API for Scout24.
 
