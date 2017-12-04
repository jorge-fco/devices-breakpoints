<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>Devices</title>

	<!--FONTS-->
	<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500,700" rel="stylesheet">

	<!--CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
	<header>
		<h1>Viewport</h1>
	</header>
	<section class="section">

		<div class="view__start"></div>

		<div class="container-grid">
			<div class="grid">
				<div class="row gutters">
					<?php for ($i=0; $i < 12; $i++) : ?>
					<div class="col col-1">
						<div class="grid__line"></div>
					</div>
					<?php endfor ?>
				</div>
			</div>
		</div>

		<div class="view__end"></div>

	</section>
</body>
</html>