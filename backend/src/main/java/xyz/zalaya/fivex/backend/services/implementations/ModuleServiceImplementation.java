package xyz.zalaya.fivex.backend.services.implementations;

import org.springframework.stereotype.Service;
import xyz.zalaya.fivex.backend.entities.ModuleEntity;
import xyz.zalaya.fivex.backend.repositories.ModuleRepository;
import xyz.zalaya.fivex.backend.services.ModuleService;

import java.util.List;
import java.util.Optional;

@Service
public class ModuleServiceImplementation implements ModuleService {

    private final ModuleRepository repository;

    public ModuleServiceImplementation(ModuleRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<ModuleEntity> findAll() {
        return null;
    }

    @Override
    public Optional<ModuleEntity> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public ModuleEntity save(ModuleEntity property) {
        return null;
    }

    @Override
    public ModuleEntity update(Long id, ModuleEntity property) {
        return null;
    }

    @Override
    public void deleteById(Long id) {

    }

}
