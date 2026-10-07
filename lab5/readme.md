#Project Setup

1. create two folder frontend and backend

2. go to frontend `cd frontend`
   - type `npm create vite@latest`
   - press `y` if asked to install
   - enter `.` in project name
   - select `React` as framework from arrow key
   - select Javascript nfrom variant by arrow key
   - select ESLint ny arrow key
   - select Yes and press enter

3. Setup tailwind in React Porject
   - install by `npm install tailwindcss @tailwindcss/vite`
   - open `vite.config.js` and add import tailwindcss from '@tailwindcss/vite'`also in plugins - `tailwindcss()`
     ![alt text](image-1.png)
    - add `@import "tailwindcss"` on top of index.css
    - remove all contents of index.css
      then write '@import "tailwindccss" ' top of index.css



In React style can be added into html by class Name because class is a pre defined keyword in react. 
When js function returns directly html contents
Rules of making  
- start with capital letter.
- it must return html.
- must be closed at the calling time.
- It can be used anywhere anytimes.