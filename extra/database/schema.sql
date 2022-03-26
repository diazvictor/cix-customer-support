/*
          _                     _     _
         | |   _   _  __ _  ___| |__ (_)
         | |  | | | |/ _` |/ __| '_ \| |
         | |__| |_| | (_| | (__| | | | |
         |_____\__,_|\__,_|\___|_| |_|_|
Copyright (c) 2020  Díaz  Víctor  aka  (Máster Vitronic)
<vitronic2@gmail.com>   <mastervitronic@vitronic.com.ve>
*/

pragma foreign_keys = on;
pragma journal_mode = WAL;

drop table if exists users;
create table users(
    id_user		integer primary key AUTOINCREMENT,
    fullname		varchar(16)  not null,
    username		varchar(16)  not null,
    password		varchar(128) not null,
    status		varchar(1)   not null check(status in('f','t')) default 't'
);
create unique index users_username on users (username);

insert into users (fullname,username,password) values ('Victor Diaz','vitronic','$5$BpA4GIUmQto$R7PgVvGPSqzyJ/q.PUKcvgtV2k0.YDNUbpQAYCxbGG3');
