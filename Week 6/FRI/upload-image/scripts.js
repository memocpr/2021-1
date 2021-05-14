let files = document.querySelector("input[type='file']");
let form = document.querySelector("form");

form.addEventListener("submit",event => {uploadFiles(event)});

function uploadFiles(event){
    /** 
     * prevent default action of a form (loading page),
     * get values of files, 
     * pass to promise,
     * if promise resolves, get dimension of image
     * at the end the log all dimensions  
     **/
    event.preventDefault();
    let dimArray = [];
    for(let i=0;i<files.files.length;i++){
        let promise = new Promise((resolve, reject) => {
            /** 
             * create new image, 
             * load src to image,
             * append image to body */
            let image = new Image();
            const objectURL = URL.createObjectURL(files.files[i]);
    
            image.src = objectURL;
            document.body.appendChild(image);
            image.onload = function () {
                if(image.complete){
                    resolve({width: image.width,height: image.height});
                }
            }
        });
        /*promise
            .then(dim => function(dim){
               console.log(dim);

            })
            .catch(() => alert("error"));*/
        dimArray.push(promise);
    }
    Promise.all(dimArray).then((values) => {
        /** get biggest height of all images 
         * loop through all images and compare the height
        */
        let biggestHeight = 0;
        for(let i=0;i<values.length;i++){
            if(values[i].height > biggestHeight){
                biggestHeight = values[i].height;
            }
        }
        alert("The biggest height of our images is "+biggestHeight);
    });
}