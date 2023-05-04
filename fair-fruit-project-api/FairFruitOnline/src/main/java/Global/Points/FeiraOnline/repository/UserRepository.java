package Global.Points.FeiraOnline.repository;

import Global.Points.FeiraOnline.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByLogin(String login);

    @Query(value = " select * from User u where u.name like '%:name' ", nativeQuery = true)
    List<User> findByName(@Param("name") String name);

    @Query("delete from User c where c.name=:name")
    @Modifying
    void deleteByName(String name);

    boolean existsByName(String name);

    @Query(" select u from User u left join fetch u.orders where u.id =:id ")
    User findClientFetchOrders(@Param("id") Integer id);

}
