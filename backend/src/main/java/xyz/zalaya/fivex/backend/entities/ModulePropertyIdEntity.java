package xyz.zalaya.fivex.backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Embeddable
@Getter
@Setter
@EqualsAndHashCode
public class ModulePropertyIdEntity implements Serializable {

    @Column(name = "module_id", nullable = false, updatable = false, insertable = false)
    private Long moduleId;

    @Column(name = "property_id", nullable = false, updatable = false, insertable = false)
    private Long propertyId;

}
