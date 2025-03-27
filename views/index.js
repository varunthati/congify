<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Smart Form</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      background: #f0f8ff;
      font-family: 'Segoe UI', sans-serif;
      padding: 2rem;
    }

    .container {
      max-width: 600px;
      margin: auto;
      padding: 2rem;
      background-color: white;
      border-radius: 15px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    .password-strength {
      font-weight: bold;
      transition: color 0.3s;
    }

    .page {
      display: none;
    }

    .page.active {
      display: block;
    }

    .nav-link {
      cursor: pointer;
    }
  </style>
</head>
<body>

  <nav class="nav justify-content-center mb-4">
    <span class="nav-link" onclick="navigateTo('formPage')">Form</span>
    <span class="nav-link" onclick="navigateTo('thankYouPage')">Thank You</span>
  </nav>

  <div class="container">
    <!-- Form Page -->
    <div id="formPage" class="page active">
      <h2 class="mb-4">Register</h2>
      <form id="smartForm">
        <div class="mb-3">
          <label>Name</label>
          <input type="text" class="form-control" id="name" required>
        </div>

        <div class="mb-3">
          <label>Email</label>
          <input type="email" class="form-control" id="email" required>
        </div>

        <div class="mb-3">
          <label>Password</label>
          <input type="password" class="form-control" id="password" required>
          <small id="strengthMessage" class="password-strength text-muted"></small>
        </div>

        <button type="submit" class="btn btn-primary w-100">Submit</button>
      </form>
    </div>

    <!-- Thank You Page -->
    <div id="thankYouPage" class="page text-center">
      <h2>🎉 Thank You!</h2>
      <p>Your form has been submitted successfully.</p>
    </div>
  </div>

  <script src="/script.js"></script>
</body>
</html>
