package xyz.zalaya.fivex.backend.services.implementations;

import org.springframework.stereotype.Service;
import xyz.zalaya.fivex.backend.entities.ModulePropertyEntity;
import xyz.zalaya.fivex.backend.repositories.ModulePropertyRepository;
import xyz.zalaya.fivex.backend.services.ModulePropertyService;

import java.util.List;

@Service
public class ModulePropertyServiceImplementation implements ModulePropertyService {

    private final ModulePropertyRepository repository;

    public ModulePropertyServiceImplementation(ModulePropertyRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<ModulePropertyEntity> findByModuleId(Long moduleId) {
        return null;
    }

    @Override
    public List<ModulePropertyEntity> findByPropertyId(Long propertyId) {
        return null;
    }

    @Override
    public ModulePropertyEntity save(ModulePropertyEntity moduleProperty) {
        return null;
    }

    @Override
    public void deleteById(Long moduleId, Long propertyId) {

    }

}
