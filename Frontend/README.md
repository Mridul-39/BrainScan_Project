# Frontend - React App

## How to run this
**Note:** Make sure you have started the backend server. To know how to start check readme.md of backend.
```
1. If you are in the root directory of the project then 
   (a) cd Frontend
   (b) copy paste this line in terminal - set NODE_OPTIONS=--openssl-legacy-provider (currently we need to specify this because we don't have the angular in our peoject)
   If you are in the Backend directory of the project then
   (a) cd ..
   (b) cd Frontend
   
2. npm install [Make Sure nodejs and npm are installed in your system]

3. npm start

4. Visit http://localhost:3000/
```
## Project Structure
```
└── BRAINSCAN/
    ├── backend/
    │   ├── __pycache__
    │   ├── env/
    │   │   ├── __pycache__
    │   │   ├── include
    │   │   ├── instance/
    │   │   │   └── database.db
    │   │   ├── Lib
    │   │   ├── models/
    │   │   │   └── Model2.h5
    │   │   ├── Scripts
    │   │   ├── static/
    │   │   │   ├── css
    │   │   │   ├── img
    │   │   │   └── uploads
    │   │   ├── templates/
    │   │   │   ├── dashboard.html
    │   │   │   ├── home.html
    │   │   │   ├── login.html
    │   │   │   ├── predict.html
    │   │   │   └── Register.html
    │   │   ├── app.py
    │   │   └── predict_module.py
    │   ├── wsgi.py
    │   └── Readme.md
    ├── frontend/
    │   ├── node_modules
    │   ├── public/
    │   │   ├── css
    │   │   ├── img
    │   │   ├── js
    │   │   ├── index.html
    │   │   ├── manifest.json
    │   │   └── robots.txt
    │   ├── src/
    │   │   ├── Component
    │   │   ├── images
    │   │   ├── style
    │   │   ├── about.js
    │   │   ├── App.js
    │   │   ├── contact.js
    │   │   ├── dashboard.js
    │   │   ├── home.js
    │   │   └── index.js
    │   ├── package-lock.json
    │   ├── package.json
    │   └── .eslintcache
    ├── .gitignore
    └── Read.me
    
## Total files and directory (include node modules) -
 59127 File(s)  1,740,282,500 bytes
29486 Dir(s)  264,174,944,256 bytes free
```
# Thank You!