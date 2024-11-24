package xyz.zalaya.fivex.backend.services;

import xyz.zalaya.fivex.backend.entities.PropertyEntity;

import java.util.List;
import java.util.Optional;

public interface PropertyService {

    List<PropertyEntity> findAll();
    Optional<PropertyEntity> findById(Long id);
    PropertyEntity save(PropertyEntity property);
    PropertyEntity update(Long id, PropertyEntity property);
    void deleteById(Long id);

}
