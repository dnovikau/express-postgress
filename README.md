To run locally:

* Make sure you have install and run PostgreSQL server
* Create database with the name same as in config file
* Run `npm install`
* Run `nodemon` or `npm start`

#Run in docker

docker build -t <image-tag> .
docker run -p 3001:3001 <image-tag>
