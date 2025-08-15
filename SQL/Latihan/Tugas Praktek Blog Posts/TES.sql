create database db_blog_posts;

use db_blog_posts;

create table USERS (
id integer primary key,
name varchar(100) not null
);

create table CATEGORIES (
id integer primary key,
name varchar(100) not null
);

create table BLOG_POSTS(
id integer primary key,
title varchar(100) not null,
body text,
author_id integer,
foreign key(author_id) references USERS(id)
);

create table POST_CATEGORIES(
post_id int,
category_id integer,
foreign key(post_id) references BLOG_POSTS(id),
foreign key(category_id) references CATEGORIES(id)
);

-- TASK 3 --
insert into USERS values(1, "Jhon Doe"),(2, "Robert"),(3, "Frank"),(4, "Jane");
--
insert into blog_posts values
(1, "Algorithm", "this is article for algorithm", 1),
(2, "Lorem Ipsum", "lorem ipsum dolor sit amet", 1),
(3, "NodeJS", "Node.js is a JavaScript runtime built on
Chrome's V8 JavaScript engine.
", 2),
(4, "ReactJS", "ReactJS is JavaScript library for building
user interfaces
", 4),
(5,"Git", "Git is a free and open source distributed
version control system designed to
handle everything from small to very
large projects with speed and efficiency", 3),
(6,"Basketball", "Basketball is a team sport in which two
teams, most commonly of five players
each, opposing one another on a
rectangular court, compete with the
primary objective of shooting a basketball
(approximately 9.4 inches (24 cm) in
diameter) through the defender's hoop (a
basket 18 inches (46 cm) in diameter
mounted 10 feet (3.048 m) high to a
backboard at each end of the court, while
preventing the opposing team from
shooting through their own hoop
", 2)
;
--
insert into CATEGORIES values 
(1, "Basic"),(2, "Library"),(3, "Unknown"),(4, "Sport");
--
insert into POST_CATEGORIES values 
(1, 1),(2, 3),(3, 1),(3, 2),(4, 2),(4, 1),(5, 1),(6, 4);
-- TASK 4
select
 b.title title,
 b.body body,
 u.id author_id,
 u.id id,
 u.name name 
from
 blog_posts b,
 users u,
 post_categories p
where name = "Jhon Doe" && b.author_id = 1 limit 2;

-- TASK 5
select
 c.name category_name,
 b.title post_title,
 u.name author_name
from
 categories c
join
 post_categories p on c.id = p.category_id
join
 blog_posts b on b.id = p.post_id
join users u on u.id = b.author_id
where
 c.name = "basic";
 -- TASK 6
 select
	c.name CategoryName,
    b.title PostTitle,
    b.body body
 from
 users u,
 categories c,
 blog_posts b
 where 
 u.name = "robert" and u.name = "frank";