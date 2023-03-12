const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Buenos Aires"
}

const obtenerPersona = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(persona);
    }, 2000);
});

obtenerPersona
    .then(datos => {
        console.log("Datos de la persona:", datos);
    })
    .catch(error => {
        console.log("Error en la petición:", error);
    });

//ejercicio 2
const getTime = () => {
    return new Promise((resolve, reject) => {
        const date = new Date();
        const seconds = date.getSeconds();

        if (seconds > 30) {
            if (seconds % 2 === 0) {
                resolve(date);
            } else {
                reject(new Error("Segundos impares"));
            }
        } else {
            if (seconds % 2 !== 0) {
                resolve(date);
            } else {
                reject(new Error("Segundos pares"));
            }
        }
    });
};

getTime()
    .then(time => console.log(time))
    .catch(error => console.log(error.message));

//ejercicio 3

const heavyPromise = new Promise((resolve, reject) => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    resolve(result);
  });
  
  console.log("Iniciando promesa...");
  heavyPromise.then(result => {
    console.log("Promesa resuelta:", result);
  }).catch(error => {
    console.log("Promesa rechazada:", error);
  });
  console.log("Código después de iniciar la promesa");
  