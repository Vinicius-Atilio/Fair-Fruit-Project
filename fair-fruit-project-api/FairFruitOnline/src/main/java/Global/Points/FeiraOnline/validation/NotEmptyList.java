package Global.Points.FeiraOnline.validation;

import Global.Points.FeiraOnline.validation.constranitvalidation.NotEmptyListValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@Constraint(validatedBy = NotEmptyListValidator.class)
public @interface NotEmptyList {
    String message() default "The list not must be empty";
    Class<?>[] groups() default { };
    Class<? extends Payload>[] payload() default { };
}
