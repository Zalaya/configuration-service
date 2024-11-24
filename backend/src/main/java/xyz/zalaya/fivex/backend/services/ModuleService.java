package xyz.zalaya.fivex.backend.services;

import xyz.zalaya.fivex.backend.entities.ModuleEntity;

import java.util.List;
import java.util.Optional;

public interface ModuleService {

    List<ModuleEntity> findAll();
    Optional<ModuleEntity> findById(Long id);
    ModuleEntity save(ModuleEntity property);
    ModuleEntity update(Long id, ModuleEntity property);
    void deleteById(Long id);

}
