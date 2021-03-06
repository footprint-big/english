$(function(){
	init();
});

// all words without lesson info
var WORDS_ARR = [];

function init(){
	var wordcount = 0;
	for (key of Object.keys(words)) {
		wordcount += words[key].length;
	}
	
	$("#total").text(wordcount);
}

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
		
		var wrongCount = 0, correctCount = 0;
		$("#container .answer").each(function(index) {
			$answer = $(this);
			var actual = $answer.val();
			var expected = $answer.attr("correct");
			
			if (actual == expected) {
				correctCount++;
				if (!$answer.hasClass("correct")) {
					$answer.addClass("correct");
				}
				if ($answer.hasClass("wrong")) {
					$answer.removeClass("wrong");
				}
			} else {
				wrongCount++;
				if ($answer.hasClass("correct")) {
					$answer.removeClass("correct");
				}				
				if (!$answer.hasClass("wrong")) {
					$answer.addClass("wrong");
				}
			}
		});
		
		var msg = "";
		if (wrongCount == 0) {
			msg = "<span class='correct'>全部正确</span>";
		} else {
			msg = "<span class='correct'>" + correctCount + " 正确" + "</span>，"
				+ "<span class='wrong'>" + wrongCount + " 错误" + "</span>";
		}
		$("#container .checkmsg").html(msg);
	}
}

var Word_C = {
	
	// get words from given lesson
	getLessonWords: function(lesson) {
		var examwords = words[lesson];
		return examwords;
	},
	
	getRandomWords: function(count) {
		if(WORDS_ARR.length == 0) {
			for (key of Object.keys(words)) {
				WORDS_ARR = WORDS_ARR.concat(words[key]);
			}
		}
		
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
		var _self = this;
		$.each(Object.keys(words), function(index, lesson) {
			var $lessonBlock = $("#templates > .lessonblock").clone();
			$("span", $lessonBlock).text(lesson)
				.click(function(){
					if ($(this).attr("inited") == 1) {
						$lessonBlock.toggleClass("hide");
					} else {
						_self.showWordsInLesson($lessonBlock);
						$(this).attr("inited", 1);
					}
				});
			
			$("a", $lessonBlock).click(function(){
				Exam_C.examLesson(lesson);
			});
			
			$wordsList.append($lessonBlock);
		});
		
		$("#container").empty().append($wordsList);
	},
	
	showWordsInLesson: function($lessonBlock) {
		var lesson = $("span", $lessonBlock).text();
		var wordsInLesson = words[lesson];
		if ($("#sort").prop("checked")) {
			wordsInLesson.sort(
				function(a, b){
					av = a[0].toLowerCase();
					bv = b[0].toLowerCase();

					if (av > bv) return 1;
					if (av < bv) return -1;
					return 0;
				}
			);
		}
		
		$.each(wordsInLesson, function(idx, word) {

			$wordP = $("#templates > .word").clone();
			$("span:first-child", $wordP).text(++idx + ". " + word[0] + ": " + word[1]);
			$("span.pron", $wordP).text(word[2]);
			if (word.length > 3) {
				$("span.comment", $wordP).text(word[3]);
			}
			
			$lessonBlock.append($wordP);
		});
	},
	
	showExam: function(examWords) {
		var $examBlock = $("#templates > .examblock").clone();

		$.each(examWords, function(index, word) {
			$examP = $("#templates > .examword").clone();
			$("span.question", $examP).text((index+1) + ". " + word[1]);
			$(".answer", $examP).attr("correct", word[0]);

			$examP.insertBefore($(".checkbtn", $examBlock));
		});
		
		$("#container").empty().append($examBlock);
	},
	
	isAnswerTipShown: false,
	
	toggleAnswerTip: function() {

		if (!Show_C.isAnswerTipShown) {
			
			var $answerInputs = $("input.answer");
			$.each($answerInputs, function(index, answerInput) {
				var correctAnswer = $(answerInput).attr("correct");
				$("span.answertip", $(answerInput).parent()).text(correctAnswer);	
			});
		}
		
		$("span.answertip").toggleClass("hidden");
	},
	
	showAnswerTipBtn: function() {
		$("#answertipbtn").toggleClass("hidden");
	}
}