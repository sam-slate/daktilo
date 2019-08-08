//2D array that contains all dose info
//  The first array contains the half life and absorption time
//  Each array after contains the initial dose and time taken of a //    dose

var dose_info = [
  [document.getElementById("initial_dose_1").value, document.getElementById("time_taken_1").value],
  [document.getElementById("initial_dose_2").value, document.getElementById("time_taken_2").value],
  [document.getElementById("initial_dose_3").value, document.getElementById("time_taken_3").value],
  [document.getElementById("initial_dose_4").value, document.getElementById("time_taken_4").value],
  [document.getElementById("initial_dose_5").value, document.getElementById("time_taken_5").value]
];

function pull_dose_info(){
  dose_info = [
    [document.getElementById("initial_dose_1").value, document.getElementById("time_taken_1").value],
    [document.getElementById("initial_dose_2").value, document.getElementById("time_taken_2").value],
    [document.getElementById("initial_dose_3").value, document.getElementById("time_taken_3").value],
    [document.getElementById("initial_dose_4").value, document.getElementById("time_taken_4").value],
    [document.getElementById("initial_dose_5").value, document.getElementById("time_taken_5").value]
  ];
}

var colors = [
  "#5619b3",
  "#109c14",
  "#9e7106",
  "#06489e",
  "#780000"
]

var global_half_life = document.getElementById("half_life").value;
var global_absorption_time = document.getElementById("absorption_time").value;
var global_max_time = 0
var global_max_val = 0
var global_min_time = 0
var global_min_val = 0
var display_overall_min = true 
var display_overall_max = true
var display_initial_doses = true
var display_levels_after_absorption = true
var display_levels_before_taking = true

function single_dose_func(x, initial_dose, time_taken, half_life, absorption_time) {
  var func_result = (initial_dose * Math.pow((1 / 2), (JXG.Math.Statistics.mod(x - time_taken, 24, Math) / half_life))) / (1 - Math.pow((1 / 2), 24 / half_life))
  if ((x - time_taken) < absorption_time && (x - time_taken) >= 0){ //if absorption is happening
    //Multiply by a linear function to simulate absorption.
    multiplier_helper = Math.pow((1/2), (24/half_life))
    multiplier = ((1 - multiplier_helper)/absorption_time) * (x - time_taken) + multiplier_helper
    func_result *= multiplier
    /* func_result *= (((1/2) / absorption_time) * (x - time_taken) + .5) */;
    //return 5
  }
  return func_result
}

function get_max_time(){
  max = 0
  max_time = 0
  for (var i = 0; i <= 24; i++){
    val = all_doses_func(i)
    if (val > max){
      max = val
      max_time = i
    }
  }
  
  console.log(max)
  console.log(max_time)
  
  global_max_time = max_time
  global_max_val = max
}

function get_min_time(){
  min = 10000
  min_time = 0
  for (var i = 0; i <= 24; i++){
    val = all_doses_func(i)
    if (val < min){
      min = val
      min_time = i
    }
  }
  
  global_min_time = min_time
  global_min_val = min
}

function all_doses_func(x){
  return_val = 0
  for (var i = 0; i < 5; i++){
    if (dose_info[i][0] != 0){
      return_val += single_dose_func(x, dose_info[i][0], dose_info[i][1], global_half_life, global_absorption_time)
    }
  }
  return return_val
}

function draw_graph_click() {
  global_half_life = document.getElementById("half_life").value
  global_absorption_time = document.getElementById("absorption_time").value;
  
  pull_dose_info()

  get_max_time()
  get_min_time()

  draw_board()
}

function new_board() {
  return JXG.JSXGraph.initBoard('jxgbox', {
    boundingbox: [-4, global_max_val * 1.2, 28, - global_max_val / 5],
    axis: false
  })
}

function draw_board() {
  board = new_board()

  board.create('functiongraph', [all_doses_func, 0, 24]);

  xaxis = board.create('axis', [
      [0, 0],
      [1, 0]
    ], {
      name: 'Time',
      withLabel: true,
      label: {
        position: 'rt', // possible values are 'lft', 'rt', 'top', 'bot'
        offset: [-30, 20] // (in pixels)
      }
  });

  yaxis = board.create('axis', [
      [0, 0],
      [0, 1]
    ], {
      name: 'Medication Level',
      withLabel: true,
      label: {
        position: 'rt', // possible values are 'lft', 'rt', 'top', 'bot'
        offset: [-20, -10] // (in pixels)
      }
  });
  
  if (document.getElementById("show_overall_max").checked == true){
    board.create('point', [global_max_time, global_max_val], {
      name: 'Overal Maximum',
      size: 3
    });
  }
  
  if (document.getElementById("show_overall_min").checked == true){
    board.create('point', [global_min_time, global_min_val], {
      name: 'Overal Minimum',
      size: 3
    });
  }
  
  for (var i = 0; i < 5; i++){
    if (dose_info[i][0] != 0){
      num_of_dose = i + 1
      
      initial_dose = dose_info[i][0]
      time_taken = dose_info[i][1]

      if (document.getElementById("show_initial_doses").checked == true){
        board.create('point', [time_taken, initial_dose], {
          name: 'D' + num_of_dose + ' Initial Dose',
          size: 3,
          fillColor: colors[i],
          strokeColor: colors[i]
        });
       }
       
       if (document.getElementById("show_level_before").checked == true){
        board.create('point', [time_taken - 0.01, all_doses_func(time_taken - 0.01)], {
          name: 'D' + num_of_dose + ' Level Before Taking',
          size: 3,
          fillColor: colors[i],
          strokeColor: colors[i]
        })
       }
       
       if (document.getElementById("show_level_after").checked == true){
        board.create('point', [parseFloat(time_taken) + parseFloat(global_absorption_time), all_doses_func(parseFloat(time_taken) + parseFloat(global_absorption_time))], {
          name: 'D' + num_of_dose + ' Level After Full Absorption',
          size: 3,
          fillColor: colors[i],
          strokeColor: colors[i]
        })
       }
    }
/* 
    board.create('point', [12, med_func(12)], {
      name: 'Noon',
      size: 3
    })
    board.create('point', [24, med_func(24)], {
      name: 'Midnight',
      size: 3
  }) */
  }
}

get_max_time()
get_min_time()
draw_board()



