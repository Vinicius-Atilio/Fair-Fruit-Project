package Global.Points.FeiraOnline.controller;

import Global.Points.FeiraOnline.dto.OderDetailsItemDTO;
import Global.Points.FeiraOnline.dto.OrderDTO;
import Global.Points.FeiraOnline.dto.OrderDetailsDTO;
import Global.Points.FeiraOnline.dto.OrderStatusUpdateDTO;
import Global.Points.FeiraOnline.entities.Order;
import Global.Points.FeiraOnline.entities.OrderItem;
import Global.Points.FeiraOnline.entities.enums.OrderStatus;
import Global.Points.FeiraOnline.exception.OrderNotFoundException;
import Global.Points.FeiraOnline.service.OrderService;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

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

    private OrderDetailsDTO converter(Order order){
        return OrderDetailsDTO
                .builder()
                .code(order.getId())
                .orderData(order.getOrderData().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")))
                .cpf(order.getUser().getCpf())
                .clientName(order.getUser().getName())
                .total(order.getTotal())
                .status(order.getStatus().name())
                .items(converter(order.getItems()))
                .build();
    }

    private List<OderDetailsItemDTO> converter(List<OrderItem> items) {
        if (CollectionUtils.isEmpty(items)) {
            return Collections.emptyList();
        }
        return items.stream().map( item -> OderDetailsItemDTO
                .builder().descriptionProduct(item.getProduct().getName())
                .unitPrice(item.getProduct().getPrice())
                .quantity(item.getQuantity())
                .build()
        ).collect(Collectors.toList());
    }

}
