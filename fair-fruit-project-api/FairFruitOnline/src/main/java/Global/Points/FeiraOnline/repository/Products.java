package Global.Points.FeiraOnline.repository;

import Global.Points.FeiraOnline.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Products extends JpaRepository<Product, Integer> {
}
