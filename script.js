let btn = document.getElementById("btn");

let Alert = new Promise((resolve, reject) => {
    resolve("Hello, Welcome!")
})

btn.addEventListener('click', () =>{
    Alert.then((msg) => alert(msg))
    Alert.catch((err) => console.error("Error"))
})