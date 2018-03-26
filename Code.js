var inputs = [0,0,1,0];
var weights = [0,0,0,0];

// These are vectors.  The inputVector takes the inputs.  The weights vector
// takes the weights.

var desiredResult = 1;

// Desired desired, which for this example is the integer, 1.
var learningRate = 0.20;

var error;

var trials = 6;

// Arbitrary number of times we will trial the neural network.

var neuralNetResult;

// Stores the actual result after running the evaluateNeuralNetwork function.

// Learning rate - the bigger, the faster it learns.

function evaluateNeuralNetwork(inputVector, weightVector) {
  var result = 0;
  inputVector.forEach(function(inputValue, weightIndex) {
    layerValue = inputValue * weightVector[weightIndex];
    result += layerValue;
  });
  return (result.toFixed(2));
}

function evaluateNeuralNetError(desired, actual) {
  return (desired - actual).toFixed(2);
}

function learn(inputVector, weightVector) {
  weightVector.forEach(function(weight, index, weights) {
    if (inputVector[index] > 0) {
      weights[index] = (weight + learningRate);
    }
  });
}

// Evaluates difference between the NN result, i.e. outcome of
// evaluateNeuralNetwork function AND the desired result, i.e. value of
// desiredResult.
//
// After evaluating both the Network and the Error we would get:
// 'Neural Net output: 0.00 Error: 1'

function train(trials) {
  for (i = 0; i < trials; i++) {
    neuralNetResult = evaluateNeuralNetwork(inputs, weights);
    console.log("Neural Net output: " + neuralNetResult + " Error: " + evaluateNeuralNetError(desiredResult, neuralNetResult) + " Weight Vector: " + weights);
    learn(inputs, weights);
  }
}

train(trials);
