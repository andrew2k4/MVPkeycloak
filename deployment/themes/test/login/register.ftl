<!DOCTYPE html>
<!-- Coding By CodingNepal - codingnepalweb.com -->
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Registration or Sign Up form in HTML CSS | CodingLab </title> 
    <link rel="stylesheet" href="${url.resourcesPath}/css/register.css">
   </head>
<body>
  <div class="wrapper">
    <h2>Registration</h2>
    <form action="${url.registrationAction}" method="post">
      <div class="input-box">
        <input type="text" id="firstName" name="firstName"  placeholder="Enter your name" required>
      </div>
      <div class="input-box">
        <input type="text" id="lastName" name="lastName"  placeholder="Enter your name" required>
      </div>
      <div class="input-box">
        <input type="email" id="email" name="email" placeholder="Enter your email" required>
      </div>
      <div class="input-box">
        <input type="password" id="password" name="password" placeholder="Create password" required>
      </div>
      <div class="input-box">
        <input type="password" id="password-confirm" name="password-confirm" placeholder="Confirm password" required>
      </div>
      <div class="policy">
        <input type="checkbox">
        <h3>I accept all terms & condition</h3>
      </div>
      <div class="input-box button">
        <input type="submit" value="Register Now">
      </div>
      <div class="text">
        <h3>Already have an account? <a href="#">Login now</a></h3>
      </div>
    </form>
  </div>
</body>
</html>