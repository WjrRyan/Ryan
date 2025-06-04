"""Simple calculator program supporting basic operations."""

import operator
from typing import Callable

# Map of operator symbols to functions
OPERATIONS: dict[str, Callable[[float, float], float]] = {
    '+': operator.add,
    '-': operator.sub,
    '*': operator.mul,
    '/': operator.truediv,
}


def calculate(expression: str) -> float:
    """Evaluate a simple binary expression like '2 + 3'."""
    tokens = expression.split()
    if len(tokens) != 3:
        raise ValueError("Expression must be in the format: <num1> <op> <num2>")
    try:
        a = float(tokens[0])
        b = float(tokens[2])
    except ValueError as exc:
        raise ValueError("Operands must be numbers") from exc

    op_symbol = tokens[1]
    op_func = OPERATIONS.get(op_symbol)
    if not op_func:
        raise ValueError(f"Unsupported operator: {op_symbol}")
    if op_symbol == '/' and b == 0:
        raise ZeroDivisionError("Division by zero is not allowed")
    return op_func(a, b)


def main() -> None:
    import sys

    if len(sys.argv) < 2:
        print("Usage: python calculator.py \"<expression>\"")
        print("Example: python calculator.py \"2 + 3\"")
        return

    expression = " ".join(sys.argv[1:])
    try:
        result = calculate(expression)
        print(result)
    except Exception as exc:
        print(f"Error: {exc}")


if __name__ == "__main__":
    main()
