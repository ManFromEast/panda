-- MySQL dump 10.13  Distrib 5.7.9, for Win32 (AMD64)
--
-- Host: localhost    Database: panda
-- ------------------------------------------------------
-- Server version	5.7.11-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `id` int(10) unsigned NOT NULL,
  `address_type` tinyint(1) unsigned NOT NULL,
  `country` smallint(5) unsigned NOT NULL,
  `country_code` smallint(5) unsigned NOT NULL,
  `state` int(10) unsigned NOT NULL,
  `state_code` int(10) unsigned NOT NULL,
  `city` int(10) unsigned NOT NULL,
  `city_code` int(10) unsigned NOT NULL,
  `district` int(10) DEFAULT NULL,
  `district_code` int(10) DEFAULT NULL,
  `town` int(10) DEFAULT NULL,
  `specific_address` varchar(100) NOT NULL,
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='User registration information, user address information';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `address_label`
--

DROP TABLE IF EXISTS `address_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address_label` (
  `id` int(10) unsigned NOT NULL,
  `address_type_label` varchar(45) NOT NULL,
  `country_label` varchar(45) NOT NULL,
  `country_code_label` varchar(45) NOT NULL,
  `state_label` varchar(45) NOT NULL,
  `state_code_label` varchar(45) NOT NULL,
  `city_label` varchar(45) NOT NULL,
  `city_code_label` varchar(45) NOT NULL,
  `district_label` varchar(45) NOT NULL,
  `district_code_label` varchar(45) NOT NULL,
  `town_label` varchar(45) NOT NULL,
  `specific_address_label` varchar(45) NOT NULL,
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='to display address label in view.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address_label`
--

LOCK TABLES `address_label` WRITE;
/*!40000 ALTER TABLE `address_label` DISABLE KEYS */;
/*!40000 ALTER TABLE `address_label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `identity_card`
--

DROP TABLE IF EXISTS `identity_card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `identity_card` (
  `id` int(10) unsigned NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `sex` char(1) NOT NULL,
  `nationality` varchar(45) NOT NULL,
  `date_of_birth` date NOT NULL,
  `address_of_birth` varchar(200) NOT NULL,
  `identity_number` varchar(30) NOT NULL,
  `issuing_authority` varchar(45) NOT NULL,
  `card_expires` date NOT NULL,
  `resident_since` date NOT NULL,
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='user identification card information.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `identity_card`
--

LOCK TABLES `identity_card` WRITE;
/*!40000 ALTER TABLE `identity_card` DISABLE KEYS */;
/*!40000 ALTER TABLE `identity_card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `identity_card_label`
--

DROP TABLE IF EXISTS `identity_card_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `identity_card_label` (
  `id` int(10) NOT NULL,
  `user_name_label` varchar(45) NOT NULL,
  `sex_label` varchar(30) NOT NULL,
  `nationality_label` varchar(30) NOT NULL,
  `date_of_birth_label` varchar(30) NOT NULL,
  `address_of_birth_label` varchar(30) NOT NULL,
  `identity_number_label` varchar(30) NOT NULL,
  `issuing_authority_label` varchar(30) NOT NULL,
  `card_expires_label` varchar(30) NOT NULL,
  `resident_since_label` varchar(30) NOT NULL,
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `identity_card_label`
--

LOCK TABLES `identity_card_label` WRITE;
/*!40000 ALTER TABLE `identity_card_label` DISABLE KEYS */;
/*!40000 ALTER TABLE `identity_card_label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL,
  `panda_id` int(10) unsigned NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `panda_id_UNIQUE` (`panda_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='user register information.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_address` (
  `id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `address_id` int(10) unsigned NOT NULL,
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='User registration information, user address information';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

LOCK TABLES `user_address` WRITE;
/*!40000 ALTER TABLE `user_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_label`
--

DROP TABLE IF EXISTS `user_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_label` (
  `id` int(10) unsigned NOT NULL,
  `user_name_label` varchar(45) NOT NULL,
  `password_label` varchar(45) NOT NULL,
  `email_label` varchar(45) NOT NULL,
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='to display user labels in view.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_label`
--

LOCK TABLES `user_label` WRITE;
/*!40000 ALTER TABLE `user_label` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'panda'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-04 15:20:39
