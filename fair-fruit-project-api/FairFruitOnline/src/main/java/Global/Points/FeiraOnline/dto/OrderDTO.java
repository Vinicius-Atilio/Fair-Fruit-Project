package Global.Points.FeiraOnline.dto;

import Global.Points.FeiraOnline.validation.NotEmptyList;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {

    @NotNull(message = "{field.client-code.required}")
    private Integer client;

    @NotNull(message = "{field.order-total.required}")
    private BigDecimal total;

    @NotEmptyList(message = "{field.items-order.required}")
    private List<OrderItemDTO> items;

}
