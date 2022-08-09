-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: inventario
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
-- Table structure for table `apiinventarioapp_categoria`
--

DROP TABLE IF EXISTS `apiinventarioapp_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_categoria` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_categoria`
--

LOCK TABLES `apiinventarioapp_categoria` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_categoria` DISABLE KEYS */;
INSERT INTO `apiinventarioapp_categoria` VALUES (1,'Ferreteria');
/*!40000 ALTER TABLE `apiinventarioapp_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_descriocion_del_trabajo`
--

DROP TABLE IF EXISTS `apiinventarioapp_descriocion_del_trabajo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_descriocion_del_trabajo` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_descriocion_del_trabajo`
--

LOCK TABLES `apiinventarioapp_descriocion_del_trabajo` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_descriocion_del_trabajo` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiinventarioapp_descriocion_del_trabajo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_empresa`
--

DROP TABLE IF EXISTS `apiinventarioapp_empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_empresa` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_empresa`
--

LOCK TABLES `apiinventarioapp_empresa` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_empresa` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiinventarioapp_empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_especificacion`
--

DROP TABLE IF EXISTS `apiinventarioapp_especificacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_especificacion` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `stock` int unsigned NOT NULL,
  `idUbicacion_id` bigint DEFAULT NULL,
  `producto_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ApiInventarioApp_esp_idUbicacion_id_4769f072_fk_ApiInvent` (`idUbicacion_id`),
  KEY `ApiInventarioApp_esp_producto_id_727a4e59_fk_ApiInvent` (`producto_id`),
  CONSTRAINT `ApiInventarioApp_esp_idUbicacion_id_4769f072_fk_ApiInvent` FOREIGN KEY (`idUbicacion_id`) REFERENCES `apiinventarioapp_ubicacion` (`id`),
  CONSTRAINT `ApiInventarioApp_esp_producto_id_727a4e59_fk_ApiInvent` FOREIGN KEY (`producto_id`) REFERENCES `apiinventarioapp_producto` (`id`),
  CONSTRAINT `apiinventarioapp_especificacion_chk_1` CHECK ((`stock` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_especificacion`
--

LOCK TABLES `apiinventarioapp_especificacion` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_especificacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiinventarioapp_especificacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_estado`
--

DROP TABLE IF EXISTS `apiinventarioapp_estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_estado` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_estado`
--

LOCK TABLES `apiinventarioapp_estado` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_estado` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiinventarioapp_estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_estado_labor`
--

DROP TABLE IF EXISTS `apiinventarioapp_estado_labor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_estado_labor` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_estado_labor`
--

LOCK TABLES `apiinventarioapp_estado_labor` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_estado_labor` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiinventarioapp_estado_labor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_foto`
--

DROP TABLE IF EXISTS `apiinventarioapp_foto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_foto` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `labor_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ApiInventarioApp_fot_labor_id_b6a07b91_fk_ApiInvent` (`labor_id`),
  CONSTRAINT `ApiInventarioApp_fot_labor_id_b6a07b91_fk_ApiInvent` FOREIGN KEY (`labor_id`) REFERENCES `apiinventarioapp_labor` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_foto`
--

LOCK TABLES `apiinventarioapp_foto` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_foto` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiinventarioapp_foto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_foto_perfil`
--

DROP TABLE IF EXISTS `apiinventarioapp_foto_perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_foto_perfil` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `idUsuario_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ApiInventarioApp_fot_idUsuario_id_e0f0a0da_fk_ApiInvent` (`idUsuario_id`),
  CONSTRAINT `ApiInventarioApp_fot_idUsuario_id_e0f0a0da_fk_ApiInvent` FOREIGN KEY (`idUsuario_id`) REFERENCES `apiinventarioapp_perfil` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_foto_perfil`
--

LOCK TABLES `apiinventarioapp_foto_perfil` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_foto_perfil` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiinventarioapp_foto_perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_labor`
--

DROP TABLE IF EXISTS `apiinventarioapp_labor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_labor` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `detalle` longtext NOT NULL,
  `descripcion` longtext NOT NULL,
  `estado_id` bigint DEFAULT NULL,
  `idMovimiento_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ApiInventarioApp_lab_estado_id_17228419_fk_ApiInvent` (`estado_id`),
  KEY `ApiInventarioApp_lab_idMovimiento_id_c02446b7_fk_ApiInvent` (`idMovimiento_id`),
  CONSTRAINT `ApiInventarioApp_lab_estado_id_17228419_fk_ApiInvent` FOREIGN KEY (`estado_id`) REFERENCES `apiinventarioapp_estado_labor` (`id`),
  CONSTRAINT `ApiInventarioApp_lab_idMovimiento_id_c02446b7_fk_ApiInvent` FOREIGN KEY (`idMovimiento_id`) REFERENCES `apiinventarioapp_movimiento` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_labor`
--

LOCK TABLES `apiinventarioapp_labor` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_labor` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiinventarioapp_labor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_movimiento`
--

DROP TABLE IF EXISTS `apiinventarioapp_movimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_movimiento` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `idAsignada` varchar(100) NOT NULL,
  `fecha` datetime(6) NOT NULL,
  `descripcion_del_trabajo_id` bigint DEFAULT NULL,
  `empresa_id` bigint DEFAULT NULL,
  `tipoMovimiento_id` bigint DEFAULT NULL,
  `usuario_con_permisos_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idAsignada` (`idAsignada`),
  UNIQUE KEY `fecha` (`fecha`),
  KEY `ApiInventarioApp_mov_tipoMovimiento_id_7a9756a6_fk_ApiInvent` (`tipoMovimiento_id`),
  KEY `ApiInventarioApp_mov_usuario_con_permisos_13d01dd3_fk_ApiInvent` (`usuario_con_permisos_id`),
  KEY `ApiInventarioApp_mov_descripcion_del_trab_1e62bc00_fk_ApiInvent` (`descripcion_del_trabajo_id`),
  KEY `ApiInventarioApp_mov_empresa_id_b062fd93_fk_ApiInvent` (`empresa_id`),
  CONSTRAINT `ApiInventarioApp_mov_descripcion_del_trab_1e62bc00_fk_ApiInvent` FOREIGN KEY (`descripcion_del_trabajo_id`) REFERENCES `apiinventarioapp_descriocion_del_trabajo` (`id`),
  CONSTRAINT `ApiInventarioApp_mov_empresa_id_b062fd93_fk_ApiInvent` FOREIGN KEY (`empresa_id`) REFERENCES `apiinventarioapp_empresa` (`id`),
  CONSTRAINT `ApiInventarioApp_mov_tipoMovimiento_id_7a9756a6_fk_ApiInvent` FOREIGN KEY (`tipoMovimiento_id`) REFERENCES `apiinventarioapp_tipo_de_movimiento` (`id`),
  CONSTRAINT `ApiInventarioApp_mov_usuario_con_permisos_13d01dd3_fk_ApiInvent` FOREIGN KEY (`usuario_con_permisos_id`) REFERENCES `apiinventarioapp_perfil` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_movimiento`
--

LOCK TABLES `apiinventarioapp_movimiento` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_movimiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiinventarioapp_movimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_perfil`
--

DROP TABLE IF EXISTS `apiinventarioapp_perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_perfil` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `identificacion` bigint NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_perfil`
--

LOCK TABLES `apiinventarioapp_perfil` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_perfil` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiinventarioapp_perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_producto`
--

DROP TABLE IF EXISTS `apiinventarioapp_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_producto` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `stockMinimo` int unsigned NOT NULL,
  `codigoIceberg` varchar(100) NOT NULL,
  `categoria_id` bigint DEFAULT NULL,
  `unidad_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ApiInventarioApp_pro_unidad_id_689857d1_fk_ApiInvent` (`unidad_id`),
  KEY `ApiInventarioApp_pro_categoria_id_aaca3fbf_fk_ApiInvent` (`categoria_id`),
  CONSTRAINT `ApiInventarioApp_pro_categoria_id_aaca3fbf_fk_ApiInvent` FOREIGN KEY (`categoria_id`) REFERENCES `apiinventarioapp_categoria` (`id`),
  CONSTRAINT `ApiInventarioApp_pro_unidad_id_689857d1_fk_ApiInvent` FOREIGN KEY (`unidad_id`) REFERENCES `apiinventarioapp_unidad` (`id`),
  CONSTRAINT `apiinventarioapp_producto_chk_1` CHECK ((`stockMinimo` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_producto`
--

LOCK TABLES `apiinventarioapp_producto` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_producto` DISABLE KEYS */;
INSERT INTO `apiinventarioapp_producto` VALUES (5,'Tornillo','No Aplica',1,'No Aplica',1,1),(6,'Taladro','No Aplica',1,'No Aplica',1,1),(7,'Martillo','No Aplica',1,'No Aplica',1,1),(8,'Pinza','No Aplica',1,'No Aplica',1,1),(9,'Taladro','No Aplica',1,'No Aplica',1,1),(10,'Puliora','No Aplica',1,'No Aplica',1,1);
/*!40000 ALTER TABLE `apiinventarioapp_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_registro`
--

DROP TABLE IF EXISTS `apiinventarioapp_registro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_registro` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cantidad` int unsigned NOT NULL,
  `fechaVencimiento` date NOT NULL,
  `observacion` varchar(100) NOT NULL,
  `estado_id` bigint DEFAULT NULL,
  `idProducto_id` bigint DEFAULT NULL,
  `idUbicacion_id` bigint DEFAULT NULL,
  `movimiento_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ApiInventarioApp_reg_estado_id_25fc1c8d_fk_ApiInvent` (`estado_id`),
  KEY `ApiInventarioApp_reg_idProducto_id_8c3e53df_fk_ApiInvent` (`idProducto_id`),
  KEY `ApiInventarioApp_reg_idUbicacion_id_c4ddc30c_fk_ApiInvent` (`idUbicacion_id`),
  KEY `ApiInventarioApp_reg_movimiento_id_635c73f2_fk_ApiInvent` (`movimiento_id`),
  CONSTRAINT `ApiInventarioApp_reg_estado_id_25fc1c8d_fk_ApiInvent` FOREIGN KEY (`estado_id`) REFERENCES `apiinventarioapp_estado` (`id`),
  CONSTRAINT `ApiInventarioApp_reg_idProducto_id_8c3e53df_fk_ApiInvent` FOREIGN KEY (`idProducto_id`) REFERENCES `apiinventarioapp_producto` (`id`),
  CONSTRAINT `ApiInventarioApp_reg_idUbicacion_id_c4ddc30c_fk_ApiInvent` FOREIGN KEY (`idUbicacion_id`) REFERENCES `apiinventarioapp_ubicacion` (`id`),
  CONSTRAINT `ApiInventarioApp_reg_movimiento_id_635c73f2_fk_ApiInvent` FOREIGN KEY (`movimiento_id`) REFERENCES `apiinventarioapp_movimiento` (`id`),
  CONSTRAINT `apiinventarioapp_registro_chk_1` CHECK ((`cantidad` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_registro`
--

LOCK TABLES `apiinventarioapp_registro` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_registro` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiinventarioapp_registro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_tipo_de_movimiento`
--

DROP TABLE IF EXISTS `apiinventarioapp_tipo_de_movimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_tipo_de_movimiento` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_tipo_de_movimiento`
--

LOCK TABLES `apiinventarioapp_tipo_de_movimiento` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_tipo_de_movimiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiinventarioapp_tipo_de_movimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_ubicacion`
--

DROP TABLE IF EXISTS `apiinventarioapp_ubicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_ubicacion` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_ubicacion`
--

LOCK TABLES `apiinventarioapp_ubicacion` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_ubicacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiinventarioapp_ubicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiinventarioapp_unidad`
--

DROP TABLE IF EXISTS `apiinventarioapp_unidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiinventarioapp_unidad` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiinventarioapp_unidad`
--

LOCK TABLES `apiinventarioapp_unidad` WRITE;
/*!40000 ALTER TABLE `apiinventarioapp_unidad` DISABLE KEYS */;
INSERT INTO `apiinventarioapp_unidad` VALUES (1,'Unidad');
/*!40000 ALTER TABLE `apiinventarioapp_unidad` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add perfil',7,'add_perfil'),(26,'Can change perfil',7,'change_perfil'),(27,'Can delete perfil',7,'delete_perfil'),(28,'Can view perfil',7,'view_perfil'),(29,'Can add foto_ perfil',8,'add_foto_perfil'),(30,'Can change foto_ perfil',8,'change_foto_perfil'),(31,'Can delete foto_ perfil',8,'delete_foto_perfil'),(32,'Can view foto_ perfil',8,'view_foto_perfil'),(33,'Can add categoria',9,'add_categoria'),(34,'Can change categoria',9,'change_categoria'),(35,'Can delete categoria',9,'delete_categoria'),(36,'Can view categoria',9,'view_categoria'),(37,'Can add unidad',10,'add_unidad'),(38,'Can change unidad',10,'change_unidad'),(39,'Can delete unidad',10,'delete_unidad'),(40,'Can view unidad',10,'view_unidad'),(41,'Can add producto',11,'add_producto'),(42,'Can change producto',11,'change_producto'),(43,'Can delete producto',11,'delete_producto'),(44,'Can view producto',11,'view_producto'),(45,'Can add ubicacion',12,'add_ubicacion'),(46,'Can change ubicacion',12,'change_ubicacion'),(47,'Can delete ubicacion',12,'delete_ubicacion'),(48,'Can view ubicacion',12,'view_ubicacion'),(49,'Can add especificacion',13,'add_especificacion'),(50,'Can change especificacion',13,'change_especificacion'),(51,'Can delete especificacion',13,'delete_especificacion'),(52,'Can view especificacion',13,'view_especificacion'),(53,'Can add tipo_de_ movimiento',14,'add_tipo_de_movimiento'),(54,'Can change tipo_de_ movimiento',14,'change_tipo_de_movimiento'),(55,'Can delete tipo_de_ movimiento',14,'delete_tipo_de_movimiento'),(56,'Can view tipo_de_ movimiento',14,'view_tipo_de_movimiento'),(57,'Can add empresa',15,'add_empresa'),(58,'Can change empresa',15,'change_empresa'),(59,'Can delete empresa',15,'delete_empresa'),(60,'Can view empresa',15,'view_empresa'),(61,'Can add descriocion_del_trabajo',16,'add_descriocion_del_trabajo'),(62,'Can change descriocion_del_trabajo',16,'change_descriocion_del_trabajo'),(63,'Can delete descriocion_del_trabajo',16,'delete_descriocion_del_trabajo'),(64,'Can view descriocion_del_trabajo',16,'view_descriocion_del_trabajo'),(65,'Can add movimiento',17,'add_movimiento'),(66,'Can change movimiento',17,'change_movimiento'),(67,'Can delete movimiento',17,'delete_movimiento'),(68,'Can view movimiento',17,'view_movimiento'),(69,'Can add estado_ labor',18,'add_estado_labor'),(70,'Can change estado_ labor',18,'change_estado_labor'),(71,'Can delete estado_ labor',18,'delete_estado_labor'),(72,'Can view estado_ labor',18,'view_estado_labor'),(73,'Can add labor',19,'add_labor'),(74,'Can change labor',19,'change_labor'),(75,'Can delete labor',19,'delete_labor'),(76,'Can view labor',19,'view_labor'),(77,'Can add foto',20,'add_foto'),(78,'Can change foto',20,'change_foto'),(79,'Can delete foto',20,'delete_foto'),(80,'Can view foto',20,'view_foto'),(81,'Can add estado',21,'add_estado'),(82,'Can change estado',21,'change_estado'),(83,'Can delete estado',21,'delete_estado'),(84,'Can view estado',21,'view_estado'),(85,'Can add registro',22,'add_registro'),(86,'Can change registro',22,'change_registro'),(87,'Can delete registro',22,'delete_registro'),(88,'Can view registro',22,'view_registro');
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
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$320000$Zgk99o3pieYJHo0FVGYXDD$kYuoei8S0Ccm7i855l9rZI0MQwRYLRLSZ3GLKuyXRgs=','2022-04-29 15:15:23.414995',1,'jairo','','','',1,1,'2022-04-29 15:15:06.968787');
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2022-04-29 19:26:57.606563','1','Unidad',1,'[{\"added\": {}}]',10,1),(2,'2022-04-29 19:27:04.401724','1','Ferreteria',1,'[{\"added\": {}}]',9,1),(3,'2022-04-29 19:29:35.079874','5','Tornillo',1,'[{\"added\": {}}]',11,1),(4,'2022-04-29 19:29:41.958507','5','Tornillo',2,'[]',11,1),(5,'2022-04-29 20:20:34.182272','6','6 - Taladro',1,'[{\"added\": {}}]',11,1),(6,'2022-04-29 20:56:46.060374','10','10 - Puliora',1,'[{\"added\": {}}]',11,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(9,'ApiInventarioApp','categoria'),(16,'ApiInventarioApp','descriocion_del_trabajo'),(15,'ApiInventarioApp','empresa'),(13,'ApiInventarioApp','especificacion'),(21,'ApiInventarioApp','estado'),(18,'ApiInventarioApp','estado_labor'),(20,'ApiInventarioApp','foto'),(8,'ApiInventarioApp','foto_perfil'),(19,'ApiInventarioApp','labor'),(17,'ApiInventarioApp','movimiento'),(7,'ApiInventarioApp','perfil'),(11,'ApiInventarioApp','producto'),(22,'ApiInventarioApp','registro'),(14,'ApiInventarioApp','tipo_de_movimiento'),(12,'ApiInventarioApp','ubicacion'),(10,'ApiInventarioApp','unidad'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2022-04-29 15:12:01.050068'),(2,'auth','0001_initial','2022-04-29 15:12:01.518704'),(3,'admin','0001_initial','2022-04-29 15:12:01.690536'),(4,'admin','0002_logentry_remove_auto_add','2022-04-29 15:12:01.706163'),(5,'admin','0003_logentry_add_action_flag_choices','2022-04-29 15:12:01.706163'),(6,'contenttypes','0002_remove_content_type_name','2022-04-29 15:12:01.799885'),(7,'auth','0002_alter_permission_name_max_length','2022-04-29 15:12:01.877993'),(8,'auth','0003_alter_user_email_max_length','2022-04-29 15:12:01.893618'),(9,'auth','0004_alter_user_username_opts','2022-04-29 15:12:01.909241'),(10,'auth','0005_alter_user_last_login_null','2022-04-29 15:12:01.940477'),(11,'auth','0006_require_contenttypes_0002','2022-04-29 15:12:01.956103'),(12,'auth','0007_alter_validators_add_error_messages','2022-04-29 15:12:01.956103'),(13,'auth','0008_alter_user_username_max_length','2022-04-29 15:12:02.002961'),(14,'auth','0009_alter_user_last_name_max_length','2022-04-29 15:12:02.073523'),(15,'auth','0010_alter_group_name_max_length','2022-04-29 15:12:02.091002'),(16,'auth','0011_update_proxy_permissions','2022-04-29 15:12:02.100219'),(17,'auth','0012_alter_user_first_name_max_length','2022-04-29 15:12:02.152234'),(18,'sessions','0001_initial','2022-04-29 15:12:02.178508'),(19,'ApiInventarioApp','0001_initial','2022-04-29 15:12:33.801691');
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
INSERT INTO `django_session` VALUES ('dqvneu1xl6a44w5jh0n521oujvgvq1vm','.eJxVjDsOwjAQBe_iGln-JWtT0nMGa7O7wQHkSHFSIe4OkVJA-2bmvVTGbS15a7LkidVZWXX63Qakh9Qd8B3rbdY013WZBr0r-qBNX2eW5-Vw_w4KtvKtR-u5j5LIG4mjAFHvAnQGBC1Qx-I9hmBcimMENJaswT4w2wG6IC6p9wflDTej:1nkSL5:OUnByYTOiG42WSECPVYbVWGt_Bb5eLttt8ezsW12I10','2022-05-13 15:15:23.417445');
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

-- Dump completed on 2022-08-09 12:15:10
