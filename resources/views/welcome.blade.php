<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React with Laravel CRUD</title>
    @vite(['resources/js/app.js'])

    <!-- Bootstrap CSS for responsiveness -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles specific to the welcome page -->
    <style>
        /* Only target elements inside the 'welcome-page' class */
        .welcome-page body, .welcome-page html {
            height: 100%;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #f9f7d9, #ffb5e8);
        }

        /* Container styling */
        .welcome-page .container {
            text-align: center;
            animation: fadeIn 2s ease-in-out;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
        }

        /* Header styling */
        .welcome-page h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 2.5rem;
            color: #ff69b4;
            font-weight: bold;
            margin-bottom: 20px;
            animation: bounceIn 1.5s ease-in-out;
        }

        /* Fade-in animation */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* Bounce-in animation for the heading */
        @keyframes bounceIn {
            0% { transform: scale(0.5); opacity: 0; }
            60% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); }
        }
    </style>
</head>
<body class="welcome-page">
    <div class="container">
        <h1>Welcome to CRUD Operation</h1>
        <div id="app"></div>
    </div>

    <!-- Bootstrap JS for responsive behaviors -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
