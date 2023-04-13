package Global.Points.FeiraOnline.controller;

import Global.Points.FeiraOnline.dto.CredentialsDTO;
import Global.Points.FeiraOnline.dto.TokenDTO;
import Global.Points.FeiraOnline.entities.User;
import Global.Points.FeiraOnline.exception.InvalidPasswordException;
import Global.Points.FeiraOnline.exception.UserNotFoundException;
import Global.Points.FeiraOnline.security.jwt.JwtService;
import Global.Points.FeiraOnline.service.impl.UserServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
public class UserController {

    private UserServiceImpl userService;
    private PasswordEncoder passwordEncoder;
    private JwtService jwtService;

    @GetMapping("{id}")
    public User getUserById(@PathVariable Integer id) {
        return userService
                .findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
    }
    @PostMapping
    @ResponseStatus(CREATED)
    public User save(@RequestBody @Valid User user) {
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);
        return userService.save(user);
    }

    @PostMapping("/auth")
    public TokenDTO auth(@RequestBody CredentialsDTO credentials) {
        try {
            User user = User.builder()
                    .login(credentials.getLogin())
                    .password(credentials.getPassword()).build();
            User userId = userService.findByLogin(credentials.getLogin());
            UserDetails userAuthenticated = userService.auth(user);
            String token = jwtService.generateToken(user);
            return new TokenDTO(userId.getId(), user.getLogin(), token);
        } catch (UserNotFoundException | InvalidPasswordException e) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, e.getMessage());
        }
    };

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        userService.findById(id)
                .map(
                        user -> {
                            userService.delete(user);
                            return user;
                        }).orElseThrow(() -> new UserNotFoundException("User not found"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Update(@PathVariable Integer id,
                       @RequestBody @Valid User userGP) {
        userService
                .findById(id).map(
                        existsUser -> {
                            userGP.setId(existsUser.getId());
                            userService.save(userGP);
                            return ResponseEntity.noContent().build();
                        }).orElseThrow(() -> new UserNotFoundException("User not found"));
    }

    @GetMapping
    public List<User> find(User filter) {
        ExampleMatcher matcher = ExampleMatcher
                .matching()
                .withIgnoreCase()
                .withStringMatcher(
                        ExampleMatcher.StringMatcher.CONTAINING);
        Example example = Example.of(filter, matcher);
        return userService.findAll(example);
    }
}