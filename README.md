# Tech Blog CMS

## Description

This is a CMS-style blog site that allows developers to publish articles, blog posts, and their thoughts and opinions. The application follows the Model-View-Controller (MVC) paradigm and is built using the following technologies and packages:

1. Express.js: A web application framework for Node.js that provides robust features for building APIs and handling HTTP requests and responses.

2. Express Handlebars: A view engine based on Handlebars.js that simplifies the process of rendering dynamic content on the front end.

3. MySQL2: A MySQL client for Node.js that enables the application to connect to and interact with a MySQL database.

4. dotenv: A package that allows the application to use environment variables to securely store sensitive information and configuration.

5. bcrypt: A package that hashes passwords to ensure secure storage and authentication.

6. express-session: A middleware that enables session management in Express.js, allowing users to stay logged in during their visit.

7. connect-session-sequelize: A package that provides session storage in the MySQL database using Sequelize, allowing for persistent sessions.

8. Sequelize: An ORM (Object-Relational Mapping) library for Node.js that provides a convenient way to interact with the MySQL database using JavaScript objects.

## Getting Started

To set up the Tech Blog CMS on your local machine, follow these steps:

1. Clone this repository to your local machine using git clone.

2. Install the required dependencies by running npm install in the project directory.

3. Create a .env file in the root directory and configure the environment variables, such as database credentials and password.

4. Start the application by running npm start.

5. Access the Tech Blog CMS in your web browser at http://localhost:3000.

## Features

* User authentication: Users can sign up, log in, and log out securely using hashed passwords.
* Create, edit, and delete posts: Authenticated users can create new blog posts, edit their existing posts, and delete posts they no longer wish to keep.
* Commenting: Users can leave comments on blog posts to engage in discussions.
* Dashboard: Registered users have access to a personal dashboard where they can manage their posts and comments.

## Conclusion 

The Tech Blog CMS is a powerful platform for developers to share their insights, knowledge, and experiences with the tech community. It provides a user-friendly interface for managing blog posts and comments while ensuring the security of user data through password hashing and session management. The application is built using modern web development practices and aims to offer an efficient and enjoyable blogging experience for tech enthusiasts.

If you have any questions or issues, please feel free to reach out or refer to the documentation in this README file. Happy blogging!