## Create an Amazon Echo Cooking App
Amazon Echo is a speakerphone that contains your personal assistant, Alexa.
She can do all sorts of things for you: play music, tell you the weather forecast, take amazon.com orders, and more.
We've created a cooking application that will contain your favorites recipes.
Alexa will be able to tell you what to do, step by step, when you want to cook one of them.


## Amazon Alexa Documentation
The documentation for the Alexa Skills Kit is available on the [Amazon Apps and Services Developer Portal](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/).

## Contents
- [IntentSchema.json](speechAssets/IntentSchema.json) : all intent keys to generate actions. "Keys"
- [Utterances.txt](speechAssets/Utterances.txt) : all utterances known by Alexa to start an actios. "Words or sentences to activate a key"
- [AlexaSkill.js](src/AlexaSkill.js) : Alexa engine in JS
- [recipes.js](src/recipes.js) : array of all recipes available
- [index.js](src/index.js) : main program of Alexa. Mapping between key events and actions generated


## About Holberton School
![Holberton School logo](http://photos2.meetupstatic.com/photos/event/3/0/0/8/600_446112296.jpeg)

Holberton school is a community-driven school.
We train full-stack software engineers in two years, using peer and project-based learning.
At Holberton School, there are no formal teachers and no lectures, student learn by building.
Read more on [our website](https://www.holbertonschool.com/).


## Usage
Tell Alexa "Let's cook!" You can ask Alexa what you have in your fridge or start a recipe with tomato, cucumber, avocado, or turkey.
All words/sentences understandable by Alexa are in the file Utterances.txt


## Deploy
To deploy your application to Amazon Echo:

- create a zip archive with all `.js` files from `src/`
- upload and save this archive in your AWS Lambda application [my application](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/cook?tab=code)
- copy contents of `IntentSchema.json` and `Utterances.txt`, paste it in AWS Alexa Skill portal [my application](https://developer.amazon.com/edw/home.html#/skill/amzn1.ask.skill.3f75ce0b-1fe6-4748-a438-88f5da60c973/en_US/intentSchema/list) and save
- when it's done loading, Alexa is ready


## Resources
Here are a few direct links to our documentation:

- [Using the Alexa Skills Kit Samples (Node.js)](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/using-the-alexa-skills-kit-samples)
- [Getting Started](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/getting-started-guide)
- [Invocation Name Guidelines](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/choosing-the-invocation-name-for-an-alexa-skill)
- [Developing an Alexa Skill as an AWS Lambda Function](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function)
