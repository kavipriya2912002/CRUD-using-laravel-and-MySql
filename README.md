# Laravel CRUD Operation with MySQL

Welcome to the **Laravel CRUD Operation** project! This application demonstrates basic **Create**, **Read**, **Update**, and **Delete** operations using **Laravel** as the backend framework and **MySQL** as the database.

## 🚀 Features

- User-friendly CRUD operations.
- Seamless integration with MySQL for data management.
- Optimized for scalability and customization.
- Built-in form validation and error handling.
- Fully responsive design using Bootstrap.
- Real-time data updates using Laravel with React.

## 🛠️ Technologies Used

- **Backend**: Laravel 10
- **Database**: MySQL
- **Frontend**: Blade templates with React components
- **Styling**: Bootstrap 5 + custom CSS animations
- **API**: RESTful APIs for CRUD operations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **PHP** (>= 8.0)
- **Composer**
- **MySQL** (or any supported database)
- **Node.js** (for frontend dependencies)
- **NPM/Yarn** (for managing JS dependencies)

## ⚙️ Installation

Follow these steps to set up the project on your local environment.

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/laravel-crud-operation.git
    cd laravel-crud-operation
    ```

2. **Install dependencies**:

    ```bash
    composer install
    npm install
    ```

3. **Create and configure your `.env` file**:

    ```bash
    cp .env.example .env
    ```

    Update the `.env` file with your MySQL credentials:

    ```ini
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=your_database_name
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    ```

4. **Generate the application key**:

    ```bash
    php artisan key:generate
    ```

5. **Run the migrations** to create the necessary database tables:

    ```bash
    php artisan migrate
    ```

6. **Build the front-end assets** using Vite:

    ```bash
    npm run build
    ```

7. **Run the development server**:

    ```bash
    php artisan serve
    ```

    Your Laravel application will now be running at `http://127.0.0.1:8000`.

## 🛑 CRUD Operations

### Create
- Navigate to `/create` to add a new record.
- Enter the required details and submit the form.
  
### Read
- View all records on the `/list` page, displayed in a dynamic table.
- Search and filter records easily.

### Update
- Click on the **Edit** button next to any record on the `/list` page.
- Update the data and submit to save changes.

### Delete
- Click on the **Delete** button next to any record on the `/list` page to remove the record.

## 🎨 UI Features

- **Bootstrap Integration**: A responsive and modern UI powered by Bootstrap 5.
- **Custom Animations**: Smooth animations for content display using CSS.
- **Form Validation**: Real-time validation to ensure data integrity.
  
## 📂 Project Structure

Here's a brief overview of the main directories:

```bash
├── app/                 # Laravel application files
├── database/            # Migrations and seeders
├── public/              # Public assets (images, styles, JS)
├── resources/           # Views (Blade templates, React components)
├── routes/              # Web routes and API routes
├── .env                 # Environment configuration
└── package.json         # Node.js dependencies
