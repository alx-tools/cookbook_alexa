// Alexa Skill application ID
var APP_ID = "amzn1.ask.skill.3f75ce0b-1fe6-4748-a438-88f5da60c973";

// Import AlexaSkill
var AlexaSkill = require('./AlexaSkill');

// Import recipes
var recipes = require('./recipes');


// Create the application
var LetsCook = function () {
    AlexaSkill.call(this, APP_ID);
};
LetsCook.prototype = Object.create(AlexaSkill.prototype);
LetsCook.prototype.constructor = LetsCook;

/*
  Start event
*/
LetsCook.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    response.ask("Welcome to your cookbook, what do you want to cook?");
};

/*
  Get recipes from ingredient
*/
var getRecipes = function(ingredient) {
    var result = [];

    if (ingredient == 'cucumber') {
        result = [recipes[3]];
    }
    else if (ingredient == 'avocado') {
        result = [recipes[2], recipes[0]];
    }
    else if (ingredient == 'tomatoe') {
        result = [recipes[3], recipes[4]];
    }
    else if (ingredient == 'turkey') {
        result = [recipes[1]];
    }
    return result;
};

/*
  Execute a recipe
*/
var doRecipe = function(ingredient, session, response) {
    var recipe = getRecipes(ingredient)[0];
    var step = 0
    session.attributes = {};
    session.attributes['recipe'] = recipe;
    session.attributes['step'] = step + 1;

    text = "Ok let’s start. Step " + (step+1) + ", " + recipe['directions'][step];
    response.tell(text, false);
};

/*
  Mapping between intent and action to do
*/
LetsCook.prototype.intentHandlers = {
    "LetsCookIntentFridge": function (intent, session, response) {
        session.attributes['just_asked'] = 0;
        response.tell("Well, you haven't gone shopping in 4 days, so you only have cucumbers, avocados and turkey breast. No wait, your turkey is out of date", false);
    },
    "LetsCookIntentRecipe": function (intent, session, response) {
        if (!session.attributes) session.attributes = {};
        session.attributes['just_asked'] = 1;
        response.ask("We can do a tomato and cucumber salad if you want");
    },
    "LetsCookIntentValidRecipe": function (intent, session, response) {
        if (!session.attributes) session.attributes = {};
        if (session.attributes['just_asked'] == 1) {
            doRecipe("tomatoe", session, response);
        }
        else {
            response.tell("", false);
        }
    },
    "LetsCookIntentPushUp": function (intent, session, response) {
        response.tell("Indeed, you haven't done push ups in 2 days, Ready? Steady? Go!", false);
    },
    "LetsCookIntentNextStep": function (intent, session, response) {
        var text = "It’s finished, well done";
        var recipe = session.attributes['recipe'];
        var step = session.attributes['step'];
        if (!recipe) {
            response.ask("What do you want to cook?", false);
        }
        else if (step < recipe['directions'].length) {
            text = "Step " + (step+1) + ": " + recipe['directions'][step];
            session.attributes['step'] = step + 1;
            response.tell(text, false);
        }
        else {
            response.tell(text, true);
        }
    },
    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("What do you want to cook now?");
    }
};

// Start the application
exports.handler = function (event, context) {
    var letscook = new LetsCook();
    letscook.execute(event, context);
};
