import { sampleCount, bpm } from './common'
import createLeadSound from '../../MusicSamples/Lead'
import { addNotes, offsetNotes } from '../../SongGeneration'

function commonPart (offset) {
  return offsetNotes([
    [48, 5],
    [48, 1],
    [48, -2],
    [50, 1],
    [50, -2],
    [50, -7],
    [52, 3],
    [52, -2],
    [52, -6],
    [54, 0],
    [54, -2],
    [54, -6],
    [56, 1],
    [56, -2],
    [56, -6],
    [58, -2],
    [58, -6],
    [58, -9],
    [60, -4],
    [60, -7],
    [60, -11],
    [62, 0],
    [62, -4],
    [62, -7],
    [64, -6],
    [64, -11],
    [65.5, -2],
    [65.5, -6],
    [67, 1],
    [67, -4],

    [72, -6],
    [72, -11],
    [73.5, -2],
    [73.5, -6],
    [75, 1],
    [75, -4]
  ], offset)
}

export function createLeadTrack() {
  const output = new Float32Array(sampleCount)

  addNotes(offsetNotes([
    [0, 5],
    [1, 1],
    [1.5, 0],
    [2, -2],
    [3, 1],
    [3.5, 0],

    [4, -2],
    [5.5, 1],
    [6, 5],
    [7, 3],
    [7.5, 1],

    [8, 0],
    [8.5, -2],
    [9, -4],
    [9.5, -7],
    [10, 3],
    [11, 5],

    [12, 1],
    [13, -2],
    [14, 0],
    [14.5, -4],
    [15, -2],
    [15.5, -7],

    [16, -6],
    [16.5, 3],
    [17.5, 6],
    [18, 10],
    [19, 8],
    [19.5, 6],

    [20, 5],
    [21.5, 1],
    [22, 5],
    [23, 1],
    [23.5, 0],
    [24, -2],
    [25.5, -7],
    [26, -2],
    [26.5, 1],
    [27, 5],
    [27.5, 3],
    [28, 1],
    [29, -2],
    [30.04, 0],
    [29.96, -3],

    [32.5, -2],
    [33.5, 1],
    [34, 5],
    [35, 10],
    [35.5, 8],
    [36, 5],
    [37.5, 1],
    [38, 5],
    [39, 3],
    [39.5, 1],

    [40, 0],
    [41, 1],
    [41.5, 3],
    [42, 5],
    [42.5, 0],
    [43, -2],
    [43.5, -3],
    [44, -2],
    [45, -7],
    [46, -14],

    ...commonPart(0),

    // Non-common inside common part:
    [68, 3],
    [68, -2],
    [69, 1],
    [69, -2],
    [69.5, 0],
    [69.5, -2],
    [70, 1],
    [70, -4],
    [71, 0],
    [71, -4],

    [76, 3],
    [76, 0],
    [77, 1],
    [77, -4],
    [77.25, 0],
    [77.25, -4],
    [77.75, 0],
    [77.75, -3],
    [79, -7],
    [79, -12],

    [80, 5],
    [81, 1],
    [81.5, 0],
    [82, -2],
    [83, 1],
    [83.25, 0],
    [83.75, -2],
    [84.5, -2],
    [85.25, -2],
    [85.5, 1],
    [86, 5],
    [87, 3],
    [87.5, 1],
    [88, 0],
    [88.5, -2],
    [89, -4],
    [89.25, -7],
    [90, 3],
    [91, 5],
    [92, 1],
    [93, -2],
    [94, 0],
    [94.5, -4],
    [95, -2],
    [95.25, -7],
    [95.75, -6],
    [96.5, 3],
    [97.5, 6],
    [98, 10],
    [98.5, 10],
    [99, 8],
    [99.25, 6],
    [99.75, 5],
    [101.5, 1],
    [102, 5],
    [102.5, 5],
    [102.75, 1],
    [103.25, 0],
    [103.75, -2],
    [104.5, -2],
    [105.25, -2],
    [105.5, -7],
    [106, -2],
    [106.5, 1],
    [107, 5],
    [107.25, 3],
    [107.75, 1],
    [108.5, 1],
    [109, -2],
    [110.04, 0],
    [109.96, -3],
    [112.5, -2],
    [113.5, 1],
    [114, 5],
    [114.5, 5],
    [115, 10],
    [115.25, 8],
    [115.75, 5],
    [116.5, 5],
    [117.25, 5],
    [117.5, 1],
    [118, 5],
    [118.5, 5],
    [119, 3],
    [119.25, 1],
    [119.75, 0],
    [120.5, 0],
    [121, 1],
    [121.5, 3],
    [122, 5],
    [122.5, 0],
    [123, -2],
    [123.25, -3],
    [124, -2],
    [125, -7],
    [125.5, -6],
    [125.75, -7],
    [126, -14],

    ...commonPart(80),

    // Non-common inside common part:
    [148, 3],
    [148, -2],
    [149, 1],
    [149, -2],
    [149.25, 0],
    [149.25, -2],
    [149.75, 0],
    [149.75, -2],
    [151, -4],
    [151, -7],

    [156, 3],
    [156, 0],
    [157, 1],
    [157, -4],
    [157.5, 0],
    [157.5, -4],
    [158, 0],
    [158, -3],
    [158, -7],
    [159, -7],
    [159, -12],
    [159, -15],

  ], 16), output, createLeadSound, bpm)

  return output
}
