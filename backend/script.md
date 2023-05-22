create database Test;

create table TipoProducto (
id int auto_increment not null,
descripcion varchar(255),
primary key(id)
);

create table Producto (
id int auto_increment not null,
idTipoProducto int,
nombre varchar(255),
precio int,
primary key(id),
foreign key(idTipoProducto) references TipoProducto(id)
);

create table Stock (
id int auto_increment not null,
idProducto int,
cantidad int,
primary key(id),
foreign key(idProducto) references Producto(id)
);
