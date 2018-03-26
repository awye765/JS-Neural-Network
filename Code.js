var inputs [0,1,0,0];
var weights = [0,0,0,0];

// These are vectors

var desiredResult = 1;

// Desired desired, which for this example is the integer, 1.

var neuralNetResult = evaluateNeuralNetwork(inputs, weights)

// Stores the actual result after running the evaluateNeuralNetwork function.

function evaluateNeuralNetwork(inputVector, WeightVector) {
  var result = 0;
  inputVector.forEach(function(inputValue, weightIndex) {
    layerValue = inputValue*WeightVector[weightIndex];
      result += layerValue;
  });
  return (result.toFixed(2));
}

function evaluateNeuralNetError(desired, actual) {
  return (desired - actual);
}

// Evaluates difference between the NN result, i.e. outcome of
// evaluateNeuralNetwork function AND the desired result, i.e. value of
// desiredResult.
//
// After evaluating both the Network and the Error we would get:
// 'Neural Net output: 0.00 Error: 1'

console.log("Neural Net output: " + neuralNetResult + " Error: " + evaluateNeuralNetError(desiredResult, neuralNetResult));

// Runs NN in the console.  Returns 'Neutral Net output: 1'
