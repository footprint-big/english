// all words without lesson info
var WORDS_ARR = [];

function init(){
	WORDS_ARR = [];
	for (key of Object.keys(words)) {
		WORDS_ARR = WORDS_ARR.concat(words[key]);
	}
	
	var wordcount = WORDS_ARR.length;
	document.getElementById("total").innerText = wordcount;
}
init();

var Exam_C = {
	examLesson: function(lesson) {
		var examWords = Word_C.getLessonWords(lesson);
		Show_C.showExam(examWords);
	},
	
	examRandomly: function(count) {
		var examWords = Word_C.getRandomWords(count);
		Show_C.showExam(examWords);
	},
	
	check: function() {
		var i = 0;
		for (examword of examwords) {
			var answercontrol = document.getElementById("word" + i);
			var actual = answercontrol.value;
			var expected = examword[0];
			console.debug("index", i, actual, expected);
			if (actual == expected) {
				answercontrol.style.color = "blue";
			} else {
				answercontrol.style.color = "red";
			}
			i++;
		}
	}
}

var examwords = []
var Word_C = {
	
	// get words from given lesson
	getLessonWords: function(lesson) {
		examwords = words[lesson];
		return examwords;
	},
	
	getRandomWords: function(count) {
		if (count > WORDS_ARR.length) {
			count = WORDS_ARR.length;
		}
		
		examwords = [];
		var randomWordIndexArr = Random_C.getRandomIndexes(0, WORDS_ARR.length, count);
		
		for (wordIndex of randomWordIndexArr) {
			var word = WORDS_ARR[wordIndex];
			examwords.push(word);
		}
		return examwords;
	}
}

var Random_C = {
	
	getRandomIndexes: function(min, max, count) {
		var indexes = [];
		while (indexes.length < count) {
			var random = this.getRandom(0, max);
			
			if (indexes.indexOf(random) < 0){
				indexes.push(random);
			}
		}
		return indexes;
	},
	
	// min is included, and max is excluded
	getRandom: function(min, max) {
		return parseInt(Math.random() * max, 10); 
	}
}

var Show_C = {
	
	showWordsList: function() {
		var result = "";
		var i = 1;
		for (key of Object.keys(words)) {
			result = result + "<p class='title'>" + key 
					+ "</p><a onclick='Exam_C.examLesson(\"" + key + "\")'>练习本课</a>";
			
			var lessonWords = words[key];
			for (word of lessonWords) {
				result = result + "<p class='word'>" + i++ + ". " + word[0] + ": " + word[1] + " <span class='pron'>" + word[2]  + "</span></p>";
			}
		}
		
		document.getElementById("container").innerHTML = result;
	},
	
	showExam: function(examWords) {
		var i = 0, result = "";
		
		for (word of examWords) {
			result = result + "<p class='word'>" + (i+1) + ". " 
					+ word[1] + "&nbsp;<input id='word" + i 
					+ "' class='answer' correct='" + word[0] + "'/></p>";
			
			i++;
		}
		result = result + "<input type='button' value='检查' onclick='Exam_C.check()'>";
		// document.getElementById("container").innerHTML = result;
		$("#container").html(result);
	}
}