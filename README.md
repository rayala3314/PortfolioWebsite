# Portfolio Website

Welcome to the my Portfolio Website repository! This project utilizes a suite of AWS services to provide a high-performance, scalable, and interactive portfolio site. Below is an overview of the architecture, services used, and deployment process.

## Architecture Overview

1. **Static Hosting**:
   - **S3 Bucket**: Hosts the static files of the portfolio website, including HTML, CSS, JavaScript, documents, and images.

2. **Content Delivery**:
   - **CloudFront**: Caches the static files from the S3 Bucket to ensure faster load times and global distribution.

3. **Dynamic Features**:
   - **Lambda Function**: Manages the dynamic contact form. It processes the form submissions and interacts with other AWS services.

4. **API Management**:
   - **API Gateway**: Acts as an endpoint to trigger the Lambda function, passing the contact form payload to it.

5. **Email Handling**:
   - **AWS SES**: Used by the Lambda function to send formatted email notifications based on the contact form submissions.

## Deployment

This repository uses GitHub Actions for continuous deployment. The deployment process is defined in the `deploy` workflow and includes the following steps:

1. **Configure AWS Credentials**:
   - Assumes an AWS IAM role with a trust relationship configured with the Github Identity Provider (IdP) to authenticate and gain the permissions attached to the role.

2. **Sync Changes to S3 Bucket**:
   - Deploys or "syncs" changes to the S3 Bucket where the static files are hosted. This ensures the latest version of the website is available.

3. **Invalidate CloudFront Cache**:
   - Invalidates the CloudFront cache to make sure that the newly updated files are served to users immediately.

4. **Send Slack Notification**:
   - Sends a notification to a designated Slack channel with the result of the deployment, including any errors or success messages.
