package Global.Points.FeiraOnline.repository;


import Global.Points.FeiraOnline.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ClientRepository extends JpaRepository<Client, Integer> {

    @Query(value = " select * from Client c where c.name like '%:name' ", nativeQuery = true)
    List<Client> findByName( @Param("name") String name);

    @Query("delete from Client c where c.name=:name")
    @Modifying
    void deleteByName(String name);

    boolean existsByName(String name);

    Optional<Client> findByLogin(String login);

    @Query(" select c from Client c left join fetch c.orders where c.id =:id ")
    Client findClientFetchOrders(@Param("id") Integer id);


}