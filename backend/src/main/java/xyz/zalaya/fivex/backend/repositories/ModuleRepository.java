package xyz.zalaya.fivex.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import xyz.zalaya.fivex.backend.entities.ModulePropertyEntity;

public interface ModuleRepository extends JpaRepository<ModulePropertyEntity, Long> {

}
