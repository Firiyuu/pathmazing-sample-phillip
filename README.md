# NestJS Sample Project

```bash
npm install
```


## DB Setup

Navigate to **keys.ts** and change mongoURI based on your mongodb configs and which database you'd like to connect to.

e.g.  
```bash 
mongodb://localhost:27017/userauthentication
```
Then create two collections, ```items``` and ```users```

## Usage


#### Register/Signup[POST]
```bash
{"username": "username", "password":"password"}

http://localhost:3000/auth/register
```


#### Login[POST]
```bash
{"username": "username", "password":"password"}

http://localhost:3000/auth/login
```


#### Manage User
##### List Users[GET]
```bash
http://localhost:3000/users
```

##### Create user[POST[

```bash
{
	"username":"username",
	"password": "password"

}

http://localhost:3000/users

```


##### Edit user[PUT]

```bash
{
	"username":"username",
	"password": "password"

}

http://localhost:3000/users/<id>

```

##### Delete user[DELETE]

```bash

http://localhost:3000/users/<id>

```

##### Testing Authentication if it Blocks/Unblocks User Based if Logged In/Not
This redirects to a route where it is only for authenticated users. Unauthorized are blocked from using it.
```bash

cd pathmazing-sample-phillip
node etl.js


```
