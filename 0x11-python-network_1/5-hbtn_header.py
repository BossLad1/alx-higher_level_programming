#!/ur/bin/python3
""" displays the value of the variable X-Request-Id in the response header"""
import sys
import requests


if __name__ == "__main__":
    url = sys.argv[1]

    with requests.get(url) as response:
        print(response.headers.get("X-Request-Id"))
