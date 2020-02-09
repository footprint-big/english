var wordcount = Object.keys(words).length; 
document.getElementById("total").innerText = wordcount;

function showall() {
	var result = "";
	var i = 1;
	for (key of Object.keys(words)) {
		result = result + "<br>" + i++ + ". " + key + ": " + words[key] + "<br>";
	}
	document.getElementById("container").innerHTML = result;
}
		
var examwords = [];
function exam() {
	examwords = [];
	
	var count = document.getElementById("count").value;
	if (count > wordcount) {
		count = wordcount;
		document.getElementById("count").value = wordcount;
	}
	
	var i = 0;
	var result = "";
	var examWordIndexes = getRandomExamIndexes(count);

	var wordKeys = Object.keys(words);
	for (wordIndex of examWordIndexes) {
		var wordKey = wordKeys[wordIndex];
		examwords.push(wordKey);
		result = result + "<br>" + (i+1) + ". " + words[wordKey] + "&nbsp;<input id='word" + i + "' class='answer'/><br>";
		
		i++;
	}
	result = result + "<br><input type='button' value='检查' onclick='check()'>";
	document.getElementById("container").innerHTML = result;
}

function check() {
	var i = 0;
	for (examword of examwords) {
		var answercontrol = document.getElementById("word" + i);
		var actual = answercontrol.value;
		var expected = examword;
		console.debug("index", i, actual, expected);
		if (actual == expected) {
			answercontrol.style.color = "blue";
		} else {
			answercontrol.style.color = "red";
		}
		i++;
	}
}

function getRandomExamIndexes(examCount) {
	var indexes = [];
	while (indexes.length < examCount) {
		var random = parseInt(Math.random() * (wordcount + 1), 10); 
		
		if (indexes.indexOf(random) < 0){
			indexes.push(random);
		}
	}
	return indexes;
}
