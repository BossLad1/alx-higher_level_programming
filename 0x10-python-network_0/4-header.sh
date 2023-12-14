#!/bin/bash
# Bash script that takes in a URL as an argument
# A header variable X-School-User-Id must be sent with the value 98
curl -s "$1" -H "X-School-User-Id: 98"
