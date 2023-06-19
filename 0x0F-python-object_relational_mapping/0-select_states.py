#!/usr/bin/python3
""" script that lists all states from the database hbtn_0e_0_usa """


import MySQLdb
from sys import argv

if __name__ == '__main__':
    """create a connection to the database"""
    db = MySQLdb.connect(host="locatlhost", port=3306, user=argv[1],
                         passwd=argv[2], db=argv[3])
    """gives ability to have multiple separate working environment"""
    cur = db.cursor()
    cur.execute("SELECT * FROM states")

    rows = cur.fetchall()
    for i in rows:
        print(i)
