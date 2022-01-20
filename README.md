# Shopify backend intern challenge

## Author: Johnny Nguyen

## Task Description:

  Build an inventory tracking web application for a logistics company. 
  
  <b>Required</b>: Basic CRUD functionality  
  <b>Feature used</b>: Push a button to export product data to a CSV

## Sample Application Image

<image src='./exampleimage.png' />

## How to locally deploy:
  Required installed technologies:
  ```
  NodeJS
  MySQL
  ```

This application uses MySQL CLI as a relational database service and will require a username and password that was required upon install.

<ol>
 <li>Clone the repository down to your machine</li>
 <li>From the root folder, run <code>npm install</code> in the terminal to install application dependencies</li>
 <li>Open the MySQL CLI and <code>source server/db/schema.sql</code> to create a local shopify database</li>
 
 <li>From the <code>server</code> folder, enter <code>npm run seed</code> to seed <code>shopify_db</code> with sample data from <code>inventory.json</code></li>
 <li>From the root folder, run <code>npm run develop</code> to start the application</li>
</ol>

The React application will be launched on
```
http://localhost:3000
```
while the server will be served on
```
http://localhost:3001
```

The front end (shown in the image above) will allow the user to manipulate rows in the `shopify_db` database by adding, editing, deleting, and creating new items.

## Credits

Data for inventory.json for seeding was taken from  <a href='https://www.geeksforgeeks.org/inventory-management-with-json-in-python/'>geeksforgeeks.org</a>

<a href="https://2u.com/">2U</a> | <a href="https://edX.org">EDX </a> for career services job posting.
