var subjects = [
	{
		"id" : "11", 
		"name" : "Beeldtaal", 
		"desc" : "Bij het eerste vak van de Minor hebben we gewerkt aan kennis van beeldanalyse theorieën. Ervaren wat er met beeld gezegd kan worden, en hoe je beeld kan analyseren. Uitendelijk hebben we hier een poster voor gemaakt met toegepaste theorieën.", 
		"link" : "?"
	},
	{
		"id" : "12", 
		"name" : "Typografie", 
		"desc" : "Bij typografie hebben we 1 font face onderzocht en onze bevindingen uit dit onderzoek verwerkt in een klein boekje. Ik heb het glyphic sans-serif typeface Lithos onderzocht.", 
		"link" : "?"
	},
	{
		"id" : "13", 
		"name" : "Ontwerpen1", 
		"desc" : "Na een lange reis naar Berlijn, hebben we in groepjes een kwartet spel gemaakt met interfaces die we tijdens onze reis gevonden hadden. Ons kwartet spel stond in het teken van slechte half Nederlands half Duitse grappen waardoor mensen op een leuke manier een beetje Duits kunnen leren, maar vooral veel plezier hebben tijdens het spelen.", 
		"link" : "?"
	},
	{
		"id" : "21", 
		"name" : "Kleur en Grid", 
		"desc" : "Bij Grid & Kleur hebben we onderzoek gedaan naar 1 toegewezen kleur. In mijn geval was dit de kleur grijs en ik heb dus onderzocht wat voor eigenschappen de kleur grijs heeft en wat voor sfeer en emotie het overgeeft. Hier heb ik een webinterface voor gemaakt waarin ik ook heb geëxperimenteerd met grid.", 
		"link" : "https://bart211820.github.io/gray/index.html"
	},
	{
		"id" : "22", 
		"name" : "Interface en Beweging", 
		"desc" : "Ook beweging en animaties zijn belangrijk bij interfaces en daarom hebben we hier ook een project in gedaan. Ik heb in mijn geval een ninja geanimeerd die 3 verschillende acties kan uitvoeren.", 
		"link" : "https://bart211820.github.io/animatie/index.html"
	},
	{
		"id" : "31", 
		"name" : "Webtypografie", 
		"desc" : "Als je doof bent, of als je om een andere reden geen geluid kunt horen, dan mis je veel informatie als je een film kijkt. Daarom hebben wij voor het vak webtypografie een fragment van een film bewerkt zodat er meer visuele effecten zijn die de sfeer van het geluid overbrengen. Natuurlijk hebben we ook toepasselijke ondertiteling toegevoegd.", 
		"link" : "https://bart211820.github.io/web-typography-19-20/closed-captions/"
	},
	{
		"id" : "32", 
		"name" : "Web-animatie", 
		"desc" : "Tijdens Web-Animatie hebben we veel gedaan met html en css. We hebben een kunstwerk nagemaakt en deze verschillende animaties gegeven. ", 
		"link" : "https://bart211820.github.io/web-animation/"
	},
	{
		"id" : "33", 
		"name" : "Ontwerpen2en3", 
		"desc" : "Bij ontwerpen 3, of ook wel de Meesterproef genoemd, hebben we interface voor een verhaal gemaakt. Bij dit project kwam alles dat we bij de eerdere lessen terug. Ik heb mijn interface gemaakt voor de serie Avatar the Last Airbender.", 
		"link" : "https://bart211820.github.io/avatar-tla-history/"
	},
	{
		"id" : "41", 
		"name" : "Eigen leerdoel", 
		"desc" : "We moesten voor de minor ook een eigen leerdoel opzetten en hier zelf aan werken. Ik heb gekozen om meer te leren over kleur omdat ik het erg interesant vind. Ik heb hiervoor het boek \"Colour, A workshop for artists and designers\" door David Hornung gelezen en ook verder onderzoek gedaan op andere plaatsen.", 
		"link" : "?"
	},
	{
		"id" : "42", 
		"name" : "Pecha kucha", 
		"desc" : "Een Pecha Kucha is een concept voor het houden van korte, creatieve presentatie waarbij de deelnemers een diavoorstelling van twintig afbeeldingen in een totale tijd van 6 minuten en 40 seconden. Ik heb samen met 2 mede studenten een Pecha Kucha gedaan over Skeuomorphic Design en de visie van Scott Forstall.", 
		"link" : "https://youtube.googleapis.com/embed/?status=ok&hl=nl&allow_embed=0&ps=docs&partnerid=30&autoplay=0&docid=1tyTSCrLScCXvBm61YRIDpO17iNoUdFzQ&abd=0&public=true&el=preview&title=Pecha%20Kucha%20VID2%20Bart%20Roy%20Lars.mp4"
	},
	{
		"id" : "43", 
		"name" : "Portfolio", 
		"desc" : "Als laatste heb ik ook een portfolio pagina gemaakt met alle resultaten van de minor. Dit portfolio bent u nu aan het bekijken :)", 
		"link" : "https://bart211820.github.io/vidPortfolio/"
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
		document.getElementById("ContentContainer").className = "displayNone";
		document.getElementById("homeContainer").className = "displayNone";
		var linkHTML = '<div class="linkButton" id="linkBeeldtaal">Beeldtaal</div><div class="linkButton" id="linkTypografie">Typografie</div><div class="linkButton" id="linkOntwerpen1">Ontwerpen1</div>';
		document.getElementById("linksContainer").innerHTML = linkHTML;
		document.getElementById("linksContainer").style = "height: 27vh";
		removeAllActiveLinks();
		document.getElementById("header1").className = document.getElementById("header1").className + " activeButton";
		addClickEventsToLinnks();
	});
	$("#header2").click(function() {
		document.getElementById("ContentContainer").className = "displayNone";
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
		document.getElementById("ContentContainer").className = "displayNone";
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
		document.getElementById("ContentContainer").className = "displayNone";
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
	document.getElementById("contentImg").src = "img/" + subject.name + ".png";
	if(subject.link.length > 3) {
		document.getElementById("contentLink").className = "";
		document.getElementById("contentLink").href = subject.link;
	} else {
		document.getElementById("contentLink").className = "displayNone";
	}
	
}