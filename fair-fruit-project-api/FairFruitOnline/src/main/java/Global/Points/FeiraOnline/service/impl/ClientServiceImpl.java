package Global.Points.FeiraOnline.service.impl;

import Global.Points.FeiraOnline.entities.Client;
import Global.Points.FeiraOnline.exception.ClientNotFoundException;
import Global.Points.FeiraOnline.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
public class ClientServiceImpl implements UserDetailsService {

    @Autowired
    private ClientRepository repository;

    @Transactional
    public Client save(Client user ){
        return repository.save(user);
    }

    public Optional<Client> findById(Integer id) {
        return repository.findById(id);
    }

    public void delete(Client client) {
        repository.delete(client);
    }

    public List<Client> findAll() {
        return repository.findAll();
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws ClientNotFoundException {
        Client client = repository.findByLogin(username)
                .orElseThrow(()->new ClientNotFoundException("User not found in data base"));

        String[] roles = client.isAdmin() ?
                new String[]{"ADMIN", "USER"} : new String[]{"USER"};

        return User
                .builder()
                .username(client.getLogin())
                .password(client.getPassword())
                .roles(roles)
                .build();
    }
}
