package Global.Points.FeiraOnline.controller;

import Global.Points.FeiraOnline.entities.Product;
import Global.Points.FeiraOnline.exception.ProductNotFoundException;
import Global.Points.FeiraOnline.repository.Products;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NO_CONTENT;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private Products repository;

    public ProductController(Products repository){
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(CREATED)
    public Product save(@RequestBody @Valid Product product){
        return repository.save(product);
    }

    @PutMapping("{id}")
    @ResponseStatus(NO_CONTENT)
    public void update(@PathVariable Integer id,
                       @RequestBody @Valid Product product){
        repository
                .findById(id)
                .map(p ->{
                    product.setId(p.getId());
                    repository.save(product);
                    return ResponseEntity.noContent().build();
                }).orElseThrow(ProductNotFoundException::new);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(NO_CONTENT)
    public void delete(@PathVariable Integer id){
        repository.findById(id)
                .map( p->{
                    repository.delete(p);
                    return Void.TYPE;
                })
                .orElseThrow(ProductNotFoundException::new);
    }

    @GetMapping("{id}")
    public Product getById(@PathVariable Integer id ) {
        return repository
                .findById(id)
                .orElseThrow(ProductNotFoundException::new);
    }
    @GetMapping
    public List<Product> find(Product filter ){
        ExampleMatcher matcher = ExampleMatcher
                .matching()
                .withIgnoreCase()
                .withStringMatcher(
                        ExampleMatcher.StringMatcher.CONTAINING);
        Example example = Example.of(filter, matcher);
        return repository.findAll(example);
    }

}
