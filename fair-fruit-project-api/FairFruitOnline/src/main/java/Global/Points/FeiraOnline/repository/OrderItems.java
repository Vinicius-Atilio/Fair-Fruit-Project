package Global.Points.FeiraOnline.repository;

import Global.Points.FeiraOnline.entities.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItems extends JpaRepository<OrderItem, Integer> {
}
