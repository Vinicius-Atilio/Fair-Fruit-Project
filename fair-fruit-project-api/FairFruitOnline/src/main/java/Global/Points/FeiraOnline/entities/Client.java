package Global.Points.FeiraOnline.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import java.util.Date;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table( name = "client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name", length = 100)
    @NotEmpty(message = "{field.name.required}")
    private String name;

    @Column(name = "cpf", length = 11)
    @NotEmpty(message = "{field.cpf.required}")
    @CPF(message = "{field.cpf.invalid}")
    private String cpf;

    @Column(name = "birthdate")
    @Past(message = "{field.birthdate.past}")
    private Date birthdate;

    @Column(name = "email", length = 100)
    @NotEmpty(message = "{field.email.required}")
    private String email;

    @Column(name = "login", length = 100)
    @NotEmpty(message = "{field.login.required}")
    private String login;

    @Column(name = "password", length = 100)
    @NotEmpty(message = "{field.password.required}")
    private String password;

    @Column(name = "admin")
    private boolean admin;

    @Column(name = "balance", length = 10000)
    private Integer balance;

    @JsonIgnore
    @OneToMany(mappedBy = "client", fetch = FetchType.LAZY)
    private Set<Order> orders;

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", cpf='" + cpf + '\'' +
                ", birthdate=" + birthdate +
                ", email='" + email + '\'' +
                ", login='" + login + '\'' +
                ", password='" + password + '\'' +
                ", admin=" + admin +
                ", balance=" + balance +
                ", orders=" + orders +
                '}';
    }
}
