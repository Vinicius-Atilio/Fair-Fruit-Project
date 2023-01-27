package Global.Points.FeiraOnline.repository;

import Global.Points.FeiraOnline.entities.UserGP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserGP, Integer> {
    Optional<UserGP> findByLogin(String login);
}
