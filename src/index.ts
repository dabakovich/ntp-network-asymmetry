import fs from 'fs';
import { NeuralNetwork, utilities } from 'brain.js';
import { dataset } from './dataset';

const net = new NeuralNetwork<number[], number[]>({
  hiddenLayers: [18, 9],
  log: true,
  // iterations: 1000,
  errorThresh: 0.0005,
});

const trainingDataset = dataset.slice(0, 20);
const testDataset = dataset.slice(20, 30);

net.train(trainingDataset);
// net.train(dataset);

// Show net model structure
// console.log(net.toJSON());

const svg = utilities.toSVG(net.toJSON());

const saveSvg = (svg: string) => {
  fs.writeFileSync('net.svg', svg);
};

saveSvg(svg);

for (const data of testDataset) {
  const output = net.run(data.input);
  console.log('Expected:', data.output, 'Predicted:', output[0].toFixed(2));
}
