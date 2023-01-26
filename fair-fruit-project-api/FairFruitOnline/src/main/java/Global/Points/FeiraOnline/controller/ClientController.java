package Global.Points.FeiraOnline.controller;

import Global.Points.FeiraOnline.entities.Client;
import Global.Points.FeiraOnline.repository.Clients;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientController {
    //use
    private Clients clients;

    public ClientController(Clients clients) {
        this.clients = clients;
    }

    @GetMapping("{id}")
    public Client getClientById( @PathVariable Integer id ) {
        return clients
                .findById(id)
                .orElseThrow(()->
                        new ResponseStatusException(HttpStatus.NOT_FOUND,
                                "Client not found"));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Client save( @RequestBody @Valid Client client ){
        return clients.save(client);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete( @PathVariable Integer id ){
        clients.findById(id)
                .map(
                        client -> {
                            clients.delete(client);
                            return client;
                        })
                .orElseThrow(()->
                        new ResponseStatusException(HttpStatus.NOT_FOUND,
                                "Client not found"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Update( @PathVariable Integer id,
                        @RequestBody @Valid Client client){
        clients
                .findById(id)
                .map( existsClient ->{
                    client.setId(existsClient.getId());
                    clients.save(client);
                    return ResponseEntity.noContent().build();
                }).orElseThrow(()->
                        new ResponseStatusException(HttpStatus.NOT_FOUND,
                                "Client not found"));
    }

    @GetMapping
    public List<Client> find( Client filter ){
        ExampleMatcher matcher = ExampleMatcher
                .matching()
                .withIgnoreCase()
                .withStringMatcher(
                        ExampleMatcher.StringMatcher.CONTAINING);
        Example example = Example.of(filter, matcher);
        return clients.findAll(example);
    }
}