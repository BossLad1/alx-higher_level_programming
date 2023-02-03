#!/usr/bin/python3
# 0-add_integer.py

"""
This is the "0-add_integer" module.
The 0-add_integer module supplies one function, add_integer(a, b).
"""


def add_integer(a, b=98):
    """ Function that adds two integer and/or float numbers
    args:
        a: first number
        b: second number

    Returns:
        The addition of the two given numbers
    Raises:
        TypeError: If a or b aren't integer and/or float numbers
    """
    if ((not isinstance(a, int) and not isinstance(a, float))):
        raise TypeError("a must be an integer")
    if ((not isinstance(b, int) and not isinstance(b, float))):
        raise TypeError("b must be an integer")
    return (int(a) + int(b))
