
Descripción: 

Repositorio: https://github.com/carlopenaaponte/Backend.git

1) Utilice el motor de MariaDB y el visor de Mysql Workbench
2) En Mysql Workbench se utilizaron los siguientes comandos

CREATE SCHEMA `platform` ;

CREATE TABLE `platform`.`users` (
`idusers` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(45) NOT NULL,
`last name` VARCHAR(45) NOT NULL,
`cedula` INT NOT NULL,
`phone` INT NOT NULL,gv
PRIMARY KEY (`idusers`));

CREATE TABLE `platform`.`course` (
`id` INT NOT NULL AUTO_INCREMENT,
`name_teacher` VARCHAR(45) NOT NULL,
`name_student` VARCHAR(45) NOT NULL,
`date` DATE NOT NULL,
PRIMARY KEY (`id`));


Postman:

- Para poder interactuar con los endpoint del proyecto, como primer punto tenemos que ingresar el accestoken.
- Ingresamos a Postman y pegamos el siguiente link "http://localhost:3000/login", realizamos un post con un body
que cumpla con los siguientes requisitos

{
    "username": "admin",
    "password": "admin"
}
- Como siguiente punto se debe guardar el token que devuelve y guardarlo como header "access-token", de esta forma accederemos
a los endpoints de las tablas creadas. 


