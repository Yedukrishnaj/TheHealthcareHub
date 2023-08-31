BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "user" (
	"id"	INTEGER NOT NULL,
	"email"	VARCHAR(150),
	"password"	VARCHAR(150),
	"first_name"	VARCHAR(150),
	PRIMARY KEY("id"),
	UNIQUE("email")
);
CREATE TABLE IF NOT EXISTS "message" (
	"id"	INTEGER NOT NULL,
	"email"	VARCHAR(150),
	"first_name"	VARCHAR(150),
	"last_name"	VARCHAR(150),
	"Message"	VARCHAR(500),
	PRIMARY KEY("id")
);
INSERT INTO "user" VALUES (1,'yedukrishnaj@gmail.com','sha256$nwFM2q2MXb603WPg$c66addfbdb661959e1f4bbb105480ada2e1a0655eb7106cdf7c7be74c343e04b','Yedukrishna');
INSERT INTO "message" VALUES (1,'yedukrishnaj@gmail.com','Yedukrishna','Jayan','hi');
INSERT INTO "message" VALUES (2,'yedukrishnaj@gmail.com','Yedukrishna','Jayan','hi');
INSERT INTO "message" VALUES (3,'yedukrishnaj@gmail.com','Yedukrishna','Jayan','hi');
INSERT INTO "message" VALUES (4,'yedukrishnaj@gmail.com','Yedukrishna','Jayan','hru
');
INSERT INTO "message" VALUES (5,'yedukrishnaj@gmail.com','Yedukrishna','Jayan','hi');
INSERT INTO "message" VALUES (6,'yedujayan2000@gmail.com','Yedukrishna','J','hi');
INSERT INTO "message" VALUES (7,'yedujayan2000@gmail.com','Yedukrishna','J','hi');
INSERT INTO "message" VALUES (8,'yedujayan2000@gmail.com','Yedukrishna','J','hi');
INSERT INTO "message" VALUES (9,'yedujayan2000@gmail.com','Yedukrishna','J','hi');
INSERT INTO "message" VALUES (10,'yedujayan2000@gmail.com','Yedukrishna','J','dasdas');
INSERT INTO "message" VALUES (11,'yedujayan2000@gmail.com','Yedukrishna','J','dasdas');
INSERT INTO "message" VALUES (12,'yedujayan2000@gmail.com','Yedukrishna','J','dasdas');
INSERT INTO "message" VALUES (13,'yedujayan2000@gmail.com','Yedukrishna','J','as');
INSERT INTO "message" VALUES (14,'yedujayan2000@gmail.com','Yedukrishna','J','as');
INSERT INTO "message" VALUES (15,'yedujayan2000@gmail.com','Yedukrishna','J','as');
INSERT INTO "message" VALUES (16,'yedujayan2000@gmail.com','Yedukrishna','J','as');
INSERT INTO "message" VALUES (17,'yedujayan2000@gmail.com','Yedukrishna','J','as');
INSERT INTO "message" VALUES (18,'yedujayan2000@gmail.com','Yedukrishna','J','das');
INSERT INTO "message" VALUES (19,'yedujayan2000@gmail.com','Yedukrishna','J','das');
COMMIT;
