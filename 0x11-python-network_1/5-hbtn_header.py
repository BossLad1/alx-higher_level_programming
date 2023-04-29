#!/usr/bin/python3
""" displays the value of the variable X-Request-Id in the response header"""


if __name__ == "__main__":
    import sys
    import requests

    URL = sys.argv[1]

    with requests.get(URL) as response:
        print(response.headers.get("X-Request-Id"))
