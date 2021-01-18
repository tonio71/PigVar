CREATE DATABASE  IF NOT EXISTS `pigvar` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pigvar`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: pigvar
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `inseminacao`
--

DROP TABLE IF EXISTS `inseminacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inseminacao` (
  `brinco_macho` varchar(7) COLLATE utf8_swedish_ci NOT NULL,
  `brinco_femea` varchar(7) COLLATE utf8_swedish_ci NOT NULL,
  `data_inseminacao` date NOT NULL,
  PRIMARY KEY (`data_inseminacao`,`brinco_femea`,`brinco_macho`),
  KEY `brinco_macho` (`brinco_macho`),
  KEY `brinco_femea` (`brinco_femea`),
  CONSTRAINT `brinco_femea` FOREIGN KEY (`brinco_femea`) REFERENCES `reprodutor` (`brinco`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `brinco_macho` FOREIGN KEY (`brinco_macho`) REFERENCES `reprodutor` (`brinco`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `parto`
--

DROP TABLE IF EXISTS `parto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parto` (
  `brinco_femea` varchar(7) COLLATE utf8_swedish_ci NOT NULL,
  `data_parto` date NOT NULL,
  `ordem_paricao` int NOT NULL AUTO_INCREMENT,
  `galpao` varchar(5) COLLATE utf8_swedish_ci DEFAULT NULL,
  `sala_maternidade` varchar(5) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_matriz_pre_parto` decimal(6,3) DEFAULT NULL,
  `peso_matriz_pos_parto` decimal(6,3) DEFAULT NULL,
  `peso_nasc1` decimal(6,3) DEFAULT NULL,
  `estado_nasc1` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame1` decimal(6,3) DEFAULT NULL,
  `peso_nasc2` decimal(6,3) DEFAULT NULL,
  `estado_nasc2` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame2` decimal(6,3) DEFAULT NULL,
  `peso_nasc3` decimal(6,3) DEFAULT NULL,
  `estado_nasc3` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame3` decimal(6,3) DEFAULT NULL,
  `peso_nasc4` decimal(6,3) DEFAULT NULL,
  `estado_nasc4` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame4` decimal(6,3) DEFAULT NULL,
  `peso_nasc5` decimal(6,3) DEFAULT NULL,
  `estado_nasc5` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame5` decimal(6,3) DEFAULT NULL,
  `peso_nasc6` decimal(6,3) DEFAULT NULL,
  `estado_nasc6` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame6` decimal(6,3) DEFAULT NULL,
  `peso_nasc7` decimal(6,3) DEFAULT NULL,
  `estado_nasc7` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame7` decimal(6,3) DEFAULT NULL,
  `peso_nasc8` decimal(6,3) DEFAULT NULL,
  `estado_nasc8` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame8` decimal(6,3) DEFAULT NULL,
  `peso_nasc9` decimal(6,3) DEFAULT NULL,
  `estado_nasc9` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame9` decimal(6,3) DEFAULT NULL,
  `peso_nasc10` decimal(6,3) DEFAULT NULL,
  `estado_nasc10` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame10` decimal(6,3) DEFAULT NULL,
  `peso_nasc11` decimal(6,3) DEFAULT NULL,
  `estado_nasc11` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame11` decimal(6,3) DEFAULT NULL,
  `peso_nasc12` decimal(6,3) DEFAULT NULL,
  `estado_nasc12` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame12` decimal(6,3) DEFAULT NULL,
  `peso_nasc13` decimal(6,3) DEFAULT NULL,
  `estado_nasc13` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame13` decimal(6,3) DEFAULT NULL,
  `peso_nasc14` decimal(6,3) DEFAULT NULL,
  `estado_nasc14` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame14` decimal(6,3) DEFAULT NULL,
  `peso_nasc15` decimal(6,3) DEFAULT NULL,
  `estado_nasc15` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame15` decimal(6,3) DEFAULT NULL,
  `peso_nasc16` decimal(6,3) DEFAULT NULL,
  `estado_nasc16` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame16` decimal(6,3) DEFAULT NULL,
  `peso_nasc17` decimal(6,3) DEFAULT NULL,
  `estado_nasc17` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame17` decimal(6,3) DEFAULT NULL,
  `peso_nasc18` decimal(6,3) DEFAULT NULL,
  `estado_nasc18` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame18` decimal(6,3) DEFAULT NULL,
  `peso_nasc19` decimal(6,3) DEFAULT NULL,
  `estado_nasc19` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame19` decimal(6,3) DEFAULT NULL,
  `peso_nasc20` decimal(6,3) DEFAULT NULL,
  `estado_nasc20` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame20` decimal(6,3) DEFAULT NULL,
  `peso_nasc21` decimal(6,3) DEFAULT NULL,
  `estado_nasc21` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame21` decimal(6,3) DEFAULT NULL,
  `peso_nasc22` decimal(6,3) DEFAULT NULL,
  `estado_nasc22` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame22` decimal(6,3) DEFAULT NULL,
  `peso_nasc23` decimal(6,3) DEFAULT NULL,
  `estado_nasc23` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame23` decimal(6,3) DEFAULT NULL,
  `peso_nasc24` decimal(6,3) DEFAULT NULL,
  `estado_nasc24` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame24` decimal(6,3) DEFAULT NULL,
  `peso_nasc25` decimal(6,3) DEFAULT NULL,
  `estado_nasc25` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame25` decimal(6,3) DEFAULT NULL,
  `peso_nasc26` decimal(6,3) DEFAULT NULL,
  `estado_nasc26` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame26` decimal(6,3) DEFAULT NULL,
  `peso_nasc27` decimal(6,3) DEFAULT NULL,
  `estado_nasc27` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame27` decimal(6,3) DEFAULT NULL,
  `peso_nasc28` decimal(6,3) DEFAULT NULL,
  `estado_nasc28` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame28` decimal(6,3) DEFAULT NULL,
  `peso_nasc29` decimal(6,3) DEFAULT NULL,
  `estado_nasc29` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame29` decimal(6,3) DEFAULT NULL,
  `peso_nasc30` decimal(6,3) DEFAULT NULL,
  `estado_nasc30` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame30` decimal(6,3) DEFAULT NULL,
  `peso_nasc31` decimal(6,3) DEFAULT NULL,
  `estado_nasc31` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame31` decimal(6,3) DEFAULT NULL,
  `peso_nasc32` decimal(6,3) DEFAULT NULL,
  `estado_nasc32` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame32` decimal(6,3) DEFAULT NULL,
  `peso_nasc33` decimal(6,3) DEFAULT NULL,
  `estado_nasc33` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame33` decimal(6,3) DEFAULT NULL,
  `peso_nasc34` decimal(6,3) DEFAULT NULL,
  `estado_nasc34` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame34` decimal(6,3) DEFAULT NULL,
  `peso_nasc35` decimal(6,3) DEFAULT NULL,
  `estado_nasc35` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame35` decimal(6,3) DEFAULT NULL,
  `peso_nasc36` decimal(6,3) DEFAULT NULL,
  `estado_nasc36` varchar(1) COLLATE utf8_swedish_ci DEFAULT NULL,
  `peso_desmame36` decimal(6,3) DEFAULT NULL,
  PRIMARY KEY (`ordem_paricao`,`brinco_femea`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reprodutor`
--

DROP TABLE IF EXISTS `reprodutor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reprodutor` (
  `brinco` varchar(7) COLLATE utf8_swedish_ci NOT NULL,
  `multiplicadora` varchar(40) COLLATE utf8_swedish_ci DEFAULT NULL,
  `genetica` varchar(20) COLLATE utf8_swedish_ci DEFAULT NULL,
  `data_nasc` date DEFAULT NULL,
  `peso_nasc` decimal(6,3) DEFAULT NULL,
  `data_chegada` date DEFAULT NULL,
  `peso_chegada` decimal(6,3) DEFAULT NULL,
  `sexo` varchar(1) COLLATE utf8_swedish_ci NOT NULL,
  PRIMARY KEY (`brinco`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-08 16:57:35
