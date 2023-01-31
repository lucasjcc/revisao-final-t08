CREATE DATABASE petshop;

CREATE TABLE usuarios (
	id serial primary key,
  nome varchar(100) not null,
  email varchar(100) not null unique,
  senha text not null
);

drop table animais;
CREATE TABLE animais (
	id serial primary key,
  id_usuario int references usuarios(id),
  nome varchar(100) not null,
  descricao text,
  foto_url text,
  foto_path text
);
