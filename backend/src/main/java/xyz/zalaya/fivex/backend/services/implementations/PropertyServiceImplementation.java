package xyz.zalaya.fivex.backend.services.implementations;

import org.springframework.stereotype.Service;
import xyz.zalaya.fivex.backend.entities.PropertyEntity;
import xyz.zalaya.fivex.backend.repositories.PropertyRepository;
import xyz.zalaya.fivex.backend.services.PropertyService;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyServiceImplementation implements PropertyService {

    private final PropertyRepository repository;

    public PropertyServiceImplementation(PropertyRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<PropertyEntity> findAll() {
        return null;
    }

    @Override
    public Optional<PropertyEntity> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public PropertyEntity save(PropertyEntity property) {
        return null;
    }

    @Override
    public PropertyEntity update(Long id, PropertyEntity property) {
        return null;
    }

    @Override
    public void deleteById(Long id) {

    }

}
