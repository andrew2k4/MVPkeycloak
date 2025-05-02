<!DOCTYPE html>
<!-- Source Codes By CodingNepal - www.codingnepalweb.com -->
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Form in HTML and CSS | CodingNepal</title>
  <link rel="stylesheet" href="${url.resourcesPath}/css/styles.css" />
</head>
<body>
  <div class="login_form">
    <!-- Login form container -->
    <form action="${url.loginAction}" method="post">
      <h3>Log in with</h3>
      <div class="login_option">
        <!-- Github button -->
        <div class="option">
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Apple" />
            <span>Github</span>
          </a>
        </div>
      </div>
      <!-- Login option separator -->
      <p class="separator">
        <span>or</span>
      </p>
      <!-- Email input box -->
      <div class="input_box">
        <label for="email">Email</label>
        <input type="text" id="username" name="username" placeholder="Enter email address" required />
      </div>
      <!-- Paswwrod input box -->
      <div class="input_box">
        <div class="password_title">
          <label for="password">Password</label>
          <a href="#">Forgot Password?</a>
        </div>
        <input type="password" id="password" name="password" placeholder="Enter your password"  required />
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