package seu.estoque.online.api.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Version;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(nullable = false)
    private Double price;

    private Integer amount;

    private String imageUrl;

    private LocalDateTime createdIn;

    private LocalDateTime updatedIn;

    @Version
    private Integer version;

    @PrePersist
    public void prePersist() {
        createdIn = LocalDateTime.now();
        updatedIn = LocalDateTime.now();
    }

    @PreUpdate
    public void preUpdate() {
        updatedIn = LocalDateTime.now();
    }
}