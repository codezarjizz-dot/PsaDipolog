const nationalIdBanner = document.querySelector(".nationalIdContent");
const crsSolid = document.querySelector(".crsSolid");
const career =document.querySelector(".careers");
const announce = document.querySelector(".Announcements");
const contacts = document.querySelector(".contact");
const learBtn = document.querySelector(".learBtn");


function home(){
	alert('asd');
}
/**Gsap**/

 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Flip,ScrollToPlugin,MotionPathPlugin,EaselPlugin,RoughEase,ExpoScaleEase)
  // gsap code here!
 });


 gsap.to('learnBtn',{
 	stagger:0.2
 })

/**Gsap**/

//open contact form
function openContact(){
	contacts.style.visibility = "visible";
}
//close contact
function closeContactModal(){
	contacts.style.visibility="hidden"
}
//phil-id
function national_ID(){
	nationalIdBanner.style.visibility = "visible";
}
//close modal
function closeModalPid(){
	nationalIdBanner.style.visibility = "hidden";
}
//crs solid
function crs_SOLID(){
	crsSolid.style.visibility = "visible";
}

function closeModalCrs(){
	crsSolid.style.visibility = "hidden"
}

function psaCareer(){
	career.style.visibility = "visible";
}

function closeModalcareer(){
	career.style.visibility="hidden"
}

function Announcements(){
announce.style.visibility="visible";
}
function closeModalAnounce(){
	announce.style.visibility="hidden"
}

//feather.replace();
const form = document.getElementById('form');


/**send email**/
function sendEmail(e){
	
	params={
		firstname:document.querySelector('.FirstName').value,
		lastname: document.querySelector('.LastName').value,
		email: document.querySelector('.Email').value,
		phonenumber: document.querySelector('.PhoneNumber').value,
		message: document.querySelector('.mssg').value,
	}

		if (!params.firstname || !params.lastname	|| !params.email || !params.phonenumber	|| !params.message) {
			return alert('fields should not be empty');
		}


	const ServiceID = 'service_g1isi4c';
	const TemplateID ='template_alnjnku';

	emailjs.send(ServiceID,TemplateID,params).then((res)=>{
		alert('succesfully sent wait for our reply thank you!');
		window.location.reload(true);
		
	}).catch((error)=>console.log(error));

	return;
}

form.addEventListener('submit',function(event){
	event.preventDefault();
	sendEmail();	
})



/*send email end**/
