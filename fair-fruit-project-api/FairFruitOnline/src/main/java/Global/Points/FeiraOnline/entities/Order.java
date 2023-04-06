package Global.Points.FeiraOnline.entities;

import Global.Points.FeiraOnline.entities.enums.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table( name= "order_user" )
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //alterei de client para user
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "order_data")
    private LocalDate orderData;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private OrderStatus status;

    @Column(name = "total", precision = 20, scale = 2)
    private BigDecimal total;


    @OneToMany(mappedBy = "order")
    private List<OrderItem> items;

}
