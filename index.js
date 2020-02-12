// TODO
// 检查之后光标定位到第一个错误的单词


// all words without lesson info
var WORDS_ARR = [];

function init(){
	WORDS_ARR = [];
	for (key of Object.keys(words)) {
		WORDS_ARR = WORDS_ARR.concat(words[key]);
	}
	
	var wordcount = WORDS_ARR.length;
	$("#total").text(wordcount);
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
		var allCorrect = true;
		
		$(".answer").each(function(index) {
			$answer = $(this);
			var actual = $answer.val();
			var expected = $answer.attr("correct");
			
			if (actual == expected) {
				if (!$answer.hasClass("correct")) {
					$answer.addClass("correct");
				}
				if ($answer.hasClass("wrong")) {
					$answer.removeClass("wrong");
				}
			} else {
				allCorrect = false;
				if ($answer.hasClass("correct")) {
					$answer.removeClass("correct");
				}				
				if (!$answer.hasClass("wrong")) {
					$answer.addClass("wrong");
				}
			}
		});
		if (allCorrect) {
			$("#examresult").attr("class", "done");
		} else {
			$("#examresult").attr("class", "undone");
		}
	}
}

var Word_C = {
	
	// get words from given lesson
	getLessonWords: function(lesson) {
		var examwords = words[lesson];
		return examwords;
	},
	
	getRandomWords: function(count) {
		if (count > WORDS_ARR.length) {
			count = WORDS_ARR.length;
		}
		
		var examwords = [];
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
		var $wordsList = $("#templates > .wordslistblock").clone();
		
		$.each(Object.keys(words), function(index, lesson) {
			var $lessonBlock = $("#templates > .lessonblock").clone();
			$("span", $lessonBlock).text(lesson);
			
			$lessonBlock.click(function(){
				$(this).toggleClass("hide");
			});
			
			$("a", $lessonBlock).click(function(){
				Exam_C.examLesson(lesson);
			});
			
			
			$.each(words[lesson], function(idx, word) {
				$wordP = $("#templates > .word").clone();
				$("span:first-child", $wordP).text(++idx + ". " + word[0] + ": " + word[1]);
				$("span.pron", $wordP).text(word[2]);
				
				$lessonBlock.append($wordP);
			});
						
			$wordsList.append($lessonBlock);
		});
		
		$("#container").empty().append($wordsList);
	},
	
	showExam: function(examWords) {
		var $examBlock = $("#templates > .examblock").clone();

		$.each(examWords, function(index, word) {
			$examP = $("#templates > .examword").clone();
			$("span", $examP).text((index+1) + ". " + word[1]);
			$(".answer", $examP).attr("correct", word[0]);

			$examP.insertBefore($(".checkbtn", $examBlock));
		});
		
		$("#container").empty().append($examBlock);
	}
}