package Global.Points.FeiraOnline.service.impl;

import Global.Points.FeiraOnline.entities.Client;
import Global.Points.FeiraOnline.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
public class ClientServiceImpl {

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

    public List<Client> findAll(Example example) {
        return repository.findAll();
    }


}
