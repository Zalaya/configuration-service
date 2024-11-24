package xyz.zalaya.fivex.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import xyz.zalaya.fivex.backend.entities.ModulePropertyEntity;
import xyz.zalaya.fivex.backend.entities.ModulePropertyIdEntity;

public interface ModulePropertyRepository extends JpaRepository<ModulePropertyEntity, ModulePropertyIdEntity> {

}
