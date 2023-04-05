package Global.Points.FeiraOnline.controller;

import Global.Points.FeiraOnline.entities.Client;
import Global.Points.FeiraOnline.exception.ClientNotFoundException;
import Global.Points.FeiraOnline.service.impl.ClientServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/clients")
@RequiredArgsConstructor
public class ClientController {
    //use
    private final ClientServiceImpl service;
    private final PasswordEncoder passwordEncoder;

    @GetMapping("{id}")
    public Client getClientById( @PathVariable Integer id ) {
        return service
                .findById(id)
                .orElseThrow(() -> new ClientNotFoundException("User not found in data base"));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Client save( @RequestBody @Valid Client client ){
        String encryptedPassword = passwordEncoder.encode(client.getPassword());
        client.setPassword(encryptedPassword);
        return service.save(client);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete( @PathVariable Integer id ){
        service.findById(id)
                .map(
                        client -> {
                            service.delete(client);
                            return client;
                        })
                .orElseThrow(() -> new ClientNotFoundException("User not found in data base"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Update( @PathVariable Integer id,
                        @RequestBody @Valid Client client){
        String encryptedPassword = passwordEncoder.encode(client.getPassword());
        client.setPassword(encryptedPassword);
        service
                .findById(id)
                .map( existsClient ->{
                    client.setId(existsClient.getId());
                    service.save(client);
                    return ResponseEntity.noContent().build();
                }).orElseThrow(() -> new ClientNotFoundException("User not found in data base"));
    }

    @GetMapping
    public List<Client> find( Client filter ){
        ExampleMatcher matcher = ExampleMatcher
                .matching()
                .withIgnoreCase()
                .withStringMatcher(
                        ExampleMatcher.StringMatcher.CONTAINING);
        Example example = Example.of(filter, matcher);
        return service.findAll();
    }
}