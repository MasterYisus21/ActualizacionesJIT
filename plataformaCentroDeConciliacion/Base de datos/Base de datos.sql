-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: conciliacion
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `apiconciliacionapp_area`
--

DROP TABLE IF EXISTS `apiconciliacionapp_area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_area` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_area`
--

LOCK TABLES `apiconciliacionapp_area` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_area` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_area` VALUES (1,1,'Civil'),(1,2,'Comercial'),(1,3,'Familia'),(1,4,'Penal');
/*!40000 ALTER TABLE `apiconciliacionapp_area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_barrio`
--

DROP TABLE IF EXISTS `apiconciliacionapp_barrio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_barrio` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(80) NOT NULL,
  `Localidad_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_b_Localidad_Id_id_3e8d5149_fk_apiConcil` (`Localidad_Id_id`),
  CONSTRAINT `apiConciliacionApp_b_Localidad_Id_id_3e8d5149_fk_apiConcil` FOREIGN KEY (`Localidad_Id_id`) REFERENCES `apiconciliacionapp_localidad` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_barrio`
--

LOCK TABLES `apiconciliacionapp_barrio` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_barrio` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_barrio` VALUES (1,1,'Paseo de los Libertadores',1),(1,2,'Verbenal',1),(1,3,'La Uribe',1),(1,4,'San Cristóbal Norte',1),(1,5,'Toberín',1),(1,6,'Los Cedros',1),(1,7,'Usaquén',1),(1,8,'Country Club',1),(1,9,'Santa Bárbara',1),(1,10,'El Refugio',2),(1,11,'San Isidro-Patios',2),(1,12,'Pardo Rubio',2),(1,13,'Chicó Lago',2),(1,14,'Chapinero',2),(1,15,'Sagrado Corazón',3),(1,16,'La Macarena',3),(1,17,'Las Nieves',3),(1,18,'Las Cruces',3),(1,19,'Lourdes',3),(1,20,'San Blas',4),(1,21,'Sociego',4),(1,22,'20 de Julio',4),(1,23,'La Gloria',4),(1,24,'Los Libertadores',4),(1,25,'La Flora',5),(1,26,'Danubio',5),(1,27,'Gran Yomasa',5),(1,28,'Comuneros',5),(1,29,'Alfonso López',5),(1,30,'Parque Entrenubes',5),(1,31,'Ciudad Usme',5),(1,32,'Venecia',6),(1,33,'Tunjuelito',6),(1,34,'Apogeo',7),(1,35,'Bosa Occidental',7),(1,36,'Bosa Central',7),(1,37,'El Porvenir',7),(1,38,'Tintal Sur',7),(1,39,'Castilla',8),(1,40,'Américas',8),(1,41,'Carvajal',8),(1,42,'Kennedy Central',8),(1,43,'Timiza',8),(1,44,'Tintal Norte',8),(1,45,'Calandaima',8),(1,46,'Corabastos',8),(1,47,'Gran Britalia',8),(1,48,'Patio Bonito',8),(1,49,'Las Margaritas',8),(1,50,'Bavaria',8),(1,51,'Fontibón',9),(1,52,'Fontibón-San Pablo',9),(1,53,'Zona Franca',9),(1,54,'Ciudad Salitre Occidente',9),(1,55,'Granjas de Techo',9),(1,56,'Modelia',9),(1,57,'Capellanía',9),(1,58,'Aeropuerto Eldorado',9),(1,59,'Las Ferias',10),(1,60,'Minuto de Dios',10),(1,61,'Boyacá Real',10),(1,62,'Santa Cecilia',10),(1,63,'Bolivia',10),(1,64,'Garcés Navas',10),(1,65,'Engativá',10),(1,66,'Jardín Botánico',10),(1,67,'Álamos',10),(1,68,'La Academia',11),(1,69,'Guaymaral',11),(1,70,'San José de Bavaria',11),(1,71,'Britalia',11),(1,72,'El Prado',11),(1,73,'La Alhambra',11),(1,74,'Casablanca Suba',11),(1,75,'Niza',11),(1,76,'La Floresta',11),(1,77,'Suba',11),(1,78,'El Rincón',11),(1,79,'Tibabuyes',11),(1,80,'Los Andes',12),(1,81,'12 de Octubre',12),(1,82,'Los Alcázares',12),(1,83,'Parque Salitre',12),(1,84,'Galerías',13),(1,85,'Teusaquillo',13),(1,86,'Parque Simón Bolívar',13),(1,87,'La Esmeralda',13),(1,88,'Quinta Paredes',13),(1,89,'Ciudad Salitre Oriental',13),(1,90,'Santa Isabel',14),(1,91,'La Sabana',14),(1,92,'Ciudad Jardín',15),(1,93,'Restrepo',15),(1,94,'Ciudad Montes',16),(1,95,'Muzú',16),(1,96,'San Rafael',16),(1,97,'Zona Industrial',16),(1,98,'Puente Aranda',16),(1,99,'La Candelaria',17),(1,100,'San José',18),(1,101,'Quiroga',18),(1,102,'Marco Fidel Suárez',18),(1,103,'Marruecos',18),(1,104,'Diana Turbay',18),(1,105,'El Mochuelo',19),(1,106,'Monteblanco',19),(1,107,'Arborizadora',19),(1,108,'San Francisco',19),(1,109,'Lucero',19),(1,110,'El Tesoro',19),(1,111,'Ismael Perdomo',19),(1,112,'Jerusalén',19),(1,113,'Nazareth',20),(1,114,'Los Ríos',20),(1,115,'Las Auras',20),(1,116,'Las Palmas',20),(1,117,'Las Sopas',20),(1,118,'Taquecitos',20),(1,119,'Las Animas',20),(1,120,'Santa Rosa',20),(1,121,'Betania',20),(1,122,'Istmo',20),(1,123,'Tabaco',20),(1,124,'Raizal',20),(1,125,'Peñaliza',20),(1,126,'Laguna Verde',20),(1,127,'San Juan de Sumapaz',20),(1,128,'La Unión',20),(1,129,'Chorreras',20),(1,130,'Tunal Alto',20),(1,131,'Tunal Bajo',20),(1,132,'San Antonio',20),(1,133,'Las Vegas',20),(1,134,'Capitolio',20),(1,135,'San José',20),(1,136,'Concepción',20),(1,137,'El toldo',20),(1,138,'Santo Domingo',20);
/*!40000 ALTER TABLE `apiconciliacionapp_barrio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_citacion`
--

DROP TABLE IF EXISTS `apiconciliacionapp_citacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_citacion` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Descripcion` longtext NOT NULL,
  `Enlace` varchar(150) DEFAULT NULL,
  `Solicitud_Id_id` int DEFAULT NULL,
  `Tipo_medio_Id_id` int DEFAULT NULL,
  `Turno_Id_id` int DEFAULT NULL,
  `Fecha_sesion` date NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_c_Solicitud_Id_id_6535b8a1_fk_apiConcil` (`Solicitud_Id_id`),
  KEY `apiConciliacionApp_c_Tipo_medio_Id_id_6f59c7a1_fk_apiConcil` (`Tipo_medio_Id_id`),
  KEY `apiConciliacionApp_c_Turno_Id_id_3995f949_fk_apiConcil` (`Turno_Id_id`),
  CONSTRAINT `apiConciliacionApp_c_Solicitud_Id_id_6535b8a1_fk_apiConcil` FOREIGN KEY (`Solicitud_Id_id`) REFERENCES `apiconciliacionapp_solicitud` (`Numero_caso`),
  CONSTRAINT `apiConciliacionApp_c_Tipo_medio_Id_id_6f59c7a1_fk_apiConcil` FOREIGN KEY (`Tipo_medio_Id_id`) REFERENCES `apiconciliacionapp_tipo_medio` (`Id`),
  CONSTRAINT `apiConciliacionApp_c_Turno_Id_id_3995f949_fk_apiConcil` FOREIGN KEY (`Turno_Id_id`) REFERENCES `apiconciliacionapp_turno` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_citacion`
--

LOCK TABLES `apiconciliacionapp_citacion` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_citacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiconciliacionapp_citacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_ciudad`
--

DROP TABLE IF EXISTS `apiconciliacionapp_ciudad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_ciudad` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Departamento_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_c_Departamento_Id_id_495c9d59_fk_apiConcil` (`Departamento_Id_id`),
  CONSTRAINT `apiConciliacionApp_c_Departamento_Id_id_495c9d59_fk_apiConcil` FOREIGN KEY (`Departamento_Id_id`) REFERENCES `apiconciliacionapp_departamento` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=1107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_ciudad`
--

LOCK TABLES `apiconciliacionapp_ciudad` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_ciudad` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_ciudad` VALUES (1,1,'Medellin',1),(1,2,'Abejorral',1),(1,3,'Abriaqui',1),(1,4,'Alejandria',1),(1,5,'Amaga',1),(1,6,'Amalfi',1),(1,7,'Andes',1),(1,8,'Angelopolis',1),(1,9,'Angostura',1),(1,10,'Anori',1),(1,11,'Antioquia',1),(1,12,'Anza',1),(1,13,'Apartado',1),(1,14,'Arboletes',1),(1,15,'Argelia',1),(1,16,'Armenia',1),(1,17,'Barbosa',1),(1,18,'Belmira',1),(1,19,'Bello',1),(1,20,'Betania',1),(1,21,'Betulia',1),(1,22,'Bolivar',1),(1,23,'Briceño',1),(1,24,'Buritica',1),(1,25,'Caceres',1),(1,26,'Caicedo',1),(1,27,'Caldas',1),(1,28,'Campamento',1),(1,29,'Cañasgordas',1),(1,30,'Caracoli',1),(1,31,'Caramanta',1),(1,32,'Carepa',1),(1,33,'Carmen De Viboral',1),(1,34,'Carolina',1),(1,35,'Caucasia',1),(1,36,'Chigorodo',1),(1,37,'Cisneros',1),(1,38,'Cocorna',1),(1,39,'Concepcion',1),(1,40,'Concordia',1),(1,41,'Copacabana',1),(1,42,'Dabeiba',1),(1,43,'Don Matias',1),(1,44,'Ebejico',1),(1,45,'El Bagre',1),(1,46,'Entrerrios',1),(1,47,'Envigado',1),(1,48,'Fredonia',1),(1,49,'Frontino',1),(1,50,'Giraldo',1),(1,51,'Girardota',1),(1,52,'Gomez Plata',1),(1,53,'Granada',1),(1,54,'Guadalupe',1),(1,55,'Guarne',1),(1,56,'Guatape',1),(1,57,'Heliconia',1),(1,58,'Hispania',1),(1,59,'Itagui',1),(1,60,'Ituango',1),(1,61,'Jardin',1),(1,62,'Jerico',1),(1,63,'La Ceja',1),(1,64,'La Estrella',1),(1,65,'La Pintada',1),(1,66,'La Union',1),(1,67,'Liborina',1),(1,68,'Maceo',1),(1,69,'Marinilla',1),(1,70,'Montebello',1),(1,71,'Murindo',1),(1,72,'Mutata',1),(1,73,'Nariño',1),(1,74,'Necocli',1),(1,75,'Nechi',1),(1,76,'Olaya',1),(1,77,'Peñol',1),(1,78,'Peque',1),(1,79,'Pueblorrico',1),(1,80,'Puerto Berrio',1),(1,81,'Puerto Nare ',1),(1,82,'Puerto Triunfo',1),(1,83,'Remedios',1),(1,84,'Retiro',1),(1,85,'Rionegro',1),(1,86,'Sabanalarga',1),(1,87,'Sabaneta',1),(1,88,'Salgar',1),(1,89,'San Andres',1),(1,90,'San Carlos',1),(1,91,'San Francisco',1),(1,92,'San Jeronimo',1),(1,93,'San Jose De La Montaña',1),(1,94,'San Juan De Uraba',1),(1,95,'San Luis',1),(1,96,'San Pedro',1),(1,97,'San Pedro De Uraba',1),(1,98,'San Rafael',1),(1,99,'San Roque',1),(1,100,'San Vicente',1),(1,101,'Santa Barbara',1),(1,102,'Santa Rosa De Osos',1),(1,103,'Santo Domingo',1),(1,104,'Santuario',1),(1,105,'Segovia',1),(1,106,'Sonson',1),(1,107,'Sopetran',1),(1,108,'Tamesis',1),(1,109,'Taraza',1),(1,110,'Tarso',1),(1,111,'Titiribi',1),(1,112,'Toledo',1),(1,113,'Turbo',1),(1,114,'Uramita',1),(1,115,'Urrao',1),(1,116,'Valdivia',1),(1,117,'Valparaiso',1),(1,118,'Vegachi',1),(1,119,'Venecia',1),(1,120,'Vigia Del Fuerte',1),(1,121,'Yali',1),(1,122,'Yarumal',1),(1,123,'Yolombo',1),(1,124,'Yondo',1),(1,125,'Zaragoza',1),(1,126,'Barranquilla ',2),(1,127,'Baranoa',2),(1,128,'Campo De La Cruz',2),(1,129,'Candelaria',2),(1,130,'Galapa',2),(1,131,'Juan De Acosta',2),(1,132,'Luruaco',2),(1,133,'Malambo',2),(1,134,'Manati',2),(1,135,'Palmar De Varela',2),(1,136,'Piojo',2),(1,137,'Polo Nuevo',2),(1,138,'Ponedera',2),(1,139,'Puerto Colombia',2),(1,140,'Repelon',2),(1,141,'Sabanagrande',2),(1,142,'Sabanalarga',2),(1,143,'Santa Lucia',2),(1,144,'Santo Tomas',2),(1,145,'Soledad',2),(1,146,'Suan',2),(1,147,'Tubara',2),(1,148,'Usiacuri',2),(1,149,'Bogota D.C',3),(1,150,'Cartagena ',4),(1,151,'Achi',4),(1,152,'Altos Del Rosario',4),(1,153,'Arenal',4),(1,154,'Arjona',4),(1,155,'Arroyohondo',4),(1,156,'Barranco De Loba',4),(1,157,'Calamar',4),(1,158,'Cantagallo',4),(1,159,'Cicuco',4),(1,160,'Cordoba',4),(1,161,'Clemencia',4),(1,162,'El Carmen De Bolivar',4),(1,163,'El Guamo',4),(1,164,'El Peñon',4),(1,165,'Hatillo De Loba',4),(1,166,'Magangue',4),(1,167,'Mahates',4),(1,168,'Margarita',4),(1,169,'Maria La Baja',4),(1,170,'Montecristo',4),(1,171,'Mompos',4),(1,172,'Morales',4),(1,173,'Pinillos',4),(1,174,'Regidor',4),(1,175,'Rio Viejo',4),(1,176,'San Cristobal',4),(1,177,'San Estanislao',4),(1,178,'San Fernando',4),(1,179,'San Jacinto',4),(1,180,'San Jacinto Del Cauca',4),(1,181,'San Juan Nepomuceno',4),(1,182,'San Martin De Loba',4),(1,183,'San Pablo',4),(1,184,'Santa Catalina',4),(1,185,'Santa Rosa',4),(1,186,'Santa Rosa Del Sur',4),(1,187,'Simiti',4),(1,188,'Soplaviento',4),(1,189,'Talaigua Nuevo',4),(1,190,'Tiquisio ',4),(1,191,'Turbaco',4),(1,192,'Turbana',4),(1,193,'Villanueva',4),(1,194,'Zambrano',4),(1,195,'Tunja',5),(1,196,'Almeida',5),(1,197,'Aquitania',5),(1,198,'Arcabuco',5),(1,199,'Belen',5),(1,200,'Berbeo',5),(1,201,'Beteitiva',5),(1,202,'Boavita',5),(1,203,'Boyaca',5),(1,204,'Briceño',5),(1,205,'Buenavista',5),(1,206,'Busbanza',5),(1,207,'Caldas',5),(1,208,'Campohermoso',5),(1,209,'Cerinza',5),(1,210,'Chinavita',5),(1,211,'Chiquinquira',5),(1,212,'Chiscas',5),(1,213,'Chita',5),(1,214,'Chitaraque',5),(1,215,'Chivata',5),(1,216,'Cienega',5),(1,217,'Combita',5),(1,218,'Coper',5),(1,219,'Corrales',5),(1,220,'Covarachia',5),(1,221,'Cubara',5),(1,222,'Cucaita',5),(1,223,'Cuitiva',5),(1,224,'Chiquiza',5),(1,225,'Chivor',5),(1,226,'Duitama',5),(1,227,'El Cocuy',5),(1,228,'El Espino',5),(1,229,'Firavitoba',5),(1,230,'Floresta',5),(1,231,'Gachantiva',5),(1,232,'Gameza',5),(1,233,'Garagoa',5),(1,234,'Guacamayas',5),(1,235,'Guateque',5),(1,236,'Guayata',5),(1,237,'Guican',5),(1,238,'Iza',5),(1,239,'Jenesano',5),(1,240,'Jerico',5),(1,241,'Labranzagrande',5),(1,242,'La Capilla',5),(1,243,'La Victoria',5),(1,244,'La Uvita',5),(1,245,'Villa De Leiva',5),(1,246,'Macanal',5),(1,247,'Maripi',5),(1,248,'Miraflores',5),(1,249,'Mongua',5),(1,250,'Mongui',5),(1,251,'Moniquira',5),(1,252,'Motavita',5),(1,253,'Muzo',5),(1,254,'Nobsa',5),(1,255,'Nuevo Colon',5),(1,256,'Oicata',5),(1,257,'Otanche',5),(1,258,'Pachavita',5),(1,259,'Paez',5),(1,260,'Paipa',5),(1,261,'Pajarito',5),(1,262,'Panqueba',5),(1,263,'Pauna',5),(1,264,'Paya',5),(1,265,'Paz Del Rio',5),(1,266,'Pesca',5),(1,267,'Pisba',5),(1,268,'Puerto Boyaca',5),(1,269,'Quipama',5),(1,270,'Ramiriqui',5),(1,271,'Raquira',5),(1,272,'Rondon',5),(1,273,'Saboya',5),(1,274,'Sachica',5),(1,275,'Samaca',5),(1,276,'San Eduardo',5),(1,277,'San Jose De Pare',5),(1,278,'San Luis De Gaceno',5),(1,279,'San Mateo',5),(1,280,'San Miguel De Sema',5),(1,281,'San Pablo De Borbur',5),(1,282,'Santana',5),(1,283,'Santa Maria',5),(1,284,'Santa Rosa De Viterbo',5),(1,285,'Santa Sofia',5),(1,286,'Sativanorte',5),(1,287,'Sativasur',5),(1,288,'Siachoque',5),(1,289,'Soata',5),(1,290,'Socota',5),(1,291,'Socha',5),(1,292,'Sogamoso',5),(1,293,'Somondoco',5),(1,294,'Sora',5),(1,295,'Sotaquira',5),(1,296,'Soraca',5),(1,297,'Susacon',5),(1,298,'Sutamarchan',5),(1,299,'Sutatenza',5),(1,300,'Tasco',5),(1,301,'Tenza',5),(1,302,'Tibana',5),(1,303,'Tibasosa',5),(1,304,'Tinjaca',5),(1,305,'Tipacoque',5),(1,306,'Toca',5),(1,307,'Togui',5),(1,308,'Topaga',5),(1,309,'Tota',5),(1,310,'Tunungua',5),(1,311,'Turmeque',5),(1,312,'Tuta',5),(1,313,'Tutasa',5),(1,314,'Umbita',5),(1,315,'Ventaquemada',5),(1,316,'Viracacha',5),(1,317,'Zetaquira',5),(1,318,'Manizales',6),(1,319,'Aguadas',6),(1,320,'Anserma',6),(1,321,'Aranzazu',6),(1,322,'Belalcazar',6),(1,323,'Chinchina',6),(1,324,'Filadelfia',6),(1,325,'La Dorada',6),(1,326,'La Merced',6),(1,327,'Manzanares',6),(1,328,'Marmato',6),(1,329,'Marquetalia',6),(1,330,'Marulanda',6),(1,331,'Neira',6),(1,332,'Norcasia',6),(1,333,'Pacora',6),(1,334,'Palestina',6),(1,335,'Pensilvania',6),(1,336,'Riosucio',6),(1,337,'Risaralda',6),(1,338,'Salamina',6),(1,339,'Samana',6),(1,340,'San Jose',6),(1,341,'Supia',6),(1,342,'Victoria',6),(1,343,'Villamaria',6),(1,344,'Viterbo',6),(1,345,'Florencia',7),(1,346,'Albania',7),(1,347,'Belen De Los Andaquies',7),(1,348,'Cartagena Del Chaira',7),(1,349,'Curillo',7),(1,350,'El Doncello',7),(1,351,'El Paujil',7),(1,352,'La Montañita',7),(1,353,'Milan',7),(1,354,'Morelia',7),(1,355,'Puerto Rico',7),(1,356,'San Jose De Fragua',7),(1,357,'San Vicente Del Caguan',7),(1,358,'Solano',7),(1,359,'Solita',7),(1,360,'Valparaiso',7),(1,361,'Popayan',8),(1,362,'Almaguer',8),(1,363,'Argelia',8),(1,364,'Balboa',8),(1,365,'Bolivar',8),(1,366,'Buenos Aires',8),(1,367,'Cajibio',8),(1,368,'Caldono',8),(1,369,'Caloto',8),(1,370,'Corinto',8),(1,371,'El Tambo',8),(1,372,'Florencia',8),(1,373,'Guapi',8),(1,374,'Inza',8),(1,375,'Jambalo',8),(1,376,'La Sierra',8),(1,377,'La Vega',8),(1,378,'Lopez ',8),(1,379,'Mercaderes',8),(1,380,'Miranda',8),(1,381,'Morales',8),(1,382,'Padilla',8),(1,383,'Paez ',8),(1,384,'Patia ',8),(1,385,'Piamonte',8),(1,386,'Piendamo',8),(1,387,'Puerto Tejada',8),(1,388,'Purace ',8),(1,389,'Rosas',8),(1,390,'San Sebastian',8),(1,391,'Santander De Quilichao',8),(1,392,'Santa Rosa',8),(1,393,'Silvia',8),(1,394,'Sotara ',8),(1,395,'Suarez',8),(1,396,'Timbio',8),(1,397,'Timbiqui',8),(1,398,'Toribio',8),(1,399,'Totoro',8),(1,400,'Villarica',8),(1,401,'Valledupar',9),(1,402,'Aguachica',9),(1,403,'Agustin Codazzi',9),(1,404,'Astrea',9),(1,405,'Becerril',9),(1,406,'Bosconia',9),(1,407,'Chimichagua',9),(1,408,'Chiriguana',9),(1,409,'Curumani',9),(1,410,'El Copey',9),(1,411,'El Paso',9),(1,412,'Gamarra',9),(1,413,'Gonzalez',9),(1,414,'La Gloria',9),(1,415,'La Jagua Ibirico',9),(1,416,'Manaure ',9),(1,417,'Pailitas',9),(1,418,'Pelaya',9),(1,419,'Pueblo Bello',9),(1,420,'Rio De Oro',9),(1,421,'La Paz ',9),(1,422,'San Alberto',9),(1,423,'San Diego',9),(1,424,'San Martin',9),(1,425,'Tamalameque',9),(1,426,'Monteria',10),(1,427,'Ayapel',10),(1,428,'Buenavista',10),(1,429,'Canalete',10),(1,430,'Cerete',10),(1,431,'Chima',10),(1,432,'Chinu',10),(1,433,'Cienaga De Oro',10),(1,434,'Cotorra',10),(1,435,'La Apartada',10),(1,436,'Lorica',10),(1,437,'Los Cordobas',10),(1,438,'Momil',10),(1,439,'Montelibano',10),(1,440,'Moñitos',10),(1,441,'Planeta Rica',10),(1,442,'Pueblo Nuevo',10),(1,443,'Puerto Escondido',10),(1,444,'Puerto Libertador',10),(1,445,'Purisima',10),(1,446,'Sahagun',10),(1,447,'San Andres Sotavento',10),(1,448,'San Antero',10),(1,449,'San Bernardo Del Viento',10),(1,450,'San Carlos',10),(1,451,'San Pelayo',10),(1,452,'Tierralta',10),(1,453,'Valencia',10),(1,454,'Agua De Dios',11),(1,455,'Alban',11),(1,456,'Anapoima',11),(1,457,'Anolaima',11),(1,458,'Arbelaez',11),(1,459,'Beltran',11),(1,460,'Bituima',11),(1,461,'Bojaca',11),(1,462,'Cabrera',11),(1,463,'Cachipay',11),(1,464,'Cajica',11),(1,465,'Caparrapi',11),(1,466,'Caqueza',11),(1,467,'Carmen De Carupa',11),(1,468,'Chaguani',11),(1,469,'Chia',11),(1,470,'Chipaque',11),(1,471,'Choachi',11),(1,472,'Choconta',11),(1,473,'Cogua',11),(1,474,'Cota',11),(1,475,'Cucunuba',11),(1,476,'El Colegio',11),(1,477,'El Peñon',11),(1,478,'El Rosal',11),(1,479,'Facatativa',11),(1,480,'Fomeque',11),(1,481,'Fosca',11),(1,482,'Funza',11),(1,483,'Fuquene',11),(1,484,'Fusagasuga',11),(1,485,'Gachala',11),(1,486,'Gachancipa',11),(1,487,'Gacheta',11),(1,488,'Gama',11),(1,489,'Girardot',11),(1,490,'Granada',11),(1,491,'Guacheta',11),(1,492,'Guaduas',11),(1,493,'Guasca',11),(1,494,'Guataqui',11),(1,495,'Guatavita',11),(1,496,'Guayabal De Siquima',11),(1,497,'Guayabetal',11),(1,498,'Gutierrez',11),(1,499,'Jerusalen',11),(1,500,'Junin',11),(1,501,'La Calera',11),(1,502,'La Mesa',11),(1,503,'La Palma',11),(1,504,'La Peña',11),(1,505,'La Vega',11),(1,506,'Lenguazaque',11),(1,507,'Macheta',11),(1,508,'Madrid',11),(1,509,'Manta',11),(1,510,'Medina',11),(1,511,'Mosquera',11),(1,512,'Nariño',11),(1,513,'Nemocon',11),(1,514,'Nilo',11),(1,515,'Nimaima',11),(1,516,'Nocaima',11),(1,517,'Venecia ',11),(1,518,'Pacho',11),(1,519,'Paime',11),(1,520,'Pandi',11),(1,521,'Paratebueno',11),(1,522,'Pasca',11),(1,523,'Puerto Salgar',11),(1,524,'Puli',11),(1,525,'Quebradanegra',11),(1,526,'Quetame',11),(1,527,'Quipile',11),(1,528,'Apulo ',11),(1,529,'Ricaurte',11),(1,530,'San Antonio Del Tequendama',11),(1,531,'San Bernardo',11),(1,532,'San Cayetano',11),(1,533,'San Francisco',11),(1,534,'San Juan De Rioseco',11),(1,535,'Sasaima',11),(1,536,'Sesquile',11),(1,537,'Sibate',11),(1,538,'Silvania',11),(1,539,'Simijaca',11),(1,540,'Soacha',11),(1,541,'Sopo',11),(1,542,'Subachoque',11),(1,543,'Suesca',11),(1,544,'Supata',11),(1,545,'Susa',11),(1,546,'Sutatausa',11),(1,547,'Tabio',11),(1,548,'Tausa',11),(1,549,'Tena',11),(1,550,'Tenjo',11),(1,551,'Tibacuy',11),(1,552,'Tibirita',11),(1,553,'Tocaima',11),(1,554,'Tocancipa',11),(1,555,'Topaipi',11),(1,556,'Ubala',11),(1,557,'Ubaque',11),(1,558,'Ubate',11),(1,559,'Une',11),(1,560,'Utica',11),(1,561,'Vergara',11),(1,562,'Viani',11),(1,563,'Villagomez',11),(1,564,'Villapinzon',11),(1,565,'Villeta',11),(1,566,'Viota',11),(1,567,'Yacopi',11),(1,568,'Zipacon',11),(1,569,'Zipaquira',11),(1,570,'Quibdo ',12),(1,571,'Acandi',12),(1,572,'Alto Baudo ',12),(1,573,'Atrato',12),(1,574,'Bagado',12),(1,575,'Bahia Solano ',12),(1,576,'Bajo Baudo ',12),(1,577,'Bojaya ',12),(1,578,'Canton De San Pablo ',12),(1,579,'Condoto',12),(1,580,'El Carmen De Atrato',12),(1,581,'Litoral Del Bajo San Juan ',12),(1,582,'Istmina',12),(1,583,'Jurado',12),(1,584,'Lloro',12),(1,585,'Medio Atrato',12),(1,586,'Medio Baudo',12),(1,587,'Novita',12),(1,588,'Nuqui',12),(1,589,'Rioquito',12),(1,590,'Riosucio',12),(1,591,'San Jose Del Palmar',12),(1,592,'Sipi',12),(1,593,'Tado',12),(1,594,'Unguia',12),(1,595,'Union Panamericana',12),(1,596,'Neiva',13),(1,597,'Acevedo',13),(1,598,'Agrado',13),(1,599,'Aipe',13),(1,600,'Algeciras',13),(1,601,'Altamira',13),(1,602,'Baraya',13),(1,603,'Campoalegre',13),(1,604,'Colombia',13),(1,605,'Elias',13),(1,606,'Garzon',13),(1,607,'Gigante',13),(1,608,'Guadalupe',13),(1,609,'Hobo',13),(1,610,'Iquira',13),(1,611,'Isnos ',13),(1,612,'La Argentina',13),(1,613,'La Plata',13),(1,614,'Nataga',13),(1,615,'Oporapa',13),(1,616,'Paicol',13),(1,617,'Palermo',13),(1,618,'Palestina',13),(1,619,'Pital',13),(1,620,'Pitalito',13),(1,621,'Rivera',13),(1,622,'Saladoblanco',13),(1,623,'San Agustin',13),(1,624,'Santa Maria',13),(1,625,'Suaza',13),(1,626,'Tarqui',13),(1,627,'Tesalia',13),(1,628,'Tello',13),(1,629,'Teruel',13),(1,630,'Timana',13),(1,631,'Villavieja',13),(1,632,'Yaguara',13),(1,633,'Riohacha',14),(1,634,'Barrancas',14),(1,635,'Dibulla',14),(1,636,'Distraccion',14),(1,637,'El Molino',14),(1,638,'Fonseca',14),(1,639,'Hatonuevo',14),(1,640,'La Jagua Del Pilar',14),(1,641,'Maicao',14),(1,642,'Manaure',14),(1,643,'San Juan Del Cesar',14),(1,644,'Uribia',14),(1,645,'Urumita',14),(1,646,'Villanueva',14),(1,647,'Santa Marta ',15),(1,648,'Algarrobo',15),(1,649,'Aracataca',15),(1,650,'Ariguani ',15),(1,651,'Cerro San Antonio',15),(1,652,'Chivolo',15),(1,653,'Cienaga',15),(1,654,'Concordia',15),(1,655,'El Banco',15),(1,656,'El Piñon',15),(1,657,'El Reten',15),(1,658,'Fundacion',15),(1,659,'Guamal',15),(1,660,'Pedraza',15),(1,661,'Pijiño Del Carmen ',15),(1,662,'Pivijay',15),(1,663,'Plato',15),(1,664,'Puebloviejo',15),(1,665,'Remolino',15),(1,666,'Sabanas De San Angel',15),(1,667,'Salamina',15),(1,668,'San Sebastian De Buenavista',15),(1,669,'San Zenon',15),(1,670,'Santa Ana',15),(1,671,'Sitionuevo',15),(1,672,'Tenerife',15),(1,673,'Villavicencio',16),(1,674,'Acacias',16),(1,675,'Barranca De Upia',16),(1,676,'Cabuyaro',16),(1,677,'Castilla La Nueva',16),(1,678,'San Luis De Cubarral',16),(1,679,'Cumaral',16),(1,680,'El Calvario',16),(1,681,'El Castillo',16),(1,682,'El Dorado',16),(1,683,'Fuente De Oro',16),(1,684,'Granada',16),(1,685,'Guamal',16),(1,686,'Mapiripan',16),(1,687,'Mesetas',16),(1,688,'La Macarena',16),(1,689,'La Uribe',16),(1,690,'Lejanias',16),(1,691,'Puerto Concordia',16),(1,692,'Puerto Gaitan',16),(1,693,'Puerto Lopez',16),(1,694,'Puerto Lleras',16),(1,695,'Puerto Rico',16),(1,696,'Restrepo',16),(1,697,'San Carlos De Guaroa',16),(1,698,'San Juan De Arama',16),(1,699,'San Juanito',16),(1,700,'San Martin',16),(1,701,'Vistahermosa',16),(1,702,'Pasto ',17),(1,703,'Alban ',17),(1,704,'Aldana',17),(1,705,'Ancuya',17),(1,706,'Arboleda ',17),(1,707,'Barbacoas',17),(1,708,'Belen',17),(1,709,'Buesaco',17),(1,710,'Colon ',17),(1,711,'Consaca',17),(1,712,'Contadero',17),(1,713,'Cordoba',17),(1,714,'Cuaspud ',17),(1,715,'Cumbal',17),(1,716,'Cumbitara',17),(1,717,'Chachagui',17),(1,718,'El Charco',17),(1,719,'El Peñol',17),(1,720,'El Rosario',17),(1,721,'El Tablon',17),(1,722,'El Tambo',17),(1,723,'Funes',17),(1,724,'Guachucal',17),(1,725,'Guaitarilla',17),(1,726,'Gualmatan',17),(1,727,'Iles',17),(1,728,'Imues',17),(1,729,'Ipiales',17),(1,730,'La Cruz',17),(1,731,'La Florida',17),(1,732,'La Llanada',17),(1,733,'La Tola',17),(1,734,'La Union',17),(1,735,'Leiva',17),(1,736,'Linares',17),(1,737,'Los Andes ',17),(1,738,'Magui ',17),(1,739,'Mallama ',17),(1,740,'Mosquera',17),(1,741,'Olaya Herrera ',17),(1,742,'Ospina',17),(1,743,'Francisco Pizarro ',17),(1,744,'Policarpa',17),(1,745,'Potosi',17),(1,746,'Providencia',17),(1,747,'Puerres',17),(1,748,'Pupiales',17),(1,749,'Ricaurte',17),(1,750,'Roberto Payan ',17),(1,751,'Samaniego',17),(1,752,'Sandona',17),(1,753,'San Bernardo',17),(1,754,'San Lorenzo',17),(1,755,'San Pablo',17),(1,756,'San Pedro De Cartago',17),(1,757,'Santa Barbara ',17),(1,758,'Santa Cruz ',17),(1,759,'Sapuyes',17),(1,760,'Taminango',17),(1,761,'Tangua',17),(1,762,'Tumaco',17),(1,763,'Tuquerres',17),(1,764,'Yacuanquer',17),(1,765,'Cucuta',18),(1,766,'Abrego',18),(1,767,'Arboledas',18),(1,768,'Bochalema',18),(1,769,'Bucarasica',18),(1,770,'Cacota',18),(1,771,'Cachira',18),(1,772,'Chinacota',18),(1,773,'Chitaga',18),(1,774,'Convencion',18),(1,775,'Cucutilla',18),(1,776,'Durania',18),(1,777,'El Carmen',18),(1,778,'El Tarra',18),(1,779,'El Zulia',18),(1,780,'Gramalote',18),(1,781,'Hacari',18),(1,782,'Herran',18),(1,783,'Labateca',18),(1,784,'La Esperanza',18),(1,785,'La Playa',18),(1,786,'Los Patios',18),(1,787,'Lourdes',18),(1,788,'Mutiscua',18),(1,789,'Ocaña',18),(1,790,'Pamplona',18),(1,791,'Pamplonita',18),(1,792,'Puerto Santander',18),(1,793,'Ragonvalia',18),(1,794,'Salazar',18),(1,795,'San Calixto',18),(1,796,'San Cayetano',18),(1,797,'Santiago',18),(1,798,'Sardinata',18),(1,799,'Silos',18),(1,800,'Teorama',18),(1,801,'Tibu',18),(1,802,'Toledo',18),(1,803,'Villacaro',18),(1,804,'Villa Del Rosario',18),(1,805,'Armenia',19),(1,806,'Buenavista',19),(1,807,'Calarca',19),(1,808,'Circasia',19),(1,809,'Cordoba',19),(1,810,'Filandia',19),(1,811,'Genova',19),(1,812,'La Tebaida',19),(1,813,'Montenegro',19),(1,814,'Pijao',19),(1,815,'Quimbaya',19),(1,816,'Salento',19),(1,817,'Pereira',20),(1,818,'Apia',20),(1,819,'Balboa',20),(1,820,'Belen De Umbria',20),(1,821,'Dos Quebradas',20),(1,822,'Guatica',20),(1,823,'La Celia',20),(1,824,'La Virginia',20),(1,825,'Marsella',20),(1,826,'Mistrato',20),(1,827,'Pueblo Rico',20),(1,828,'Quinchia',20),(1,829,'Santa Rosa De Cabal',20),(1,830,'Santuario',20),(1,831,'Bucaramanga',21),(1,832,'Aguada',21),(1,833,'Albania',21),(1,834,'Aratoca',21),(1,835,'Barbosa',21),(1,836,'Barichara',21),(1,837,'Barrancabermeja',21),(1,838,'Betulia',21),(1,839,'Bolivar',21),(1,840,'Cabrera',21),(1,841,'California',21),(1,842,'Capitanejo',21),(1,843,'Carcasi',21),(1,844,'Cepita',21),(1,845,'Cerrito',21),(1,846,'Charala',21),(1,847,'Charta',21),(1,848,'Chima',21),(1,849,'Chipata',21),(1,850,'Cimitarra',21),(1,851,'Concepcion',21),(1,852,'Confines',21),(1,853,'Contratacion',21),(1,854,'Coromoro',21),(1,855,'Curiti',21),(1,856,'El Carmen De Chucury',21),(1,857,'El Guacamayo',21),(1,858,'El Peñon',21),(1,859,'El Playon',21),(1,860,'Encino',21),(1,861,'Enciso',21),(1,862,'Florian',21),(1,863,'Floridablanca',21),(1,864,'Galan',21),(1,865,'Gambita',21),(1,866,'Giron',21),(1,867,'Guaca',21),(1,868,'Guadalupe',21),(1,869,'Guapota',21),(1,870,'Guavata',21),(1,871,'Guepsa',21),(1,872,'Hato',21),(1,873,'Jesus Maria',21),(1,874,'Jordan',21),(1,875,'La Belleza',21),(1,876,'Landazuri',21),(1,877,'La Paz',21),(1,878,'Lebrija',21),(1,879,'Los Santos',21),(1,880,'Macaravita',21),(1,881,'Malaga',21),(1,882,'Matanza',21),(1,883,'Mogotes',21),(1,884,'Molagavita',21),(1,885,'Ocamonte',21),(1,886,'Oiba',21),(1,887,'Onzaga',21),(1,888,'Palmar',21),(1,889,'Palmas Del Socorro',21),(1,890,'Paramo',21),(1,891,'Piedecuesta',21),(1,892,'Pinchote',21),(1,893,'Puente Nacional',21),(1,894,'Puerto Parra',21),(1,895,'Puerto Wilches',21),(1,896,'Rionegro',21),(1,897,'Sabana De Torres',21),(1,898,'San Andres',21),(1,899,'San Benito',21),(1,900,'San Gil',21),(1,901,'San Joaquin',21),(1,902,'San Jose De Miranda',21),(1,903,'San Miguel',21),(1,904,'San Vicente De Chucuri',21),(1,905,'Santa Barbara',21),(1,906,'Santa Helena Del Opon',21),(1,907,'Simacota',21),(1,908,'Socorro',21),(1,909,'Suaita',21),(1,910,'Sucre',21),(1,911,'Surata',21),(1,912,'Tona',21),(1,913,'Valle San Jose',21),(1,914,'Velez',21),(1,915,'Vetas',21),(1,916,'Villanueva',21),(1,917,'Zapatoca',21),(1,918,'Sincelejo',22),(1,919,'Buenavista',22),(1,920,'Caimito',22),(1,921,'Coloso ',22),(1,922,'Corozal',22),(1,923,'Chalan',22),(1,924,'Galeras ',22),(1,925,'Guaranda',22),(1,926,'La Union',22),(1,927,'Los Palmitos',22),(1,928,'Majagual',22),(1,929,'Morroa',22),(1,930,'Ovejas',22),(1,931,'Palmito',22),(1,932,'Sampues',22),(1,933,'San Benito Abad',22),(1,934,'San Juan De Betulia',22),(1,935,'San Marcos',22),(1,936,'San Onofre',22),(1,937,'San Pedro',22),(1,938,'Since',22),(1,939,'Sucre',22),(1,940,'Tolu',22),(1,941,'Toluviejo',22),(1,942,'Ibague',23),(1,943,'Alpujarra',23),(1,944,'Alvarado',23),(1,945,'Ambalema',23),(1,946,'Anzoategui',23),(1,947,'Armero ',23),(1,948,'Ataco',23),(1,949,'Cajamarca',23),(1,950,'Carmen Apicala',23),(1,951,'Casabianca',23),(1,952,'Chaparral',23),(1,953,'Coello',23),(1,954,'Coyaima',23),(1,955,'Cunday',23),(1,956,'Dolores',23),(1,957,'Espinal',23),(1,958,'Falan',23),(1,959,'Flandes',23),(1,960,'Fresno',23),(1,961,'Guamo',23),(1,962,'Herveo',23),(1,963,'Honda',23),(1,964,'Icononzo',23),(1,965,'Lerida',23),(1,966,'Libano',23),(1,967,'Mariquita',23),(1,968,'Melgar',23),(1,969,'Murillo',23),(1,970,'Natagaima',23),(1,971,'Ortega',23),(1,972,'Palocabildo',23),(1,973,'Piedras',23),(1,974,'Planadas',23),(1,975,'Prado',23),(1,976,'Purificacion',23),(1,977,'Rioblanco',23),(1,978,'Roncesvalles',23),(1,979,'Rovira',23),(1,980,'Saldaña',23),(1,981,'San Antonio',23),(1,982,'San Luis',23),(1,983,'Santa Isabel',23),(1,984,'Suarez',23),(1,985,'Valle De San Juan',23),(1,986,'Venadillo',23),(1,987,'Villahermosa',23),(1,988,'Villarrica',23),(1,989,'Cali ',24),(1,990,'Alcala',24),(1,991,'Andalucia',24),(1,992,'Ansermanuevo',24),(1,993,'Argelia',24),(1,994,'Bolivar',24),(1,995,'Buenaventura',24),(1,996,'Buga',24),(1,997,'Bugalagrande',24),(1,998,'Caicedonia',24),(1,999,'Calima ',24),(1,1000,'Candelaria',24),(1,1001,'Cartago',24),(1,1002,'Dagua',24),(1,1003,'El Aguila',24),(1,1004,'El Cairo',24),(1,1005,'El Cerrito',24),(1,1006,'El Dovio',24),(1,1007,'Florida',24),(1,1008,'Ginebra',24),(1,1009,'Guacari',24),(1,1010,'Jamundi',24),(1,1011,'La Cumbre',24),(1,1012,'La Union',24),(1,1013,'La Victoria',24),(1,1014,'Obando',24),(1,1015,'Palmira',24),(1,1016,'Pradera',24),(1,1017,'Restrepo',24),(1,1018,'Riofrio',24),(1,1019,'Roldanillo',24),(1,1020,'San Pedro',24),(1,1021,'Sevilla',24),(1,1022,'Toro',24),(1,1023,'Trujillo',24),(1,1024,'Tulua',24),(1,1025,'Ulloa',24),(1,1026,'Versalles',24),(1,1027,'Vijes',24),(1,1028,'Yotoco',24),(1,1029,'Yumbo',24),(1,1030,'Zarzal',24),(1,1031,'Arauca',25),(1,1032,'Arauquita',25),(1,1033,'Cravo Norte',25),(1,1034,'Fortul',25),(1,1035,'Puerto Rondon',25),(1,1036,'Saravena',25),(1,1037,'Tame',25),(1,1038,'Yopal',26),(1,1039,'Aguazul',26),(1,1040,'Chameza',26),(1,1041,'Hato Corozal',26),(1,1042,'La Salina',26),(1,1043,'Mani',26),(1,1044,'Monterrey',26),(1,1045,'Nunchia',26),(1,1046,'Orocue',26),(1,1047,'Paz De Ariporo',26),(1,1048,'Pore',26),(1,1049,'Recetor',26),(1,1050,'Sabanalarga',26),(1,1051,'Sacama',26),(1,1052,'San Luis De Palenque',26),(1,1053,'Tamara',26),(1,1054,'Tauramena',26),(1,1055,'Trinidad',26),(1,1056,'Villanueva',26),(1,1057,'Mocoa',27),(1,1058,'Colon',27),(1,1059,'Orito',27),(1,1060,'Puerto Asis',27),(1,1061,'Puerto Caicedo',27),(1,1062,'Puerto Guzman',27),(1,1063,'Puerto Leguizamo',27),(1,1064,'Sibundoy',27),(1,1065,'San Francisco',27),(1,1066,'San Miguel ',27),(1,1067,'Santiago',27),(1,1068,'La Hormiga ',27),(1,1069,'Villagarzon',27),(1,1070,'San Andres',28),(1,1071,'Providencia',28),(1,1072,'Leticia',29),(1,1073,'El Encanto',29),(1,1074,'La Chorrera',29),(1,1075,'La Pedrera',29),(1,1076,'La Victoria',29),(1,1077,'Miriti-Parana',29),(1,1078,'Puerto Alegria',29),(1,1079,'Puerto Arica',29),(1,1080,'Puerto Nariño',29),(1,1081,'Puerto Santander',29),(1,1082,'Tarapaca',29),(1,1083,'Puerto Inirida',30),(1,1084,'Barranco Minas',30),(1,1085,'San Felipe',30),(1,1086,'Puerto Colombia',30),(1,1087,'La Guadalupe',30),(1,1088,'Cacahual',30),(1,1089,'Pana Pana ',30),(1,1090,'Morichal ',30),(1,1091,'San Jose Del Guaviare',31),(1,1092,'Calamar',31),(1,1093,'El Retorno',31),(1,1094,'Miraflores',31),(1,1095,'Mitu',32),(1,1096,'Caruru',32),(1,1097,'Pacoa',32),(1,1098,'Taraira',32),(1,1099,'Papunaua ',32),(1,1100,'Yavarate',32),(1,1101,'Puerto Carreño',33),(1,1102,'La Primavera',33),(1,1103,'Santa Rita',33),(1,1104,'Santa Rosalia',33),(1,1105,'San Jose De Ocune',33),(1,1106,'Cumaribo',33);
/*!40000 ALTER TABLE `apiconciliacionapp_ciudad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_departamento`
--

DROP TABLE IF EXISTS `apiconciliacionapp_departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_departamento` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Pais_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_d_Pais_Id_id_c20b2de5_fk_apiConcil` (`Pais_Id_id`),
  CONSTRAINT `apiConciliacionApp_d_Pais_Id_id_c20b2de5_fk_apiConcil` FOREIGN KEY (`Pais_Id_id`) REFERENCES `apiconciliacionapp_pais` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_departamento`
--

LOCK TABLES `apiconciliacionapp_departamento` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_departamento` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_departamento` VALUES (1,1,'Antioquia',1),(1,2,'Atlantico',1),(1,3,'Bogota D.C',1),(1,4,'Bolivar',1),(1,5,'Boyaca',1),(1,6,'Caldas',1),(1,7,'Caqueta',1),(1,8,'Cauca',1),(1,9,'Cesar',1),(1,10,'Cordoba',1),(1,11,'Cundinamarca',1),(1,12,'Choco',1),(1,13,'Huila',1),(1,14,'La Guajira',1),(1,15,'Magdalena',1),(1,16,'Meta',1),(1,17,'Nariño',1),(1,18,'Norte de Santander',1),(1,19,'Quindio',1),(1,20,'Risaralda',1),(1,21,'Santander',1),(1,22,'Sucre',1),(1,23,'Tolima',1),(1,24,'Valle',1),(1,25,'Arauca',1),(1,26,'Casanare',1),(1,27,'Putumayo',1),(1,28,'San Andres',1),(1,29,'Amazonas',1),(1,30,'Guainia',1),(1,31,'Guaviare',1),(1,32,'Vaupes',1),(1,33,'Vichada',1);
/*!40000 ALTER TABLE `apiconciliacionapp_departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_documento`
--

DROP TABLE IF EXISTS `apiconciliacionapp_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_documento` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Ruta_directorio` varchar(100) DEFAULT NULL,
  `Tamanio` varchar(50) DEFAULT NULL,
  `Fecha_documento` date NOT NULL,
  `Solicitud_Id_id` int DEFAULT NULL,
  `Tipo_estado_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_d_Solicitud_Id_id_1ff9d42e_fk_apiConcil` (`Solicitud_Id_id`),
  KEY `apiConciliacionApp_d_Tipo_estado_Id_id_6f10d989_fk_apiConcil` (`Tipo_estado_Id_id`),
  CONSTRAINT `apiConciliacionApp_d_Solicitud_Id_id_1ff9d42e_fk_apiConcil` FOREIGN KEY (`Solicitud_Id_id`) REFERENCES `apiconciliacionapp_solicitud` (`Numero_caso`),
  CONSTRAINT `apiConciliacionApp_d_Tipo_estado_Id_id_6f10d989_fk_apiConcil` FOREIGN KEY (`Tipo_estado_Id_id`) REFERENCES `apiconciliacionapp_tipo_estado` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_documento`
--

LOCK TABLES `apiconciliacionapp_documento` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_documento` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_documento` VALUES (30,1,'documentos/51q-56EuHfL._AC_SX466__2Rf2YLV.jpg',NULL,'2022-06-20',NULL,1),(31,1,'documentos/61omxIIsa5L._AC_SY355__i77ZgUF.jpg',NULL,'2022-06-20',NULL,2),(32,1,'documentos/718DQZFHHrL._SX342_.jpg',NULL,'2022-06-20',NULL,2),(33,1,'documentos/Rutas.docx',NULL,'2022-06-20',NULL,5),(34,1,'documentos/Arquitectura_proyecto_Conciliacion_1.pdf',NULL,'2022-06-20',NULL,3),(35,0,'documentos/pc_para_streaming_gaming_cf7Df9r.jpg',NULL,'2022-06-22',NULL,1);
/*!40000 ALTER TABLE `apiconciliacionapp_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_encuesta`
--

DROP TABLE IF EXISTS `apiconciliacionapp_encuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_encuesta` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Fecha` date NOT NULL,
  `Medio_conocimiento_Id_id` int DEFAULT NULL,
  `Solicitud_Id_id` int DEFAULT NULL,
  `Persona_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_e_Medio_conocimiento_I_ac77f171_fk_apiConcil` (`Medio_conocimiento_Id_id`),
  KEY `apiConciliacionApp_e_Solicitud_Id_id_6ea12537_fk_apiConcil` (`Solicitud_Id_id`),
  KEY `apiConciliacionApp_e_Usuario_Id_id_0f15a513_fk_apiConcil` (`Persona_Id_id`),
  CONSTRAINT `apiConciliacionApp_e_Medio_conocimiento_I_ac77f171_fk_apiConcil` FOREIGN KEY (`Medio_conocimiento_Id_id`) REFERENCES `apiconciliacionapp_medio_conocimiento` (`Id`),
  CONSTRAINT `apiConciliacionApp_e_Persona_Id_id_9e804df9_fk_apiConcil` FOREIGN KEY (`Persona_Id_id`) REFERENCES `apiconciliacionapp_persona` (`Id`),
  CONSTRAINT `apiConciliacionApp_e_Solicitud_Id_id_6ea12537_fk_apiConcil` FOREIGN KEY (`Solicitud_Id_id`) REFERENCES `apiconciliacionapp_solicitud` (`Numero_caso`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_encuesta`
--

LOCK TABLES `apiconciliacionapp_encuesta` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_encuesta` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_encuesta` VALUES (29,1,'2022-06-20',1,NULL,11),(30,1,'2022-06-20',1,NULL,11),(31,1,'2022-06-20',1,NULL,11),(32,1,'2022-06-20',1,NULL,11),(33,1,'2022-06-20',1,NULL,8),(34,1,'2022-06-20',1,NULL,9),(35,1,'2022-06-20',1,NULL,9);
/*!40000 ALTER TABLE `apiconciliacionapp_encuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_estrato_socioeconomico`
--

DROP TABLE IF EXISTS `apiconciliacionapp_estrato_socioeconomico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_estrato_socioeconomico` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Numero` smallint unsigned NOT NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `apiconciliacionapp_estrato_socioeconomico_chk_1` CHECK ((`Numero` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_estrato_socioeconomico`
--

LOCK TABLES `apiconciliacionapp_estrato_socioeconomico` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_estrato_socioeconomico` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_estrato_socioeconomico` VALUES (1,1,1),(2,1,2);
/*!40000 ALTER TABLE `apiconciliacionapp_estrato_socioeconomico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_genero`
--

DROP TABLE IF EXISTS `apiconciliacionapp_genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_genero` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_genero`
--

LOCK TABLES `apiconciliacionapp_genero` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_genero` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_genero` VALUES (1,1,'MASCULINO'),(1,2,'FEMENINO'),(1,3,'NO BINARIO'),(1,4,'NO RESPONDO');
/*!40000 ALTER TABLE `apiconciliacionapp_genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_genero_biologico`
--

DROP TABLE IF EXISTS `apiconciliacionapp_genero_biologico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_genero_biologico` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_genero_biologico`
--

LOCK TABLES `apiconciliacionapp_genero_biologico` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_genero_biologico` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiconciliacionapp_genero_biologico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_hechos`
--

DROP TABLE IF EXISTS `apiconciliacionapp_hechos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_hechos` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Fecha` date NOT NULL,
  `Descripcion_hecho` longtext NOT NULL,
  `Descripcion_pretension` longtext NOT NULL,
  `Flag_interviene_tercero` tinyint(1) NOT NULL,
  `Flag_Violencia` tinyint(1) NOT NULL,
  `Cuantia` int unsigned DEFAULT NULL,
  `Cuantia_indeterminada` tinyint(1) NOT NULL,
  `Solicitud_Id_id` int DEFAULT NULL,
  `Ciudad_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_h_Solicitud_Id_id_4d2f6658_fk_apiConcil` (`Solicitud_Id_id`),
  KEY `apiConciliacionApp_h_Ciudad_Id_id_2d7131d8_fk_apiConcil` (`Ciudad_Id_id`),
  CONSTRAINT `apiConciliacionApp_h_Ciudad_Id_id_2d7131d8_fk_apiConcil` FOREIGN KEY (`Ciudad_Id_id`) REFERENCES `apiconciliacionapp_ciudad` (`Id`),
  CONSTRAINT `apiConciliacionApp_h_Solicitud_Id_id_4d2f6658_fk_apiConcil` FOREIGN KEY (`Solicitud_Id_id`) REFERENCES `apiconciliacionapp_solicitud` (`Numero_caso`),
  CONSTRAINT `apiconciliacionapp_hechos_chk_1` CHECK ((`Cuantia` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_hechos`
--

LOCK TABLES `apiconciliacionapp_hechos` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_hechos` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_hechos` VALUES (1,1,'2022-06-07','event.target.resumen.value','event.target.pretensiones.value',0,0,1,0,NULL,2),(2,1,'2022-06-13','event.target.resumen.value','event.target.pretensiones.value',0,0,1,0,NULL,2),(3,1,'2022-06-15','Hecho SOlicitud 62','Pretencion',0,1,1,1,NULL,1);
/*!40000 ALTER TABLE `apiconciliacionapp_hechos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_historico_solicitud`
--

DROP TABLE IF EXISTS `apiconciliacionapp_historico_solicitud`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_historico_solicitud` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Descripcion` longtext NOT NULL,
  `Flag_requiere_documento` tinyint(1) NOT NULL,
  `Solicitud_Id_id` int DEFAULT NULL,
  `Tipo_estado_Id_id` int DEFAULT NULL,
  `Fecha` datetime(6) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_h_Solicitud_Id_id_b08ff29e_fk_apiConcil` (`Solicitud_Id_id`),
  KEY `apiConciliacionApp_h_Tipo_estado_Id_id_cb527ec0_fk_apiConcil` (`Tipo_estado_Id_id`),
  CONSTRAINT `apiConciliacionApp_h_Solicitud_Id_id_b08ff29e_fk_apiConcil` FOREIGN KEY (`Solicitud_Id_id`) REFERENCES `apiconciliacionapp_solicitud` (`Numero_caso`),
  CONSTRAINT `apiConciliacionApp_h_Tipo_estado_Id_id_cb527ec0_fk_apiConcil` FOREIGN KEY (`Tipo_estado_Id_id`) REFERENCES `apiconciliacionapp_tipo_estado` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_historico_solicitud`
--

LOCK TABLES `apiconciliacionapp_historico_solicitud` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_historico_solicitud` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_historico_solicitud` VALUES (61,1,'Nuevo',1,104,1,'2022-06-22 18:31:02.581916'),(62,1,'Nueva',0,105,1,'2022-06-22 18:34:03.159040');
/*!40000 ALTER TABLE `apiconciliacionapp_historico_solicitud` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_inicio_conflicto`
--

DROP TABLE IF EXISTS `apiconciliacionapp_inicio_conflicto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_inicio_conflicto` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_inicio_conflicto`
--

LOCK TABLES `apiconciliacionapp_inicio_conflicto` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_inicio_conflicto` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_inicio_conflicto` VALUES (1,1,'DE 1 A 30 DIAS (HASTA 1 MES)'),(1,2,'DE 31 A 180 DIAS (ENTRE 2 Y 6 MESES)'),(1,3,'SUPERIOR A 180 DIAS (ENTRE 7 Y 12 MESES)'),(1,4,'SUPERIOR A 365 DIAS (SUPERIOR A 1 AÑO)'),(1,5,'NO INFORMA');
/*!40000 ALTER TABLE `apiconciliacionapp_inicio_conflicto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_localidad`
--

DROP TABLE IF EXISTS `apiconciliacionapp_localidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_localidad` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Ciudad_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_l_Ciudad_Id_id_88dd7918_fk_apiConcil` (`Ciudad_Id_id`),
  CONSTRAINT `apiConciliacionApp_l_Ciudad_Id_id_88dd7918_fk_apiConcil` FOREIGN KEY (`Ciudad_Id_id`) REFERENCES `apiconciliacionapp_ciudad` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_localidad`
--

LOCK TABLES `apiconciliacionapp_localidad` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_localidad` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_localidad` VALUES (1,1,'Usaquen',149),(1,2,'Chapinero',149),(1,3,'Santa Fe',149),(1,4,'San Cristobal',149),(1,5,'Usme',149),(1,6,'Tunjuelito',149),(1,7,'Bosa',149),(1,8,'Kennedy',149),(1,9,'Fontibon',149),(1,10,'Engativa',149),(1,11,'Suba',149),(1,12,'Barrios Unidos',149),(1,13,'Teusaquillo',149),(1,14,'Martires',149),(1,15,'Antonio Nariño',149),(1,16,'Puente Aranda',149),(1,17,'Candelaria',149),(1,18,'Rafael Uribe',149),(1,19,'Ciudad Bolivar',149),(1,20,'Sumapaz',149);
/*!40000 ALTER TABLE `apiconciliacionapp_localidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_medio_conocimiento`
--

DROP TABLE IF EXISTS `apiconciliacionapp_medio_conocimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_medio_conocimiento` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_medio_conocimiento`
--

LOCK TABLES `apiconciliacionapp_medio_conocimiento` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_medio_conocimiento` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_medio_conocimiento` VALUES (1,1,'Radio       '),(1,2,'Folletos      '),(1,3,'Televisión       '),(1,4,'Un Amigo       '),(1,5,'Web       '),(1,6,'Otro    ');
/*!40000 ALTER TABLE `apiconciliacionapp_medio_conocimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_objetivo_servicio`
--

DROP TABLE IF EXISTS `apiconciliacionapp_objetivo_servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_objetivo_servicio` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_objetivo_servicio`
--

LOCK TABLES `apiconciliacionapp_objetivo_servicio` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_objetivo_servicio` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_objetivo_servicio` VALUES (1,1,'Conciliacion');
/*!40000 ALTER TABLE `apiconciliacionapp_objetivo_servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_pais`
--

DROP TABLE IF EXISTS `apiconciliacionapp_pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_pais` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_pais`
--

LOCK TABLES `apiconciliacionapp_pais` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_pais` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_pais` VALUES (1,1,'Colombia');
/*!40000 ALTER TABLE `apiconciliacionapp_pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_perfil`
--

DROP TABLE IF EXISTS `apiconciliacionapp_perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_perfil` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Nombre` varchar(150) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Nombre` (`Nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_perfil`
--

LOCK TABLES `apiconciliacionapp_perfil` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_perfil` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_perfil` VALUES (1,1,'Docente especializado en derecho civil'),(2,1,'Docente especializado en derecho comercial'),(3,1,'Docente especializado en derecho de familia'),(4,1,'Docente especializado en derecho penal');
/*!40000 ALTER TABLE `apiconciliacionapp_perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_persona`
--

DROP TABLE IF EXISTS `apiconciliacionapp_persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_persona` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Identificacion` bigint NOT NULL,
  `Nombres` varchar(30) NOT NULL,
  `Apellidos` varchar(30) NOT NULL,
  `Correo` varchar(120) DEFAULT NULL,
  `Telefono` bigint NOT NULL,
  `Fecha_de_nacimiento` date DEFAULT NULL,
  `Barrio_Id_id` int DEFAULT NULL,
  `Estrato_socioeconomico_Id_id` int DEFAULT NULL,
  `Perfil_Id_id` int DEFAULT NULL,
  `Tipo_cargo_Id_id` int DEFAULT NULL,
  `Tipo_documento_Id_id` int DEFAULT NULL,
  `Tipo_estado_Id_id` int DEFAULT NULL,
  `Tipo_persona_Id_id` int DEFAULT NULL,
  `Tipo_vivienda_Id_id` int DEFAULT NULL,
  `Genero_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_p_Tipo_cargo_Id_id_37eee594_fk_apiConcil` (`Tipo_cargo_Id_id`),
  KEY `apiConciliacionApp_p_Tipo_documento_Id_id_013e52e6_fk_apiConcil` (`Tipo_documento_Id_id`),
  KEY `apiConciliacionApp_p_Tipo_estado_Id_id_f58ced8b_fk_apiConcil` (`Tipo_estado_Id_id`),
  KEY `apiConciliacionApp_p_Tipo_persona_Id_id_2d99db65_fk_apiConcil` (`Tipo_persona_Id_id`),
  KEY `apiConciliacionApp_p_Tipo_vivienda_Id_id_7cd8fb06_fk_apiConcil` (`Tipo_vivienda_Id_id`),
  KEY `apiConciliacionApp_p_Barrio_Id_id_adacf2aa_fk_apiConcil` (`Barrio_Id_id`),
  KEY `apiConciliacionApp_p_Estrato_socioeconomi_376f6efe_fk_apiConcil` (`Estrato_socioeconomico_Id_id`),
  KEY `apiConciliacionApp_p_Perfil_Id_id_e2ab19fc_fk_apiConcil` (`Perfil_Id_id`),
  KEY `apiConciliacionApp_p_Genero_Id_id_264690e2_fk_apiConcil` (`Genero_Id_id`),
  CONSTRAINT `apiConciliacionApp_p_Barrio_Id_id_adacf2aa_fk_apiConcil` FOREIGN KEY (`Barrio_Id_id`) REFERENCES `apiconciliacionapp_barrio` (`Id`),
  CONSTRAINT `apiConciliacionApp_p_Estrato_socioeconomi_376f6efe_fk_apiConcil` FOREIGN KEY (`Estrato_socioeconomico_Id_id`) REFERENCES `apiconciliacionapp_estrato_socioeconomico` (`Id`),
  CONSTRAINT `apiConciliacionApp_p_Genero_Id_id_264690e2_fk_apiConcil` FOREIGN KEY (`Genero_Id_id`) REFERENCES `apiconciliacionapp_genero` (`Id`),
  CONSTRAINT `apiConciliacionApp_p_Perfil_Id_id_e2ab19fc_fk_apiConcil` FOREIGN KEY (`Perfil_Id_id`) REFERENCES `apiconciliacionapp_perfil` (`Id`),
  CONSTRAINT `apiConciliacionApp_p_Tipo_cargo_Id_id_37eee594_fk_apiConcil` FOREIGN KEY (`Tipo_cargo_Id_id`) REFERENCES `apiconciliacionapp_tipo_cargo` (`Id`),
  CONSTRAINT `apiConciliacionApp_p_Tipo_documento_Id_id_013e52e6_fk_apiConcil` FOREIGN KEY (`Tipo_documento_Id_id`) REFERENCES `apiconciliacionapp_tipo_documento` (`Id`),
  CONSTRAINT `apiConciliacionApp_p_Tipo_estado_Id_id_f58ced8b_fk_apiConcil` FOREIGN KEY (`Tipo_estado_Id_id`) REFERENCES `apiconciliacionapp_tipo_estado` (`Id`),
  CONSTRAINT `apiConciliacionApp_p_Tipo_persona_Id_id_2d99db65_fk_apiConcil` FOREIGN KEY (`Tipo_persona_Id_id`) REFERENCES `apiconciliacionapp_tipo_persona` (`Id`),
  CONSTRAINT `apiConciliacionApp_p_Tipo_vivienda_Id_id_7cd8fb06_fk_apiConcil` FOREIGN KEY (`Tipo_vivienda_Id_id`) REFERENCES `apiconciliacionapp_tipo_vivienda` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_persona`
--

LOCK TABLES `apiconciliacionapp_persona` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_persona` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_persona` VALUES (7,1,1013689035,'Jairo Miller','Urrego','jairo@ugc.edu.co',0,'1999-06-22',137,2,NULL,1,1,1,1,1,1),(8,1,1234,'Luz','Helena','helen@ugc.edu.co',31442169,'1978-08-14',2,1,1,2,1,1,1,1,NULL),(9,1,12345,'Kevin Andres','Urrego','kevin@ugc.edu.co',31247289,'1997-08-02',2,1,NULL,3,1,1,1,1,NULL),(10,1,123456,'Maria Luisa','Bogata Rios','ro@ugc.edu.co',12378,'1999-08-08',17,2,1,2,1,1,1,2,NULL),(11,1,123456789,'Maria del Carmen','Ruiz C','carmen@ugc.edu.co',123657657,'1978-08-08',2,1,NULL,1,1,1,1,1,NULL),(12,1,13579,'Rafael','Perez','rafa@ufc.edu.co',0,'1970-08-08',2,2,2,2,1,1,2,1,NULL),(13,1,987654321,'Ana Maria','Rios','ana@ugc.edu.co',0,NULL,2,1,NULL,NULL,1,1,1,1,NULL),(78,1,1010074595,'Andres Felipe','Villamizar','felipe@ug.edu.co',0,'2022-06-22',1,2,NULL,1,1,1,2,1,3),(79,1,1033816974,'Juan Diego','B','juan@ugc.edu.co',0,'2022-06-22',1,1,NULL,1,1,1,1,2,2);
/*!40000 ALTER TABLE `apiconciliacionapp_persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_pregunta`
--

DROP TABLE IF EXISTS `apiconciliacionapp_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_pregunta` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Pregunta` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Pregunta` (`Pregunta`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_pregunta`
--

LOCK TABLES `apiconciliacionapp_pregunta` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_pregunta` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_pregunta` VALUES (1,1,'Servicio recibido por parte del conciliador'),(2,1,'Puntualidad del conciliador'),(3,1,'Dominio del tema del conciliador'),(4,1,'Lenguaje utilizado del conciliador'),(5,1,'Manejo de la audiencia del conciliador'),(6,1,'Imparcialidad del conciliador'),(7,1,'Servicio prestado por el centro'),(8,1,'Satisfacción por la información que brindada el Centro'),(9,1,'Satisfacción por el tiempo de atención del centro'),(10,1,'Amabilidad del personal del Centro'),(11,1,'Expectativas en el tratamiento del conflicto'),(12,1,'¿Recomendaría la conciliación para resolver conflictos?');
/*!40000 ALTER TABLE `apiconciliacionapp_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_relacion_area_perfil`
--

DROP TABLE IF EXISTS `apiconciliacionapp_relacion_area_perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_relacion_area_perfil` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Area_Id_id` int DEFAULT NULL,
  `Perfil_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_r_Area_Id_id_4a8f2828_fk_apiConcil` (`Area_Id_id`),
  KEY `apiConciliacionApp_r_Perfil_Id_id_43c37527_fk_apiConcil` (`Perfil_Id_id`),
  CONSTRAINT `apiConciliacionApp_r_Area_Id_id_4a8f2828_fk_apiConcil` FOREIGN KEY (`Area_Id_id`) REFERENCES `apiconciliacionapp_area` (`Id`),
  CONSTRAINT `apiConciliacionApp_r_Perfil_Id_id_43c37527_fk_apiConcil` FOREIGN KEY (`Perfil_Id_id`) REFERENCES `apiconciliacionapp_perfil` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_relacion_area_perfil`
--

LOCK TABLES `apiconciliacionapp_relacion_area_perfil` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_relacion_area_perfil` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiconciliacionapp_relacion_area_perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_relacion_citacion_persona`
--

DROP TABLE IF EXISTS `apiconciliacionapp_relacion_citacion_persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_relacion_citacion_persona` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Citacion_Id_id` int DEFAULT NULL,
  `Persona_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_r_Citacion_Id_id_8d7199d1_fk_apiConcil` (`Citacion_Id_id`),
  KEY `apiConciliacionApp_r_Persona_Id_id_0ce57810_fk_apiConcil` (`Persona_Id_id`),
  CONSTRAINT `apiConciliacionApp_r_Citacion_Id_id_8d7199d1_fk_apiConcil` FOREIGN KEY (`Citacion_Id_id`) REFERENCES `apiconciliacionapp_citacion` (`Id`),
  CONSTRAINT `apiConciliacionApp_r_Persona_Id_id_0ce57810_fk_apiConcil` FOREIGN KEY (`Persona_Id_id`) REFERENCES `apiconciliacionapp_persona` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_relacion_citacion_persona`
--

LOCK TABLES `apiconciliacionapp_relacion_citacion_persona` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_relacion_citacion_persona` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiconciliacionapp_relacion_citacion_persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_relacion_solicitud_persona`
--

DROP TABLE IF EXISTS `apiconciliacionapp_relacion_solicitud_persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_relacion_solicitud_persona` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Persona_Id_id` int DEFAULT NULL,
  `Solicitud_Id_id` int DEFAULT NULL,
  `Tipo_cliente_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_r_Persona_Id_id_4a23784c_fk_apiConcil` (`Persona_Id_id`),
  KEY `apiConciliacionApp_r_Solicitud_Id_id_0d5fd3d9_fk_apiConcil` (`Solicitud_Id_id`),
  KEY `apiConciliacionApp_r_Tipo_cliente_Id_id_f2a1ee6d_fk_apiConcil` (`Tipo_cliente_Id_id`),
  CONSTRAINT `apiConciliacionApp_r_Persona_Id_id_4a23784c_fk_apiConcil` FOREIGN KEY (`Persona_Id_id`) REFERENCES `apiconciliacionapp_persona` (`Id`),
  CONSTRAINT `apiConciliacionApp_r_Solicitud_Id_id_0d5fd3d9_fk_apiConcil` FOREIGN KEY (`Solicitud_Id_id`) REFERENCES `apiconciliacionapp_solicitud` (`Numero_caso`),
  CONSTRAINT `apiConciliacionApp_r_Tipo_cliente_Id_id_f2a1ee6d_fk_apiConcil` FOREIGN KEY (`Tipo_cliente_Id_id`) REFERENCES `apiconciliacionapp_tipo_cliente` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_relacion_solicitud_persona`
--

LOCK TABLES `apiconciliacionapp_relacion_solicitud_persona` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_relacion_solicitud_persona` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_relacion_solicitud_persona` VALUES (156,1,7,104,5),(157,1,7,105,5);
/*!40000 ALTER TABLE `apiconciliacionapp_relacion_solicitud_persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_respuesta`
--

DROP TABLE IF EXISTS `apiconciliacionapp_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_respuesta` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Calificacion` smallint NOT NULL,
  `Pregunta_Id_id` int DEFAULT NULL,
  `Encuesta_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_r_Pregunta_Id_id_95ab961c_fk_apiConcil` (`Pregunta_Id_id`),
  KEY `apiConciliacionApp_r_Encuesta_Id_id_6f9b8a52_fk_apiConcil` (`Encuesta_Id_id`),
  CONSTRAINT `apiConciliacionApp_r_Encuesta_Id_id_6f9b8a52_fk_apiConcil` FOREIGN KEY (`Encuesta_Id_id`) REFERENCES `apiconciliacionapp_encuesta` (`Id`),
  CONSTRAINT `apiConciliacionApp_r_Pregunta_Id_id_95ab961c_fk_apiConcil` FOREIGN KEY (`Pregunta_Id_id`) REFERENCES `apiconciliacionapp_pregunta` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_respuesta`
--

LOCK TABLES `apiconciliacionapp_respuesta` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_respuesta` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_respuesta` VALUES (33,1,1,1,NULL),(34,1,3,2,NULL),(35,1,3,3,NULL),(36,1,3,4,NULL),(37,1,1,1,29),(38,1,3,2,29),(39,1,3,3,29),(40,1,3,4,29),(41,1,1,1,30),(42,1,3,2,30),(43,1,3,3,30),(44,1,3,4,30),(45,1,1,1,31),(46,1,3,2,31),(47,1,3,3,31),(48,1,3,4,31),(49,1,1,1,32),(50,1,3,2,32),(51,1,3,3,32),(52,1,3,4,32),(53,1,1,1,33),(54,1,3,2,33),(55,1,3,3,33),(56,1,3,4,33),(57,1,1,1,34),(58,1,3,2,34),(59,1,3,3,34),(60,1,3,4,34),(61,1,1,1,35),(62,1,3,2,35),(63,1,3,3,35),(64,1,3,4,35);
/*!40000 ALTER TABLE `apiconciliacionapp_respuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_rol`
--

DROP TABLE IF EXISTS `apiconciliacionapp_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_rol` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Rol_permiso_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_r_Rol_permiso_Id_id_4c19dce8_fk_apiConcil` (`Rol_permiso_Id_id`),
  CONSTRAINT `apiConciliacionApp_r_Rol_permiso_Id_id_4c19dce8_fk_apiConcil` FOREIGN KEY (`Rol_permiso_Id_id`) REFERENCES `apiconciliacionapp_rol_permiso` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_rol`
--

LOCK TABLES `apiconciliacionapp_rol` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_rol` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_rol` VALUES (1,1,'Administrador',1),(1,2,'Docente conciliador',1),(1,3,'Estudiante',2);
/*!40000 ALTER TABLE `apiconciliacionapp_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_rol_permiso`
--

DROP TABLE IF EXISTS `apiconciliacionapp_rol_permiso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_rol_permiso` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Descripcion` varchar(100) NOT NULL,
  `Permiso_consulta` tinyint(1) NOT NULL,
  `Permiso_crear` tinyint(1) NOT NULL,
  `Permiso_actualizar` tinyint(1) NOT NULL,
  `Permiso_eliminar` tinyint(1) NOT NULL,
  `Permiso_reportes` tinyint(1) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Descipcion` (`Descripcion`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_rol_permiso`
--

LOCK TABLES `apiconciliacionapp_rol_permiso` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_rol_permiso` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_rol_permiso` VALUES (1,1,'Permisos para los administradores',1,1,1,1,1),(2,1,'Permisos para los docentes y estudiantes',1,0,0,0,0);
/*!40000 ALTER TABLE `apiconciliacionapp_rol_permiso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_solicitante_servicio`
--

DROP TABLE IF EXISTS `apiconciliacionapp_solicitante_servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_solicitante_servicio` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_solicitante_servicio`
--

LOCK TABLES `apiconciliacionapp_solicitante_servicio` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_solicitante_servicio` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_solicitante_servicio` VALUES (1,1,'LAS DOS PARTES'),(1,2,'SOLO UNA DE LAS PARTES'),(1,3,'MEDIANTE APODERADO');
/*!40000 ALTER TABLE `apiconciliacionapp_solicitante_servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_solicitud`
--

DROP TABLE IF EXISTS `apiconciliacionapp_solicitud`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_solicitud` (
  `Numero_caso` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Descripcion` longtext,
  `Fecha_registro` date NOT NULL,
  `Fecha_finalizacion` date DEFAULT NULL,
  `Caso_gratuito` tinyint(1) DEFAULT NULL,
  `Area_Id_id` int DEFAULT NULL,
  `Subtema_Id_id` int DEFAULT NULL,
  `Tipo_resultado_Id_id` int DEFAULT NULL,
  `Tipo_servicio_Id_id` int DEFAULT NULL,
  `Inicio_conflicto_Id_id` int DEFAULT NULL,
  `Solicitante_servicio_Id_id` int DEFAULT NULL,
  `Asunto_juridico_definible` tinyint(1) NOT NULL,
  PRIMARY KEY (`Numero_caso`),
  KEY `apiConciliacionApp_s_Area_Id_id_4d314cbe_fk_apiConcil` (`Area_Id_id`),
  KEY `apiConciliacionApp_s_Subtema_Id_id_bc2d5ade_fk_apiConcil` (`Subtema_Id_id`),
  KEY `apiConciliacionApp_s_Tipo_resultado_Id_id_ec682f59_fk_apiConcil` (`Tipo_resultado_Id_id`),
  KEY `apiConciliacionApp_s_Tipo_servicio_Id_id_9a4c19b6_fk_apiConcil` (`Tipo_servicio_Id_id`),
  KEY `apiConciliacionApp_s_Inicio_conflicto_Id__05807987_fk_apiConcil` (`Inicio_conflicto_Id_id`),
  KEY `apiConciliacionApp_s_Solicitante_servicio_5b681267_fk_apiConcil` (`Solicitante_servicio_Id_id`),
  CONSTRAINT `apiConciliacionApp_s_Area_Id_id_4d314cbe_fk_apiConcil` FOREIGN KEY (`Area_Id_id`) REFERENCES `apiconciliacionapp_area` (`Id`),
  CONSTRAINT `apiConciliacionApp_s_Inicio_conflicto_Id__05807987_fk_apiConcil` FOREIGN KEY (`Inicio_conflicto_Id_id`) REFERENCES `apiconciliacionapp_inicio_conflicto` (`Id`),
  CONSTRAINT `apiConciliacionApp_s_Solicitante_servicio_5b681267_fk_apiConcil` FOREIGN KEY (`Solicitante_servicio_Id_id`) REFERENCES `apiconciliacionapp_solicitante_servicio` (`Id`),
  CONSTRAINT `apiConciliacionApp_s_Subtema_Id_id_bc2d5ade_fk_apiConcil` FOREIGN KEY (`Subtema_Id_id`) REFERENCES `apiconciliacionapp_subtema` (`Id`),
  CONSTRAINT `apiConciliacionApp_s_Tipo_resultado_Id_id_ec682f59_fk_apiConcil` FOREIGN KEY (`Tipo_resultado_Id_id`) REFERENCES `apiconciliacionapp_tipo_resultado` (`Id`),
  CONSTRAINT `apiConciliacionApp_s_Tipo_servicio_Id_id_9a4c19b6_fk_apiConcil` FOREIGN KEY (`Tipo_servicio_Id_id`) REFERENCES `apiconciliacionapp_tipo_servicio` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_solicitud`
--

LOCK TABLES `apiconciliacionapp_solicitud` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_solicitud` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_solicitud` VALUES (104,1,'actualizacion','2022-06-22','2022-06-30',1,1,1,NULL,1,2,1,1),(105,1,'Solicitud','2022-06-22','2022-06-30',1,1,1,NULL,1,2,1,1);
/*!40000 ALTER TABLE `apiconciliacionapp_solicitud` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_subtema`
--

DROP TABLE IF EXISTS `apiconciliacionapp_subtema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_subtema` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `Tema_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_s_Tema_Id_id_f007a73f_fk_apiConcil` (`Tema_Id_id`),
  CONSTRAINT `apiConciliacionApp_s_Tema_Id_id_f007a73f_fk_apiConcil` FOREIGN KEY (`Tema_Id_id`) REFERENCES `apiconciliacionapp_tema` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_subtema`
--

LOCK TABLES `apiconciliacionapp_subtema` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_subtema` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_subtema` VALUES (1,1,'Donaciones y modos de adquirir el dominio distintos de la compraventa o la sucesión por causa de muerte',1),(1,2,'Competencia desleal',2),(1,3,'Clausulas abusivas',3),(1,4,'Comercio electronico',3),(1,5,'Condiciones negociales y contratos de adhesion',3),(1,6,'Daños por producto defectuoso',3),(1,7,'Especulacion, acaparamiento y usura',3),(1,8,'Garantia legal',3),(1,9,'Garantias suplementarias',3),(1,10,'Informacion',3),(1,11,'Operaciones mediante sistemas de financiacion',3),(1,12,'Publicidad',3),(1,13,'Ventas por metodos no tradicionales o a distancia',3),(1,14,'Otros',3),(1,15,'Agencia comercial',4),(1,16,'Aparceria',4),(1,17,'Arrendamiento comercial',4),(1,18,'Arrendamiento de vivienda',4),(1,19,'Comision',4),(1,20,'Comodato',4),(1,21,'Compraventa distinta de actos de consumo',4),(1,22,'Consignacion',4),(1,23,'Contratos atipicos',4),(1,24,'Corretaje',4),(1,25,'Depositvo civil',4),(1,26,'Depositvo mercantil',4),(1,27,'Edicion',4),(1,28,'Mandato',4),(1,29,'Mutuo distinto de operaciones de crédito realizadas por establecimientos de crédito y sociedades de servicios financieros',4),(1,30,'Obra',4),(1,31,'Otras formas de arrendamiento distintas del arrendamiento financiero o leasing',4),(1,32,'Permuta',4),(1,33,'Preposicion',4),(1,34,'Suministro',4),(1,35,'Transaccion',4),(1,36,'Transporte de cosas',4),(1,37,'Transporte de personas',4),(1,38,'Otros',4),(1,39,'Cooperativas de ahorro y credito',5),(1,40,'Arrendamiento, usufructo y anticresis',6),(1,41,'Deshaucio',6),(1,42,'Renovacion del contrato de arrendamiento',6),(1,43,'Subarriendo',6),(1,44,'Otros',6),(1,45,'Anticresis sobre inmuebles',7),(1,46,'Fianza',7),(1,47,'Fiducia en garantia',7),(1,48,'Garantias inmobiliarias',7),(1,49,'Hipoteca',7),(1,50,'Otras garantias inmobiliarias',7),(1,51,'Propiedad horizontal',8),(1,52,'Responsabilidad extracontractual',9),(1,53,'Seguros',10),(1,54,'Sociedades, personas juridicas de derecho privado y otras formas asociativas',11),(1,55,'Titulos valores',12),(1,56,'Turismo',13),(1,57,'Otros',14),(1,58,'Prevencion de violencia intrafamiliar',15),(1,59,'Capitulaciones matrimoniales',16),(1,60,'Disolucion y liquidacion de la sociedad conyugal',16),(1,61,'Separacion de bienes y cuerpos',16),(1,62,'Alimentos',17),(1,63,'Custodia y regimen sobre menores e incapaces',17),(1,64,'Direccion conjunta del hogar y ejercicio de la patria potestad',17),(1,65,'Alimentos de adulto mayor',17),(1,66,'Rescision de la particion en las sucesiones',18),(1,67,'Declaracion de union marital de hecho',19),(1,68,'Disolucion y liquidacion de la sociedad patrimonial de hecho',19),(1,69,'Usura y recargo de ventas a plazo',20),(1,70,'Ofrecimiento engañoso de productos y servicios',20),(1,71,'Hurto simple cuya cuantía no exceda de 150 salarios mínimos mensuales legales vigentes',21),(1,72,'Hurto simple para hacer uso de la cosa, con restitución en término no mayor de 24 horas',21),(1,73,'Hurto simple cometido por socio, copropietario, comunero o heredero, o sobre cosa común indivisible o común divisible, excediendo su cuota parte',21),(1,74,'Alteración, desfiguración y suplantación de marcas de ganado',21),(1,75,'Estafa cuya cuantía no exceda de 150 salarios mínimos mensuales legales vigentes',21),(1,76,'Emisión y transferencia ilegal de cheques',21),(1,77,'Abuso de confianza',21),(1,78,'Aprovechamiento de error ajeno o caso fortuito',21),(1,79,'Alzamiento de bienes',21),(1,80,'Sustracción de bien propio',21),(1,81,'Disposición de bien propio gravado con prenda (garantía mobiliaria)',21),(1,82,'Defraudación de fluidos',21),(1,83,'Malversación y dilapidación de bienes',21),(1,84,'Usurpación de inmuebles',21),(1,85,'Usurpación de aguas',21),(1,86,'Invasión de tierras o edificaciones',21),(1,87,'Perturbación de la posesión sobre inmueble',21),(1,88,'Daño en bien ajeno',21),(1,89,'Abuso de autoridad por acto arbitrario e injusto',22),(1,90,'Abuso de autoridad por omisión de denuncia simple',22),(1,91,'Revelación de secreto simple',22),(1,92,'Utilización indebida de información oficial privilegiada',22),(1,93,'Asesoramiento y otras actuaciones ilegales simple',22),(1,94,'Intervención en política',22),(1,95,'Utilización indebida de información obtenida en el ejercicio de función pública',22),(1,96,'Utilización indebida de influencias derivadas del ejercicio de función pública',22),(1,97,'Utilización de asunto sometido a secreto o reserva',22),(1,98,'Falsa autoacusación',23),(1,99,'Favorecimiento de la fuga culposa simple',23),(1,100,'Infidelidad a los deberes profesionales',23),(1,101,'Aceptación indebida de honores',24),(1,102,'Violación de inmunidad diplomática',24),(1,103,'Maltrato mediante restricción a la libertad física',25),(1,104,'Malversación y dilapidación de los bienes de familiares',25),(1,105,'Inasistencia alimentaria',25),(1,106,'Circulación y uso de efecto oficial o sello falsificado',26),(1,107,'Falsedad para obtener prueba de hecho verdadero',26),(1,108,'Falsedad personal',26),(1,109,'Falsificación o uso fraudulento de sello oficial',26),(1,110,'Supresión de signo de anulación de efecto oficial',26),(1,111,'Uso y circulación de efecto oficial anulado',26),(1,112,'Calumnia',27),(1,113,'Injuria',27),(1,114,'Injuria por vías de hecho',27),(1,115,'Injuria y calumnia indirecta',27),(1,116,'Injurias recíprocas',27),(1,117,'Daños o agravios a personas o a cosas destinadas al culto',28),(1,118,'Divulgación y empleo de documentos reservados',28),(1,119,'Impedimento y perturbación de ceremonia religiosa',28),(1,120,'Irrespeto a cadáveres',28),(1,121,'Ofrecimiento, venta o compra de instrumento apto para interceptar la comunicación privada entre personas',28),(1,122,'Violación a la libertad religiosa',28),(1,123,'Violación de habitación ajena',28),(1,124,'Violación de habitación ajena por servidor público',28),(1,125,'Violación de la libertad de trabajo',28),(1,126,'Violación de los derechos de reunión y asociación',28),(1,127,'Violación en lugar de trabajo',28),(1,128,'Omisión de denuncia de quien tuviere conocimiento de la utilización de menores para la realización de delitos de explotación sexual',29),(1,129,'Instigación a delinquir simple',30),(1,130,'Inducción o ayuda al suicidio',31),(1,131,'Lesiones personales sin secuelas que produjeren incapacidad para trabajar o enfermedad sin exceder de sesenta (60) días',31),(1,132,'Lesiones personales con deformidad física transitoria',31),(1,133,'Lesiones personales con perturbación funcional transitoria',31),(1,134,'Parto o aborto preterintencional',31),(1,135,'Lesiones personales culposas',31),(1,136,'Omisión de socorro',31);
/*!40000 ALTER TABLE `apiconciliacionapp_subtema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_tema`
--

DROP TABLE IF EXISTS `apiconciliacionapp_tema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_tema` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_tema`
--

LOCK TABLES `apiconciliacionapp_tema` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_tema` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_tema` VALUES (1,1,'Bienes'),(1,2,'Competencia desleal'),(1,3,'Consumo'),(1,4,'Contratos'),(1,5,'Economia solidaria'),(1,6,'Establecimiento de comercio'),(1,7,'Garantias'),(1,8,'Propiedad horizontal'),(1,9,'Responsabilidad extracontractual'),(1,10,'Seguros'),(1,11,'Sociedades, personas juridicas de derecho privado y otras formas asociativas'),(1,12,'Titulos valores'),(1,13,'Turismo'),(1,14,'Otros'),(1,15,'Convivencia'),(1,16,'Matrimonio'),(1,17,'Obligaciones frente a los hijos e incapaces'),(1,18,'Sucesiones'),(1,19,'Union marital del hecho'),(1,20,'Delitos contra el orden economico social'),(1,21,'Delitos contra el patrimonio economico'),(1,22,'Delitos contra la administracion publica'),(1,23,'Delitos contra la eficaz y recta imparticion de justicia'),(1,24,'Delitos contra la existencia y seguridad del estado'),(1,25,'Delitos contra la familia'),(1,26,'Delitos contra la fe publica'),(1,27,'Delitos contra la integridad moral'),(1,28,'Delitos contra la libertad individual y otras garantias'),(1,29,'Delitos contra la libertad , integridad y formacion sexuales'),(1,30,'Delitos contra la seguridad publica'),(1,31,'Delito contra la vida y la integridad personal');
/*!40000 ALTER TABLE `apiconciliacionapp_tema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_tipo_cargo`
--

DROP TABLE IF EXISTS `apiconciliacionapp_tipo_cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_tipo_cargo` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_tipo_cargo`
--

LOCK TABLES `apiconciliacionapp_tipo_cargo` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_cargo` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_tipo_cargo` VALUES (1,1,'Administrador'),(1,2,'Docente conciliador'),(1,3,'Estudiante');
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_cargo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_tipo_cliente`
--

DROP TABLE IF EXISTS `apiconciliacionapp_tipo_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_tipo_cliente` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_tipo_cliente`
--

LOCK TABLES `apiconciliacionapp_tipo_cliente` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_cliente` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_tipo_cliente` VALUES (1,1,'Convocante'),(1,2,'Convocado'),(1,3,'Docente'),(1,4,'Estudiante'),(1,5,'Administrador');
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_tipo_documento`
--

DROP TABLE IF EXISTS `apiconciliacionapp_tipo_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_tipo_documento` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_tipo_documento`
--

LOCK TABLES `apiconciliacionapp_tipo_documento` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_documento` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_tipo_documento` VALUES (1,1,'Cedula de Ciudadania'),(1,2,'Cedula de Extranjeria '),(1,3,'Tarjeta de Identidad '),(1,4,'Registro Civil '),(1,5,'Pasaporte '),(1,6,'Nit ');
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_tipo_estado`
--

DROP TABLE IF EXISTS `apiconciliacionapp_tipo_estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_tipo_estado` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_tipo_estado`
--

LOCK TABLES `apiconciliacionapp_tipo_estado` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_estado` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_tipo_estado` VALUES (1,1,'Nueva'),(1,2,'Asignada'),(1,3,'Audiencia pendiente'),(1,4,'Generacion de resultado'),(1,5,'Resuelta'),(1,6,'Se requiere informacion'),(1,7,'Cerrada'),(1,8,'Anulada'),(1,9,'Activo'),(1,10,'Inacitvo'),(1,11,'Aprobado'),(1,12,'No aprobado');
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_tipo_medio`
--

DROP TABLE IF EXISTS `apiconciliacionapp_tipo_medio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_tipo_medio` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_tipo_medio`
--

LOCK TABLES `apiconciliacionapp_tipo_medio` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_medio` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_tipo_medio` VALUES (1,1,'Presencial'),(1,2,'Virtual');
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_medio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_tipo_persona`
--

DROP TABLE IF EXISTS `apiconciliacionapp_tipo_persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_tipo_persona` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_tipo_persona`
--

LOCK TABLES `apiconciliacionapp_tipo_persona` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_persona` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_tipo_persona` VALUES (1,1,'Natural'),(1,2,'Juridica');
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_tipo_resultado`
--

DROP TABLE IF EXISTS `apiconciliacionapp_tipo_resultado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_tipo_resultado` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_tipo_resultado`
--

LOCK TABLES `apiconciliacionapp_tipo_resultado` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_resultado` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_tipo_resultado` VALUES (1,1,'Acta de acuerdo parcial'),(1,2,'Acta de acuerdo total'),(1,3,'Constancia de no acuerdo'),(1,7,'Falta de competencia'),(1,8,'Retiro de la solicitud'),(1,9,'Acuerdo extraconciliacion'),(1,10,'Otros'),(1,11,'Falta de pago del servicio'),(1,13,'Anulada');
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_resultado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_tipo_servicio`
--

DROP TABLE IF EXISTS `apiconciliacionapp_tipo_servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_tipo_servicio` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Objetivo_servicio_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `apiConciliacionApp_t_Objetivo_servicio_Id_3b2dc125_fk_apiConcil` (`Objetivo_servicio_Id_id`),
  CONSTRAINT `apiConciliacionApp_t_Objetivo_servicio_Id_3b2dc125_fk_apiConcil` FOREIGN KEY (`Objetivo_servicio_Id_id`) REFERENCES `apiconciliacionapp_objetivo_servicio` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_tipo_servicio`
--

LOCK TABLES `apiconciliacionapp_tipo_servicio` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_servicio` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_tipo_servicio` VALUES (1,1,'Requisito de procedibilidad',1),(1,2,'Resolver de manera alternativa el conflicto',1);
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_tipo_vivienda`
--

DROP TABLE IF EXISTS `apiconciliacionapp_tipo_vivienda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_tipo_vivienda` (
  `State` tinyint(1) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_tipo_vivienda`
--

LOCK TABLES `apiconciliacionapp_tipo_vivienda` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_vivienda` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_tipo_vivienda` VALUES (1,1,'Propia'),(1,2,'Arrendada');
/*!40000 ALTER TABLE `apiconciliacionapp_tipo_vivienda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_turno`
--

DROP TABLE IF EXISTS `apiconciliacionapp_turno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_turno` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `State` tinyint(1) NOT NULL,
  `Franja_horaria` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_turno`
--

LOCK TABLES `apiconciliacionapp_turno` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_turno` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_turno` VALUES (1,1,'8:00 - 9:00'),(2,1,'9:00 - 10:00');
/*!40000 ALTER TABLE `apiconciliacionapp_turno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiconciliacionapp_usuario`
--

DROP TABLE IF EXISTS `apiconciliacionapp_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiconciliacionapp_usuario` (
  `State` tinyint(1) NOT NULL,
  `Usuario` bigint NOT NULL,
  `Persona_Id_id` int DEFAULT NULL,
  `Rol_Id_id` int DEFAULT NULL,
  PRIMARY KEY (`Usuario`),
  KEY `apiConciliacionApp_u_Persona_Id_id_8a1643d2_fk_apiConcil` (`Persona_Id_id`),
  KEY `apiConciliacionApp_u_Rol_Id_id_13a4e67c_fk_apiConcil` (`Rol_Id_id`),
  CONSTRAINT `apiConciliacionApp_u_Persona_Id_id_8a1643d2_fk_apiConcil` FOREIGN KEY (`Persona_Id_id`) REFERENCES `apiconciliacionapp_persona` (`Id`),
  CONSTRAINT `apiConciliacionApp_u_Rol_Id_id_13a4e67c_fk_apiConcil` FOREIGN KEY (`Rol_Id_id`) REFERENCES `apiconciliacionapp_rol` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiconciliacionapp_usuario`
--

LOCK TABLES `apiconciliacionapp_usuario` WRITE;
/*!40000 ALTER TABLE `apiconciliacionapp_usuario` DISABLE KEYS */;
INSERT INTO `apiconciliacionapp_usuario` VALUES (1,1010074595,78,1),(1,1013689035,7,1),(1,1033816974,79,1);
/*!40000 ALTER TABLE `apiconciliacionapp_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=193 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add Area',7,'add_area'),(26,'Can change Area',7,'change_area'),(27,'Can delete Area',7,'delete_area'),(28,'Can view Area',7,'view_area'),(29,'Can add Barrio',8,'add_barrio'),(30,'Can change Barrio',8,'change_barrio'),(31,'Can delete Barrio',8,'delete_barrio'),(32,'Can view Barrio',8,'view_barrio'),(33,'Can add Citacion',9,'add_citacion'),(34,'Can change Citacion',9,'change_citacion'),(35,'Can delete Citacion',9,'delete_citacion'),(36,'Can view Citacion',9,'view_citacion'),(37,'Can add Ciudad',10,'add_ciudad'),(38,'Can change Ciudad',10,'change_ciudad'),(39,'Can delete Ciudad',10,'delete_ciudad'),(40,'Can view Ciudad',10,'view_ciudad'),(41,'Can add Estrato',11,'add_estrato_socioeconomico'),(42,'Can change Estrato',11,'change_estrato_socioeconomico'),(43,'Can delete Estrato',11,'delete_estrato_socioeconomico'),(44,'Can view Estrato',11,'view_estrato_socioeconomico'),(45,'Can add Inicio_conclicto',12,'add_inicio_conclicto'),(46,'Can change Inicio_conclicto',12,'change_inicio_conclicto'),(47,'Can delete Inicio_conclicto',12,'delete_inicio_conclicto'),(48,'Can view Inicio_conclicto',12,'view_inicio_conclicto'),(49,'Can add Medio_conocimiento ',13,'add_medio_conocimiento'),(50,'Can change Medio_conocimiento ',13,'change_medio_conocimiento'),(51,'Can delete Medio_conocimiento ',13,'delete_medio_conocimiento'),(52,'Can view Medio_conocimiento ',13,'view_medio_conocimiento'),(53,'Can add Objetivo_servicio',14,'add_objetivo_servicio'),(54,'Can change Objetivo_servicio',14,'change_objetivo_servicio'),(55,'Can delete Objetivo_servicio',14,'delete_objetivo_servicio'),(56,'Can view Objetivo_servicio',14,'view_objetivo_servicio'),(57,'Can add Pais',15,'add_pais'),(58,'Can change Pais',15,'change_pais'),(59,'Can delete Pais',15,'delete_pais'),(60,'Can view Pais',15,'view_pais'),(61,'Can add Perfil',16,'add_perfil'),(62,'Can change Perfil',16,'change_perfil'),(63,'Can delete Perfil',16,'delete_perfil'),(64,'Can view Perfil',16,'view_perfil'),(65,'Can add Persona',17,'add_persona'),(66,'Can change Persona',17,'change_persona'),(67,'Can delete Persona',17,'delete_persona'),(68,'Can view Persona',17,'view_persona'),(69,'Can add Pregunta',18,'add_pregunta'),(70,'Can change Pregunta',18,'change_pregunta'),(71,'Can delete Pregunta',18,'delete_pregunta'),(72,'Can view Pregunta',18,'view_pregunta'),(73,'Can add Rol',19,'add_rol'),(74,'Can change Rol',19,'change_rol'),(75,'Can delete Rol',19,'delete_rol'),(76,'Can view Rol',19,'view_rol'),(77,'Can add Rol_permiso',20,'add_rol_permiso'),(78,'Can change Rol_permiso',20,'change_rol_permiso'),(79,'Can delete Rol_permiso',20,'delete_rol_permiso'),(80,'Can view Rol_permiso',20,'view_rol_permiso'),(81,'Can add Solicitante_servicio',21,'add_solicitante_servicio'),(82,'Can change Solicitante_servicio',21,'change_solicitante_servicio'),(83,'Can delete Solicitante_servicio',21,'delete_solicitante_servicio'),(84,'Can view Solicitante_servicio',21,'view_solicitante_servicio'),(85,'Can add Tema',22,'add_tema'),(86,'Can change Tema',22,'change_tema'),(87,'Can delete Tema',22,'delete_tema'),(88,'Can view Tema',22,'view_tema'),(89,'Can add Tipo_cargo',23,'add_tipo_cargo'),(90,'Can change Tipo_cargo',23,'change_tipo_cargo'),(91,'Can delete Tipo_cargo',23,'delete_tipo_cargo'),(92,'Can view Tipo_cargo',23,'view_tipo_cargo'),(93,'Can add Tipo_cliente',24,'add_tipo_cliente'),(94,'Can change Tipo_cliente',24,'change_tipo_cliente'),(95,'Can delete Tipo_cliente',24,'delete_tipo_cliente'),(96,'Can view Tipo_cliente',24,'view_tipo_cliente'),(97,'Can add Tipo_documento',25,'add_tipo_documento'),(98,'Can change Tipo_documento',25,'change_tipo_documento'),(99,'Can delete Tipo_documento',25,'delete_tipo_documento'),(100,'Can view Tipo_documento',25,'view_tipo_documento'),(101,'Can add Tipo_estado',26,'add_tipo_estado'),(102,'Can change Tipo_estado',26,'change_tipo_estado'),(103,'Can delete Tipo_estado',26,'delete_tipo_estado'),(104,'Can view Tipo_estado',26,'view_tipo_estado'),(105,'Can add Tipo_Medio',27,'add_tipo_medio'),(106,'Can change Tipo_Medio',27,'change_tipo_medio'),(107,'Can delete Tipo_Medio',27,'delete_tipo_medio'),(108,'Can view Tipo_Medio',27,'view_tipo_medio'),(109,'Can add Tipo_persona',28,'add_tipo_persona'),(110,'Can change Tipo_persona',28,'change_tipo_persona'),(111,'Can delete Tipo_persona',28,'delete_tipo_persona'),(112,'Can view Tipo_persona',28,'view_tipo_persona'),(113,'Can add Tipo_resultado',29,'add_tipo_resultado'),(114,'Can change Tipo_resultado',29,'change_tipo_resultado'),(115,'Can delete Tipo_resultado',29,'delete_tipo_resultado'),(116,'Can view Tipo_resultado',29,'view_tipo_resultado'),(117,'Can add Tipo_vivienda',30,'add_tipo_vivienda'),(118,'Can change Tipo_vivienda',30,'change_tipo_vivienda'),(119,'Can delete Tipo_vivienda',30,'delete_tipo_vivienda'),(120,'Can view Tipo_vivienda',30,'view_tipo_vivienda'),(121,'Can add Turno',31,'add_turno'),(122,'Can change Turno',31,'change_turno'),(123,'Can delete Turno',31,'delete_turno'),(124,'Can view Turno',31,'view_turno'),(125,'Can add Usuario',32,'add_usuario'),(126,'Can change Usuario',32,'change_usuario'),(127,'Can delete Usuario',32,'delete_usuario'),(128,'Can view Usuario',32,'view_usuario'),(129,'Can add Tipo_servicio',33,'add_tipo_servicio'),(130,'Can change Tipo_servicio',33,'change_tipo_servicio'),(131,'Can delete Tipo_servicio',33,'delete_tipo_servicio'),(132,'Can view Tipo_servicio',33,'view_tipo_servicio'),(133,'Can add Subtema',34,'add_subtema'),(134,'Can change Subtema',34,'change_subtema'),(135,'Can delete Subtema',34,'delete_subtema'),(136,'Can view Subtema',34,'view_subtema'),(137,'Can add Solicitud',35,'add_solicitud'),(138,'Can change Solicitud',35,'change_solicitud'),(139,'Can delete Solicitud',35,'delete_solicitud'),(140,'Can view Solicitud',35,'view_solicitud'),(141,'Can add Respuesta',36,'add_respuesta'),(142,'Can change Respuesta',36,'change_respuesta'),(143,'Can delete Respuesta',36,'delete_respuesta'),(144,'Can view Respuesta',36,'view_respuesta'),(145,'Can add Relacion_solicitud_persona',37,'add_relacion_solicitud_persona'),(146,'Can change Relacion_solicitud_persona',37,'change_relacion_solicitud_persona'),(147,'Can delete Relacion_solicitud_persona',37,'delete_relacion_solicitud_persona'),(148,'Can view Relacion_solicitud_persona',37,'view_relacion_solicitud_persona'),(149,'Can add Relacion_citacion_persona',38,'add_relacion_citacion_persona'),(150,'Can change Relacion_citacion_persona',38,'change_relacion_citacion_persona'),(151,'Can delete Relacion_citacion_persona',38,'delete_relacion_citacion_persona'),(152,'Can view Relacion_citacion_persona',38,'view_relacion_citacion_persona'),(153,'Can add Relacion_area_perfil',39,'add_relacion_area_perfil'),(154,'Can change Relacion_area_perfil',39,'change_relacion_area_perfil'),(155,'Can delete Relacion_area_perfil',39,'delete_relacion_area_perfil'),(156,'Can view Relacion_area_perfil',39,'view_relacion_area_perfil'),(157,'Can add Localidad',40,'add_localidad'),(158,'Can change Localidad',40,'change_localidad'),(159,'Can delete Localidad',40,'delete_localidad'),(160,'Can view Localidad',40,'view_localidad'),(161,'Can add Historico_solicitud',41,'add_historico_solicitud'),(162,'Can change Historico_solicitud',41,'change_historico_solicitud'),(163,'Can delete Historico_solicitud',41,'delete_historico_solicitud'),(164,'Can view Historico_solicitud',41,'view_historico_solicitud'),(165,'Can add Hechos',42,'add_hechos'),(166,'Can change Hechos',42,'change_hechos'),(167,'Can delete Hechos',42,'delete_hechos'),(168,'Can view Hechos',42,'view_hechos'),(169,'Can add Encuesta',43,'add_encuesta'),(170,'Can change Encuesta',43,'change_encuesta'),(171,'Can delete Encuesta',43,'delete_encuesta'),(172,'Can view Encuesta',43,'view_encuesta'),(173,'Can add Documento',44,'add_documento'),(174,'Can change Documento',44,'change_documento'),(175,'Can delete Documento',44,'delete_documento'),(176,'Can view Documento',44,'view_documento'),(177,'Can add Departamento',45,'add_departamento'),(178,'Can change Departamento',45,'change_departamento'),(179,'Can delete Departamento',45,'delete_departamento'),(180,'Can view Departamento',45,'view_departamento'),(181,'Can add Inicio_conflicto',12,'add_inicio_conflicto'),(182,'Can change Inicio_conflicto',12,'change_inicio_conflicto'),(183,'Can delete Inicio_conflicto',12,'delete_inicio_conflicto'),(184,'Can view Inicio_conflicto',12,'view_inicio_conflicto'),(185,'Can add Genero_biologico',46,'add_genero_biologico'),(186,'Can change Genero_biologico',46,'change_genero_biologico'),(187,'Can delete Genero_biologico',46,'delete_genero_biologico'),(188,'Can view Genero_biologico',46,'view_genero_biologico'),(189,'Can add Genero_biologico',47,'add_genero'),(190,'Can change Genero_biologico',47,'change_genero'),(191,'Can delete Genero_biologico',47,'delete_genero'),(192,'Can view Genero_biologico',47,'view_genero');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$320000$vqMefj4kpk5qIyjZmQHrJE$Rp96cao5lhb5BKJ+DI6r4Ah2N9jSwrGugNfpIYmxwR8=','2022-06-20 16:16:04.746430',1,'jairo','','','',1,1,'2022-05-27 20:53:21.385843');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=860 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2022-05-31 14:15:47.079634','2','Convocado',3,'',25,1),(2,'2022-05-31 14:15:47.083687','1','Convocante',3,'',25,1),(3,'2022-05-31 14:19:30.794406','1','Requisito de procedibilidad',3,'',33,1),(4,'2022-05-31 14:47:52.053062','1','DE 1 A 30 DIAS (HASTA 1 MES)',1,'[{\"added\": {}}]',12,1),(5,'2022-05-31 14:48:31.585555','2','DE 31 A 180 DIAS (ENTRE 2 Y 6 MESES)',1,'[{\"added\": {}}]',12,1),(6,'2022-05-31 14:49:29.308442','3','SUPERIOR A 180 DIAS (ENTRE 7 Y 12 MESES)',1,'[{\"added\": {}}]',12,1),(7,'2022-05-31 14:50:41.263322','4','SUPERIOR A 365 DIAS (SUPERIOR A 1 AÑO)',1,'[{\"added\": {}}]',12,1),(8,'2022-05-31 14:50:46.989811','5','NO INFORMA',1,'[{\"added\": {}}]',12,1),(9,'2022-05-31 14:51:09.839235','1','LAS DOS PARTES',1,'[{\"added\": {}}]',21,1),(10,'2022-05-31 14:51:20.918636','2','SOLO UNA DE LAS PARTES',1,'[{\"added\": {}}]',21,1),(11,'2022-05-31 14:51:33.134242','3','MEDIANTE APODERADO',1,'[{\"added\": {}}]',21,1),(12,'2022-05-31 15:11:38.169366','1','Conciliacion',3,'',14,1),(13,'2022-05-31 15:37:26.790682','2','Resolver de manera alternativa el conflicto',2,'[{\"changed\": {\"fields\": [\"Objetivo servicio Id\"]}}]',33,1),(14,'2022-05-31 15:37:29.797224','1','Requisito de procedibilidad',2,'[{\"changed\": {\"fields\": [\"Objetivo servicio Id\"]}}]',33,1),(15,'2022-05-31 16:01:28.087345','2','Resolver de manera alternativa el conflicto',2,'[]',33,1),(16,'2022-05-31 16:17:33.273694','4','tipo4',3,'',33,1),(17,'2022-05-31 16:17:33.277637','3','tipo3',3,'',33,1),(18,'2022-05-31 20:17:41.797393','1','1',1,'[{\"added\": {}}]',35,1),(19,'2022-05-31 20:17:47.722778','1','1',2,'[]',35,1),(20,'2022-06-01 19:47:12.334879','1','Jairo Urrego',1,'[{\"added\": {}}]',17,1),(21,'2022-06-01 19:50:47.085257','1','1',1,'[{\"added\": {}}]',37,1),(22,'2022-06-02 00:19:24.453500','2','2',1,'[{\"added\": {}}]',37,1),(23,'2022-06-07 16:52:48.658066','1','8:00 - 9:00',1,'[{\"added\": {}}]',31,1),(24,'2022-06-07 16:52:54.816907','1','Citacion 1',1,'[{\"added\": {}}]',9,1),(25,'2022-06-07 16:53:33.008832','1','Descriocin del hecho',1,'[{\"added\": {}}]',42,1),(26,'2022-06-07 18:36:25.798222','2','Andres Urrego',2,'[{\"changed\": {\"fields\": [\"Identificacion\"]}}]',17,1),(27,'2022-06-07 18:36:30.723970','3','raquel Vivas',2,'[{\"changed\": {\"fields\": [\"Identificacion\"]}}]',17,1),(28,'2022-06-07 19:46:33.109229','3','Docente',1,'[{\"added\": {}}]',24,1),(29,'2022-06-07 19:46:39.358239','4','Estudiante',1,'[{\"added\": {}}]',24,1),(30,'2022-06-07 20:50:02.251985','1','Citacion 1',2,'[]',9,1),(31,'2022-06-07 20:50:21.877440','2','9:00 - 10:00',1,'[{\"added\": {}}]',31,1),(32,'2022-06-07 20:50:26.325429','2','Descripcion 2',1,'[{\"added\": {}}]',9,1),(33,'2022-06-07 21:14:54.564222','2','Descripcion 2',2,'[{\"changed\": {\"fields\": [\"Turno Id\"]}}]',9,1),(34,'2022-06-07 23:20:32.604906','1','1',2,'[{\"changed\": {\"fields\": [\"Tipo cliente Id\"]}}]',37,1),(35,'2022-06-07 23:20:36.677701','2','2',2,'[{\"changed\": {\"fields\": [\"Tipo cliente Id\"]}}]',37,1),(36,'2022-06-07 23:20:41.125986','3','3',2,'[{\"changed\": {\"fields\": [\"Tipo cliente Id\"]}}]',37,1),(37,'2022-06-07 23:20:52.742163','4','4',2,'[{\"changed\": {\"fields\": [\"Tipo cliente Id\"]}}]',37,1),(38,'2022-06-07 23:20:57.235587','5','5',2,'[{\"changed\": {\"fields\": [\"Tipo cliente Id\"]}}]',37,1),(39,'2022-06-07 23:21:01.750150','6','6',2,'[{\"changed\": {\"fields\": [\"Tipo cliente Id\"]}}]',37,1),(40,'2022-06-07 23:21:52.504618','2','2',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',37,1),(41,'2022-06-07 23:21:59.655673','3','3',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',37,1),(42,'2022-06-07 23:22:03.565806','4','4',2,'[]',37,1),(43,'2022-06-07 23:22:08.022295','5','5',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',37,1),(44,'2022-06-07 23:22:11.991079','6','6',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',37,1),(45,'2022-06-07 23:26:13.526253','1','1',2,'[]',37,1),(46,'2022-06-07 23:26:17.165662','2','2',2,'[]',37,1),(47,'2022-06-07 23:26:22.200489','3','3',2,'[{\"changed\": {\"fields\": [\"Persona Id\"]}}]',37,1),(48,'2022-06-07 23:26:37.929742','4','4',2,'[]',37,1),(49,'2022-06-08 00:40:53.047867','2','Andres Urrego',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',17,1),(50,'2022-06-08 00:41:36.331351','2','Andres Urrego',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',17,1),(51,'2022-06-08 00:44:01.500447','2','Andres Urrego',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',17,1),(52,'2022-06-08 00:44:46.020385','2','Andres Urrego',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',17,1),(53,'2022-06-08 01:22:04.173596','4','Pedro Infante',1,'[{\"added\": {}}]',17,1),(54,'2022-06-08 01:24:49.658043','4','Pedro Infante',2,'[{\"changed\": {\"fields\": [\"Barrio Id\"]}}]',17,1),(55,'2022-06-08 01:51:38.976812','4','Pedro Infante',2,'[]',17,1),(56,'2022-06-08 01:51:50.177458','4','Pedro Infante',2,'[]',17,1),(57,'2022-06-08 01:52:00.122705','2','Andres Urrego',2,'[{\"changed\": {\"fields\": [\"Correo\"]}}]',17,1),(58,'2022-06-08 01:56:25.651473','2','Andres Urrego',2,'[{\"changed\": {\"fields\": [\"Correo\"]}}]',17,1),(59,'2022-06-08 02:07:17.346964','2','Andres Urrego',2,'[{\"changed\": {\"fields\": [\"Correo\"]}}]',17,1),(60,'2022-06-08 02:08:03.962241','2','Andres Urrego',2,'[{\"changed\": {\"fields\": [\"Correo\"]}}]',17,1),(61,'2022-06-08 02:14:52.263069','5','1321321 321',1,'[{\"added\": {}}]',17,1),(62,'2022-06-08 02:15:13.307630','5','1321321 321',3,'',17,1),(63,'2022-06-08 02:15:41.906012','2','Andres Urrego',2,'[{\"changed\": {\"fields\": [\"Telefono\", \"Fecha de nacimiento\"]}}]',17,1),(64,'2022-06-08 02:27:48.467649','3','raquel Vivas',2,'[]',17,1),(65,'2022-06-08 02:47:39.632044','1','Jairo Urrego',2,'[]',17,1),(66,'2022-06-08 02:48:00.756228','1','Jairo Urrego',2,'[{\"changed\": {\"fields\": [\"Fecha de nacimiento\"]}}]',17,1),(67,'2022-06-08 02:48:16.141542','3','raquel Vivas',2,'[{\"changed\": {\"fields\": [\"Fecha de nacimiento\"]}}]',17,1),(68,'2022-06-08 02:53:38.922043','6','465465 465',1,'[{\"added\": {}}]',17,1),(69,'2022-06-08 12:43:15.230292','108','Falsedad personal',3,'',34,1),(70,'2022-06-08 12:43:15.235292','105','Inasistencia alimentaria',3,'',34,1),(71,'2022-06-08 12:43:15.237293','61','Separacion de bienes y cuerpos',3,'',34,1),(72,'2022-06-08 12:43:15.239292','59','Capitulaciones matrimoniales',3,'',34,1),(73,'2022-06-08 12:43:15.242292','57','Otros',3,'',34,1),(74,'2022-06-08 12:43:15.244292','56','Turismo',3,'',34,1),(75,'2022-06-08 12:43:15.247293','55','Titulos valores',3,'',34,1),(76,'2022-06-08 12:43:15.249292','53','Seguros',3,'',34,1),(77,'2022-06-08 12:43:15.251292','51','Propiedad horizontal',3,'',34,1),(78,'2022-06-08 12:43:15.253292','50','Otras garantias inmobiliarias',3,'',34,1),(79,'2022-06-08 12:43:15.255291','49','Hipoteca',3,'',34,1),(80,'2022-06-08 12:43:15.257291','48','Garantias inmobiliarias',3,'',34,1),(81,'2022-06-08 12:43:15.259291','47','Fiducia en garantia',3,'',34,1),(82,'2022-06-08 12:43:15.262299','46','Fianza',3,'',34,1),(83,'2022-06-08 12:43:15.266295','45','Anticresis sobre inmuebles',3,'',34,1),(84,'2022-06-08 12:43:15.269299','44','Otros',3,'',34,1),(85,'2022-06-08 12:43:15.274291','43','Subarriendo',3,'',34,1),(86,'2022-06-08 12:43:15.277291','41','Deshaucio',3,'',34,1),(87,'2022-06-08 12:43:15.281293','38','Otros',3,'',34,1),(88,'2022-06-08 12:43:15.283292','37','Transporte de personas',3,'',34,1),(89,'2022-06-08 12:43:15.285292','36','Transporte de cosas',3,'',34,1),(90,'2022-06-08 12:43:15.288296','35','Transaccion',3,'',34,1),(91,'2022-06-08 12:43:15.291295','34','Suministro',3,'',34,1),(92,'2022-06-08 12:43:15.293293','33','Preposicion',3,'',34,1),(93,'2022-06-08 12:43:15.295293','32','Permuta',3,'',34,1),(94,'2022-06-08 12:43:15.296293','30','Obra',3,'',34,1),(95,'2022-06-08 12:43:15.298293','28','Mandato',3,'',34,1),(96,'2022-06-08 12:43:15.300293','27','Edicion',3,'',34,1),(97,'2022-06-08 12:43:15.302292','26','Depositvo mercantil',3,'',34,1),(98,'2022-06-08 12:43:15.304291','25','Depositvo civil',3,'',34,1),(99,'2022-06-08 12:43:15.305291','24','Corretaje',3,'',34,1),(100,'2022-06-08 12:43:15.307291','23','Contratos atipicos',3,'',34,1),(101,'2022-06-08 12:43:15.309291','22','Consignacion',3,'',34,1),(102,'2022-06-08 12:43:15.311291','20','Comodato',3,'',34,1),(103,'2022-06-08 12:43:15.313293','19','Comision',3,'',34,1),(104,'2022-06-08 12:43:15.315292','18','Arrendamiento de vivienda',3,'',34,1),(105,'2022-06-08 12:43:15.318296','17','Arrendamiento comercial',3,'',34,1),(106,'2022-06-08 12:43:15.320292','16','Aparceria',3,'',34,1),(107,'2022-06-08 12:43:15.323300','15','Agencia comercial',3,'',34,1),(108,'2022-06-08 12:43:15.325291','14','Otros',3,'',34,1),(109,'2022-06-08 12:43:15.327291','12','Publicidad',3,'',34,1),(110,'2022-06-08 12:43:15.330291','10','Informacion',3,'',34,1),(111,'2022-06-08 12:43:15.332296','9','Garantias suplementarias',3,'',34,1),(112,'2022-06-08 12:43:15.334292','8','Garantia legal',3,'',34,1),(113,'2022-06-08 12:43:15.336295','6','Daños por producto defectuoso',3,'',34,1),(114,'2022-06-08 12:43:15.338293','4','Comercio electronico',3,'',34,1),(115,'2022-06-08 12:43:15.340293','3','Clausulas abusivas',3,'',34,1),(116,'2022-06-08 12:43:15.344293','2','Competencia desleal',3,'',34,1),(117,'2022-06-08 12:43:23.960474','26','Delitos contra la fe publica',3,'',22,1),(118,'2022-06-08 12:43:23.963220','25','Delitos contra la familia',3,'',22,1),(119,'2022-06-08 12:43:23.966212','19','Union marital del hecho',3,'',22,1),(120,'2022-06-08 12:43:23.970219','18','Sucesiones',3,'',22,1),(121,'2022-06-08 12:43:23.973220','16','Matrimonio',3,'',22,1),(122,'2022-06-08 12:43:23.975220','15','Convivencia',3,'',22,1),(123,'2022-06-08 12:43:23.977220','14','Otros',3,'',22,1),(124,'2022-06-08 12:43:23.979652','13','Turismo',3,'',22,1),(125,'2022-06-08 12:43:23.981663','12','Titulos valores',3,'',22,1),(126,'2022-06-08 12:43:23.984659','10','Seguros',3,'',22,1),(127,'2022-06-08 12:43:23.987673','8','Propiedad horizontal',3,'',22,1),(128,'2022-06-08 12:43:23.991663','7','Garantias',3,'',22,1),(129,'2022-06-08 12:43:23.993654','6','Establecimiento de comercio',3,'',22,1),(130,'2022-06-08 12:43:23.996075','5','Economia solidaria',3,'',22,1),(131,'2022-06-08 12:43:23.998080','4','Contratos',3,'',22,1),(132,'2022-06-08 12:43:24.001092','3','Consumo',3,'',22,1),(133,'2022-06-08 12:43:24.004080','2','Competencia desleal',3,'',22,1),(134,'2022-06-08 12:43:24.006088','1','Bienes',3,'',22,1),(135,'2022-06-11 22:05:35.050461','1','Ninguna',1,'[{\"added\": {}}]',41,1),(136,'2022-06-11 22:07:04.340986','3','3',2,'[]',37,1),(137,'2022-06-11 22:30:36.905559','2','2',2,'[{\"changed\": {\"fields\": [\"Tipo cliente Id\", \"Solicitud Id\", \"Persona Id\"]}}]',37,1),(138,'2022-06-11 22:33:04.590490','2','2',2,'[{\"changed\": {\"fields\": [\"State\", \"Descripcion\", \"Area Id\", \"Subtema Id\", \"Tipo servicio Id\", \"Inicio conflicto Id\", \"Solicitante servicio Id\"]}}]',35,1),(139,'2022-06-11 22:34:36.565874','2','NADA',1,'[{\"added\": {}}]',41,1),(140,'2022-06-12 16:34:31.395568','1','Jairo Urrego',2,'[{\"changed\": {\"fields\": [\"Nombres\", \"Apellidos\"]}}]',17,1),(141,'2022-06-12 16:34:36.951419','2','Andres Urrego',2,'[{\"changed\": {\"fields\": [\"Nombres\", \"Apellidos\"]}}]',17,1),(142,'2022-06-12 16:34:42.004544','3','Raquel Vivas',2,'[{\"changed\": {\"fields\": [\"Nombres\", \"Apellidos\"]}}]',17,1),(143,'2022-06-12 16:34:47.846630','6','465 4',2,'[]',17,1),(144,'2022-06-12 17:10:32.274482','6','6',2,'[{\"changed\": {\"fields\": [\"Solicitud Id\"]}}]',37,1),(145,'2022-06-12 17:11:05.026516','2','2',2,'[]',35,1),(146,'2022-06-12 17:11:24.766150','1','1',2,'[]',37,1),(147,'2022-06-12 17:11:32.033193','2','2',2,'[]',37,1),(148,'2022-06-12 17:11:38.653111','3','3',2,'[]',37,1),(149,'2022-06-12 17:17:30.382613','11','11',3,'',37,1),(150,'2022-06-12 17:17:30.385619','10','10',3,'',37,1),(151,'2022-06-12 17:17:30.387621','9','9',3,'',37,1),(152,'2022-06-12 17:17:30.390213','8','8',3,'',37,1),(153,'2022-06-12 17:17:30.392212','7','7',3,'',37,1),(154,'2022-06-12 17:17:30.393212','6','6',3,'',37,1),(155,'2022-06-12 17:17:30.395214','5','5',3,'',37,1),(156,'2022-06-12 17:17:30.397212','4','4',3,'',37,1),(157,'2022-06-12 17:17:30.399480','3','3',3,'',37,1),(158,'2022-06-12 17:17:30.401235','2','2',3,'',37,1),(159,'2022-06-12 17:17:30.402240','1','1',3,'',37,1),(160,'2022-06-12 17:17:46.944625','12','12',1,'[{\"added\": {}}]',37,1),(161,'2022-06-12 17:18:43.945820','12','12',3,'',37,1),(162,'2022-06-12 17:19:05.721151','13','13',1,'[{\"added\": {}}]',37,1),(163,'2022-06-12 17:48:44.569259','14','14',1,'[{\"added\": {}}]',37,1),(164,'2022-06-12 17:55:19.087703','14','14',2,'[{\"changed\": {\"fields\": [\"Solicitud Id\"]}}]',37,1),(165,'2022-06-12 21:42:00.335902','15','15',1,'[{\"added\": {}}]',37,1),(166,'2022-06-13 04:10:35.717269','1','1',1,'[{\"added\": {}}]',38,1),(167,'2022-06-13 04:10:42.902435','2','2',1,'[{\"added\": {}}]',38,1),(168,'2022-06-13 04:10:51.733017','3','3',1,'[{\"added\": {}}]',38,1),(169,'2022-06-13 04:39:27.848893','1','1',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',38,1),(170,'2022-06-13 04:42:11.464663','1','1',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',38,1),(171,'2022-06-13 04:43:33.138324','3','3',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',38,1),(172,'2022-06-13 04:43:37.694352','2','2',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',38,1),(173,'2022-06-13 04:43:43.825304','1','1',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',38,1),(174,'2022-06-13 04:44:29.564217','1','1',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',38,1),(175,'2022-06-13 04:45:09.738317','1','1',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',38,1),(176,'2022-06-13 04:47:30.998052','1','1',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',38,1),(177,'2022-06-13 04:47:34.248456','2','2',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',38,1),(178,'2022-06-13 04:47:38.565492','3','3',2,'[{\"changed\": {\"fields\": [\"State\"]}}]',38,1),(179,'2022-06-13 15:11:41.548252','2','NADA',2,'[{\"changed\": {\"fields\": [\"Solicitud Id\"]}}]',41,1),(180,'2022-06-13 18:55:10.164618','31','31',1,'[{\"added\": {}}]',37,1),(181,'2022-06-14 02:01:40.058060','33','33',1,'[{\"added\": {}}]',37,1),(182,'2022-06-14 02:01:51.711224','33','33',2,'[{\"changed\": {\"fields\": [\"Tipo cliente Id\"]}}]',37,1),(183,'2022-06-14 13:34:00.590512','33','33',3,'',37,1),(184,'2022-06-14 13:34:00.608760','32','32',3,'',37,1),(185,'2022-06-14 13:34:00.616609','31','31',3,'',37,1),(186,'2022-06-14 13:34:00.616609','30','30',3,'',37,1),(187,'2022-06-14 13:34:00.624916','29','29',3,'',37,1),(188,'2022-06-14 13:34:00.624916','28','28',3,'',37,1),(189,'2022-06-14 13:34:00.624916','27','27',3,'',37,1),(190,'2022-06-14 13:34:00.634893','26','26',3,'',37,1),(191,'2022-06-14 13:34:00.634893','25','25',3,'',37,1),(192,'2022-06-14 13:34:00.634893','24','24',3,'',37,1),(193,'2022-06-14 13:34:00.643052','23','23',3,'',37,1),(194,'2022-06-14 13:34:00.644998','22','22',3,'',37,1),(195,'2022-06-14 13:34:00.648626','21','21',3,'',37,1),(196,'2022-06-14 13:34:00.648626','20','20',3,'',37,1),(197,'2022-06-14 13:34:00.657182','19','19',3,'',37,1),(198,'2022-06-14 13:34:00.657182','18','18',3,'',37,1),(199,'2022-06-14 13:34:00.665246','17','17',3,'',37,1),(200,'2022-06-14 13:34:00.665246','16','16',3,'',37,1),(201,'2022-06-14 13:34:00.673242','15','15',3,'',37,1),(202,'2022-06-14 13:34:00.673242','14','14',3,'',37,1),(203,'2022-06-14 13:34:00.681686','13','13',3,'',37,1),(204,'2022-06-14 13:34:22.447773','9','9',3,'',38,1),(205,'2022-06-14 13:34:22.455807','8','8',3,'',38,1),(206,'2022-06-14 13:34:22.463868','7','7',3,'',38,1),(207,'2022-06-14 13:34:22.463868','6','6',3,'',38,1),(208,'2022-06-14 13:34:22.471936','5','5',3,'',38,1),(209,'2022-06-14 13:34:22.471936','4','4',3,'',38,1),(210,'2022-06-14 13:34:22.480587','3','3',3,'',38,1),(211,'2022-06-14 13:34:22.480587','2','2',3,'',38,1),(212,'2022-06-14 13:34:22.488606','1','1',3,'',38,1),(213,'2022-06-14 13:34:39.973391','6','465 4',3,'',17,1),(214,'2022-06-14 13:34:39.978104','4','Infante Diaz',3,'',17,1),(215,'2022-06-14 13:34:39.981611','3','Raquel Vivas',3,'',17,1),(216,'2022-06-14 13:34:39.981611','2','Andres Urrego',3,'',17,1),(217,'2022-06-14 13:34:39.988797','1','Jairo Urrego',3,'',17,1),(218,'2022-06-14 13:36:13.332984','7','Jairo Milelr Urrego',1,'[{\"added\": {}}]',17,1),(219,'2022-06-14 13:37:28.476358','8','Luz Helena',1,'[{\"added\": {}}]',17,1),(220,'2022-06-14 13:38:40.905884','9','Kevin Andres Urrego',1,'[{\"added\": {}}]',17,1),(221,'2022-06-14 13:40:27.738544','10','Maria Luisa Bogata Rios',1,'[{\"added\": {}}]',17,1),(222,'2022-06-14 13:43:52.929217','11','Maria del Carmen Ruiz C',1,'[{\"added\": {}}]',17,1),(223,'2022-06-14 13:45:17.102033','12','Rafael Perez',1,'[{\"added\": {}}]',17,1),(224,'2022-06-14 13:45:51.408403','61','61',3,'',35,1),(225,'2022-06-14 13:45:51.416385','60','60',3,'',35,1),(226,'2022-06-14 13:45:51.416385','59','59',3,'',35,1),(227,'2022-06-14 13:45:51.424587','58','58',3,'',35,1),(228,'2022-06-14 13:45:51.433666','57','57',3,'',35,1),(229,'2022-06-14 13:45:51.433666','56','56',3,'',35,1),(230,'2022-06-14 13:45:51.433666','55','55',3,'',35,1),(231,'2022-06-14 13:45:51.443894','54','54',3,'',35,1),(232,'2022-06-14 13:45:51.449615','53','53',3,'',35,1),(233,'2022-06-14 13:45:51.449615','52','52',3,'',35,1),(234,'2022-06-14 13:45:51.449615','51','51',3,'',35,1),(235,'2022-06-14 13:45:51.457659','50','50',3,'',35,1),(236,'2022-06-14 13:45:51.457659','49','49',3,'',35,1),(237,'2022-06-14 13:45:51.465730','48','48',3,'',35,1),(238,'2022-06-14 13:45:51.465730','47','47',3,'',35,1),(239,'2022-06-14 13:45:51.474216','46','46',3,'',35,1),(240,'2022-06-14 13:45:51.474216','45','45',3,'',35,1),(241,'2022-06-14 13:45:51.482277','44','44',3,'',35,1),(242,'2022-06-14 13:45:51.482277','43','43',3,'',35,1),(243,'2022-06-14 13:45:51.490260','42','42',3,'',35,1),(244,'2022-06-14 13:45:51.490260','41','41',3,'',35,1),(245,'2022-06-14 13:45:51.490260','40','40',3,'',35,1),(246,'2022-06-14 13:45:51.498265','39','39',3,'',35,1),(247,'2022-06-14 13:45:51.498265','38','38',3,'',35,1),(248,'2022-06-14 13:45:51.506689','37','37',3,'',35,1),(249,'2022-06-14 13:45:51.506689','36','36',3,'',35,1),(250,'2022-06-14 13:45:51.515269','35','35',3,'',35,1),(251,'2022-06-14 13:45:51.515269','34','34',3,'',35,1),(252,'2022-06-14 13:45:51.523391','33','33',3,'',35,1),(253,'2022-06-14 13:45:51.523391','32','32',3,'',35,1),(254,'2022-06-14 13:45:51.531990','31','31',3,'',35,1),(255,'2022-06-14 13:45:51.531990','30','30',3,'',35,1),(256,'2022-06-14 13:45:51.540067','29','29',3,'',35,1),(257,'2022-06-14 13:45:51.548024','28','28',3,'',35,1),(258,'2022-06-14 13:45:51.548024','27','27',3,'',35,1),(259,'2022-06-14 13:45:51.556096','26','26',3,'',35,1),(260,'2022-06-14 13:45:51.556096','25','25',3,'',35,1),(261,'2022-06-14 13:45:51.564506','24','24',3,'',35,1),(262,'2022-06-14 13:45:51.564506','23','23',3,'',35,1),(263,'2022-06-14 13:45:51.572668','22','22',3,'',35,1),(264,'2022-06-14 13:45:51.580592','21','21',3,'',35,1),(265,'2022-06-14 13:45:51.580592','20','20',3,'',35,1),(266,'2022-06-14 13:45:51.589210','19','19',3,'',35,1),(267,'2022-06-14 13:45:51.589210','18','18',3,'',35,1),(268,'2022-06-14 13:45:51.597794','17','17',3,'',35,1),(269,'2022-06-14 13:45:51.597794','16','16',3,'',35,1),(270,'2022-06-14 13:45:51.606692','15','15',3,'',35,1),(271,'2022-06-14 13:45:51.606692','14','14',3,'',35,1),(272,'2022-06-14 13:45:51.614747','13','13',3,'',35,1),(273,'2022-06-14 13:45:51.614747','12','12',3,'',35,1),(274,'2022-06-14 13:45:51.623226','11','11',3,'',35,1),(275,'2022-06-14 13:45:51.623226','10','10',3,'',35,1),(276,'2022-06-14 13:45:51.631740','9','9',3,'',35,1),(277,'2022-06-14 13:45:51.631740','8','8',3,'',35,1),(278,'2022-06-14 13:45:51.639798','7','7',3,'',35,1),(279,'2022-06-14 13:45:51.641905','6','6',3,'',35,1),(280,'2022-06-14 13:45:51.641905','5','5',3,'',35,1),(281,'2022-06-14 13:45:51.650564','4','4',3,'',35,1),(282,'2022-06-14 13:45:51.650564','3','3',3,'',35,1),(283,'2022-06-14 13:45:51.650564','2','2',3,'',35,1),(284,'2022-06-14 13:45:51.658657','1','1',3,'',35,1),(285,'2022-06-14 13:46:42.564491','62','62',1,'[{\"added\": {}}]',35,1),(286,'2022-06-14 13:47:25.507093','63','63',1,'[{\"added\": {}}]',35,1),(287,'2022-06-14 13:48:13.089622','34','34',1,'[{\"added\": {}}]',37,1),(288,'2022-06-14 13:48:45.020847','35','35',1,'[{\"added\": {}}]',37,1),(289,'2022-06-14 13:49:00.047978','36','36',1,'[{\"added\": {}}]',37,1),(290,'2022-06-14 13:49:48.173550','37','37',1,'[{\"added\": {}}]',37,1),(291,'2022-06-14 13:49:57.016269','38','38',1,'[{\"added\": {}}]',37,1),(292,'2022-06-14 13:50:06.016570','39','39',1,'[{\"added\": {}}]',37,1),(293,'2022-06-14 13:50:16.414187','40','40',1,'[{\"added\": {}}]',37,1),(294,'2022-06-14 13:51:29.554156','3','Nuevo',3,'',41,1),(295,'2022-06-14 13:51:29.556539','2','NADA',3,'',41,1),(296,'2022-06-14 13:51:29.561425','1','Ninguna',3,'',41,1),(297,'2022-06-14 13:51:49.980503','4','Ninguna',1,'[{\"added\": {}}]',41,1),(298,'2022-06-14 13:52:13.997442','5','Hisorial solicitud 2',1,'[{\"added\": {}}]',41,1),(299,'2022-06-14 13:52:22.552026','5','Historial solicitud 2',2,'[{\"changed\": {\"fields\": [\"Descripcion\"]}}]',41,1),(300,'2022-06-14 13:52:31.069621','4','Historial Ninguna',2,'[{\"changed\": {\"fields\": [\"Descripcion\"]}}]',41,1),(301,'2022-06-14 13:52:40.432711','4','Historial Solicitud 1',2,'[{\"changed\": {\"fields\": [\"Descripcion\"]}}]',41,1),(302,'2022-06-14 14:05:20.533570','41','41',3,'',37,1),(303,'2022-06-14 14:05:27.708782','40','40',2,'[]',37,1),(304,'2022-06-14 14:05:30.551169','39','39',2,'[]',37,1),(305,'2022-06-14 14:05:33.387210','38','38',2,'[]',37,1),(306,'2022-06-14 15:07:17.265486','47','47',3,'',37,1),(307,'2022-06-14 15:07:20.287783','46','46',3,'',37,1),(308,'2022-06-14 15:07:23.737575','45','45',3,'',37,1),(309,'2022-06-14 15:07:26.541057','44','44',3,'',37,1),(310,'2022-06-14 15:07:29.397018','43','43',3,'',37,1),(311,'2022-06-14 15:07:32.250660','42','42',3,'',37,1),(312,'2022-06-14 15:09:20.309354','51','51',3,'',37,1),(313,'2022-06-14 15:09:20.313675','50','50',3,'',37,1),(314,'2022-06-14 15:09:20.316942','49','49',3,'',37,1),(315,'2022-06-14 15:09:20.316942','48','48',3,'',37,1),(316,'2022-06-14 15:28:11.174338','7','Descripcion',1,'[{\"added\": {}}]',41,1),(317,'2022-06-14 15:33:58.402293','7','Descripcion',2,'[]',41,1),(318,'2022-06-14 15:34:09.666875','5','Historial solicitud 2',2,'[]',41,1),(319,'2022-06-14 15:34:13.652775','4','Historial Solicitud 1',2,'[]',41,1),(320,'2022-06-14 15:34:21.236788','7','Descripcion',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(321,'2022-06-14 15:34:31.977927','7','Descripcion',2,'[]',41,1),(322,'2022-06-14 15:38:33.793187','62','62',1,'[{\"added\": {}}]',37,1),(323,'2022-06-14 15:42:09.190657','62','62',2,'[{\"changed\": {\"fields\": [\"Solicitud Id\"]}}]',37,1),(324,'2022-06-14 17:29:37.048686','4','Historial Solicitud 1',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(325,'2022-06-14 17:39:47.895993','4','Historial Solicitud 1',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(326,'2022-06-14 17:39:54.094630','8','Historial Solicitud 1',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(327,'2022-06-14 17:40:18.391400','5','Historial solicitud 2',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(328,'2022-06-14 17:40:45.089990','4','Historial Solicitud 1',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(329,'2022-06-14 17:42:43.595170','6','Nuevo',2,'[{\"changed\": {\"fields\": [\"Solicitud Id\", \"Tipo estado Id\"]}}]',41,1),(330,'2022-06-14 17:48:13.764540','7','Descripcion',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(331,'2022-06-14 17:48:24.457454','6','Nuevo',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(332,'2022-06-14 17:48:34.649928','5','Historial solicitud 2',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(333,'2022-06-14 17:49:20.364752','5','Historial solicitud 2',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(334,'2022-06-14 18:43:28.315844','4','Historial Solicitud 1',2,'[]',41,1),(335,'2022-06-14 19:21:00.400559','38','38',3,'',37,1),(336,'2022-06-14 19:25:43.596512','91','91',3,'',37,1),(337,'2022-06-14 19:25:43.606552','90','90',3,'',37,1),(338,'2022-06-14 19:25:43.610550','89','89',3,'',37,1),(339,'2022-06-14 19:25:43.615345','88','88',3,'',37,1),(340,'2022-06-14 19:25:43.619206','87','87',3,'',37,1),(341,'2022-06-14 19:25:43.623210','86','86',3,'',37,1),(342,'2022-06-14 19:25:43.626214','85','85',3,'',37,1),(343,'2022-06-14 19:25:43.630205','84','84',3,'',37,1),(344,'2022-06-14 19:25:43.632627','83','83',3,'',37,1),(345,'2022-06-14 19:25:43.634638','82','82',3,'',37,1),(346,'2022-06-14 19:25:43.637636','81','81',3,'',37,1),(347,'2022-06-14 19:25:43.641241','80','80',3,'',37,1),(348,'2022-06-14 19:25:43.644744','79','79',3,'',37,1),(349,'2022-06-14 19:25:43.648739','78','78',3,'',37,1),(350,'2022-06-14 19:25:43.651740','77','77',3,'',37,1),(351,'2022-06-14 19:25:43.654794','76','76',3,'',37,1),(352,'2022-06-14 19:25:43.657740','75','75',3,'',37,1),(353,'2022-06-14 19:25:43.661980','74','74',3,'',37,1),(354,'2022-06-14 19:25:43.665084','73','73',3,'',37,1),(355,'2022-06-14 19:25:43.667979','72','72',3,'',37,1),(356,'2022-06-14 19:25:43.671013','71','71',3,'',37,1),(357,'2022-06-14 19:25:43.674077','70','70',3,'',37,1),(358,'2022-06-14 19:25:43.676227','69','69',3,'',37,1),(359,'2022-06-14 19:25:43.680063','68','68',3,'',37,1),(360,'2022-06-14 19:25:43.682062','67','67',3,'',37,1),(361,'2022-06-14 19:25:43.684062','66','66',3,'',37,1),(362,'2022-06-14 19:25:43.687072','65','65',3,'',37,1),(363,'2022-06-14 19:25:43.689080','64','64',3,'',37,1),(364,'2022-06-14 19:25:43.692227','63','63',3,'',37,1),(365,'2022-06-14 19:25:43.695675','62','62',3,'',37,1),(366,'2022-06-14 19:25:43.698672','61','61',3,'',37,1),(367,'2022-06-14 19:25:43.700671','60','60',3,'',37,1),(368,'2022-06-14 19:25:43.702697','59','59',3,'',37,1),(369,'2022-06-14 19:25:43.705832','58','58',3,'',37,1),(370,'2022-06-14 19:25:43.707013','57','57',3,'',37,1),(371,'2022-06-14 19:25:43.710016','56','56',3,'',37,1),(372,'2022-06-14 19:25:43.711314','55','55',3,'',37,1),(373,'2022-06-14 19:25:43.714322','54','54',3,'',37,1),(374,'2022-06-14 19:25:43.715322','53','53',3,'',37,1),(375,'2022-06-14 19:25:43.717321','52','52',3,'',37,1),(376,'2022-06-14 19:25:43.718319','40','40',3,'',37,1),(377,'2022-06-14 19:25:43.719319','39','39',3,'',37,1),(378,'2022-06-14 19:25:43.721427','37','37',3,'',37,1),(379,'2022-06-14 19:25:43.722447','36','36',3,'',37,1),(380,'2022-06-14 19:25:43.724426','35','35',3,'',37,1),(381,'2022-06-14 19:25:43.726427','34','34',3,'',37,1),(382,'2022-06-14 19:25:54.768508','92','92',1,'[{\"added\": {}}]',37,1),(383,'2022-06-14 19:26:05.072173','93','93',1,'[{\"added\": {}}]',37,1),(384,'2022-06-14 19:26:48.499821','93','93',2,'[{\"changed\": {\"fields\": [\"Tipo cliente Id\"]}}]',37,1),(385,'2022-06-14 19:26:58.507535','92','92',2,'[]',37,1),(386,'2022-06-14 19:27:11.268294','94','94',1,'[{\"added\": {}}]',37,1),(387,'2022-06-14 19:27:16.002480','94','94',2,'[]',37,1),(388,'2022-06-14 19:27:48.461481','95','95',1,'[{\"added\": {}}]',37,1),(389,'2022-06-15 03:31:40.640803','92','92',2,'[]',37,1),(390,'2022-06-15 03:57:10.705898','102','63 Convocante Maria del Carmen Ruiz C',3,'',37,1),(391,'2022-06-15 03:57:10.713989','101','63 Convocante Maria del Carmen Ruiz C',3,'',37,1),(392,'2022-06-15 03:57:10.723589','100','63 Convocante Jairo Milelr Urrego',3,'',37,1),(393,'2022-06-15 03:57:10.724193','99','63 Estudiante Maria Luisa Bogata Rios',3,'',37,1),(394,'2022-06-15 03:57:10.730450','98','63 Docente Kevin Andres Urrego',3,'',37,1),(395,'2022-06-15 03:57:10.734012','97','63 Convocante Jairo Milelr Urrego',3,'',37,1),(396,'2022-06-15 03:57:10.734012','96','63 Convocado Luz Helena',3,'',37,1),(397,'2022-06-15 03:57:10.742849','95','62 Convocado Maria del Carmen Ruiz C',3,'',37,1),(398,'2022-06-15 03:57:10.743918','94','62 Estudiante Kevin Andres Urrego',3,'',37,1),(399,'2022-06-15 03:57:10.743918','93','62 Docente Luz Helena',3,'',37,1),(400,'2022-06-15 03:57:10.752039','92','62 Convocante Jairo Milelr Urrego',3,'',37,1),(401,'2022-06-15 03:57:18.235541','103','62 Convocante Jairo Milelr Urrego',1,'[{\"added\": {}}]',37,1),(402,'2022-06-15 03:57:27.115008','7','Jairo MillEr Urrego',2,'[{\"changed\": {\"fields\": [\"Nombres\"]}}]',17,1),(403,'2022-06-15 03:57:35.984865','7','Jairo Miller Urrego',2,'[{\"changed\": {\"fields\": [\"Nombres\"]}}]',17,1),(404,'2022-06-15 03:57:37.465921','103','62 Convocante Jairo Miller Urrego',2,'[]',37,1),(405,'2022-06-15 03:58:16.141859','11','Maria del Carmen Ruiz C',2,'[]',17,1),(406,'2022-06-15 03:58:19.934185','104','62 Convocado Maria del Carmen Ruiz C',1,'[{\"added\": {}}]',37,1),(407,'2022-06-15 03:58:31.734444','105','62 Estudiante Kevin Andres Urrego',1,'[{\"added\": {}}]',37,1),(408,'2022-06-15 03:58:45.803525','106','62 Docente Luz Helena',1,'[{\"added\": {}}]',37,1),(409,'2022-06-15 04:04:35.745921','8','8 Audiencia pendiente 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(410,'2022-06-15 04:04:46.702944','4','4 Nueva 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(411,'2022-06-15 04:04:53.836463','6','6 Asignada 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(412,'2022-06-15 04:04:59.770086','7','7 Audiencia pendiente 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(413,'2022-06-15 04:05:05.168888','8','8 Generacion de resultado 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(414,'2022-06-15 04:17:19.315368','8','8 No aprobado 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(415,'2022-06-15 04:17:34.306932','8','8 Generacion de resultado 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(416,'2022-06-15 04:21:11.739654','8','8 Generacion de resultado 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(417,'2022-06-15 04:23:31.981145','8','8 Generacion de resultado 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(418,'2022-06-15 04:47:17.483344','8','8 Generacion de resultado 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(419,'2022-06-15 04:48:33.451949','6','6 Asignada 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(420,'2022-06-15 06:47:48.355410','8','8 Generacion de resultado 62 ',3,'',41,1),(421,'2022-06-15 06:47:48.365708','6','6 None 62 ',3,'',41,1),(422,'2022-06-15 06:47:48.368938','7','7 Audiencia pendiente 62 ',3,'',41,1),(423,'2022-06-15 06:47:48.372945','5','5 None 63 ',3,'',41,1),(424,'2022-06-15 06:47:48.376580','4','4 Nueva 62 ',3,'',41,1),(425,'2022-06-15 06:50:37.358570','9','9 Nueva 64 ',1,'[{\"added\": {}}]',41,1),(426,'2022-06-15 06:50:54.207509','10','10 Asignada 64 ',1,'[{\"added\": {}}]',41,1),(427,'2022-06-15 06:51:06.652627','11','11 Audiencia pendiente 64 ',1,'[{\"added\": {}}]',41,1),(428,'2022-06-15 06:52:25.634555','11','11 Audiencia pendiente 62 ',2,'[{\"changed\": {\"fields\": [\"Solicitud Id\"]}}]',41,1),(429,'2022-06-15 06:52:33.098363','10','10 Asignada 62 ',2,'[{\"changed\": {\"fields\": [\"Solicitud Id\"]}}]',41,1),(430,'2022-06-15 06:52:37.877826','9','9 Nueva 62 ',2,'[{\"changed\": {\"fields\": [\"Solicitud Id\"]}}]',41,1),(431,'2022-06-15 06:53:46.509396','9','9 Resuelta 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(432,'2022-06-15 06:53:58.048487','11','11 Anulada 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(433,'2022-06-15 07:30:33.019855','107','64 Docente Luz Helena',1,'[{\"added\": {}}]',37,1),(434,'2022-06-15 07:37:26.635289','12','12 Nueva 64 ',1,'[{\"added\": {}}]',41,1),(435,'2022-06-15 08:17:22.513563','11','11 Anulada 62 ',2,'[]',41,1),(436,'2022-06-15 08:17:27.778907','11','11 Anulada 64 ',2,'[{\"changed\": {\"fields\": [\"Solicitud Id\"]}}]',41,1),(437,'2022-06-15 08:27:18.513566','11','11 Anulada 64 ',3,'',41,1),(438,'2022-06-15 08:27:35.410153','12','12 Nueva 64 ',3,'',41,1),(439,'2022-06-15 08:47:40.693274','13','13 Nueva 64 ',1,'[{\"added\": {}}]',41,1),(440,'2022-06-15 08:48:41.376113','13','13 Nueva 64 ',3,'',41,1),(441,'2022-06-15 08:48:41.393100','9','9 Resuelta 62 ',3,'',41,1),(442,'2022-06-15 08:48:41.397115','10','10 Asignada 62 ',3,'',41,1),(443,'2022-06-15 08:55:51.398111','14','14 Nueva 64 ',1,'[{\"added\": {}}]',41,1),(444,'2022-06-15 08:56:01.785068','15','15 Nueva 64 ',1,'[{\"added\": {}}]',41,1),(445,'2022-06-15 08:56:13.483013','16','16 Asignada 64 ',1,'[{\"added\": {}}]',41,1),(446,'2022-06-15 08:56:26.708620','17','17 Audiencia pendiente 64 ',1,'[{\"added\": {}}]',41,1),(447,'2022-06-15 08:56:36.409477','18','18 Asignada 62 ',1,'[{\"added\": {}}]',41,1),(448,'2022-06-15 09:00:44.521272','18','18 Resuelta 62 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(449,'2022-06-15 09:02:21.191981','14','14 Nueva 64 ',2,'[]',41,1),(450,'2022-06-15 09:02:26.562319','15','15 Asignada 64 ',2,'[{\"changed\": {\"fields\": [\"Tipo estado Id\"]}}]',41,1),(451,'2022-06-15 09:03:01.502943','16','16 Asignada 62 ',2,'[{\"changed\": {\"fields\": [\"Solicitud Id\"]}}]',41,1),(452,'2022-06-15 09:03:15.811740','16','16 Asignada 62 ',3,'',41,1),(453,'2022-06-15 09:03:15.822052','15','15 Asignada 64 ',3,'',41,1),(454,'2022-06-15 09:03:15.824475','14','14 Nueva 64 ',3,'',41,1),(455,'2022-06-15 09:03:15.824475','18','18 Resuelta 62 ',3,'',41,1),(456,'2022-06-15 09:03:15.834251','17','17 Audiencia pendiente 64 ',3,'',41,1),(457,'2022-06-15 09:03:24.276893','19','19 Nueva 64 ',1,'[{\"added\": {}}]',41,1),(458,'2022-06-15 09:03:35.366259','20','20 Nueva 62 ',1,'[{\"added\": {}}]',41,1),(459,'2022-06-15 09:03:50.896899','21','21 Asignada 64 ',1,'[{\"added\": {}}]',41,1),(460,'2022-06-15 09:04:08.816126','22','22 Audiencia pendiente 64 ',1,'[{\"added\": {}}]',41,1),(461,'2022-06-15 10:29:43.822530','5','Descripcion',3,'',9,1),(462,'2022-06-15 10:29:50.962403','4','Descripcion',3,'',9,1),(463,'2022-06-15 10:29:50.970009','3','Descripcion',3,'',9,1),(464,'2022-06-15 10:31:58.688174','7','Descripcion',3,'',9,1),(465,'2022-06-15 10:31:58.697184','6','Descripcion',3,'',9,1),(466,'2022-06-15 10:31:58.698043','2','Descripcion 2',3,'',9,1),(467,'2022-06-15 10:31:58.698043','1','Citacion 1',3,'',9,1),(468,'2022-06-15 10:54:10.411705','14','22',3,'',9,1),(469,'2022-06-15 10:54:10.420320','13','null',3,'',9,1),(470,'2022-06-15 10:54:10.420320','12','nada',3,'',9,1),(471,'2022-06-15 10:54:10.428821','11','nada',3,'',9,1),(472,'2022-06-15 10:54:10.429412','10','s',3,'',9,1),(473,'2022-06-15 10:54:10.429412','9','s',3,'',9,1),(474,'2022-06-15 10:54:10.440097','8','Descripcion',3,'',9,1),(475,'2022-06-15 11:06:08.626094','16','Citacion 1',3,'',9,1),(476,'2022-06-15 14:53:12.165489','13','Ana Maria Rios',1,'[{\"added\": {}}]',17,1),(477,'2022-06-15 16:32:01.348412','18','Jairo Miller Urrego',3,'',17,1),(478,'2022-06-15 16:32:01.361501','17','Jairo Miller Urrego',3,'',17,1),(479,'2022-06-15 16:32:01.363562','16','Jairo Miller Urrego',3,'',17,1),(480,'2022-06-15 16:32:01.366502','15','Jairo Miller Urrego',3,'',17,1),(481,'2022-06-15 16:32:01.369629','14','Jairo Miller Urrego',3,'',17,1),(482,'2022-06-15 18:22:39.381121','71','71',3,'',35,1),(483,'2022-06-15 18:22:39.396548','70','70',3,'',35,1),(484,'2022-06-15 18:22:39.399547','69','69',3,'',35,1),(485,'2022-06-15 18:22:39.401548','68','68',3,'',35,1),(486,'2022-06-15 18:22:39.404379','67','67',3,'',35,1),(487,'2022-06-15 18:23:38.823532','134','62 Convocante Jairo Milleer Urrego',3,'',37,1),(488,'2022-06-15 18:23:38.831610','133','62 Convocante Jairo Milleer Urrego',3,'',37,1),(489,'2022-06-15 18:23:38.835608','132','62 Convocante Jairo Milleer Urrego',3,'',37,1),(490,'2022-06-15 18:23:38.839433','131','62 Convocante Jairo Milleer Urrego',3,'',37,1),(491,'2022-06-15 18:23:38.843467','130','62 Convocante Jairo Milleer Urrego',3,'',37,1),(492,'2022-06-15 18:23:38.847428','129','62 Convocante Jairo Miller Urrego',3,'',37,1),(493,'2022-06-15 18:23:38.850429','128','62 Convocante Jairo Miller Urrego',3,'',37,1),(494,'2022-06-15 18:23:38.854771','127','62 Convocante Jairo Miller Urrego',3,'',37,1),(495,'2022-06-15 18:23:38.857779','126','62 Convocante Jairo Miller Urrego',3,'',37,1),(496,'2022-06-15 18:23:38.860825','125','62 Convocante Jairo Miller Urrego',3,'',37,1),(497,'2022-06-15 18:23:38.861825','124','62 Convocante Jairo Miller Urrego',3,'',37,1),(498,'2022-06-15 18:23:38.863824','123','62 Convocante Jairo Miller Urrego',3,'',37,1),(499,'2022-06-15 18:23:38.865825','122','62 Convocante Jairo Miller Urrego',3,'',37,1),(500,'2022-06-15 18:23:38.866845','121','62 Convocante Jairo Miller Urrego',3,'',37,1),(501,'2022-06-15 18:23:38.868826','120','62 Convocante Jairo Miller Urrego',3,'',37,1),(502,'2022-06-15 18:23:38.870847','119','62 Convocante Jairo Miller Urrego',3,'',37,1),(503,'2022-06-15 18:23:38.872907','118','62 Convocante Jairo Miller Urrego',3,'',37,1),(504,'2022-06-15 18:23:38.874889','117','62 Convocante Jairo Miller Urrego',3,'',37,1),(505,'2022-06-15 18:23:38.876903','116','62 Convocante Jairo Miller Urrego',3,'',37,1),(506,'2022-06-15 18:23:38.879885','115','62 Convocante Jairo Miller Urrego',3,'',37,1),(507,'2022-06-15 18:23:38.880897','114','62 Convocante Jairo Miller Urrego',3,'',37,1),(508,'2022-06-15 18:23:38.882884','113','62 Convocante Jairo Miller Urrego',3,'',37,1),(509,'2022-06-15 18:23:38.884884','112','62 Convocante Jairo Miller Urrego',3,'',37,1),(510,'2022-06-15 18:23:38.886885','111','62 Convocante Jairo Miller Urrego',3,'',37,1),(511,'2022-06-15 18:23:38.889629','110','62 Convocante Jairo Miller Urrego',3,'',37,1),(512,'2022-06-15 18:23:38.890646','109','62 Convocante Jairo Miller Urrego',3,'',37,1),(513,'2022-06-16 15:03:19.541288','13','13',3,'',38,1),(514,'2022-06-16 15:03:19.619455','12','12',3,'',38,1),(515,'2022-06-16 15:03:19.621943','11','11',3,'',38,1),(516,'2022-06-16 15:03:19.631387','10','10',3,'',38,1),(517,'2022-06-16 15:08:54.773435','14','14',1,'[{\"added\": {}}]',38,1),(518,'2022-06-16 15:10:09.380984','14','14',3,'',38,1),(519,'2022-06-16 15:10:20.684337','15','15',1,'[{\"added\": {}}]',38,1),(520,'2022-06-16 15:11:08.869457','15','15',2,'[{\"changed\": {\"fields\": [\"Persona Id\"]}}]',38,1),(521,'2022-06-16 15:11:36.506771','15','15',3,'',38,1),(522,'2022-06-16 15:12:30.238079','16','16',1,'[{\"added\": {}}]',38,1),(523,'2022-06-16 15:13:46.402368','16','16',3,'',38,1),(524,'2022-06-16 16:42:35.360291','15','Citacion 1',2,'[]',9,1),(525,'2022-06-16 16:50:56.467558','17','Citacion 2',1,'[{\"added\": {}}]',9,1),(526,'2022-06-16 17:59:43.245976','17','17',1,'[{\"added\": {}}]',38,1),(527,'2022-06-16 19:33:06.267224','18','18',1,'[{\"added\": {}}]',38,1),(528,'2022-06-16 20:11:53.122205','18','18',2,'[{\"changed\": {\"fields\": [\"Persona Id\"]}}]',38,1),(529,'2022-06-16 20:11:56.825164','17','17',2,'[]',38,1),(530,'2022-06-16 20:32:18.416075','18','18',3,'',38,1),(531,'2022-06-16 20:32:18.425091','17','17',3,'',38,1),(532,'2022-06-16 21:27:20.833888','19','19',1,'[{\"added\": {}}]',38,1),(533,'2022-06-16 22:21:19.153176','5','Administrador',1,'[{\"added\": {}}]',24,1),(534,'2022-06-16 22:36:29.720956','64','Jairo Milleer Urrego',3,'',17,1),(535,'2022-06-16 22:36:29.733259','63','Jairo Milleer Urrego',3,'',17,1),(536,'2022-06-16 22:36:29.736477','62','Jairo Milleer Urrego',3,'',17,1),(537,'2022-06-16 22:36:29.739532','61','Jairo Milleer Urrego',3,'',17,1),(538,'2022-06-16 22:36:29.742480','60','Jairo Milleer Urrego',3,'',17,1),(539,'2022-06-16 22:36:29.745723','59','Jairo Milleer Urrego',3,'',17,1),(540,'2022-06-16 22:36:29.749495','58','Jairo Milleer Urrego',3,'',17,1),(541,'2022-06-16 22:36:29.752581','57','Jairo Milleer Urrego',3,'',17,1),(542,'2022-06-16 22:36:29.755410','56','Jairo Milleer Urrego',3,'',17,1),(543,'2022-06-16 22:36:29.759552','55','Jairo Milleer Urrego',3,'',17,1),(544,'2022-06-16 22:36:29.763645','54','Jairo Miller Urrego',3,'',17,1),(545,'2022-06-16 22:36:29.768413','53','Jairo Miller Urrego',3,'',17,1),(546,'2022-06-16 22:36:29.770412','52','Jairo Miller Urrego',3,'',17,1),(547,'2022-06-16 22:36:29.773392','51','Jairo Miller Urrego',3,'',17,1),(548,'2022-06-16 22:36:29.777927','50','Jairo Miller Urrego',3,'',17,1),(549,'2022-06-16 22:36:29.780635','49','Jairo Miller Urrego',3,'',17,1),(550,'2022-06-16 22:36:29.783618','48','Jairo Miller Urrego',3,'',17,1),(551,'2022-06-16 22:36:29.785633','47','Jairo Miller Urrego',3,'',17,1),(552,'2022-06-16 22:36:29.787661','46','Jairo Miller Urrego',3,'',17,1),(553,'2022-06-16 22:36:29.790657','45','Jairo Miller Urrego',3,'',17,1),(554,'2022-06-16 22:36:29.792633','44','Jairo Miller Urrego',3,'',17,1),(555,'2022-06-16 22:36:29.793640','43','Jairo Miller Urrego',3,'',17,1),(556,'2022-06-16 22:36:29.796876','42','Jairo Miller Urrego',3,'',17,1),(557,'2022-06-16 22:36:29.798855','41','Jairo Miller Urrego',3,'',17,1),(558,'2022-06-16 22:36:29.800874','40','Jairo Miller Urrego',3,'',17,1),(559,'2022-06-16 22:36:29.802872','39','Jairo Miller Urrego',3,'',17,1),(560,'2022-06-16 22:36:29.804787','38','Jairo Miller Urrego',3,'',17,1),(561,'2022-06-16 22:36:29.806831','37','Jairo Miller Urrego',3,'',17,1),(562,'2022-06-16 22:36:29.808829','36','Jairo Miller Urrego',3,'',17,1),(563,'2022-06-16 22:36:29.810040','35','Jairo Miller Urrego',3,'',17,1),(564,'2022-06-16 22:36:29.813089','34','Jairo Miller Urrego',3,'',17,1),(565,'2022-06-16 22:36:29.814989','33','Jairo Miller Urrego',3,'',17,1),(566,'2022-06-16 22:36:29.817994','32','Jairo Miller Urrego',3,'',17,1),(567,'2022-06-16 22:36:29.819994','31','Jairo Miller Urrego',3,'',17,1),(568,'2022-06-16 22:36:29.822233','30','Jairo Miller Urrego',3,'',17,1),(569,'2022-06-16 22:36:29.823818','29','Jairo Miller Urrego',3,'',17,1),(570,'2022-06-16 22:36:29.826553','28','Jairo Miller Urrego',3,'',17,1),(571,'2022-06-16 22:36:29.828552','27','Jairo Miller Urrego',3,'',17,1),(572,'2022-06-16 22:36:29.830552','26','Jairo Miller Urrego',3,'',17,1),(573,'2022-06-16 22:36:29.832552','25','Jairo Miller Urrego',3,'',17,1),(574,'2022-06-16 22:36:29.834088','24','Jairo Miller Urrego',3,'',17,1),(575,'2022-06-16 22:36:29.836093','23','Jairo Miller Urrego',3,'',17,1),(576,'2022-06-16 22:36:29.838092','22','Jairo Miller Urrego',3,'',17,1),(577,'2022-06-16 22:36:29.839093','21','Jairo Miller Urrego',3,'',17,1),(578,'2022-06-16 22:36:29.842061','20','Jairo Miller Urrego',3,'',17,1),(579,'2022-06-16 22:36:29.845884','19','Jairo Miller Urrego',3,'',17,1),(580,'2022-06-16 22:43:04.087659','144','90 Estudiante Maria del Carmen Ruiz C',3,'',37,1),(581,'2022-06-16 22:43:32.976088','11','Maria del Carmen Ruiz C',2,'[{\"changed\": {\"fields\": [\"Tipo cargo Id\"]}}]',17,1),(582,'2022-06-16 22:43:43.396154','145','91 None Maria del Carmen Ruiz C',2,'[]',37,1),(583,'2022-06-16 22:43:59.496990','11','Maria del Carmen Ruiz C',2,'[{\"changed\": {\"fields\": [\"Tipo cargo Id\"]}}]',17,1),(584,'2022-06-16 22:44:00.990997','145','91 None Maria del Carmen Ruiz C',2,'[]',37,1),(585,'2022-06-16 22:46:44.504052','11','Maria del Carmen Ruiz C',2,'[]',17,1),(586,'2022-06-16 22:47:05.273559','11','Maria del Carmen Ruiz C',2,'[]',17,1),(587,'2022-06-16 23:43:18.150483','20','20',1,'[{\"added\": {}}]',38,1),(588,'2022-06-16 23:43:31.030666','21','21',1,'[{\"added\": {}}]',38,1),(589,'2022-06-16 23:44:08.689246','21','21',3,'',38,1),(590,'2022-06-16 23:44:08.697476','20','20',3,'',38,1),(591,'2022-06-16 23:45:48.844164','22','22',1,'[{\"added\": {}}]',38,1),(592,'2022-06-16 23:46:22.647068','23','23',1,'[{\"added\": {}}]',38,1),(593,'2022-06-16 23:47:22.821564','23','23',3,'',38,1),(594,'2022-06-16 23:47:31.132757','24','24',1,'[{\"added\": {}}]',38,1),(595,'2022-06-16 23:47:50.200697','25','25',1,'[{\"added\": {}}]',38,1),(596,'2022-06-17 02:31:14.148090','55','55 Nueva 98 ',2,'[{\"changed\": {\"fields\": [\"Solicitud Id\", \"Tipo estado Id\"]}}]',41,1),(597,'2022-06-17 14:13:17.262739','55','55 Nueva 98 ',3,'',41,1),(598,'2022-06-17 14:13:17.321372','54','54 None None ',3,'',41,1),(599,'2022-06-17 14:13:17.330162','53','53 None None ',3,'',41,1),(600,'2022-06-17 14:13:17.330162','52','52 None None ',3,'',41,1),(601,'2022-06-17 14:13:17.338931','51','51 None None ',3,'',41,1),(602,'2022-06-17 14:13:17.345799','50','50 None None ',3,'',41,1),(603,'2022-06-17 14:13:17.345799','49','49 None None ',3,'',41,1),(604,'2022-06-17 14:13:17.355110','48','48 None None ',3,'',41,1),(605,'2022-06-17 14:13:17.357182','47','47 None None ',3,'',41,1),(606,'2022-06-17 14:13:17.365758','46','46 None None ',3,'',41,1),(607,'2022-06-17 14:13:17.365758','45','45 None None ',3,'',41,1),(608,'2022-06-17 14:13:17.375234','44','44 None None ',3,'',41,1),(609,'2022-06-17 14:13:17.375950','43','43 None None ',3,'',41,1),(610,'2022-06-17 14:13:17.384379','42','42 None None ',3,'',41,1),(611,'2022-06-17 14:13:17.384379','41','41 None None ',3,'',41,1),(612,'2022-06-17 14:13:17.392551','40','40 None None ',3,'',41,1),(613,'2022-06-17 14:13:17.392551','39','39 None None ',3,'',41,1),(614,'2022-06-17 14:13:17.401981','38','38 None None ',3,'',41,1),(615,'2022-06-17 14:13:17.404730','37','37 None None ',3,'',41,1),(616,'2022-06-17 14:13:17.404730','36','36 None None ',3,'',41,1),(617,'2022-06-17 14:13:17.414928','35','35 None None ',3,'',41,1),(618,'2022-06-17 14:13:17.417576','34','34 None None ',3,'',41,1),(619,'2022-06-17 14:13:17.417576','33','33 None None ',3,'',41,1),(620,'2022-06-17 14:13:17.425730','32','32 None None ',3,'',41,1),(621,'2022-06-17 14:13:17.426104','31','31 None None ',3,'',41,1),(622,'2022-06-17 14:13:17.433822','30','30 None None ',3,'',41,1),(623,'2022-06-17 14:13:17.433822','29','29 None None ',3,'',41,1),(624,'2022-06-17 14:13:17.442736','28','28 None None ',3,'',41,1),(625,'2022-06-17 14:13:17.442736','27','27 None None ',3,'',41,1),(626,'2022-06-17 14:13:17.451062','26','26 None None ',3,'',41,1),(627,'2022-06-17 14:13:17.459206','25','25 None None ',3,'',41,1),(628,'2022-06-17 14:13:17.467696','24','24 None None ',3,'',41,1),(629,'2022-06-17 14:13:17.467696','23','23 None None ',3,'',41,1),(630,'2022-06-17 14:19:05.365352','148','None Docente Luz Helena',3,'',37,1),(631,'2022-06-17 14:19:05.373512','147','None Docente Luz Helena',3,'',37,1),(632,'2022-06-17 14:19:05.373512','146','94 None Luz Helena',3,'',37,1),(633,'2022-06-17 14:19:05.383194','145','91 None Maria del Carmen Ruiz C',3,'',37,1),(634,'2022-06-17 16:26:01.910596','29','29',2,'[{\"changed\": {\"fields\": [\"Persona Id\"]}}]',38,1),(635,'2022-06-17 16:26:17.024131','31','31',3,'',38,1),(636,'2022-06-17 16:26:17.029063','30','30',3,'',38,1),(637,'2022-06-17 16:26:17.036772','29','29',3,'',38,1),(638,'2022-06-17 16:26:17.040988','28','28',3,'',38,1),(639,'2022-06-17 16:26:17.045277','27','27',3,'',38,1),(640,'2022-06-17 16:26:17.047323','26','26',3,'',38,1),(641,'2022-06-17 16:26:17.047323','25','25',3,'',38,1),(642,'2022-06-17 16:26:17.057676','24','24',3,'',38,1),(643,'2022-06-17 16:26:17.057676','22','22',3,'',38,1),(644,'2022-06-17 16:26:17.057676','19','19',3,'',38,1),(645,'2022-06-17 16:31:30.448121','18','Descripcion 102',1,'[{\"added\": {}}]',9,1),(646,'2022-06-17 18:28:11.681840','1','1',1,'[{\"added\": {}}]',43,1),(647,'2022-06-17 18:28:14.003999','1','5',1,'[{\"added\": {}}]',36,1),(648,'2022-06-19 04:50:00.080522','19','19',3,'',43,1),(649,'2022-06-19 04:50:00.101498','18','18',3,'',43,1),(650,'2022-06-19 04:50:00.101498','17','17',3,'',43,1),(651,'2022-06-19 04:50:00.110272','16','16',3,'',43,1),(652,'2022-06-19 04:50:00.110272','15','15',3,'',43,1),(653,'2022-06-19 04:50:00.117858','14','14',3,'',43,1),(654,'2022-06-19 04:50:00.120414','13','13',3,'',43,1),(655,'2022-06-19 04:50:00.124003','12','12',3,'',43,1),(656,'2022-06-19 04:50:00.125961','11','11',3,'',43,1),(657,'2022-06-19 04:50:00.129508','10','10',3,'',43,1),(658,'2022-06-19 04:50:00.129508','9','9',3,'',43,1),(659,'2022-06-19 04:50:00.135382','8','8',3,'',43,1),(660,'2022-06-19 04:50:00.137266','7','7',3,'',43,1),(661,'2022-06-19 04:50:00.141358','6','6',3,'',43,1),(662,'2022-06-19 04:50:00.143768','5','5',3,'',43,1),(663,'2022-06-19 04:50:00.143768','4','4',3,'',43,1),(664,'2022-06-19 04:50:00.152145','3','3',3,'',43,1),(665,'2022-06-19 04:50:00.152145','2','2',3,'',43,1),(666,'2022-06-19 04:50:00.152145','1','1',3,'',43,1),(667,'2022-06-19 04:50:49.440085','10','3',3,'',36,1),(668,'2022-06-19 04:50:49.449750','9','1',3,'',36,1),(669,'2022-06-19 04:50:49.449750','8','1',3,'',36,1),(670,'2022-06-19 04:50:49.459631','7','1',3,'',36,1),(671,'2022-06-19 04:50:49.459631','6','1',3,'',36,1),(672,'2022-06-19 04:50:49.459631','5','1',3,'',36,1),(673,'2022-06-19 04:50:49.470116','4','1',3,'',36,1),(674,'2022-06-19 04:50:49.470116','3','1',3,'',36,1),(675,'2022-06-19 04:50:49.480136','2','1',3,'',36,1),(676,'2022-06-19 04:50:49.480136','1','5',3,'',36,1),(677,'2022-06-19 04:50:58.560886','20','20',3,'',43,1),(678,'2022-06-19 05:03:13.979977','32','3',3,'',36,1),(679,'2022-06-19 05:03:13.999887','31','3',3,'',36,1),(680,'2022-06-19 05:03:14.001307','30','3',3,'',36,1),(681,'2022-06-19 05:03:14.001307','29','1',3,'',36,1),(682,'2022-06-19 05:03:14.010025','28','3',3,'',36,1),(683,'2022-06-19 05:03:14.014596','27','3',3,'',36,1),(684,'2022-06-19 05:03:14.019988','26','3',3,'',36,1),(685,'2022-06-19 05:03:14.019988','25','1',3,'',36,1),(686,'2022-06-19 05:03:14.026627','24','3',3,'',36,1),(687,'2022-06-19 05:03:14.029776','23','3',3,'',36,1),(688,'2022-06-19 05:03:14.033324','22','3',3,'',36,1),(689,'2022-06-19 05:03:14.033324','21','1',3,'',36,1),(690,'2022-06-19 05:03:14.041028','20','3',3,'',36,1),(691,'2022-06-19 05:03:14.041028','19','1',3,'',36,1),(692,'2022-06-19 05:03:14.049190','18','3',3,'',36,1),(693,'2022-06-19 05:03:14.049190','17','3',3,'',36,1),(694,'2022-06-19 05:03:14.057181','16','3',3,'',36,1),(695,'2022-06-19 05:03:14.059986','15','1',3,'',36,1),(696,'2022-06-19 05:03:14.059986','14','3',3,'',36,1),(697,'2022-06-19 05:03:14.069852','13','1',3,'',36,1),(698,'2022-06-19 05:03:14.069852','12','3',3,'',36,1),(699,'2022-06-19 05:03:14.080945','11','1',3,'',36,1),(700,'2022-06-19 15:56:09.872136','1','1',1,'[{\"added\": {}}]',44,1),(701,'2022-06-19 16:06:51.513577','2','2',1,'[{\"added\": {}}]',44,1),(702,'2022-06-19 16:09:05.800526','3','3',1,'[{\"added\": {}}]',44,1),(703,'2022-06-19 16:10:00.524404','4','4',1,'[{\"added\": {}}]',44,1),(704,'2022-06-19 16:52:26.474499','5','5',1,'[{\"added\": {}}]',44,1),(705,'2022-06-20 11:40:13.146365','29','29',3,'',44,1),(706,'2022-06-20 11:40:13.201785','28','28',3,'',44,1),(707,'2022-06-20 11:40:13.210532','27','27',3,'',44,1),(708,'2022-06-20 11:40:13.217830','26','26',3,'',44,1),(709,'2022-06-20 11:40:13.217830','25','25',3,'',44,1),(710,'2022-06-20 11:40:13.225995','24','24',3,'',44,1),(711,'2022-06-20 11:40:13.225995','23','23',3,'',44,1),(712,'2022-06-20 11:40:13.236198','22','22',3,'',44,1),(713,'2022-06-20 11:40:13.236198','21','21',3,'',44,1),(714,'2022-06-20 11:40:13.244376','20','20',3,'',44,1),(715,'2022-06-20 11:40:13.247856','19','19',3,'',44,1),(716,'2022-06-20 11:40:13.247856','18','18',3,'',44,1),(717,'2022-06-20 11:40:13.256079','17','17',3,'',44,1),(718,'2022-06-20 11:40:13.256079','16','16',3,'',44,1),(719,'2022-06-20 11:40:13.266436','15','15',3,'',44,1),(720,'2022-06-20 11:40:13.267211','14','14',3,'',44,1),(721,'2022-06-20 11:40:13.275949','13','13',3,'',44,1),(722,'2022-06-20 11:40:13.275949','12','12',3,'',44,1),(723,'2022-06-20 11:40:13.284414','11','11',3,'',44,1),(724,'2022-06-20 11:40:13.292513','10','10',3,'',44,1),(725,'2022-06-20 11:40:13.296113','9','9',3,'',44,1),(726,'2022-06-20 11:40:13.296113','8','8',3,'',44,1),(727,'2022-06-20 11:40:13.304929','7','7',3,'',44,1),(728,'2022-06-20 11:40:13.313134','6','6',3,'',44,1),(729,'2022-06-20 11:40:13.313134','5','5',3,'',44,1),(730,'2022-06-20 11:40:13.321175','4','4',3,'',44,1),(731,'2022-06-20 11:40:13.321175','3','3',3,'',44,1),(732,'2022-06-20 11:40:13.329836','2','2',3,'',44,1),(733,'2022-06-20 11:40:13.338166','1','1',3,'',44,1),(734,'2022-06-20 11:40:40.295381','30','30',1,'[{\"added\": {}}]',44,1),(735,'2022-06-20 11:40:56.309585','31','31',1,'[{\"added\": {}}]',44,1),(736,'2022-06-20 11:41:10.162620','32','32',1,'[{\"added\": {}}]',44,1),(737,'2022-06-20 11:42:43.744390','33','33',1,'[{\"added\": {}}]',44,1),(738,'2022-06-20 11:43:42.717185','34','34',1,'[{\"added\": {}}]',44,1),(739,'2022-06-20 16:16:42.653802','28','28',3,'',43,1),(740,'2022-06-20 16:16:42.657571','27','27',3,'',43,1),(741,'2022-06-20 16:16:42.660575','26','26',3,'',43,1),(742,'2022-06-20 16:16:42.663562','25','25',3,'',43,1),(743,'2022-06-20 16:16:42.666569','24','24',3,'',43,1),(744,'2022-06-20 16:16:42.669561','23','23',3,'',43,1),(745,'2022-06-20 16:16:42.671561','22','22',3,'',43,1),(746,'2022-06-20 16:16:42.674571','21','21',3,'',43,1),(747,'2022-06-20 16:49:42.559271','1','MASCULINO',1,'[{\"added\": {}}]',47,1),(748,'2022-06-20 16:49:47.663033','2','FEMENINO',1,'[{\"added\": {}}]',47,1),(749,'2022-06-20 16:50:28.955443','3','NO BINARIO',1,'[{\"added\": {}}]',47,1),(750,'2022-06-20 16:51:02.727437','4','NO RESPONDO',1,'[{\"added\": {}}]',47,1),(751,'2022-06-20 17:29:39.083340','15975','15975',1,'[{\"added\": {}}]',32,1),(752,'2022-06-21 14:54:21.282547','7','Jairo Miller Urrego',2,'[{\"changed\": {\"fields\": [\"Identificacion\"]}}]',17,1),(753,'2022-06-21 14:55:02.694721','7','Jairo Miller Urrego',2,'[{\"changed\": {\"fields\": [\"Tipo cargo Id\", \"Genero Id\"]}}]',17,1),(754,'2022-06-22 18:12:58.042870','1013689035','1013689035',1,'[{\"added\": {}}]',32,1),(755,'2022-06-22 18:13:05.101972','2','Permisos para los docentes y estudiantes',2,'[]',20,1),(756,'2022-06-22 18:13:07.853986','1','Permisos para los administradores',2,'[]',20,1),(757,'2022-06-22 18:13:14.577921','1','Administrador',2,'[{\"changed\": {\"fields\": [\"Rol permiso Id\"]}}]',19,1),(758,'2022-06-22 18:13:17.487961','2','Docente conciliador',2,'[{\"changed\": {\"fields\": [\"Rol permiso Id\"]}}]',19,1),(759,'2022-06-22 18:13:22.526522','3','Estudiante',2,'[{\"changed\": {\"fields\": [\"Rol permiso Id\"]}}]',19,1),(760,'2022-06-22 18:13:39.994365','7','Jairo Miller Urrego',2,'[]',17,1),(761,'2022-06-22 18:29:04.449279','60','60 Nueva None ',3,'',41,1),(762,'2022-06-22 18:29:04.453186','59','59 Nueva 102 ',3,'',41,1),(763,'2022-06-22 18:29:04.455138','58','58 Nueva 101 ',3,'',41,1),(764,'2022-06-22 18:29:04.458067','57','57 None 100 ',3,'',41,1),(765,'2022-06-22 18:29:04.460020','56','56 None 99 ',3,'',41,1),(766,'2022-06-22 18:29:04.461973','22','22 Audiencia pendiente 64 ',3,'',41,1),(767,'2022-06-22 18:29:04.463926','21','21 Asignada 64 ',3,'',41,1),(768,'2022-06-22 18:29:04.466855','20','20 Nueva 62 ',3,'',41,1),(769,'2022-06-22 18:29:04.468809','19','19 Nueva 64 ',3,'',41,1),(770,'2022-06-22 18:29:53.831909','77','Jairo Miller Urrego',3,'',17,1),(771,'2022-06-22 18:29:53.834840','76','Jairo Miller Urrego',3,'',17,1),(772,'2022-06-22 18:29:53.836785','75','Jairo Miller Urrego',3,'',17,1),(773,'2022-06-22 18:29:53.838738','74','Jairo Miller Urrego',3,'',17,1),(774,'2022-06-22 18:29:53.841667','73','Jairo Miller Urrego',3,'',17,1),(775,'2022-06-22 18:29:53.843620','72','Jairo Miller Urrego',3,'',17,1),(776,'2022-06-22 18:29:53.846550','71','Jairo Miller Urrego',3,'',17,1),(777,'2022-06-22 18:29:53.848503','70','Jairo Miller Urrego',3,'',17,1),(778,'2022-06-22 18:29:53.850456','69','Jairo Miller Urrego',3,'',17,1),(779,'2022-06-22 18:29:53.853385','68','Jairo Miller Urrego',3,'',17,1),(780,'2022-06-22 18:29:53.855338','67','Jairo Miller Urrego',3,'',17,1),(781,'2022-06-22 18:29:53.857292','66','Jairo Miller Urrego',3,'',17,1),(782,'2022-06-22 18:29:53.859245','65','Jai R',3,'',17,1),(783,'2022-06-22 18:30:01.800286','103','103',3,'',35,1),(784,'2022-06-22 18:30:01.803216','102','102',3,'',35,1),(785,'2022-06-22 18:30:01.805165','101','101',3,'',35,1),(786,'2022-06-22 18:30:01.808100','100','100',3,'',35,1),(787,'2022-06-22 18:30:01.810044','99','99',3,'',35,1),(788,'2022-06-22 18:30:01.811997','98','98',3,'',35,1),(789,'2022-06-22 18:30:01.817857','97','97',3,'',35,1),(790,'2022-06-22 18:30:01.820786','96','96',3,'',35,1),(791,'2022-06-22 18:30:01.822739','95','95',3,'',35,1),(792,'2022-06-22 18:30:01.825669','94','94',3,'',35,1),(793,'2022-06-22 18:30:01.827621','93','93',3,'',35,1),(794,'2022-06-22 18:30:01.829574','92','92',3,'',35,1),(795,'2022-06-22 18:30:01.832504','91','91',3,'',35,1),(796,'2022-06-22 18:30:01.834457','90','90',3,'',35,1),(797,'2022-06-22 18:30:01.836410','89','89',3,'',35,1),(798,'2022-06-22 18:30:01.838370','88','88',3,'',35,1),(799,'2022-06-22 18:30:01.840316','87','87',3,'',35,1),(800,'2022-06-22 18:30:01.842279','86','86',3,'',35,1),(801,'2022-06-22 18:30:01.845200','85','85',3,'',35,1),(802,'2022-06-22 18:30:01.847152','84','84',3,'',35,1),(803,'2022-06-22 18:30:01.849104','83','83',3,'',35,1),(804,'2022-06-22 18:30:01.851064','82','82',3,'',35,1),(805,'2022-06-22 18:30:01.853010','81','81',3,'',35,1),(806,'2022-06-22 18:30:01.854963','80','80',3,'',35,1),(807,'2022-06-22 18:30:01.857893','79','79',3,'',35,1),(808,'2022-06-22 18:30:01.859845','78','78',3,'',35,1),(809,'2022-06-22 18:30:01.861799','77','77',3,'',35,1),(810,'2022-06-22 18:30:01.864728','76','76',3,'',35,1),(811,'2022-06-22 18:30:01.866681','75','75',3,'',35,1),(812,'2022-06-22 18:30:01.868634','74','74',3,'',35,1),(813,'2022-06-22 18:30:01.870587','73','73',3,'',35,1),(814,'2022-06-22 18:30:01.872540','72','72',3,'',35,1),(815,'2022-06-22 18:30:01.874507','66','66',3,'',35,1),(816,'2022-06-22 18:30:01.876446','65','65',3,'',35,1),(817,'2022-06-22 18:30:01.878399','64','64',3,'',35,1),(818,'2022-06-22 18:30:01.880352','63','63',3,'',35,1),(819,'2022-06-22 18:30:01.882305','62','62',3,'',35,1),(820,'2022-06-22 18:30:09.811078','155','None Convocado Maria Luisa Bogata Rios',3,'',37,1),(821,'2022-06-22 18:30:09.814007','154','None Convocado Jairo Miller Urrego',3,'',37,1),(822,'2022-06-22 18:30:09.817919','153','None Docente Luz Helena',3,'',37,1),(823,'2022-06-22 18:30:09.820842','152','None Docente Luz Helena',3,'',37,1),(824,'2022-06-22 18:30:09.825941','151','None None Luz Helena',3,'',37,1),(825,'2022-06-22 18:30:09.828863','150','None None Luz Helena',3,'',37,1),(826,'2022-06-22 18:30:09.831797','149','None None Luz Helena',3,'',37,1),(827,'2022-06-22 18:30:09.834718','143','None Estudiante Jairo Miller Urrego',3,'',37,1),(828,'2022-06-22 18:30:09.836687','142','None Estudiante Kevin Andres Urrego',3,'',37,1),(829,'2022-06-22 18:30:09.838631','141','None Docente Luz Helena',3,'',37,1),(830,'2022-06-22 18:30:09.840579','140','None Convocado Maria Luisa Bogata Rios',3,'',37,1),(831,'2022-06-22 18:30:09.842530','139','None Convocado Kevin Andres Urrego',3,'',37,1),(832,'2022-06-22 18:30:09.844483','138','None Convocado Luz Helena',3,'',37,1),(833,'2022-06-22 18:30:09.846445','137','None Convocante Jairo Miller Urrego',3,'',37,1),(834,'2022-06-22 18:30:09.848389','136','None Convocado None',3,'',37,1),(835,'2022-06-22 18:30:09.850351','135','None Convocado None',3,'',37,1),(836,'2022-06-22 18:30:09.852698','108','None Convocado Maria Luisa Bogata Rios',3,'',37,1),(837,'2022-06-22 18:30:09.854248','107','None Docente Luz Helena',3,'',37,1),(838,'2022-06-22 18:30:09.856200','106','None Docente Luz Helena',3,'',37,1),(839,'2022-06-22 18:30:09.859130','105','None Estudiante Kevin Andres Urrego',3,'',37,1),(840,'2022-06-22 18:30:09.861083','104','None Convocado Maria del Carmen Ruiz C',3,'',37,1),(841,'2022-06-22 18:30:09.864016','103','None Convocante Jairo Miller Urrego',3,'',37,1),(842,'2022-06-22 18:30:44.015923','156','104 Administrador Jairo Miller Urrego',1,'[{\"added\": {}}]',37,1),(843,'2022-06-22 18:31:02.582895','61','61 Nueva 104 ',1,'[{\"added\": {}}]',41,1),(844,'2022-06-22 18:33:49.465209','157','105 Administrador Jairo Miller Urrego',1,'[{\"added\": {}}]',37,1),(845,'2022-06-22 18:34:03.160212','62','62 Nueva 105 ',1,'[{\"added\": {}}]',41,1),(846,'2022-06-22 18:36:13.577757','78','Andres Felipe Villamizar',1,'[{\"added\": {}}]',17,1),(847,'2022-06-22 18:36:28.750984','18797765221234','18797765221234',3,'',32,1),(848,'2022-06-22 18:36:28.754889','1821234','1821234',3,'',32,1),(849,'2022-06-22 18:36:28.756842','15975','15975',3,'',32,1),(850,'2022-06-22 18:36:28.758796','12','12',3,'',32,1),(851,'2022-06-22 18:36:38.344990','1010074595','1010074595',1,'[{\"added\": {}}]',32,1),(852,'2022-06-22 18:37:01.158559','1010074595','1010074595',2,'[]',32,1),(853,'2022-06-22 18:40:41.057588','79','Juan Diego B',1,'[{\"added\": {}}]',17,1),(854,'2022-06-22 18:41:02.407450','1033816974','1033816974',1,'[{\"added\": {}}]',32,1),(855,'2022-06-22 18:43:17.057689','156','104 Administrador Jairo Miller Urrego',2,'[{\"changed\": {\"fields\": [\"Solicitud Id\"]}}]',37,1),(856,'2022-06-22 18:44:29.635303','156','104 Administrador Jairo Miller Urrego',2,'[]',37,1),(857,'2022-06-22 18:44:46.805426','18','Descripcion 102',3,'',9,1),(858,'2022-06-22 18:44:46.808447','17','Citacion 2',3,'',9,1),(859,'2022-06-22 18:44:46.810306','15','Citacion 1',3,'',9,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(7,'apiConciliacionApp','area'),(8,'apiConciliacionApp','barrio'),(9,'apiConciliacionApp','citacion'),(10,'apiConciliacionApp','ciudad'),(45,'apiConciliacionApp','departamento'),(44,'apiConciliacionApp','documento'),(43,'apiConciliacionApp','encuesta'),(11,'apiConciliacionApp','estrato_socioeconomico'),(47,'apiConciliacionApp','genero'),(46,'apiConciliacionApp','genero_biologico'),(42,'apiConciliacionApp','hechos'),(41,'apiConciliacionApp','historico_solicitud'),(12,'apiConciliacionApp','inicio_conflicto'),(40,'apiConciliacionApp','localidad'),(13,'apiConciliacionApp','medio_conocimiento'),(14,'apiConciliacionApp','objetivo_servicio'),(15,'apiConciliacionApp','pais'),(16,'apiConciliacionApp','perfil'),(17,'apiConciliacionApp','persona'),(18,'apiConciliacionApp','pregunta'),(39,'apiConciliacionApp','relacion_area_perfil'),(38,'apiConciliacionApp','relacion_citacion_persona'),(37,'apiConciliacionApp','relacion_solicitud_persona'),(36,'apiConciliacionApp','respuesta'),(19,'apiConciliacionApp','rol'),(20,'apiConciliacionApp','rol_permiso'),(21,'apiConciliacionApp','solicitante_servicio'),(35,'apiConciliacionApp','solicitud'),(34,'apiConciliacionApp','subtema'),(22,'apiConciliacionApp','tema'),(23,'apiConciliacionApp','tipo_cargo'),(24,'apiConciliacionApp','tipo_cliente'),(25,'apiConciliacionApp','tipo_documento'),(26,'apiConciliacionApp','tipo_estado'),(27,'apiConciliacionApp','tipo_medio'),(28,'apiConciliacionApp','tipo_persona'),(29,'apiConciliacionApp','tipo_resultado'),(33,'apiConciliacionApp','tipo_servicio'),(30,'apiConciliacionApp','tipo_vivienda'),(31,'apiConciliacionApp','turno'),(32,'apiConciliacionApp','usuario'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2022-05-27 20:45:30.742694'),(2,'auth','0001_initial','2022-05-27 20:45:31.468747'),(3,'admin','0001_initial','2022-05-27 20:45:31.663694'),(4,'admin','0002_logentry_remove_auto_add','2022-05-27 20:45:31.672723'),(5,'admin','0003_logentry_add_action_flag_choices','2022-05-27 20:45:31.680721'),(6,'apiConciliacionApp','0001_initial','2022-05-27 20:45:35.805758'),(7,'contenttypes','0002_remove_content_type_name','2022-05-27 20:45:35.939770'),(8,'auth','0002_alter_permission_name_max_length','2022-05-27 20:45:36.009833'),(9,'auth','0003_alter_user_email_max_length','2022-05-27 20:45:36.038837'),(10,'auth','0004_alter_user_username_opts','2022-05-27 20:45:36.048846'),(11,'auth','0005_alter_user_last_login_null','2022-05-27 20:45:36.150859'),(12,'auth','0006_require_contenttypes_0002','2022-05-27 20:45:36.154872'),(13,'auth','0007_alter_validators_add_error_messages','2022-05-27 20:45:36.164868'),(14,'auth','0008_alter_user_username_max_length','2022-05-27 20:45:36.286845'),(15,'auth','0009_alter_user_last_name_max_length','2022-05-27 20:45:36.350868'),(16,'auth','0010_alter_group_name_max_length','2022-05-27 20:45:36.370872'),(17,'auth','0011_update_proxy_permissions','2022-05-27 20:45:36.389859'),(18,'auth','0012_alter_user_first_name_max_length','2022-05-27 20:45:36.458835'),(19,'sessions','0001_initial','2022-05-27 20:45:36.495864'),(20,'apiConciliacionApp','0002_rename_inicio_conclicto_inicio_conflicto_and_more','2022-05-27 20:51:57.171346'),(21,'apiConciliacionApp','0003_alter_area_nombre_alter_barrio_nombre_and_more','2022-05-31 14:19:17.692028'),(22,'apiConciliacionApp','0004_rename_permiso_crar_rol_permiso_permiso_crear','2022-05-31 14:25:36.009253'),(23,'apiConciliacionApp','0005_remove_objetivo_servicio_nombre_and_more','2022-05-31 15:14:56.277143'),(24,'apiConciliacionApp','0006_remove_objetivo_servicio_asunto_definible_and_more','2022-05-31 15:35:05.303449'),(25,'apiConciliacionApp','0007_solicitud_asunto_juridico_definible','2022-05-31 15:46:57.086887'),(26,'apiConciliacionApp','0008_remove_hechos_barrio_id_hechos_ciudad_id','2022-05-31 15:50:13.909657'),(27,'apiConciliacionApp','0002_remove_citacion_turno_id','2022-06-07 15:38:03.257062'),(28,'apiConciliacionApp','0002_delete_turno','2022-06-07 15:42:42.874812'),(29,'apiConciliacionApp','0003_turno','2022-06-07 15:43:21.614954'),(30,'apiConciliacionApp','0004_citacion_turno_id','2022-06-07 15:43:53.698172'),(31,'apiConciliacionApp','0005_remove_citacion_fecha_sesion','2022-06-07 15:44:31.297101'),(32,'apiConciliacionApp','0002_citacion_fecha_sesion','2022-06-07 15:50:00.511373'),(33,'apiConciliacionApp','0003_alter_tema_nombre','2022-06-07 19:17:37.255694'),(34,'apiConciliacionApp','0004_alter_subtema_nombre','2022-06-07 19:21:09.149650'),(35,'apiConciliacionApp','0005_alter_barrio_nombre','2022-06-07 19:27:05.904421'),(36,'apiConciliacionApp','0002_relacion_solicitud_persona_tipo_cliente_id_and_more','2022-06-07 23:14:51.628202'),(37,'apiConciliacionApp','0003_alter_barrio_nombre_alter_subtema_nombre_and_more','2022-06-07 23:16:41.312696'),(38,'apiConciliacionApp','0004_alter_persona_tipo_persona_id','2022-06-08 00:59:39.819350'),(39,'apiConciliacionApp','0005_alter_persona_correo','2022-06-08 01:50:43.875704'),(40,'apiConciliacionApp','0006_alter_persona_correo','2022-06-08 01:56:42.841872'),(41,'apiConciliacionApp','0002_alter_persona_correo','2022-06-08 02:07:05.185096'),(42,'apiConciliacionApp','0003_alter_persona_fecha_de_nacimiento','2022-06-08 02:08:19.922172'),(43,'apiConciliacionApp','0004_alter_persona_segundo_apellido_and_more','2022-06-08 02:09:19.005740'),(44,'apiConciliacionApp','0005_alter_persona_telefono','2022-06-08 02:11:20.469415'),(45,'apiConciliacionApp','0006_alter_persona_telefono','2022-06-08 02:12:53.572104'),(46,'apiConciliacionApp','0007_alter_persona_telefono','2022-06-08 02:14:19.500947'),(47,'apiConciliacionApp','0008_alter_persona_fecha_de_nacimiento','2022-06-08 02:18:19.924556'),(48,'apiConciliacionApp','0002_alter_persona_fecha_de_nacimiento','2022-06-08 02:23:49.922985'),(49,'apiConciliacionApp','0003_alter_persona_correo_and_more','2022-06-08 02:55:14.842195'),(50,'apiConciliacionApp','0002_alter_historico_solicitud_fecha','2022-06-12 16:13:53.226021'),(51,'apiConciliacionApp','0003_rename_segundo_apellido_persona_apellidos_and_more','2022-06-12 16:31:54.569276'),(52,'apiConciliacionApp','0004_alter_hechos_fecha','2022-06-13 14:50:04.546670'),(53,'apiConciliacionApp','0005_alter_persona_apellidos_alter_persona_nombres','2022-06-14 13:42:30.926154'),(54,'apiConciliacionApp','0006_alter_historico_solicitud_options_and_more','2022-06-15 06:46:44.429889'),(55,'apiConciliacionApp','0007_alter_historico_solicitud_options_and_more','2022-06-15 06:49:06.359795'),(56,'apiConciliacionApp','0008_alter_historico_solicitud_options_and_more','2022-06-15 06:50:15.704372'),(57,'apiConciliacionApp','0009_genero_biologico_alter_historico_solicitud_options','2022-06-15 12:02:19.408071'),(58,'apiConciliacionApp','0010_respuesta_encuesta_id','2022-06-17 15:21:56.104518'),(59,'apiConciliacionApp','0011_rename_usuario_id_encuesta_persona_id','2022-06-17 17:44:34.556621'),(60,'apiConciliacionApp','0012_alter_encuesta_persona_id','2022-06-17 17:46:48.291944'),(61,'apiConciliacionApp','0013_alter_encuesta_fecha','2022-06-17 20:00:43.096597'),(62,'apiConciliacionApp','0014_alter_documento_ruta_directorio','2022-06-19 17:54:36.580165'),(63,'apiConciliacionApp','0015_alter_documento_ruta_directorio','2022-06-19 17:56:00.628604'),(64,'apiConciliacionApp','0002_rename_genero_biologico_genero','2022-06-20 16:45:46.371230'),(65,'apiConciliacionApp','0003_persona_genero_id','2022-06-20 16:53:59.904006'),(66,'apiConciliacionApp','0004_alter_persona_genero_id','2022-06-20 17:37:34.529840'),(67,'apiConciliacionApp','0005_remove_usuario_contraseña','2022-06-20 17:52:56.444940'),(68,'apiConciliacionApp','0002_rename_descipcion_rol_permiso_descripcion_and_more','2022-06-22 07:11:52.171443');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('aiv530bbb5kfv41nxu9yl31r2wuy5t5p','.eJxVjEsOAiEQBe_C2hD5Nrh07xkI0I2MGkiGmZXx7oZkFrp9VfXeLMR9q2EftIYF2YUJdvrdUsxPahPgI7Z757m3bV0Snwo_6OC3jvS6Hu7fQY2jzhqsQkouaU9Jawn6nJVURgojDXpvCRwBlqLBFAEFrPQmF5QeXSFl2ecL1Vg3ow:1o3K4K:Ld_o6vfl9TLSbtBYPK4Q4ycXEstvZtiJn0ZcrfTnSwM','2022-07-04 16:16:04.752426'),('d3y3pu5n9fo34wfhsog3hyvw2hh7wpy6','.eJxVjEsOAiEQBe_C2hD5Nrh07xkI0I2MGkiGmZXx7oZkFrp9VfXeLMR9q2EftIYF2YUJdvrdUsxPahPgI7Z757m3bV0Snwo_6OC3jvS6Hu7fQY2jzhqsQkouaU9Jawn6nJVURgojDXpvCRwBlqLBFAEFrPQmF5QeXSFl2ecL1Vg3ow:1o09Cx:1eE-A5Gr1-26YZ5QjctVU4MnSBItDOD6GgLUQbnsWTg','2022-06-25 22:03:51.794671'),('hma0uzxefj96dubnptj64a4m2b0bb5dh','.eJxVjEsOAiEQBe_C2hD5Nrh07xkI0I2MGkiGmZXx7oZkFrp9VfXeLMR9q2EftIYF2YUJdvrdUsxPahPgI7Z757m3bV0Snwo_6OC3jvS6Hu7fQY2jzhqsQkouaU9Jawn6nJVURgojDXpvCRwBlqLBFAEFrPQmF5QeXSFl2ecL1Vg3ow:1nugxi:r530Ysh3jzhFxDN8R7cbJyqCPSGTVf5cF0-auoQHKjU','2022-06-10 20:53:34.059518');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-22 13:45:48
