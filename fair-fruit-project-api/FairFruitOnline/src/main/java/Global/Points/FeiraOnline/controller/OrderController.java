package Global.Points.FeiraOnline.controller;

import Global.Points.FeiraOnline.dto.OderDetailsItemDTO;
import Global.Points.FeiraOnline.dto.OrderDTO;
import Global.Points.FeiraOnline.dto.OrderDetailsDTO;
import Global.Points.FeiraOnline.dto.OrderStatusUpdateDTO;
import Global.Points.FeiraOnline.entities.Order;
import Global.Points.FeiraOnline.entities.OrderItem;
import Global.Points.FeiraOnline.entities.User;
import Global.Points.FeiraOnline.entities.enums.OrderStatus;
import Global.Points.FeiraOnline.exception.OrderNotFoundException;
import Global.Points.FeiraOnline.exception.UserNotFoundException;
import Global.Points.FeiraOnline.service.OrderService;
import Global.Points.FeiraOnline.service.impl.UserServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/api/orders")
@AllArgsConstructor
public class OrderController {

    private OrderService service;
    private UserServiceImpl userService;

    @PostMapping
    @ResponseStatus(CREATED)
    public Integer save(@RequestBody @Valid OrderDTO dto){
        Order order = service.save(dto);
        return order.getId();
    }

    @GetMapping("{id}")
    public OrderDetailsDTO getById(@PathVariable Integer id){
        return service
                .getCompleteOrder(id)
                .map( p -> converter(p) )
                .orElseThrow(OrderNotFoundException::new);
    }

    @PatchMapping("{id}")
    @ResponseStatus(NO_CONTENT)
    public void updateStatus( @PathVariable Integer id,
                              @RequestBody OrderStatusUpdateDTO dto ){
        String newStatus = dto.getNewStatus();
        service.StatusUpdate(id, OrderStatus.valueOf(newStatus));

    }

    @GetMapping("/user/{id}")
    public List<OrderDetailsDTO> getCompleteOrdersByUserId(@PathVariable Integer id) {
        userService.findById(id).orElseThrow(() -> new UserNotFoundException("User not found"));
        List<Order> completeOrders = service.getAllCompleteOrder(id);
        if (CollectionUtils.isEmpty(completeOrders)) {
            throw new OrderNotFoundException();
        }
        return completeOrders.stream()
                .map(this::converter)
                .collect(Collectors.toList());
    }

    private OrderDetailsDTO converter(Order order){
        List<OderDetailsItemDTO> itemDTOs = converter(order.getItems());

        BigDecimal productTotal = itemDTOs.stream()
                .map(OderDetailsItemDTO::getProductTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal fees = order.getTotal().subtract(productTotal);

        return OrderDetailsDTO
                .builder()
                .code(order.getId())
                .orderData(order.getOrderData().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")))
                .cpf(order.getUser().getCpf())
                .clientName(order.getUser().getName())
                .orderFees(fees)
                .total(order.getTotal())
                .payment(order.getPayment())
                .status(order.getStatus().name())
                .products(converter(order.getItems()))
                .build();
    }

    private List<OderDetailsItemDTO> converter(List<OrderItem> items) {
        if (CollectionUtils.isEmpty(items)) {
            return Collections.emptyList();
        }
        return items.stream().map( item -> OderDetailsItemDTO
                .builder()
                .productName(item.getProduct().getName())
                .productImage(item.getProduct().getImage())
                .productPrice(item.getProduct().getPrice())
                .productQuantity(item.getQuantity())
                .productTotal(item.getProduct().getPrice().multiply(BigDecimal.valueOf(item.getQuantity())))
                .build()
        ).collect(Collectors.toList());
    }
}
