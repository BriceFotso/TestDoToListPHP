Prerequisites:
-node version 16 minimum
-install composer
-install php


the project's local deployment stages are as follows:

- get a Mysql DBMS and create a database on it
- clone the project using gitclone on gitub
- install dependencies by running the "composer install" command and then "" npm install
- configure your .env file to link the database to the application 
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=TesToDoList
DB_USERNAME=root
DB_PASSWORD=

- migrate tables using the command "php artisan migrate". 

-run the application by executing the command "php artisan serve" and "npm run dev".