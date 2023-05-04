package Global.Points.FeiraOnline.service.impl;

import Global.Points.FeiraOnline.entities.User;
import Global.Points.FeiraOnline.exception.InvalidPasswordException;
import Global.Points.FeiraOnline.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
public class UserServiceImpl implements UserDetailsService {

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private UserRepository repository;

    @Transactional
    public User save(User user ){
        return repository.save(user);
    }

    public UserDetails auth(User user){
        UserDetails userDetails = loadUserByUsername(user.getLogin());
        boolean matchPassword = encoder.matches(user.getPassword(), userDetails.getPassword());
        if (matchPassword){
            return userDetails;
        }
        throw new InvalidPasswordException();
    }
    public void delete(User user) {
        repository.delete(user);
    }

    public Optional<User> findById(Integer id){
        return repository.findById(Math.toIntExact(id));
    }
    public User findByLogin(String username){
        return repository.findByLogin(username)
                .orElseThrow(()->new UsernameNotFoundException("User not found in data base"));
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User userGP = repository.findByLogin(username)
                .orElseThrow(()->new UsernameNotFoundException("User not found in data base"));

        String[] roles = userGP.isAdmin() ?
                new String[]{"ADMIN", "USER"} : new String[]{"USER"};

//        return new CustomUserDetailsDTO(
//                userGP.getId(), userGP.getLogin(), userGP.getPassword(), roles
//        );

        return org.springframework.security.core.userdetails.User
                .builder()
                .username(userGP.getLogin())
                .password(userGP.getPassword())
                .roles(roles)
                .build();
    }

    public List<User> findAll(Example example) {
        return repository.findAll();
    }
}
