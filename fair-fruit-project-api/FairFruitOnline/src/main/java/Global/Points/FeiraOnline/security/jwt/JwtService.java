package Global.Points.FeiraOnline.security.jwt;

import Global.Points.FeiraOnline.FeiraOnlineApplication;
import Global.Points.FeiraOnline.entities.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

@Service
public class JwtService {

    @Value("${security.jwt.expiration}")
    private String expiration;

    @Value("${security.jwt.assign-key}")
    private String assignKey;

    public String generateToken (User user){
        long expString = Long.valueOf(expiration);
        LocalDateTime  expirationDateTime = LocalDateTime.now().plusMinutes(expString);
        Instant instant = expirationDateTime.atZone(ZoneId.systemDefault()).toInstant();
        Date data = Date.from(instant);
        return Jwts
                .builder()
                .setSubject(user.getLogin())
                .setExpiration(data)
                .signWith(SignatureAlgorithm.HS512, assignKey)
                .compact();
    }

    public Claims getClaims(String token) throws ExpiredJwtException {
        return Jwts
                .parser()
                .setSigningKey(assignKey)
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean isValidToken(String token){
        try {
            Claims claims = getClaims(token);
            Date expirationDate = claims.getExpiration();
            LocalDateTime data = expirationDate
                    .toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();

            return !LocalDateTime.now().isAfter(data);
        }catch (Exception e){
            return false;
        }
    }

    public String getUserLogin(String token) throws ExpiredJwtException{
        return (String) getClaims(token).getSubject();
    }
    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(FeiraOnlineApplication.class);
        JwtService service = context.getBean(JwtService.class);
        User user = User.builder().login("test").build();
        String token = service.generateToken(user);
        System.out.println(token);

        boolean isValidToken = service.isValidToken(token);
        System.out.println("is valid token? " + isValidToken);

        System.out.println(service.getUserLogin(token));

    }
}
