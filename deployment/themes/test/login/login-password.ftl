<!DOCTYPE html>
<!-- Source Codes By CodingNepal - www.codingnepalweb.com -->
<html >
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Form in HTML and CSS | CodingNepal</title>
  <link rel="stylesheet" href="${url.resourcesPath}/css/login.css" />
</head>
<body>
  <div class="login_form">
   
    <form action="${url.loginAction}" method="post">
      
      <div class="input_box">
        <label for="password">password</label>
        <input type="text" id="password-new" name="password-new" placeholder="Enter email address" required />
      </div>
      <!-- Paswwrod input box -->
      <div class="input_box">
        <div class="password_title">
          <label for="password">Password</label>
          <a href="${url.loginResetCredentialsUrl}">Forgot Password?</a>
        </div>
        <input type="password" id="password-confirm name="password-confirm" placeholder="Enter your password"  required />
      </div>

        <!-- Error Message -->
         <#if usernameHidden?? && messagesPerField.existsError('username','password')>
            <span id="input-error" class="${properties.kcInputErrorMessageClass!}" aria-live="polite">
                    ${kcSanitize(messagesPerField.getFirstError('username','password'))?no_esc}
            </span>
          </#if>
       <!-- Login button -->
      <button type="submit">Log In</button>
      <p class="sign_up">Don't have an account? <a href="${url.registrationUrl}">Sign up</a></p>
    </form>
    <p>ta tete<p>
  </div>
  
</body>
</html>