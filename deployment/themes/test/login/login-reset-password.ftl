<!DOCTYPE html>
<!-- Source Codes By CodingNepal - www.codingnepalweb.com -->
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Form in HTML and CSS | CodingNepal</title>
  <link rel="stylesheet" href="${url.resourcesPath}/css/login-reset-password.css" />
</head>
<body>
    

  <main> 
  <div class="login_form">
    <!-- Login form container -->
    <form action="${url.loginAction}" method="post">
      <h3>Password reset</h3>
      <p> You would receive an email to chnage your password <p>
      
     
      <!-- Password input box -->
      <div class="input_box">
        <div class="password_title">
          <label for="password">Email</label>
        </div>
        <input type="text" id="username" name="username" placeholder="Enter your email"  required />
      </div>

       <!-- Reset button -->
      <button type="submit">Reset Password</button>
    </form>
  </div>
  </main>
</body>
</html>