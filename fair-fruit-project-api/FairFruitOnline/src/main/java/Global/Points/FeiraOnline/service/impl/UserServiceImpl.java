package Global.Points.FeiraOnline.service.impl;

import Global.Points.FeiraOnline.entities.UserGP;
import Global.Points.FeiraOnline.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class UserServiceImpl implements UserDetailsService {

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private UserRepository repository;

    @Transactional
    public UserGP save(UserGP user ){
        return repository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserGP userGP = repository.findByLogin(username)
                .orElseThrow(()->new UsernameNotFoundException("User not found in data base"));

        String[] roles = userGP.isAdmin() ?
                new String[]{"ADMIN", "USER"} : new String[]{"USER"};

        return User
                .builder()
                .username(userGP.getLogin())
                .password(userGP.getPassword())
                .roles(roles)
                .build();
    }
}
