#!/usr/bin/python3
""" a Python script that takes in a URL
-- sends a request to the URL
-- displays the body of the response (decoded in utf-8).
"""


if __name__ == "__main__":
    import sys
    import urllib.request
    import urllib.error

    URL = sys.argv[1]

    try:
        with urllib.request.urlopen(URL) as response:
            print(response.read().decode("utf-8"))
    except urllib.error.HTTPError as err:
        print(f"Error code: {err.code}")
