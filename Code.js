var inputs [0,1,0,0];
var weights = [0,0,0,0];

// These are vectors.  The inputVector takes the inputs.  The weights vector
// takes the weights.

var desiredResult = 1;

// Desired desired, which for this example is the integer, 1.

var neuralNetResult = evaluateNeuralNetwork(inputs, weights)

// Stores the actual result after running the evaluateNeuralNetwork function.

var learningRate = 0.20;

// Learning rate - the bigger, the faster it learns.

function evaluateNeuralNetwork(inputVector, weightVector) {
  var result = 0;
  inputVector.forEach(function(inputValue, weightIndex) {
    layerValue = inputValue * weightVector[weightIndex];
    result += layerValue;
  });
  return (result.toFixed(2));
}

function learn(inputVector, weightVector) {
  weightVector.forEach(function(weight, index, weights) {
    if (inputVector[index] > 0) {
      weights[index] = weight + learningRate;
    }
  });
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

// Original weight vector: [0,0,0,0]
// Neural Net output: 0.00 Error: 1

learn(inputs, weights);
console.log(weights);

console.log("Neural Net Output: " + neuralNetResult + " Error: " + evaluateNeuralNetError(desiredResult, neuralNetResult));

// New Weight vector: [0,0.20,0,0]
// Neural Net output: 0.20 Error: 0.8 
// If it is not apparently obvious, a Neural Net output closer to 1
// (chicken dinner) is what we want, so we are heading in the right
// direction
