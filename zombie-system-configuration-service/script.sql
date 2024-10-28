DROP TABLE IF EXISTS `properties`;
CREATE TABLE IF NOT EXISTS `properties` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    value TEXT NOT NULL,
    description TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `properties` (name, value, description) VALUES ("zombie-system.configuration-service.database-polling-interval", "5000", "The interval in milliseconds at which the database is polled for new configuration values.");
