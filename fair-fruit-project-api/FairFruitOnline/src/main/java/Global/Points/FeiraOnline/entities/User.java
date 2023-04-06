package Global.Points.FeiraOnline.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Past;
import java.time.LocalDate;
import java.util.Date;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "user")
public class User {
    //user
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", length = 100)
    @NotEmpty(message = "{field.name.required}")
    private String name;

    @Column(name = "cpf", length = 14)
    @NotEmpty(message = "{field.cpf.required}")
    @CPF(message = "{field.cpf.invalid}")
    private String cpf;

    @Column(name = "birthdate")
    @Past(message = "{field.birthdate.past}")
    private LocalDate birthdate;

    @Column(name = "email", length = 100)
    @NotEmpty(message = "{field.email.required}")
    private String email;

    @Column
    @NotEmpty(message = "{field.login.required}")
    private String login;

    @Column
    @NotEmpty(message = "{field.password.required}")
    private String password;

    //user

    @Column(name = "balance", length = 10000)
    private Integer balance;

    @Column(name = "admin")
    private boolean admin;

    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<Order> orders;

}
