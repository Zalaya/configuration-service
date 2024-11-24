package xyz.zalaya.fivex.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import xyz.zalaya.fivex.backend.entities.PropertyEntity;

public interface PropertyRepository extends JpaRepository<PropertyEntity, Long> {

}
