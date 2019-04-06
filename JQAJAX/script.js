var button=$('#append-button');
console.log(button);

var message="message";

button.click(function(){

	var mytext=$('<p>',{
		'html':message,
		'class': 'large-text blue',
		'css':{
			'border': '1px solid grey'
		}
	});

	console.log(mytext);
	$('#text-container').append(mytext);

});



var dogImageButton= $('#get-dog-image');

function updateImageTag(imageLink){
	$('#dog-random-image').attr('src',imageLink);
}
function getImage(){
	var breed=$('#dog-breed').val();
	$.ajax({
		type: 'get',
		//url: 'https://dog.ceo/api/breeds/image/random',

		url: 'https://dog.ceo/api/breed/'+ breed +'/images/random',
		success: function(responseData){
			updateImageTag(responseData.message);
		},
		error: function(){
			console.log('oops');
		}

	});
}
dogImageButton.click(getImage);
//n8AHUbEhF8FjePorjJCwT6T8zjUfbvMz2UyWRKFC



// append to the page
function createImage(imageLink){
	let newImg=$('<img>',{
		'src': imageLink
	});
	$('#image-grid').append(newImg);
}

var marsForm=$('#mars-form');
//at submission
marsForm.submit(function(){
	// prevent deafult behaviour of form and send an ajax request to fetch the list of images from nasa's api
	event.preventDefault();

	$.ajax({
		// sol and page values from form values by user
		type: 'get',
		url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
		data: {
			sol: $('#sol').val(),
			page: $('#page').val(),
			api_key: 'n8AHUbEhF8FjePorjJCwT6T8zjUfbvMz2UyWRKFC'
		},
		success: function(responseData){
			let photos= responseData.photos;
			$('#image-grid').empty();
			for (let i=0; i<photos.length; i++){
				createImage(photos[i].img_src);
			}
		},
		error: function(){
			console.log('oops error');
		}

	});
});


// fb 169343453768276