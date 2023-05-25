package Global.Points.FeiraOnline.repository;

import Global.Points.FeiraOnline.entities.Order;
import Global.Points.FeiraOnline.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface Orders extends JpaRepository<Order, Integer> {
    List<Order> findByUser(User user);

    @Query(" select p from Order p left join fetch p.items where p.id = :id ")
    Optional<Order> findByIdFetchItems(@Param("id") Integer id);

    @Query(" select distinct u from Order u left join fetch u.items where u.user.id = :id ")
    List<Order> findAllByIdFetchItems(@Param("id") Integer id);
}
