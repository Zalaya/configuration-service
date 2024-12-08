DROP DATABASE IF EXISTS `storage`;
CREATE DATABASE IF NOT EXISTS `storage`;
USE `storage`;

DROP TABLE IF EXISTS `modules`;
CREATE TABLE IF NOT EXISTS `modules` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL UNIQUE,
  `description` TEXT,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `properties`;
CREATE TABLE IF NOT EXISTS `properties` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `key` VARCHAR(255) NOT NULL,
  `value` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `module_properties`;
CREATE TABLE IF NOT EXISTS `module_properties` (
  `module_id` BIGINT NOT NULL,
  `property_id` BIGINT NOT NULL,
  PRIMARY KEY (`module_id`, `property_id`),
  FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`),
  FOREIGN KEY (`property_id`) REFERENCES `properties`(`id`)
);