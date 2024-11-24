package xyz.zalaya.fivex.backend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "module_properties")
@Getter
@Setter
public class ModulePropertyEntity {

    @EmbeddedId
    private ModulePropertyIdEntity id;

    @ManyToOne
    @MapsId("moduleId")
    @JoinColumn(name = "module_id", nullable = false, updatable = false, insertable = false)
    private ModuleEntity module;

    @ManyToOne
    @MapsId("propertyId")
    @JoinColumn(name = "property_id", nullable = false, updatable = false, insertable = false)
    private PropertyEntity property;

}
