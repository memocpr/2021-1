let users = [];
let posts = [];

let bodyElm = document.querySelector("body");
let formElm = document.querySelector("form");
let ulElm = document.querySelector("ul");
let pass;
let isLoggedIn = false;

class User {
    constructor(name,email,password,status){
        this.id = users.length;
        this.name = name;
        this.email = this.validateEmail(email);
        this.password = this.validatePassword(password);
        this.created = Date.now();
        this.status = status;
    }

    register(e){
        let user = new User(name,email,password,"unconfirmed");
        users.push(user);
    }

    login(usr,pwd){

    }

    updateProfile(id){

    }

    deleteProfile(id){

    }

    validatePassword(pwd){
        //check if password applies to rules
    }

    validateEmail(email){
        //check if already exists
        //check if email is correct
    }
}

class Post {
    constructor(title,text,date=Date.now(),author,status){
        this.id = posts.length;
        this.title = title;
        this.text = text;
        this.date = date;
        this.author = author; //usr_id, link to user object
        this.status = status;
    }

    newPost(){
        let post = new Post(title,text,Date.now(),author,"draft");
        posts.push(post);
    }

    updatePost(id){

    }

    deletePost(id){

    }

    validatePost(id){

    }

    displayPosts(){

    }
}