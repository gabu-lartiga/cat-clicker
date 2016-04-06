//MODEL
var model = {
	currentCat: null,
	cats: [
		{'name':'Murci', 	'click':0, 'imgSrc': 'img/Murci.png'},
		{'name':'Rusio',	'click':0, 'imgSrc': 'img/Rusio.png'},
		{'name':'Capitan', 	'click':0, 'imgSrc': 'img/Capitan.png'},
		{'name':'Apolo',	'click':0, 'imgSrc': 'img/Apolo.png'},
		{'name':'Lucero',	'click':0, 'imgSrc': 'img/Lucero.png'},
		{'name':'Dominique','click':0, 'imgSrc': 'img/Dominique.png'}
	],
};
var len = cats.length;
var catSort = pickStringAndSort(cats);
var catmeter = 0;

//OCTOPUS


function pickStringAndSort(arrayObj){
	var len = arrayObj.length;
	var strings = [];
	var other_variable = [];
	for(var i=0;i<len;i++){
		strings[i]=arrayObj[i].name;
		other_variable = arrayObj[i].click;
	}
	return strings.sort();
}
//VIEW
//draw cat menu sorted by name
for(var i = 0; i < len; i++){
	var pickerElem = '<li class="cat-list"><img src="img/'+catSort[i]+'.png" alt="'+catSort[i]+'" id="'+catSort[i]+'"><p>'+catSort[i]+'</p><hr></li>';
	$('ul').append(pickerElem);
}

//draw picked cat on stage
$('.cat-list').click(function(e){
	var clickedItem = e.target.cloneNode();
	var name = clickedItem.getAttribute('id');
	if(e.target.tagName === 'IMG'){
		for(var i = 0; i<len; i++){
			if(cats[i].name.search(name)!=-1){
				catmeter = cats[i].click;
			}
		}
		$('.cat-display').empty();
		$('.cat-display').append(clickedItem);
		$('.cat-display').append('<p id="cat-meter">'+catmeter+'</p><h4 id="'+name+'">'+name+'</h4>');
	}
});
//click the cat
$('.cat-display').click(function(e){
	var clickedItem = e.target;
	var name = clickedItem.getAttribute("alt");
	if(e.target.tagName === 'IMG'){
		for(var i = 0; i<len; i++){
			if(cats[i].name.search(name)!=-1){
				cats[i].click = cats[i].click +1 ;
				$('#cat-meter').text(cats[i].click);
			}
		}

	}
});