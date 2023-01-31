package Global.Points.FeiraOnline.controller;

import Global.Points.FeiraOnline.entities.UserGP;
import Global.Points.FeiraOnline.exception.UserNotFoundException;
import Global.Points.FeiraOnline.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.h2.engine.User;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userService;
    private final PasswordEncoder passwordEncoder;

    @GetMapping("{id}")
    public UserGP getUserById(@PathVariable Integer id){
        return userService
                .findById(id).orElseThrow((UserNotFoundException::new));
    }
    @PostMapping
    @ResponseStatus(CREATED)
    public UserGP save(@RequestBody @Valid UserGP user){
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);
        return userService.save(user);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id){
        userService.findById(id)
                .map(
                        user -> {
                            userService.delete(user);
                            return user;
                        }).orElseThrow((UserNotFoundException::new));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Update(@PathVariable Integer id,
                       @RequestBody @Valid UserGP userGP){
        userService
                    .findById(id).map(
                            existsUser -> {
                                userGP.setId(existsUser.getId());
                                userService.save(userGP);
                                return ResponseEntity.noContent().build();
                            }).orElseThrow((UserNotFoundException::new));
    }

    @GetMapping
    public List<UserGP> find(UserGP filter){
        ExampleMatcher matcher = ExampleMatcher
                .matching()
                .withIgnoreCase()
                .withStringMatcher(
                        ExampleMatcher.StringMatcher.CONTAINING);
        Example example = Example.of(filter, matcher);
        return userService.findAll(example);
    }

}
