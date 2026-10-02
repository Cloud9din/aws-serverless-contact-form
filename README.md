# AWS Serverless Contact Form

A serverless contact form built with HTML, CSS, JavaScript and AWS services including Lambda, API Gateway, IAM and Amazon SES.

## Live Demo

https://cloud9din.github.io/aws-serverless-contact-form/

## Screenshot

![AWS Serverless Contact Form](screenshot.png)

## Features

- Responsive contact form
- Client-side form validation
- Character counter
- Loading state during submission
- Success and error messages
- AWS API Gateway integration
- AWS Lambda backend
- IAM permissions
- Amazon SES email integration
- CORS configuration
- Environment variables for email settings
- Responsive design for desktop and mobile

## Architecture

Contact Form → API Gateway → AWS Lambda → Amazon SES

## Technologies Used

- HTML5
- CSS3
- JavaScript
- AWS Lambda
- Amazon API Gateway
- Amazon SES
- AWS IAM
- Git
- GitHub
- GitHub Pages

## How It Works

1. The user completes the contact form.
2. JavaScript validates the form data.
3. The form sends a POST request to Amazon API Gateway.
4. API Gateway invokes the AWS Lambda function.
5. Lambda processes and validates the submitted data.
6. Amazon SES handles the email notification.
7. The website displays a success or error message.

## AWS Configuration

The project uses:

- AWS Lambda environment variables
- IAM execution permissions
- API Gateway HTTP API
- CORS configuration
- Amazon SES verified email identity

## Troubleshooting

During development, I worked through issues including:

- API Gateway CORS configuration
- Browser preflight requests
- Lambda permissions
- SES verification
- Environment variables
- Frontend-to-backend API connectivity
- Testing Lambda functions
- Browser developer tools and network debugging

## What I Learned

This project helped me practise:

- Building a serverless application
- Connecting JavaScript to a cloud API
- Creating and testing AWS Lambda functions
- Configuring API Gateway
- Working with IAM permissions
- Using environment variables
- Configuring CORS
- Integrating Amazon SES
- Troubleshooting browser and AWS errors
- Deploying a live project with GitHub Pages

## Project Status

The frontend, API Gateway and Lambda integration are working successfully.

Amazon SES is configured and accepting email requests. Email deliverability is being further tested and refined.
