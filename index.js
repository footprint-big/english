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
				if ($answer.hasClass("correct")) {
					$answer.removeClass("correct");
				}				
				if (!$answer.hasClass("wrong")) {
					$answer.addClass("wrong");
				}
			}
		});
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
		var $wordsList = $("<div></div>");
		
		$.each(Object.keys(words), function(index, lesson) {
			var $lessonBlock = $("<div class='hidden'></div>");
			
			var $lessonTitle = $("<p class='lesson'></p>")
							.text(lesson)
							.append("<a href='#' onclick='Exam_C.examLesson(\"" + lesson + "\")'>练习</a>")
							.click(function(){
								$(this).parent().toggleClass("hidden");
							});
			
			$lessonBlock.append($lessonTitle);
			
			$.each(words[lesson], function(idx, word) {
				$wordP = $("<p class='word'></p>")
						.text(++idx + ". " + word[0] + ": " + word[1])
						.append("&nbsp;")
						.append($("<span class='pron'>").text(word[2]));
				$lessonBlock.append($wordP);
			});
			
			$lessonBlock.append("<a href='javascript:scrollTo(0,0)' class='top'>返回顶部</a>");
			$wordsList.append($lessonBlock);
		});
		
		$("#container").empty().append($wordsList);
	},
	
	showExam: function(examWords) {
		var $examBlock = $("<div></div>");
		$.each(examWords, function(index, word) {
			$examP = $("<p class='word'></p>")
					.text((index+1) + ". " + word[1])
					.append("&nbsp;")
					.append("<input class='answer' correct='" + word[0] + "'/></p>");
			$examBlock.append($examP);
		});
		
		$examBlock.append("<input type='button' value='检查' onclick='Exam_C.check()'>");
		
		$("#container").empty().append($examBlock);
	}
}