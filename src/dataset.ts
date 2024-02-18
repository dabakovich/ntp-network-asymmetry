/**
 * Dataset for ML model that uses for input network speed, ping, network type and outputs asymmetry in NTP protocol receive/response delays
 * [downloadSpeed (in MB/s), uploadSpeed (in MB/s), ping (in ms), roundTripDelay (in ms), isWiFi, is5g, is4g, is3g, is2g] => [asymmetry]
 *
 * If asymmetry is 1, then NTP protocol receive delay is equal to response delay
 * if asymmetry is less than 1, then NTP protocol receive delay is less than response delay
 *
 * asymmetry = ntpRequestDelay / ntpResponseDelay
 * roundTripDelay = ntpRequestDelay + ntpResponseDelay
 *
 * It should be used for calculating more accurate NTP offset:
 * https://en.wikipedia.org/wiki/Network_Time_Protocol#Clock_synchronization_algorithm
 *
 */
export const dataset = [
  { input: [100, 100, 10, 60, 1, 0, 0, 0, 0], output: [1] },
  { input: [50, 50, 20, 80, 1, 0, 0, 0, 0], output: [0.9] },
  { input: [30, 30, 30, 120, 0, 1, 0, 0, 0], output: [0.85] },
  { input: [20, 20, 40, 160, 0, 0, 1, 0, 0], output: [0.8] },
  { input: [10, 10, 50, 200, 0, 0, 0, 1, 0], output: [0.75] },
  { input: [5, 5, 60, 240, 0, 0, 0, 0, 1], output: [0.7] },
  { input: [100, 50, 15, 70, 1, 0, 0, 0, 0], output: [0.95] },
  { input: [70, 70, 25, 100, 0, 1, 0, 0, 0], output: [0.88] },
  { input: [40, 40, 35, 140, 0, 0, 1, 0, 0], output: [0.82] },
  { input: [25, 25, 45, 180, 0, 0, 0, 1, 0], output: [0.77] },
  { input: [10, 5, 55, 220, 0, 0, 0, 0, 1], output: [0.72] },
  { input: [90, 90, 18, 72, 1, 0, 0, 0, 0], output: [0.97] },
  { input: [60, 60, 28, 112, 0, 1, 0, 0, 0], output: [0.89] },
  { input: [35, 35, 38, 152, 0, 0, 1, 0, 0], output: [0.83] },
  { input: [20, 15, 48, 192, 0, 0, 0, 1, 0], output: [0.78] },
  { input: [7, 7, 62, 248, 0, 0, 0, 0, 1], output: [0.73] },
  { input: [80, 80, 22, 88, 1, 0, 0, 0, 0], output: [0.96] },
  { input: [50, 50, 32, 132, 0, 1, 0, 0, 0], output: [0.87] },
  { input: [30, 25, 42, 172, 0, 0, 1, 0, 0], output: [0.81] },
  { input: [15, 10, 52, 212, 0, 0, 0, 1, 0], output: [0.76] },

  //
  { input: [90, 90, 20, 80, 1, 0, 0, 0, 0], output: [0.96] },
  { input: [60, 60, 30, 120, 0, 1, 0, 0, 0], output: [0.88] },
  { input: [35, 35, 40, 160, 0, 0, 1, 0, 0], output: [0.82] },
  { input: [20, 20, 50, 200, 0, 0, 0, 1, 0], output: [0.76] },
  { input: [10, 10, 60, 240, 0, 0, 0, 0, 1], output: [0.7] },
  { input: [80, 80, 25, 100, 1, 0, 0, 0, 0], output: [0.94] },
  { input: [50, 50, 35, 140, 0, 1, 0, 0, 0], output: [0.86] },
  { input: [30, 30, 45, 180, 0, 0, 1, 0, 0], output: [0.8] },
  { input: [15, 15, 55, 220, 0, 0, 0, 1, 0], output: [0.74] },
  { input: [5, 5, 65, 260, 0, 0, 0, 0, 1], output: [0.68] },
];

export const testDataset = [
  { input: [90, 90, 20, 80, 1, 0, 0, 0, 0], output: [0.96] },
  { input: [60, 60, 30, 120, 0, 1, 0, 0, 0], output: [0.88] },
  { input: [35, 35, 40, 160, 0, 0, 1, 0, 0], output: [0.82] },
  { input: [20, 20, 50, 200, 0, 0, 0, 1, 0], output: [0.76] },
  { input: [10, 10, 60, 240, 0, 0, 0, 0, 1], output: [0.7] },
  { input: [80, 80, 25, 100, 1, 0, 0, 0, 0], output: [0.94] },
  { input: [50, 50, 35, 140, 0, 1, 0, 0, 0], output: [0.86] },
  { input: [30, 30, 45, 180, 0, 0, 1, 0, 0], output: [0.8] },
  { input: [15, 15, 55, 220, 0, 0, 0, 1, 0], output: [0.74] },
  { input: [5, 5, 65, 260, 0, 0, 0, 0, 1], output: [0.68] },
];
