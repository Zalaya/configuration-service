package xyz.zalaya.fivex.backend.services;

import xyz.zalaya.fivex.backend.entities.ModulePropertyEntity;

import java.util.List;

public interface ModulePropertyService {

    List<ModulePropertyEntity> findByModuleId(Long moduleId);
    List<ModulePropertyEntity> findByPropertyId(Long propertyId);
    ModulePropertyEntity save(ModulePropertyEntity moduleProperty);
    void deleteById(Long moduleId, Long propertyId);

}
