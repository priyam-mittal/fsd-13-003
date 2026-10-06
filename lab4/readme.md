# Express

1. create project folder
2. goto project an open terminal
3. execute 'npm init -y'
4. install 'npm i nodemon -D'
5. open package.json
  a. change 'type:'module''
  b. update script {
    "start":"node prg1.js"
    "dev":"nodemon prg1.js"
  }
6. create prg1.js in folder
7. add folderName/node_modules in .gitignore

"send"  - send function is used to revert back content to the client , it maybe html , JSON , htmlfiles , plainfile , textfile 
We can also ass status code with status function , it can be chained with send function.

## Map
This fucntion is used to iterate any array it must return new array 
'''
array.map((item)=>{
  return
})

array.map((item)=>())

'''
in first syntex we have to use explicit return keyword whereas in syntax 2 doesn't require.
Exclude number for properties from any json object.
'''
const {P1,P2,...rest} = product;
log (rest);
'''
search
To search any item in json array we use findMethod it will return NULL on unsuccessful or object on sucessful.
'''
array.find((item)=> item.id===id);
'''