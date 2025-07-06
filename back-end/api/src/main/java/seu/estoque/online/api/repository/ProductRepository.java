package seu.estoque.online.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import seu.estoque.online.api.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}