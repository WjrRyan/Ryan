import unittest
from calculator import calculate


class TestCalculator(unittest.TestCase):
    def test_add(self):
        self.assertEqual(calculate("2 + 3"), 5)

    def test_subtract(self):
        self.assertEqual(calculate("5 - 2"), 3)

    def test_multiply(self):
        self.assertEqual(calculate("3 * 4"), 12)

    def test_divide(self):
        self.assertAlmostEqual(calculate("10 / 2"), 5)

    def test_divide_by_zero(self):
        with self.assertRaises(ZeroDivisionError):
            calculate("1 / 0")


if __name__ == "__main__":
    unittest.main()
