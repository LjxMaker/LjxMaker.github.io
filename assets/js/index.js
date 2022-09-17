window.onload = function(){

    function getAge (){
        let myBirthdayYear = 2000

        let date = new Date()
    
        let year = date.getFullYear()
        console.log("🚀 = year", year);
    
        let myAge = year - myBirthdayYear
        
        document.querySelector(".age").innerHTML = myAge
    }

    getAge ()

}