package fr.efrei;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class CalculatorTest {
  @Test
  void should_throw_when_not_authorized() {
    // TODO: trigger the bug in Calculator.divide() by implementing the Authorizer interface
    Authorizer notAuthorized = () -> false;
    Calculator calculator = new Calculator(notAuthorized);

    assertThrows(UnauthorizedAccessException.class, () -> calculator.divide(1, 2));
  }
}
