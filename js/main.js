var subjects = [
	{
		"id" : "11", 
		"name" : "Beeldtaal", 
		"desc" : "12BG", 
		"link" : "?"
	},
	{
		"id" : "12", 
		"name" : "Typografie", 
		"desc" : "12BG", 
		"link" : "?"
	},
	{
		"id" : "13", 
		"name" : "Ontwerpen3", 
		"desc" : "12BG", 
		"link" : "?"
	},
	{
		"id" : "21", 
		"name" : "Kleur & Grid", 
		"desc" : "12BG", 
		"link" : "?"
	},
	{
		"id" : "22", 
		"name" : "Interface & Beweging", 
		"desc" : "12BG", 
		"link" : "?"
	},
	{
		"id" : "31", 
		"name" : "Webtypografie", 
		"desc" : "12BG", 
		"link" : "?"
	},
	{
		"id" : "32", 
		"name" : "Web-animatie", 
		"desc" : "12BG", 
		"link" : "?"
	},
	{
		"id" : "33", 
		"name" : "Ontwerpen2&3", 
		"desc" : "12BG", 
		"link" : "?"
	},
	{
		"id" : "41", 
		"name" : "Eigen leerdoel", 
		"desc" : "12BG", 
		"link" : "?"
	},
	{
		"id" : "42", 
		"name" : "Pecha kucha", 
		"desc" : "12BG", 
		"link" : "?"
	},
	{
		"id" : "43", 
		"name" : "portfolio", 
		"desc" : "12BG", 
		"link" : "?"
	}
];

$(document).ready(function(){
	
	$("#headerHome").click(function() {
		document.getElementById("linksContainer").style = "height: 0vh";
		removeAllActiveLinks();
		document.getElementById("headerHome").className = document.getElementById("headerHome").className + " activeButton";
		document.getElementById("homeContainer").className = "";
		document.getElementById("display").className = "displayNone";
	});
	$("#header1").click(function() {
		document.getElementById("display").className = "";
		document.getElementById("homeContainer").className = "displayNone";
		var linkHTML = '<div class="linkButton" id="linkBeeldtaal">Beeldtaal</div><div class="linkButton" id="linkTypografie">Typografie</div><div class="linkButton" id="linkOntwerpen1">Ontwerpen1</div>';
		document.getElementById("linksContainer").innerHTML = linkHTML;
		document.getElementById("linksContainer").style = "height: 27vh";
		removeAllActiveLinks();
		document.getElementById("header1").className = document.getElementById("header1").className + " activeButton";
		addClickEventsToLinnks();
	});
	$("#header2").click(function() {

		document.getElementById("display").className = "";
		document.getElementById("homeContainer").className = "displayNone";
		var linkHTML = '<div class="linkButton" id="linkKleur">Kleur & Grid</div><div class="linkButton" id="linkBeweging">Beweging</div>';
		document.getElementById("linksContainer").innerHTML = linkHTML;
		document.getElementById("linksContainer").style = "height: 18vh";
		removeAllActiveLinks();
		document.getElementById("header2").className = document.getElementById("header2").className + " activeButton";
		addClickEventsToLinnks();
	});
	$("#header3").click(function() {

		document.getElementById("display").className = "";
		document.getElementById("homeContainer").className = "displayNone";
		var linkHTML = '<div class="linkButton" id="linkWebtypografie">Webtypografie</div><div class="linkButton" id="linkAnimatie">Animatie</div><div class="linkButton" id="linkOntwerpen3">Ontwerpen2&3</div>';
		document.getElementById("linksContainer").innerHTML = linkHTML;
		document.getElementById("linksContainer").style = "height: 27vh";
		removeAllActiveLinks();
		document.getElementById("header3").className = document.getElementById("header3").className + " activeButton";
		addClickEventsToLinnks();
	});
	$("#headerPersonal").click(function() {
		
		document.getElementById("display").className = "";
		document.getElementById("homeContainer").className = "displayNone";
		var linkHTML = '<div class="linkButton" id="linkLeerdoel">Eigen leerdoel</div><div class="linkButton" id="linkPecha">Pecha kucha</div><div class="linkButton" id="linkPortfolio">Portfolio</div>';
		document.getElementById("linksContainer").innerHTML = linkHTML;
		document.getElementById("linksContainer").style = "height: 27vh";
		removeAllActiveLinks();
		document.getElementById("headerPersonal").className = document.getElementById("headerPersonal").className + " activeButton";
		addClickEventsToLinnks();
	});
});

function removeAllActiveLinks() {
	var activeLinkDivs = document.querySelectorAll(".activeButton");
	for (i = 0; i < activeLinkDivs.length; i++) {
		activeLinkDivs[i].className = activeLinkDivs[i].className.replace(" activeButton", "");
	}
}
function removeActiveLinks() {
	var linkDivs = document.querySelectorAll(".linkButton");
	for (i = 0; i < linkDivs.length; i++) {
		linkDivs[i].className = linkDivs[i].className.replace(" activeButton", "");
	}
}

function addClickEventsToLinnks() {
	$("#linkBeeldtaal").click(function() {
		removeActiveLinks();
		document.getElementById("linkBeeldtaal").className = "linkButton activeButton";
		fillContentContainer(subjects[0]);
		document.getElementById("ContentContainer").className = "";
	});
	$("#linkTypografie").click(function() {
		removeActiveLinks();
		document.getElementById("linkTypografie").className = "linkButton activeButton";
		fillContentContainer(subjects[1]);
		document.getElementById("ContentContainer").className = "";
	});
	$("#linkOntwerpen1").click(function() {
		removeActiveLinks();
		document.getElementById("linkOntwerpen1").className = "linkButton activeButton";
		fillContentContainer(subjects[2]);
		document.getElementById("ContentContainer").className = "";
	});

	$("#linkKleur").click(function() {
		removeActiveLinks();
		document.getElementById("linkKleur").className = "linkButton activeButton";
		fillContentContainer(subjects[3]);
		document.getElementById("ContentContainer").className = "";
	});
	$("#linkBeweging").click(function() {
		removeActiveLinks();
		document.getElementById("linkBeweging").className = "linkButton activeButton";
		fillContentContainer(subjects[4]);
		document.getElementById("ContentContainer").className = "";
	});

	$("#linkWebtypografie").click(function() {
		removeActiveLinks();
		document.getElementById("linkWebtypografie").className = "linkButton activeButton";
		fillContentContainer(subjects[5]);
		document.getElementById("ContentContainer").className = "";
	});
	$("#linkAnimatie").click(function() {
		removeActiveLinks();
		document.getElementById("linkAnimatie").className = "linkButton activeButton";
		fillContentContainer(subjects[6]);
		document.getElementById("ContentContainer").className = "";
	});
	$("#linkOntwerpen3").click(function() {
		removeActiveLinks();
		document.getElementById("linkOntwerpen3").className = "linkButton activeButton";
		fillContentContainer(subjects[7]);
		document.getElementById("ContentContainer").className = "";
	});

	$("#linkLeerdoel").click(function() {
		removeActiveLinks();
		document.getElementById("linkLeerdoel").className = "linkButton activeButton";
		fillContentContainer(subjects[8]);
		document.getElementById("ContentContainer").className = "";
	});
	$("#linkPecha").click(function() {
		removeActiveLinks();
		document.getElementById("linkPecha").className = "linkButton activeButton";
		fillContentContainer(subjects[9]);
		document.getElementById("ContentContainer").className = "";
	});
	$("#linkPortfolio").click(function() {
		removeActiveLinks();
		document.getElementById("linkPortfolio").className = "linkButton activeButton";
		fillContentContainer(subjects[10]);
		document.getElementById("ContentContainer").className = "";
	});
}

function fillContentContainer(subject) {
	document.getElementById("contentTitle").innerHTML = subject.name;
	document.getElementById("contentDesc").innerHTML = subject.desc;
	document.getElementById("contentImg").src = subject.name;
	if(subject.link.length > 3) {
		document.getElementById("contentLink").className = "";
		document.getElementById("contentLink").href = subject.link;
	} else {
		document.getElementById("contentLink").className = "displayNone";
	}
	
}