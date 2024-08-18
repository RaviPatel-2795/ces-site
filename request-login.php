<!DOCTYPE html>

<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0 user-scalable=no" />
	
	<meta name="author" content="CES Software Ltd"/>
	<meta name="description" content="Become a dealer of our advanced Tills Software. For more information on becoming a CES Software Dealer please complete the contact form.">
	<meta name="keywords" content="Tills Software, CES Software, EPoS Software"/>
	
	<title>Become a CES Software Dealer | Sell our Tills Software</title>

	<!-- Load css styles --> 
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
	<link rel="stylesheet" type="text/css" href="css/slideshow.css" /> <!-- only used for media queries -->
	<script type="text/javascript" src="js/modernizr.custom.js"></script>
	
	<!-- Fav and touch icons -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/ati144.png"/>
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/ati114.png"/>
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/ati72.png"/>
	<link rel="apple-touch-icon-precomposed" href="images/ati57.png"/>
	<link rel="shortcut icon" href="images/favicon.png"/>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script type="text/javascript" src="js/validation.js"></script>
	
	<!-- Google Tracking ID-->

</head>

<body>
	<?php include 'include/header.html'; ?>

	<div id="maincon">
		<h1 class="centered">Become a CES Software Dealer</h1>
		
		<h3>For more information on becoming a CES Software Dealer please enter the following information. We shall then get back in touch with you.</h3>
		
		<div class="centered">
				<div id="formcon">
					<div id="errormessages">
						<p id="err1">*Please enter your dealer name</p>
						<p id="err2">*Please enter a valid e-mail address.</p>
						<p id="err3">*Please enter your phone number.</p>
						<p id="err4">*Please provide any additional information.</p>
					</div>
						
					<form action="php/request" name="ContactForm" method="post" onsubmit="return ValidateContactForm();" class="dark-matter">
					<input type="hidden" name="submitted" value="true"/>						
						<label>
							<input id="fname" type="text" name="fname" placeholder="Dealer Name*"/>
						</label>
						
						<label>
							<input id="lname" type="text" name="lname" placeholder="Company Name" />
						</label>
						
						<label>
							<input id="email" type="email" name="email" placeholder="Email Address*" />
						</label>
						
						<label>
							<input id="pphone" type="text" name="pphone" placeholder="Phone Number*"/>
						</label>
						
						<label>
							<input id="mphone" type="text" name="mphone" placeholder="Mobile Number" />
						</label>
						
						<label>
							<input id="location" type="text" name="location" placeholder="Address" />
						</label>
						
						<label>
							<input id="bcontacttaster" type="text" name="bcontacttaster" placeholder="Taster">
						</label>
						
						<label>
							<textarea id="message" name="message" placeholder="Additional Information*"></textarea>
						</label> 
						<p>* Please fill in all the required fields.
						</p>
						
						<div>
							<span>&nbsp;</span> 
							<input name="Submit" class="button" type="submit" value="Submit" />
						</div>
						
					</form>
				</div>
			</div>
	</div>
	<a href="#" class="scrollup"> &#9650 </a>
		
	<!-- ScrollUp button end -->
	<!-- Include javascript -->
	<script src="js/jquery.js"></script>
	<script type="text/javascript" src="js/bootstrap.js"></script>
	<script src="js/index.js"></script>
	<script src="js/staticshow.js"></script>
	<script type="text/javascript" src="js/slideshow.js"></script>

	
</body>

<?php include 'include/footer.html'; ?>
</html>