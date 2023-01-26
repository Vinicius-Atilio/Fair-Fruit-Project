package Global.Points.FeiraOnline.service;

import Global.Points.FeiraOnline.dto.OrderDTO;
import Global.Points.FeiraOnline.entities.Order;
import Global.Points.FeiraOnline.entities.enums.OrderStatus;

import java.util.Optional;

public interface OrderService {

    Order save(OrderDTO dto );
    Optional<Order> getCompleteOrder(Integer id);
    void StatusUpdate(Integer id, OrderStatus orderStatus);


}
