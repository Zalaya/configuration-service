DROP DATABASE IF EXISTS `fivex_database`;
CREATE DATABASE IF NOT EXISTS `fivex_database`;
USE `fivex_database`;

DROP TABLE IF EXISTS `modules`;
CREATE TABLE IF NOT EXISTS `modules` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL UNIQUE,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `properties`;
CREATE TABLE IF NOT EXISTS `properties` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `key` VARCHAR(255) NOT NULL,
  `value` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `module_properties`;
CREATE TABLE IF NOT EXISTS `module_properties` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `module_id` INT NOT NULL,
  `property_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`),
  FOREIGN KEY (`property_id`) REFERENCES `properties`(`id`)
);
