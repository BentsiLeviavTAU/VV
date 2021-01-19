var welcome_block = {
    type: 'instructions',
    pages: [
        "<p>Welcome!</p> " +
        "<p>In this study, you will complete a simple task in which you will be asked to select a picture or word that is similar to the original.</p>" +
        "<p>In addition to the task, there are some questions about your beliefs, attitudes, opinions, and some standard demographic questions.</p>" +
        "<p>This study should take about 15 minutes to complete. At the end, you will recieve your result along with a PIN code. You will input this PIN code in the MTurk page to recieve your payment.</p>" +
        "<p>We thank you for being here.</p>" +
        "<p><strong>Note: This test contains several questions about your attitudes and beliefs, which are optional. No personally identifying information is collected, and all of the data collected on this site is completely confidential.</strong></p>" +
        "<p>If you wish to proceed and take the test, please click 'next'.</p>"],
    allow_keys: false,
    show_clickable_nav: true
}

var instructions_block = {
    type: "instructions",
    pages: ["<p style='font-size:0.8em;text-align:center;'>Page 1 of 3</p>" +
    "<p>In this first task, you will see an item that has three features: shape, color, and texture.</p> " +
    "<p>Subsequently, the item will disappear and you will see two items. One item shares <strong>two features</strong> with the original item, and the other shares only <strong>one feature</strong>.</p>" +
    "<p>Your task is to determine which of the two items is <strong>MORE SIMILAR</strong> to the original.</p>" +
    "<p>Please use the <strong>right arrow</strong> and the <strong>left arrow</strong> keys to select the picture or word that is more similar to the original item.</p> " +
    "<img style ='display: block; margin: auto;height: 40%;' src= 'ImageFiles/t1.bmp' alt='Picture'>" +
    "<p>For example, this picture is <strong>blue, heart, and spirals</strong>.</p>",
        "<p style='font-size:0.8em;text-align:center;'>Page 2 of 3</p>" +
        "<img style='display: block; margin: auto; height: 40%;'src= 'ImageFiles/p1.bmp' alt='Picture'>" +
        "<p>In this example, the left item is similar to the original item in two features,<strong>color and shape</strong>, whereas the right item is similar to the original item only in one feature, <strong>texture</strong>.</p>" +
        "<p>Therefore, you should press the <strong>left arrow key</strong> to indicate that the left item is more similar to the original item than the right item.</p>",
        "<p style='font-size:0.8em;text-align:center;'>Page 3 of 3</p>" +
        "<p>Sometimes the item will appear as pictures, whereas in other times, they will appear as words.</p>" +
        "<p>Whether you make a choice fast or slow, <strong>the items will disappear after a few seconds.</strong></p>" +
        "<p>Accuracy and speed are both important, <strong>so try to answer as fast as possible without making mistakes.</strong></p>" +
        "<p>Please start the task whenever you are ready.</p><br><br><br><br><br><br><br><br><br><br><br>"],
    allow_keys: false,
    show_clickable_nav: true

};

var start_block = {
    type: 'text',
    text: '<p style="text-align:center;position: relative; top: 50%;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%); transform: translateY(-50%);">Please put your fingers on the left arrow and right arrow key on your keyboard. <br> Press the <strong>right arrow</strong> key when you are ready to start.</p>',
    cont_key: [39]
}

var block = {
    type: 'same-different',

    same_key: 37,
    different_key: 39,
//timing_first_stim: 2300,
    timing_second_stim: 3500,
//timing_response: 10000,
    timeline: [
        /*Put everything in the center*/
        /*Bolder plus*/
        /*Word with words, picture with pictures*/
        /*Double check if errors*/
        {stimuli: ['ImageFiles/t1.bmp', 'ImageFiles/p1.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/wt1.bmp', 'ImageFiles/wp1.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/t2.bmp', 'ImageFiles/p2.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/wt2.bmp', 'ImageFiles/wp2.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/t3.bmp', 'ImageFiles/p3.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/wt3.bmp', 'ImageFiles/wp3.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/t4.bmp', 'ImageFiles/p4.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/wt4.bmp', 'ImageFiles/wp4.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/t5.bmp', 'ImageFiles/p5.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/wt5.bmp', 'ImageFiles/wp5.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/t6.bmp', 'ImageFiles/p6.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/wt6.bmp', 'ImageFiles/wp6.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/t7.bmp', 'ImageFiles/p7.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/wt7.bmp', 'ImageFiles/wp7.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/t8.bmp', 'ImageFiles/p8.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/wt8.bmp', 'ImageFiles/wp8.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/t9.bmp', 'ImageFiles/p9.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/wt9.bmp', 'ImageFiles/wp9.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/t10.bmp', 'ImageFiles/p10.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/wt10.bmp', 'ImageFiles/wp10.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/t11.bmp', 'ImageFiles/p11.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/wt11.bmp', 'ImageFiles/wp11.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/t12.bmp', 'ImageFiles/p12.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/wt12.bmp', 'ImageFiles/wp12.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/t13.bmp', 'ImageFiles/p13.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/wt13.bmp', 'ImageFiles/wp13.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/t14.bmp', 'ImageFiles/p14.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/wt14.bmp', 'ImageFiles/wp14.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/t15.bmp', 'ImageFiles/p15.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/wt15.bmp', 'ImageFiles/wp15.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/t16.bmp', 'ImageFiles/p16.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/wt16.bmp', 'ImageFiles/wp16.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/t17.bmp', 'ImageFiles/p17.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/wt17.bmp', 'ImageFiles/wp17.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/t18.bmp', 'ImageFiles/p18.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/wt18.bmp', 'ImageFiles/wp18.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/t19.bmp', 'ImageFiles/p19.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/wt19.bmp', 'ImageFiles/wp19.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/t20.bmp', 'ImageFiles/p20.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/wt20.bmp', 'ImageFiles/wp20.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/t21.bmp', 'ImageFiles/p21.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/wt21.bmp', 'ImageFiles/wp21.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/t22.bmp', 'ImageFiles/p22.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/wt22.bmp', 'ImageFiles/wp22.bmp'], answer: 'same'},
        {stimuli: ['ImageFiles/t23.bmp', 'ImageFiles/p23.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/wt23.bmp', 'ImageFiles/wp23.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/t24.bmp', 'ImageFiles/p24.bmp'], answer: 'different'},
        {stimuli: ['ImageFiles/wt24.bmp', 'ImageFiles/wp24.bmp'], answer: 'different'},
    ],
    randomize_order: true


}

var sex_question = ["What is your gender?"]
var sex_options = ["Male", "Female", "N/A"]

var multi_choice_block_sex = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 1 of 8</p>",
    type: 'survey-multi-choice',
    questions: sex_question,
    options: [sex_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
// horizontal: true  // centres questions and makes options display horizontally
};

var age_questions = ["What is your age?"]

var age_options = ["Under 18 years", "18 to 24 Years", "25 to 34 Years", "35 to 44 Years", "45 to 54 Years", "55 to 64 Years", "Age 65 or older"]

var block_age = {
    type: 'survey-text-number',
    questions: ["What is your age? Please only put numbers."]
};

var multi_choice_block_age = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 2 of 8</p>",
    type: 'survey-multi-choice',
    questions: age_questions,
    options: [age_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
// horizontal: true  // centres questions and makes options display horizontally
};

var lang_questions = ["Are you a native English speaker? (You will be paid regardless of your answer, so please be honest.)"]

var lang_options = ["Yes", "No"]

var multi_choice_block_lang = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 3 of 8</p>",
    type: 'survey-multi-choice',
    questions: lang_questions,
    options: [lang_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
// horizontal: true  // centres questions and makes options display horizontally
};


var part_questions = ["Have you participated in this study before? (You will be paid regardless of your answer, so please be honest.)"]

var part_options = ["Yes", "No"]

var multi_choice_block_part = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 4 of 8</p>",
    type: 'survey-multi-choice',
    questions: part_questions,
    options: [part_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
// horizontal: true  // centres questions and makes options display horizontally
};

var race_questions1 = ["What is your race?"]

// definiting two different response scales that can be used.
var race1_options = ["American Indian/Alaska Native", "East Asian", "South Asian", "Black or African American", "Native Hawaiian or other Pacific Islander", "Hispanic", "White", "Other or Unknown", "Multiracial"];


var multi_choice_block_race1 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 5 of 8</p>",
    type: 'survey-multi-choice',
    questions: race_questions1,
    options: [race1_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
// horizontal: true  // centres questions and makes options display horizontally
};


var political_question = ["What is your political identity?"]
var political_options = ["Strongly Conservative", "Moderately Conservative", "Slightly Conservative", "Slightly Liberal", "Moderately Liberal", "Strongly Liberal"]

var multi_choice_block_political = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 6 of 8</p>",
    type: 'survey-multi-choice',
    questions: political_question,
    options: [political_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
// horizontal: true  // centres questions and makes options display horizontally
};


var religious_question2 = ["How religious do you consider yourself to be?"]
var religious2_options = ["Strongly religious", "Moderately religious", "Slightly religious", "Slightly non-religious", "Moderately non-religious", "Strongly non-religious"]

var multi_choice_block_religious2 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 7 of 8</p>",
    type: 'survey-multi-choice',
    questions: religious_question2,
    options: [religious2_options],  // need one scale for every question on a page
    required: [false, false]   // set whether questions are required
// horizontal: true  // centres questions and makes options display horizontally
};

var education_question = ["Please indicate the highest level of education that you have completed."]
var education_options = ["Elementary school", "Junior high school or Middle school", "Some high school", "High school graduate", "Some college", "Associate's degree", "Bachelor's degree", "Some graduate school", "Master's Degree", "Other advanced degree"]
var multi_choice_block_education = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 8 of 8</p>",
    type: 'survey-multi-choice',
    questions: education_question,
    options: [education_options],  // need one scale for every question on a page
    required: [false, false]   // set whether questions are required
// horizontal: true  // centres questions and makes options display horizontally
};


var vv_question1 = ["Please rate your visual abilities."];
var vv_question2 = ["Please rate your verbal abilities."]

var vv_options = ["Very low", "Somewhat low", "Average", "Somewhat high", "Very high"];

var multi_choice_block_vv1 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 1 of 30</p>",
    type: 'survey-likert',
    questions: vv_question1,
    labels: [vv_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};

var multi_choice_block_vv2 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 2 of 30</p>",
    type: 'survey-likert',
    questions: vv_question2,
    labels: [vv_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};

var sblsq1 = ["I prefer to learn visually."]
var sblsq2 = ["I prefer to learn verbally."]
var sblsq3 = ["I am a visual learner."]
var sblsq4 = ["I am a verbal learner."]
var sblsq5 = ["I am good at learning from labeled pictures, illustrations, graphs, maps, and animations."]
var sblsq6 = ["I am good at learning from printed text."]


var sblsq_options = ["Strongly disagree", "Moderately disagree", "Slightly disagree", "Neither agree or disagree", "Slightly agree", "Moderately agree", "Strongly agree"];

var multi_choice_block_sblsq1 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 3 of 30</p>",
    type: 'survey-likert',
    questions: sblsq1,
    labels: [sblsq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};

var multi_choice_block_sblsq2 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 4 of 30</p>",
    type: 'survey-likert',
    questions: sblsq2,
    labels: [sblsq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};

var multi_choice_block_sblsq3 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 5 of 30</p>",
    type: 'survey-likert',
    questions: sblsq3,
    labels: [sblsq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};

var multi_choice_block_sblsq4 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 6 of 30</p>",
    type: 'survey-likert',
    questions: sblsq4,
    labels: [sblsq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};

var multi_choice_block_sblsq5 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 7 of 30</p>",
    type: 'survey-likert',
    questions: sblsq5,
    labels: [sblsq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};

var multi_choice_block_sblsq6 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 8 of 30</p>",
    type: 'survey-likert',
    questions: sblsq6,
    labels: [sblsq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};


var vviq1 = ["I enjoy doing work that requires the use of words."]
var vviq2 = ["There are some special times in my life that I like to relive by mentally 'picturing' just how everything looked."]
var vviq3 = ["I can never seem to find the right word when I need it."]
var vviq4 = ["I do a lot of reading."]
var vviq5 = ["When I'm trying to learn something new, I'd rather watch a demonstration than read how to do it."]
var vviq6 = ["I think I often use words in the wrong way."]
var vviq7 = ["I enjoy learning new words."]
var vviq8 = ["I like to picture how I could fix up my apartment or a room if I could buy anything I wanted."]
var vviq9 = ["I often make written notes to myself."]
var vviq10 = ["I like to daydream."]
var vviq11 = ["I generally prefer to use a diagram rather than a written set of instructions."]
var vviq12 = ["I like to doodle."]
var vviq13 = ["I find it helps to think in terms of mental pictures when doing many things."]
var vviq14 = ["After I meet someone for the first time, I can usually remember what they look like, but not much about them."]
var vviq15 = ["I like to think of synonyms for words."]
var vviq16 = ["When I have forgotten something I frequently try to form a mental picture to remember it."]
var vviq17 = ["I like learning new words."]
var vviq18 = ["I prefer to read instructions about how to do something rather than have someone show me."]
var vviq19 = ["I prefer activities that don't require a lot of reading."]
var vviq20 = ["I seldom daydream."]
var vviq21 = ["I spend very little time attempting to increase my vocabulary."]
var vviq22 = ["My thinking often consists of mental pictures or images."]

var vviq_options = ["Always false", "Usually false", "Usually true", "Always true"];

var multi_choice_block_vviq1 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 9 of 30</p>",
    type: 'survey-likert',
    questions: vviq1,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};

var multi_choice_block_vviq2 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 10 of 30</p>",
    type: 'survey-likert',
    questions: vviq2,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq3 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 11 of 30</p>",
    type: 'survey-likert',
    questions: vviq3,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq4 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 12 of 30</p>",
    type: 'survey-likert',
    questions: vviq4,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq5 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 13 of 30</p>",
    type: 'survey-likert',
    questions: vviq5,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq6 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 14 of 30</p>",
    type: 'survey-likert',
    questions: vviq6,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq7 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 15 of 30</p>",
    type: 'survey-likert',
    questions: vviq7,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq8 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 16 of 30</p>",
    type: 'survey-likert',
    questions: vviq8,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq9 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 17 of 30</p>",
    type: 'survey-likert',
    questions: vviq9,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq10 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 18 of 30</p>",
    type: 'survey-likert',
    questions: vviq10,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq11 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 19 of 30</p>",
    type: 'survey-likert',
    questions: vviq11,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};

var multi_choice_block_vviq12 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 20 of 30</p>",
    type: 'survey-likert',
    questions: vviq12,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq13 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 21 of 30</p>",
    type: 'survey-likert',
    questions: vviq13,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq14 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 22 of 30</p>",
    type: 'survey-likert',
    questions: vviq14,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq15 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 23 of 30</p>",
    type: 'survey-likert',
    questions: vviq15,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq16 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 24 of 30</p>",
    type: 'survey-likert',
    questions: vviq16,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq17 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 25 of 30</p>",
    type: 'survey-likert',
    questions: vviq17,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq18 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 26 of 30</p>",
    type: 'survey-likert',
    questions: vviq18,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq19 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 27 of 30</p>",
    type: 'survey-likert',
    questions: vviq19,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq20 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 28 of 30</p>",
    type: 'survey-likert',
    questions: vviq20,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq21 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 29 of 30</p>",
    type: 'survey-likert',
    questions: vviq21,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};
var multi_choice_block_vviq22 = {
    preamble: "<p style='font-size:0.8em;text-align:center;'>Page 30 of 30</p>",
    type: 'survey-likert',
    questions: vviq22,
    labels: [vviq_options],  // need one scale for every question on a page
    required: [false]   // set whether questions are required
};

var survey_trial = {
    type: 'survey-text',
    questions: ["Is there any feedback for us?"],
    rows: [5],
    columns: [40]
};

var debrief_block = {
    type: "text",
    text: function () {
        console.log("here")
        var subject_data = getSubjectData();
        if (subject_data.word_accuracy > subject_data.picture_accuracy) {
            return "<p>Your Unique ID number is <strong>" + guid + "</strong>. Please copy and paste this code to recieve your payment.</p> <p>You are now finished with the experiment. Please close this tab. Thank you!</p>";
        } else if (subject_data.word_accuracy == subject_data.picture_accuracy) {
            return "<p>Your Unique ID number is <strong>" + guid + "</strong>. Please copy and paste this code to recieve your payment.</p> <p>You are now finished with the experiment. Please close this tab. Thank you!</p>";
        } else {
            return "<p>Your Unique ID number is <strong>" + guid + "</strong>. Please copy and paste this code to recieve your payment.</p> <p>You are now finished with the experiment. Please close this tab. Thank you!</p>";
        }

    },
    cont_key: [39]
};

var timeline = [];
timeline.push(welcome_block);
timeline.push(instructions_block);
timeline.push(start_block);
timeline.push(block);

timeline.push(multi_choice_block_sex)
timeline.push(multi_choice_block_age);
timeline.push(multi_choice_block_lang);
timeline.push(multi_choice_block_part);
timeline.push(multi_choice_block_race1)

timeline.push(multi_choice_block_political);
timeline.push(multi_choice_block_religious2);

timeline.push(multi_choice_block_education);


timeline.push(multi_choice_block_vv1);
timeline.push(multi_choice_block_vv2);
timeline.push(multi_choice_block_sblsq1);
timeline.push(multi_choice_block_sblsq2);
timeline.push(multi_choice_block_sblsq3);
timeline.push(multi_choice_block_sblsq4);
timeline.push(multi_choice_block_sblsq5);
timeline.push(multi_choice_block_sblsq6);
timeline.push(multi_choice_block_vviq1);
timeline.push(multi_choice_block_vviq2);
timeline.push(multi_choice_block_vviq3);
timeline.push(multi_choice_block_vviq4);
timeline.push(multi_choice_block_vviq5);
timeline.push(multi_choice_block_vviq6);
timeline.push(multi_choice_block_vviq7);
timeline.push(multi_choice_block_vviq8);
timeline.push(multi_choice_block_vviq9);
timeline.push(multi_choice_block_vviq10);
timeline.push(multi_choice_block_vviq11);
timeline.push(multi_choice_block_vviq12);
timeline.push(multi_choice_block_vviq13);
timeline.push(multi_choice_block_vviq14);
timeline.push(multi_choice_block_vviq15);
timeline.push(multi_choice_block_vviq16);
timeline.push(multi_choice_block_vviq17);
timeline.push(multi_choice_block_vviq18);
timeline.push(multi_choice_block_vviq19);
timeline.push(multi_choice_block_vviq20);
timeline.push(multi_choice_block_vviq21);
timeline.push(multi_choice_block_vviq22);

timeline.push(survey_trial);

var timeline2 = []
timeline2.push(debrief_block);

var images = ['ImageFiles/p1.bmp', 'ImageFiles/p2.bmp', 'ImageFiles/p3.bmp', 'ImageFiles/p4.bmp', 'ImageFiles/p5.bmp', 'ImageFiles/p6.bmp', 'ImageFiles/p7.bmp', 'ImageFiles/p8.bmp', 'ImageFiles/p9.bmp', 'ImageFiles/p10.bmp', 'ImageFiles/p11.bmp', 'ImageFiles/p12.bmp', 'ImageFiles/p13.bmp', 'ImageFiles/p14.bmp', 'ImageFiles/p15.bmp', 'ImageFiles/p16.bmp', 'ImageFiles/p17.bmp', 'ImageFiles/p18.bmp', 'ImageFiles/p19.bmp', 'ImageFiles/p20.bmp', 'ImageFiles/p21.bmp', 'ImageFiles/p22.bmp', 'ImageFiles/p23.bmp', 'ImageFiles/p24.bmp', 'ImageFiles/t1.bmp', 'ImageFiles/t2.bmp', 'ImageFiles/t3.bmp', 'ImageFiles/t4.bmp', 'ImageFiles/t5.bmp', 'ImageFiles/t6.bmp', 'ImageFiles/t7.bmp', 'ImageFiles/t8.bmp', 'ImageFiles/t9.bmp', 'ImageFiles/t10.bmp', 'ImageFiles/t11.bmp', 'ImageFiles/t12.bmp', 'ImageFiles/t13.bmp', 'ImageFiles/t14.bmp', 'ImageFiles/t15.bmp', 'ImageFiles/t16.bmp', 'ImageFiles/t17.bmp', 'ImageFiles/t18.bmp', 'ImageFiles/t19.bmp', 'ImageFiles/t20.bmp', 'ImageFiles/t21.bmp', 'ImageFiles/t22.bmp', 'ImageFiles/t23.bmp', 'ImageFiles/t24.bmp', 'ImageFiles/wp1.bmp', 'ImageFiles/wp2.bmp', 'ImageFiles/wp3.bmp', 'ImageFiles/wp4.bmp', 'ImageFiles/wp5.bmp', 'ImageFiles/wp6.bmp', 'ImageFiles/wp7.bmp', 'ImageFiles/wp8.bmp', 'ImageFiles/wp9.bmp', 'ImageFiles/wp10.bmp', 'ImageFiles/wp11.bmp', 'ImageFiles/wp12.bmp', 'ImageFiles/wp13.bmp', 'ImageFiles/wp14.bmp', 'ImageFiles/wp15.bmp', 'ImageFiles/wp16.bmp', 'ImageFiles/wp17.bmp', 'ImageFiles/wp18.bmp', 'ImageFiles/wp19.bmp', 'ImageFiles/wp20.bmp', 'ImageFiles/wp21.bmp', 'ImageFiles/wp22.bmp', 'ImageFiles/wp23.bmp', 'ImageFiles/wp24.bmp', 'ImageFiles/wt1.bmp', 'ImageFiles/wt2.bmp', 'ImageFiles/wt3.bmp', 'ImageFiles/wt4.bmp', 'ImageFiles/wt5.bmp', 'ImageFiles/wt6.bmp', 'ImageFiles/wt7.bmp', 'ImageFiles/wt8.bmp', 'ImageFiles/wt9.bmp', 'ImageFiles/wt10.bmp', 'ImageFiles/wt11.bmp', 'ImageFiles/wt12.bmp', 'ImageFiles/wt13.bmp', 'ImageFiles/wt14.bmp', 'ImageFiles/wt15.bmp', 'ImageFiles/wt16.bmp', 'ImageFiles/wt17.bmp', 'ImageFiles/wt18.bmp', 'ImageFiles/wt19.bmp', 'ImageFiles/wt20.bmp', 'ImageFiles/wt21.bmp', 'ImageFiles/wt22.bmp', 'ImageFiles/wt23.bmp', 'ImageFiles/wt24.bmp'];
